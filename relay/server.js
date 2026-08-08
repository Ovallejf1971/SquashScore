/* ══════════════════════════════════════
   SQUASHSCORE RELAY

   Puente entre el Apple Watch y el marcador.

     Watch  → GET /c/<sala>?punto=0   (Atajos)
     App    → GET /s/<sala>           (SSE)

   Todo vive en memoria: el score real está
   en el teléfono, aquí solo pasan comandos.
   Si esto se reinicia, el partido no se pierde.
══════════════════════════════════════ */

const http  = require('http');
const https = require('https');
const fs    = require('fs');
const path  = require('path');

const PORT      = process.env.PORT || 8080;
const TLS_PORT  = process.env.TLS_PORT || 8443;
const CERT_DIR  = process.env.CERT_DIR || '/certs';
const WEB  = path.join(__dirname, '..');   // sirve el marcador para pruebas en LAN
const HEARTBEAT_MS = 25000;   // evita que proxies corten el SSE
const SALA_RE = /^[0-9]{4}$/;

// sala -> Set de respuestas SSE abiertas
const salas = new Map();

// Anti-duplicado: huella de comando -> instante en que se aceptó
const ultimoCmd = new Map();
const VENTANA_REPETIDO_MS = 900;

function suscriptores(sala) {
  if (!salas.has(sala)) salas.set(sala, new Set());
  return salas.get(sala);
}

function emitir(sala, payload) {
  const subs = salas.get(sala);
  if (!subs || subs.size === 0) return 0;
  const linea = `data: ${JSON.stringify(payload)}\n\n`;
  let entregados = 0;
  for (const res of subs) {
    try { res.write(linea); entregados++; } catch (e) { subs.delete(res); }
  }
  return entregados;
}

/* ── SSE: el marcador se queda escuchando ── */
function abrirStream(req, res, sala) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    'Connection': 'keep-alive',
    'X-Accel-Buffering': 'no',
    'Access-Control-Allow-Origin': '*',
  });
  res.write(`retry: 3000\n\n`);
  res.write(`data: ${JSON.stringify({ cmd: 'conectado', ts: Date.now() })}\n\n`);

  const subs = suscriptores(sala);
  subs.add(res);
  console.log(`[${new Date().toISOString().slice(11, 23)}] SSE abierto sala ${sala} → subs=${subs.size}`);

  const hb = setInterval(() => {
    try { res.write(': hb\n\n'); } catch (e) { /* se limpia al cerrar */ }
  }, HEARTBEAT_MS);

  req.on('close', () => {
    clearInterval(hb);
    subs.delete(res);
    console.log(`[${new Date().toISOString().slice(11, 23)}] SSE cerrado sala ${sala} → subs=${subs.size}`);
    if (subs.size === 0) salas.delete(sala);
  });
}

function textoOk(cmd) {
  if (cmd === 'deshacer') return '↩ Deshecho';
  if (cmd === 'reset')    return '🔄 Partido nuevo';
  return '✅ Punto';
}

/* ── Comando: respuesta corta, la lee el Watch ── */
function responderWatch(res, texto, code = 200, metodo = 'GET') {
  const cuerpo = texto + '\n';
  res.writeHead(code, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(cuerpo),
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
  });
  // HEAD nunca lleva cuerpo: mandarlo es lo que iOS reporta
  // como "carga interrumpida".
  if (metodo === 'HEAD') return res.end();
  res.end(cuerpo);
}

