# POPUP CRO — Tres Perlas (tresperlas.co)

**Cliente:** Tres Perlas — Transporte Empresarial y Turismo
**Agencia:** Picard-IA
**Fecha:** 2026-04-19
**Estado actual:** Sin popups de ningún tipo. Sin WhatsApp flotante. Sin banners.
**Objetivo:** Capturar visitantes que están por irse sin cotizar.

---

## ESTRATEGIA DE POPUPS (3 elementos)

| # | Tipo | Trigger | Objetivo | Prioridad |
|---|------|---------|----------|-----------|
| 1 | Botón WhatsApp flotante | Siempre visible | Canal directo de conversión | ALTA — implementar día 1 |
| 2 | Exit intent popup | Cursor sale de la ventana | Rescatar visitantes que se van | ALTA |
| 3 | Slide-in de cotización | 50% scroll en páginas de servicio | Capturar interés demostrado | MEDIA |

**Reglas de conflicto:**
- Nunca mostrar popup + slide-in al mismo tiempo
- Si el usuario ya interactuó con WhatsApp flotante, no mostrar exit intent
- Frecuencia: máximo 1 popup por sesión
- No mostrar en página `/cotizar` (ya están convirtiendo)
- Recordar dismissal por 7 días (cookie/localStorage)

---

## POPUP 1: Botón WhatsApp Flotante (siempre visible)

**Tipo:** Botón flotante sticky
**Trigger:** Siempre visible desde el primer segundo
**Posición:** Esquina inferior derecha
**Prioridad:** ALTA — implementar primero

### Diseño

```
┌─────────────────────────────────┐
│  💬 ¿Necesita cotización?       │  ← Tooltip (aparece al hover)
│     Escríbanos por WhatsApp     │
└─────────────────────────────────┘

      ┌──────┐
      │  💬  │  ← Botón circular verde (#25D366)
      └──────┘     60x60px, sombra sutil
```

### Specs