function manejar(req, res) {
  const url = new URL(req.url, 'http://localhost');
  const ruta = url.pathname;

  if (ruta === '/health') return responderWatch(res, 'ok');

  // Qué marcadores hay conectados ahora mismo
  if (ruta === '/salas') {
    const activas = [...salas.entries()].map(([s, subs]) => `${s} (${subs.size})`);
    return responderWatch(res, activas.length ? activas.join('\n') : 'ninguna');
  }

  // /s/<sala> — stream para el marcador
  const mStream = ruta.match(/^\/s\/([0-9]{4})$/);
  if (mStream) return abrirStream(req, res, mStream[1]);

  // /c/<sala>?punto=N | ?deshacer
  const mCmd = ruta.match(/^\/c\/([0-9]{4})$/);
  if (mCmd) {
    const sala = mCmd[1];
    if (!SALA_RE.test(sala)) return responderWatch(res, 'Sala inválida', 400, req.method);

    let payload = null;
    if (url.searchParams.has('punto')) {
      const idx = parseInt(url.searchParams.get('punto'), 10);
      if (![0, 1, 2].includes(idx)) return responderWatch(res, 'Jugador inválido', 400, req.method);
      payload = { cmd: 'punto', idx, ts: Date.now() };
    } else if (url.searchParams.has('deshacer')) {
      payload = { cmd: 'deshacer', ts: Date.now() };
    } else if (url.searchParams.has('reset')) {
      payload = { cmd: 'reset', ts: Date.now() };
    }
    if (!payload) return responderWatch(res, 'Falta punto=, deshacer o reset', 400, req.method);

    // Atajos manda GET + HEAD por cada toque. HEAD solo pregunta,
    // no debe cambiar nada: si lo dejamos pasar, suma el punto dos veces.
    if (req.method === 'HEAD') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8',
                           'Access-Control-Allow-Origin': '*' });
      return res.end();
    }

    // Red de seguridad: si la misma orden llega dos veces seguidas
    // (reintento de Atajos, doble toque), la segunda se ignora.
    const huella = `${sala}|${payload.cmd}|${payload.idx ?? ''}`;
    const previo = ultimoCmd.get(huella);
    if (previo && Date.now() - previo < VENTANA_REPETIDO_MS) {
      console.log(`[${new Date().toISOString().slice(11, 23)}] repetido ignorado: ${huella}`);
      // Responde como si hubiera funcionado: para el Watch no cambia nada,
      // y el marcador no suma dos veces.
      if (url.searchParams.has('q')) {
        res.writeHead(200, {
          'Content-Type': 'text/plain; charset=utf-8',
          'Content-Length': 0,
          'Connection': 'close',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store',
        });
        return res.end();
      }
      return responderWatch(res, textoOk(payload.cmd), 200, req.method);
    }
    ultimoCmd.set(huella, Date.now());
    if (ultimoCmd.size > 200) {           // no dejar crecer el mapa
      const corte = Date.now() - VENTANA_REPETIDO_MS;
      for (const [k, v] of ultimoCmd) if (v < corte) ultimoCmd.delete(k);
    }

    const entregados = emitir(sala, payload);

    // Diagnóstico: cuántas peticiones llegan por toque y a cuántos
    // marcadores se entregó cada una.
    const t = new Date().toISOString().slice(11, 23);
    console.log(`[${t}] ${req.method} ${req.url} → entregado a ${entregados} | ` +
                `subs=${(salas.get(sala) || new Set()).size} | ${req.headers['user-agent'] || '?'}`);

    if (entregados === 0) return responderWatch(res, 'Marcador no conectado', 409, req.method);

    // Con &q el éxito no devuelve nada: así Atajos no abre pantalla
    // en la muñeca. Los errores sí hablan, para enterarse de que falló.
    if (url.searchParams.has('q')) {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Length': 0,
        'Connection': 'close',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store',
      });
      return res.end();
    }
    return responderWatch(res, textoOk(payload.cmd), 200, req.method);
  }

  // Estático: el marcador y sus íconos, para probar en LAN sin dominio
  const MIME = { '.html':'text/html; charset=utf-8', '.json':'application/json', '.png':'image/png' };
  const rel  = ruta === '/' ? 'index.html' : ruta.replace(/^\/+/, '');
  const file = path.join(WEB, rel);
  if (file.startsWith(WEB) && MIME[path.extname(file)] && fs.existsSync(file)) {
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)], 'Cache-Control': 'no-store' });
    return res.end(fs.readFileSync(file));
  }

  responderWatch(res, 'No encontrado', 404, req.method);
}

http.createServer(manejar).listen(PORT, () => console.log(`relay HTTP en :${PORT}`));

// HTTPS solo si hay certificado montado (en el VPS). En local no estorba.
const key  = path.join(CERT_DIR, 'privkey.pem');
const cert = path.join(CERT_DIR, 'fullchain.pem');
if (fs.existsSync(key) && fs.existsSync(cert)) {
  https.createServer({ key: fs.readFileSync(key), cert: fs.readFileSync(cert) }, manejar)
       .listen(TLS_PORT, () => console.log(`relay HTTPS en :${TLS_PORT}`));
} else {
  console.log('sin certificado, solo HTTP');
}