| Aspecto | Valor |
|---------|-------|
| Color | Verde WhatsApp (#25D366) |
| Tamaño | 60x60px desktop, 56x56px mobile |
| Posición | Bottom-right, 20px del borde |
| Z-index | 9999 (siempre encima) |
| Animación | Bounce suave al cargar (1 vez) |
| Tooltip | Aparece después de 5 segundos en primera visita |

### Comportamiento

**Desktop:**
- Hover: muestra tooltip "¿Necesita cotización? Escríbanos por WhatsApp"
- Click: abre WhatsApp Web con mensaje pre-llenado

**Mobile:**
- Tap: abre app WhatsApp directamente
- Sin tooltip (no hay hover en mobile)

### Link

```
https://wa.me/573163344149?text=Hola%2C%20me%20interesa%20cotizar%20transporte%20empresarial%20con%20Tres%20Perlas.%20%C2%BFMe%20pueden%20ayudar%3F
```

**Mensaje que recibe Alexander:**
> "Hola, me interesa cotizar transporte empresarial con Tres Perlas. ¿Me pueden ayudar?"

### Tracking

```
Evento GA4: whatsapp_float_click
Parámetros: page_url, device_type
```

---

## POPUP 2: Exit Intent — Cotización rápida

**Tipo:** Modal centrado
**Trigger:** Exit intent (cursor sale de la ventana en desktop)
**Trigger mobile:** Scroll rápido hacia arriba (señal de intención de salir)
**Frecuencia:** 1 vez por sesión, no repetir en 7 días si dismisseado
**No mostrar en:** `/cotizar`, `/contacto`

### Copy

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║                    [X] cerrar                             ║
║                                                           ║
║       ¿Se va sin cotizar?                                 ║
║                                                           ║
║       Le enviamos una cotización personalizada             ║
║       por WhatsApp en menos de 24 horas.                  ║
║       Sin compromiso.                                     ║
║                                                           ║
║  ┌─────────────────────────────────────────────────┐      ║
║  │  ¿Qué servicio necesita?                        │      ║
║  │  ○ Transporte de personal                       │      ║
║  │  ○ Transporte ejecutivo                         │      ║
║  │  ○ Transporte para evento                       │      ║
║  │  ○ Transporte en campo (4x4)                    │      ║
║  │  ○ Otro                                         │      ║
║  └─────────────────────────────────────────────────┘      ║
║                                                           ║
║  WhatsApp *                                               ║
║  [+57 3XX XXX XXXX                             ]          ║
║                                                           ║
║  [Enviar mi cotización por WhatsApp]  ← verde, ancho     ║
║                                                           ║
║  ──── o ────                                              ║
║                                                           ║
║  [💬 Prefiero escribir directo por WhatsApp]              ║
║                                                           ║
║  No gracias, ya tengo proveedor                           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

### Notas de copy

| Elemento | Copy | Rationale |
|----------|------|-----------|
| **Headline** | "¿Se va sin cotizar?" | Directo, reconoce la intención de salida sin ser agresivo |
| **Subheadline** | "Le enviamos una cotización personalizada por WhatsApp en menos de 24 horas. Sin compromiso." | Promesa concreta + canal preferido + eliminador de riesgo |
| **Campos** | Solo 2: tipo de servicio + WhatsApp | Mínimo viable — suficiente para iniciar conversación |
| **CTA primario** | "Enviar mi cotización por WhatsApp" | Primera persona + beneficio concreto + canal |
| **CTA secundario** | "Prefiero escribir directo por WhatsApp" | Escape a WhatsApp directo para quien no quiere formulario |
| **Decline** | "No gracias, ya tengo proveedor" | Amigable, sin culpa, sin manipulación |

### Diseño

| Aspecto | Valor |
|---------|-------|
| Ancho | 480px desktop, 100% mobile (bottom sheet) |
| Background overlay | Negro 50% opacidad |
| Cerrar | [X] arriba derecha + click fuera + Esc |
| CTA primario | Verde WhatsApp (#25D366), ancho completo, 48px alto |
| CTA secundario | Link de texto, sin botón |
| Animación | Fade in 300ms |
| Mobile | Bottom sheet (sube desde abajo), no modal centrado |

### Después del envío

```
╔═══════════════════════════════════════════╗
║                                           ║
║              ✓                            ║
║                                           ║
║     Recibido. Le escribimos               ║
║     por WhatsApp en menos de 24h.         ║
║                                           ║
║     ¿Muy urgente?                         ║
║     [💬 Hablar ahora con Alexander]       ║
║                                           ║
╚═══════════════════════════════════════════╝
```

### Tracking

```
Eventos GA4:
  exit_popup_shown      → popup se mostró
  exit_popup_dismissed  → cerró sin interactuar
  exit_popup_started    → interactuó con un campo
  exit_popup_submitted  → envió el mini-formulario
  exit_popup_whatsapp   → click en "escribir directo por WhatsApp"
```

---

## POPUP 3: Slide-in de cotización (páginas de servicio)

**Tipo:** Slide-in desde esquina inferior derecha
**Trigger:** 50% de scroll en páginas de servicio (`/servicios/*`)
**Frecuencia:** 1 vez por sesión
**No mostrar si:** el WhatsApp flotante fue clickeado, o el exit popup fue mostrado
**Posición:** Esquina inferior derecha, encima del botón WhatsApp

### Copy (contextual según página)

**En `/servicios/transporte-de-personal`:**

```
┌───────────────────────────────────────┐
│  [X]                                  │
│                                       │
│  ¿Cuántas personas necesita           │
│  transportar?                         │
│                                       │
│  Le hacemos una cotización            │
│  en menos de 24 horas.               │
│                                       │
│  [Cotizar rutas de personal]          │
│                                       │
│  o [💬 WhatsApp]                      │
└───────────────────────────────────────┘
```

**En `/servicios/transporte-ejecutivo`:**

```
┌───────────────────────────────────────┐
│  [X]                                  │
│                                       │
│  ¿Necesita transporte ejecutivo       │
│  con conductor profesional?           │
│                                       │
│  Cotice sin compromiso.               │
│                                       │
│  [Cotizar transporte ejecutivo]       │
│                                       │
│  o [💬 WhatsApp]                      │
└───────────────────────────────────────┘
```

**En `/servicios/transporte-para-eventos`:**

```
┌───────────────────────────────────────┐
│  [X]                                  │
│                                       │
│  ¿Tiene un evento próximo?            │
│                                       │
│  Cuéntenos la fecha y el número       │
│  de personas. Cotización en 24h.      │
│                                       │
│  [Cotizar mi evento]                  │
│                                       │
│  o [💬 WhatsApp]                      │
└───────────────────────────────────────┘
```

**En `/servicios/transporte-en-campo`:**

```
┌───────────────────────────────────────┐
│  [X]                                  │
│                                       │
│  ¿Necesita 4x4 para su operación     │
│  en campo?                            │
│                                       │
│  Cotice con documentación al día.     │
│                                       │
│  [Cotizar transporte en campo]        │
│                                       │
│  o [💬 WhatsApp]                      │
└───────────────────────────────────────┘
```

### Diseño

| Aspecto | Valor |
|---------|-------|
| Ancho | 320px |
| Posición | Bottom-right, encima del botón WhatsApp |
| Animación | Slide up 400ms con ease-out |
| Sombra | box-shadow: 0 4px 20px rgba(0,0,0,0.15) |
| Border radius | 12px |
| Cerrar | [X] arriba derecha |
| CTA | Botón azul corporativo, ancho completo |
| WhatsApp | Link de texto verde debajo del botón |

### Comportamiento del CTA

- "Cotizar [servicio]" → Lleva a `/cotizar` con tipo de servicio pre-seleccionado (via query param `?servicio=personal`)
- "WhatsApp" → Abre WhatsApp con mensaje contextual:
  - Personal: "Hola, me interesa cotizar rutas de transporte de personal."
  - Ejecutivo: "Hola, me interesa cotizar transporte ejecutivo."
  - Eventos: "Hola, me interesa cotizar transporte para un evento corporativo."
  - Campo: "Hola, me interesa cotizar transporte 4x4 para operación en campo."

### Tracking

```
Eventos GA4:
  slidein_shown      → slide-in apareció (con page_type)
  slidein_dismissed   → cerró
  slidein_cta_click   → click en botón de cotización
  slidein_whatsapp    → click en WhatsApp
```

---

## IMPLEMENTACIÓN

### Tecnología recomendada

| Opción | Pros | Contras |
|--------|------|---------|
| **Custom HTML/CSS/JS** | Control total, carga rápida, sin dependencia | Requiere desarrollo |
| **Tawk.to widget** (gratis) | WhatsApp + chat en uno, fácil de instalar | Menos personalizable |
| **OptinMonster** | Templates, A/B testing, triggers avanzados | Costo mensual ($14+/mes) |
| **Sumo** (gratis) | Fácil, popups básicos, analytics incluidos | Branding en versión gratis |

**Recomendación:** Para MVP, botón WhatsApp custom (HTML/CSS) + exit intent con JS vanilla. Escalar a OptinMonster cuando haya tráfico para A/B testing.

### Código del botón WhatsApp (listo para copiar)

```html
<!-- WhatsApp Float Button -->
<style>
.wa-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  cursor: pointer;
  z-index: 9999;
  transition: transform 0.3s;
}
.wa-float:hover { transform: scale(1.1); }
.wa-float svg { width: 32px; height: 32px; fill: white; }
.wa-tooltip {
  position: fixed;
  bottom: 88px;
  right: 20px;
  background: white;
  padding: 10px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  font-size: 14px;
  z-index: 9998;
  display: none;
  max-width: 220px;
}
</style>

<div class="wa-tooltip" id="waTooltip">
  ¿Necesita cotización?<br>Escríbanos por WhatsApp
</div>

<a href="https://wa.me/573163344149?text=Hola%2C%20me%20interesa%20cotizar%20transporte%20empresarial%20con%20Tres%20Perlas.%20%C2%BFMe%20pueden%20ayudar%3F"
   target="_blank"
   class="wa-float"
   onclick="gtag('event','whatsapp_float_click',{page:location.pathname})">
  <svg viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.634-1.215A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.16 0-4.16-.69-5.795-1.86l-.36-.24-2.988.784.798-2.916-.264-.384A9.72 9.72 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
  </svg>
</a>

<script>
// Mostrar tooltip después de 5 segundos (solo primera visita)
if (!sessionStorage.getItem('wa_tooltip_shown')) {
  setTimeout(function() {
    document.getElementById('waTooltip').style.display = 'block';
    sessionStorage.setItem('wa_tooltip_shown', '1');
    setTimeout(function() {
      document.getElementById('waTooltip').style.display = 'none';
    }, 5000);
  }, 5000);
}
</script>
```

---

## MÉTRICAS DE ÉXITO

| Métrica | Meta mes 1 | Meta mes 3 |
|---------|-----------|-----------|
| Clicks WhatsApp flotante/mes | 15-25 | 30-50 |
| Exit popup mostrado | 30% de visitantes | 30% |
| Exit popup conversion | 5-8% | 8-12% |
| Slide-in mostrado (servicios) | 40% de visitantes en servicios | 40% |
| Slide-in click CTA | 3-5% | 5-8% |
| Total leads desde popups/mes | 8-15 | 20-35 |

---

## TEST IDEAS

| # | Hipótesis | Qué testear |
|---|-----------|-------------|
| 1 | Exit popup con solo WhatsApp (sin formulario) convierte más | Mini-form vs botón WhatsApp directo |
| 2 | Slide-in con descuento ("10% off primera cotización") convierte más | Con/sin incentivo |
| 3 | Tooltip del WhatsApp con copy diferente | "¿Necesita cotización?" vs "Cotice en 2 minutos" |
| 4 | Exit popup con testimonial convierte más | Con/sin quote de cliente |

---

## SIGUIENTE PASO

Ejecutar **`/competitor-alternatives`** para crear páginas de comparación (TP vs Uber Business, vs Flota Propia, vs Informal).

---

*Documento generado: 2026-04-19*
*Picard-IA — Skill: popup-cro*
*Base: product-marketing-context.md + page-cro + form-cro*
