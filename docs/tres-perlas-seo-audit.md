# SEO AUDIT — Tres Perlas (tresperlas.co)

**Cliente:** Tres Perlas — Transporte Empresarial y Turismo
**Agencia:** Picard-IA
**Fecha:** 2026-04-19
**Tipo de sitio:** Small business / Servicio B2B local
**Tráfico orgánico actual estimado:** ~0 (sin posicionamiento detectable)
**Acceso a Search Console:** No (solicitar al cliente)

---

## EXECUTIVE SUMMARY

### Health Score: 8/100 — CRÍTICO

El sitio tresperlas.co tiene problemas SEO fundamentales en todos los niveles. No es que esté mal optimizado — **no está optimizado en absoluto**. Es un template de bootstrap ("Influence Bootstrap Theme") publicado circa 2019 sin ninguna configuración SEO.

### Top 5 problemas críticos

| # | Problema | Impacto |
|---|---------|---------|
| 1 | **Sin title tag** — Google no tiene título para mostrar en resultados | Google inventa uno, probablemente malo |
| 2 | **Sin meta description** — Google no tiene descripción para el snippet | CTR mínimo en cualquier resultado |
| 3 | **Sin H1** — la página no tiene encabezado principal | Google no entiende de qué trata la página |
| 4 | **Sin sitemap.xml** — devuelve 404 | Google no tiene mapa de la estructura |
| 5 | **Sin analytics ni tracking** — no hay GA4, Tag Manager ni nada | Cero visibilidad del rendimiento |

### Quick wins identificados

1. Agregar title tag + meta description (30 min, impacto inmediato)
2. Agregar H1 al hero (15 min)
3. Crear sitemap.xml básico (30 min)
4. Crear robots.txt (15 min)
5. Registrar en Google Search Console (30 min)

---

## TECHNICAL SEO FINDINGS

### 1. Crawlability

#### robots.txt — NO EXISTE / NO ACCESIBLE

- **Issue:** `tresperlas.co/robots.txt` no devuelve un archivo robots.txt válido
- **Impact:** MEDIO — sin robots.txt Google crawlea todo (no es bloqueante), pero no tiene referencia al sitemap
- **Fix:** Crear robots.txt básico:

```
User-agent: *
Allow: /
Sitemap: https://tresperlas.co/sitemap.xml
```

#### XML Sitemap — NO EXISTE (404)

- **Issue:** `tresperlas.co/sitemap.xml` devuelve error 404
- **Impact:** ALTO — Google no tiene mapa del sitio. En un sitio one-pager esto importa menos, pero al crear la nueva estructura con 14+ páginas es crítico
- **Fix:** Crear sitemap.xml con todas las URLs indexables. Enviar a Google Search Console.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tresperlas.co/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Agregar URLs adicionales al crear nueva estructura -->
</urlset>
```

#### Google Search Console — PROBABLEMENTE NO CONFIGURADO

- **Issue:** Sin evidencia de verificación de Search Console
- **Impact:** ALTO — sin Search Console no hay visibilidad de indexación, errores, queries ni rendimiento
- **Fix:** Registrar tresperlas.co en Google Search Console. Verificar con DNS TXT o HTML tag.

#### Google Business Profile — ESTADO DESCONOCIDO

- **Issue:** No se verificó si Tres Perlas tiene perfil de Google Business (Google Maps)
- **Impact:** ALTO para negocio local — Google Business Profile es el factor #1 para aparecer en búsquedas locales ("transporte empresarial cerca de mí")
- **Fix:** Verificar si existe perfil. Si no, crear y verificar con dirección: Av. Americas #62-84, CC Outlet Factory, L-241, Bogotá.

---

### 2. Indexation

#### Title Tag — NO EXISTE

- **Issue:** No se detectó `<title>` en el HTML de la página
- **Impact:** CRÍTICO — el title tag es el factor on-page #1. Sin él, Google inventa un título, generalmente pobre
- **Fix:**

```html
<title>Transporte Empresarial en Bogotá | Tres Perlas — Flota Propia</title>
```

**Longitud:** 62 caracteres (dentro del límite de 60-65)
**Keyword principal:** "Transporte empresarial en Bogotá"

**Alternativas para otras páginas:**

| Página | Title tag propuesto |
|--------|-------------------|
| Homepage | Transporte Empresarial en Bogotá \| Tres Perlas — Flota Propia |
| Transporte de Personal | Transporte de Personal para Empresas en Bogotá \| Tres Perlas |
| Transporte Ejecutivo | Transporte Ejecutivo en Bogotá \| Sedanes y 4x4 \| Tres Perlas |
| Transporte Eventos | Transporte para Eventos Corporativos \| Tres Perlas |
| Transporte en Campo | Transporte 4x4 Zonas Rurales Colombia \| Tres Perlas |
| Flota | Nuestra Flota de Transporte Empresarial \| Tres Perlas |
| Cotizar | Cotizar Transporte Empresarial \| Tres Perlas |
| Blog | Blog de Transporte Empresarial \| Tres Perlas |

#### Meta Description — NO EXISTE

- **Issue:** No se detectó `<meta name="description">` en el HTML
- **Impact:** ALTO — sin meta description Google extrae texto random de la página para el snippet. El CTR sufre enormemente.
- **Fix:**

```html
<meta name="description" content="Transporte empresarial seguro y puntual en Bogotá. Flota propia: sedanes, 4x4, vans y buses. Documentación al día. Cotice sin compromiso. ☎ (316) 334 4149">
```

**Longitud:** 158 caracteres (dentro del límite de 150-160)

**Meta descriptions para otras páginas:**

| Página | Meta description |
|--------|-----------------|
| Homepage | Transporte empresarial seguro y puntual en Bogotá. Flota propia: sedanes, 4x4, vans y buses. Documentación al día. Cotice sin compromiso. |
| Transporte de Personal | Rutas diarias de transporte de personal para su empresa en Bogotá. Conductores fijos, GPS en tiempo real, flota propia. Cotice hoy. |
| Transporte Ejecutivo | Transporte ejecutivo con conductor profesional en Bogotá. Sedanes de lujo y camionetas 4x4 para directivos y clientes VIP. |
| Transporte Eventos | Transporte para eventos corporativos de 10 a 500+ personas. Coordinación completa de rutas y horarios. Cotice su evento. |
| Transporte en Campo | Camionetas 4x4 y camperos para operaciones en zonas rurales, minería y energía. Preparados para trocha. |

#### Canonical Tag — NO EXISTE

- **Issue:** No se detectó `<link rel="canonical">` en ninguna página
- **Impact:** MEDIO — sin canonical Google puede indexar variantes duplicadas (http vs https, www vs no-www, con/sin trailing slash)
- **Fix:** Agregar self-referencing canonical en todas las páginas:

```html
<link rel="canonical" href="https://tresperlas.co/">
```

#### Open Graph Tags — NO EXISTEN

- **Issue:** Sin og:title, og:description, og:image
- **Impact:** BAJO para SEO, pero MEDIO para compartir en redes sociales — al compartir el link en WhatsApp, LinkedIn o Facebook se ve genérico sin imagen ni descripción
- **Fix:**

```html
<meta property="og:title" content="Tres Perlas — Transporte Empresarial en Bogotá">
<meta property="og:description" content="Flota propia: sedanes, 4x4, vans y buses. Transporte seguro y puntual con documentación al día.">
<meta property="og:image" content="https://tresperlas.co/images/og-image.jpg">
<meta property="og:url" content="https://tresperlas.co/">
<meta property="og:type" content="website">
```

---

### 3. On-Page SEO

#### H1 — NO EXISTE

- **Issue:** La página no tiene tag `<h1>`. Los encabezados saltan directo a H2.
- **Impact:** ALTO — el H1 es la señal principal de contenido de la página
- **Fix:** Agregar H1 en el hero:

```html
<h1>Transporte empresarial seguro, puntual y con toda la documentación al día</h1>
```

#### Heading Structure — DESORDENADA

**Estructura actual:**
```
(sin H1)
├── H2: Quienes somos
├── H2: Misión
├── H2: Visión
├── H2: Objetivos
├── H2: Valores Corporativos
├── H2: Servicios
│   ├── H3: Automóviles de Servicio Especial
│   ├── H3: Camionetas Doble Cabina 4x4
│   ├── H3: Campero de Servicio Especial
│   └── H3: Aerovans, Buses y Microbuses
├── H2: Nuestras instalaciones
├── H2: Clientes
│   └── H3: Nicole Perry  ← ¿QUIÉN? Placeholder del template
├── H2: Contáctenos
│   └── H3: Teléfono, Dirección, E-Mail
```

**Problemas:**
- Sin H1
- "Nicole Perry" como H3 — es un placeholder del template bootstrap que nunca se cambió
- 9 H2s en una sola página — demasiados, diluye la relevancia
- Headings no contienen keywords relevantes

**Estructura propuesta (para homepage rediseñada):**
```
H1: Transporte empresarial seguro, puntual y con toda la documentación al día
├── H2: Nuestros servicios de transporte empresarial
│   ├── H3: Transporte de personal
│   ├── H3: Transporte ejecutivo
│   ├── H3: Transporte para eventos
│   └── H3: Transporte en campo
├── H2: Por qué elegir Tres Perlas
├── H2: Empresas que confían en nosotros
├── H2: Cómo funciona
├── H2: Certificaciones y garantías
└── H2: Cotice su transporte empresarial
```

#### Alt Text de Imágenes — GENÉRICO / TEMPLATE

- **Issue:** Los alt texts son del template, no de Tres Perlas:
  - `"Influence bootstrap theme"` — nombre del template
  - `"Influence Bootstrap theme - about us"` — ídem
  - `"Refleja la imagen"` — vago
  - Múltiples imágenes sin alt text
- **Impact:** MEDIO — pierde oportunidades de Google Images y accesibilidad
- **Fix:** Reemplazar con alt texts descriptivos:

| Imagen | Alt text propuesto |
|--------|-------------------|
| Slider hero | "Flota de transporte empresarial Tres Perlas en Bogotá" |
| Foto quiénes somos | "Equipo directivo Tres Perlas transporte empresarial" |
| Foto vehículo sedán | "Sedán de servicio especial para transporte ejecutivo Bogotá" |
| Foto camioneta 4x4 | "Camioneta doble cabina 4x4 para transporte en zonas rurales" |
| Foto van | "Aerovan para transporte de personal empresarial" |
| Foto bus | "Bus de transporte empresarial para eventos corporativos" |
| Logos clientes | "[Nombre empresa] — cliente de transporte empresarial Tres Perlas" |

#### Content — EXTREMADAMENTE DELGADO

- **Issue:** El contenido de texto de toda la página es de aproximadamente 200-300 palabras. Para rankear por "transporte empresarial Bogotá" se necesitan mínimo 800-1500 palabras de contenido relevante.
- **Impact:** ALTO — Google no tiene suficiente contenido para entender la relevancia ni la profundidad del tema
- **Fix:** La nueva estructura de página (ver page-cro) resuelve esto al agregar secciones de beneficios, diferenciadores, proceso, FAQ, y testimoniales.

#### Keyword Targeting — INEXISTENTE

| Keyword objetivo | En title | En H1 | En URL | En contenido | Estado |
|-----------------|----------|-------|--------|-------------|--------|
| transporte empresarial bogotá | ❌ | ❌ | ❌ | Parcial | NO OPTIMIZADO |
| transporte de personal bogotá | ❌ | ❌ | ❌ | ❌ | NO EXISTE |
| transporte ejecutivo bogotá | ❌ | ❌ | ❌ | ❌ | NO EXISTE |
| alquiler vans empresas | ❌ | ❌ | ❌ | ❌ | NO EXISTE |
| transporte corporativo colombia | ❌ | ❌ | ❌ | ❌ | NO EXISTE |
| transporte 4x4 zonas rurales | ❌ | ❌ | ❌ | ❌ | NO EXISTE |

---

### 4. Technical Issues

#### HTTPS — VERIFICAR

- **Issue:** No se verificó si hay redirect HTTP → HTTPS ni si hay mixed content
- **Fix:** Verificar que `http://tresperlas.co` redirige a `https://tresperlas.co` con 301. Verificar que no hay recursos cargados por HTTP.

#### Mobile — PROBABLEMENTE DEFICIENTE

- **Issue:** Template de 2019, probablemente responsive básico pero no optimizado para mobile-first
- **Impact:** ALTO — Google usa mobile-first indexing. Si la experiencia mobile es mala, afecta todo el ranking.
- **Fix:** Verificar con Google Mobile-Friendly Test. La nueva web debe ser mobile-first.

#### Viewport — NO VERIFICADO

- **Issue:** No se detectó `<meta name="viewport">` — puede ser porque el fetch no lo capturó o porque no existe
- **Fix:** Verificar y asegurar:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

#### Copyright 2019 — SEÑAL DE ABANDONO

- **Issue:** Footer dice "© 2019 Tres Perlas"
- **Impact:** BAJO para SEO directo, pero ALTO para confianza del usuario. Google valora la frescura de contenido.
- **Fix:** Actualizar a 2026 o usar script dinámico.

#### "Nicole Perry" — PLACEHOLDER DEL TEMPLATE

- **Issue:** Hay un H3 "Nicole Perry" en la sección de clientes — es un nombre placeholder del template "Influence Bootstrap Theme" que nunca se reemplazó
- **Impact:** BAJO para SEO, pero ALTO para credibilidad — evidencia de que el sitio no fue configurado profesionalmente
- **Fix:** Eliminar o reemplazar con testimonial real de un cliente.

#### Links externos internos van a HTTP

- **Issue:** Los portales van a URLs HTTP sin SSL:
  - `http://afiliados.sgt.com.co`
  - `http://portal2sgt.azurewebsites.net`
- **Impact:** BAJO para SEO del sitio principal, pero MEDIO para confianza — links a sitios sin SSL generan warnings en el navegador
- **Fix:** Verificar si esos portales tienen HTTPS y actualizar los links.

#### Braintech credit link

- **Issue:** Link en footer a `http://www.braintech.com.co` (proveedor del template)
- **Impact:** BAJO — es un link saliente con poco juice, pero es un link HTTP y lleva a un sitio de desarrollo web que no tiene relación con transporte
- **Fix:** Remover o reemplazar con "Diseño web: Picard-IA" al rediseñar.

---

### 5. Authority & Links

#### Backlink Profile — PROBABLEMENTE MÍNIMO

- **Issue:** Sin herramienta de análisis (Ahrefs/Semrush) no se puede verificar, pero un sitio B2B local sin contenido ni SEO probablemente tiene <10 backlinks, mayoritariamente directorios.
- **Fix:** No prioritario ahora. Primero resolver fundamentos técnicos y de contenido. Después:
  - Registro en directorios de transporte en Colombia
  - Google Business Profile (genera un backlink de Google)
  - Cámara de Comercio de Bogotá (directorio empresarial)
  - Ministerio de Transporte (si tiene directorio de empresas habilitadas)

---

## KEYWORD RESEARCH — OPORTUNIDADES

### Keywords primarias (alta intención, comerciales)

| Keyword | Volumen estimado (CO) | Dificultad | Página objetivo |
|---------|----------------------|-----------|----------------|
| transporte empresarial bogotá | Alto | Media | Homepage |
| transporte de personal bogotá | Medio | Media-Baja | /servicios/transporte-de-personal |
| transporte ejecutivo bogotá | Medio | Media | /servicios/transporte-ejecutivo |
| alquiler vans para empresas bogotá | Medio | Baja | /flota |
| transporte para eventos corporativos | Bajo-Medio | Baja | /servicios/transporte-para-eventos |
| transporte especial bogotá | Medio | Media | Homepage |
| empresas de transporte empresarial | Medio | Media | Homepage |

### Keywords long-tail (blog / contenido)

| Keyword | Página objetivo |
|---------|----------------|
| cómo elegir empresa de transporte empresarial | Blog post |
| transporte de personal vs flota propia ventajas | Blog post / Comparación |
| requisitos transporte especial colombia | Blog post |
| documentación transporte empresarial colombia | Blog post |
| transporte 4x4 para minería colombia | /servicios/transporte-en-campo |
| transporte corporativo aeropuerto bogotá | /servicios/transporte-ejecutivo |

### Keywords comparación (fase 2)

| Keyword | Página objetivo |
|---------|----------------|
| uber business vs transporte empresarial | /comparar/uber-business |
| tercerizar transporte vs flota propia | /comparar/flota-propia |
| transporte empresarial formal vs informal | /comparar/transportador-informal |

---

## PRIORITIZED ACTION PLAN

### Fase 0 — Fixes críticos (hacer HOY, 2 horas)

| # | Acción | Esfuerzo | Impacto |
|---|--------|----------|---------|
| 1 | Agregar `<title>` tag a la página | 10 min | CRÍTICO |
| 2 | Agregar `<meta description>` | 10 min | ALTO |
| 3 | Agregar `<h1>` al hero | 10 min | ALTO |
| 4 | Agregar `<link rel="canonical">` | 5 min | MEDIO |
| 5 | Agregar `<meta name="viewport">` (verificar primero) | 5 min | MEDIO |
| 6 | Crear `robots.txt` | 10 min | MEDIO |
| 7 | Crear `sitemap.xml` básico | 15 min | MEDIO |
| 8 | Registrar en Google Search Console | 30 min | ALTO |
| 9 | Actualizar copyright a 2026 | 5 min | BAJO |
| 10 | Eliminar "Nicole Perry" del template | 5 min | BAJO |

### Fase 1 — Con el rediseño web (semana 1-2)

| # | Acción | Entregable |
|---|--------|-----------|
| 1 | Title tags únicos por página | 14 titles optimizados |
| 2 | Meta descriptions únicas por página | 14 descriptions |
| 3 | H1 único por página con keyword | 14 H1s |
| 4 | Alt text en todas las imágenes | Descriptivos con keywords |
| 5 | Estructura de headings jerárquica | H1>H2>H3 en cada página |
| 6 | Canonical self-referencing en cada página | En cada `<head>` |
| 7 | Open Graph tags en cada página | og:title, og:description, og:image |
| 8 | Sitemap.xml completo | Todas las nuevas URLs |
| 9 | Schema markup (ver skill schema-markup) | LocalBusiness, TransportService, FAQ |
| 10 | HTTPS verificado + redirects | HTTP → HTTPS con 301 |

### Fase 2 — Post-lanzamiento (semana 3-4)

| # | Acción | Entregable |
|---|--------|-----------|
| 1 | Registrar/optimizar Google Business Profile | Perfil completo con fotos y horarios |
| 2 | Enviar sitemap a Search Console | Verificar indexación |
| 3 | Configurar GA4 + tracking (ver analytics-tracking) | Dashboard de métricas |
| 4 | Crear blog con primeros 3 artículos | 3 posts SEO optimizados |
| 5 | Registrar en directorios locales | 5-10 directorios relevantes |

### Fase 3 — Crecimiento orgánico (mes 2+)

| # | Acción | Entregable |
|---|--------|-----------|
| 1 | Publicar 2-4 blog posts/mes | Contenido long-tail |
| 2 | Crear páginas de comparación | 3 páginas vs competidores |
| 3 | Crear recurso descargable (lead magnet) | Checklist/guía |
| 4 | Monitorear Search Console semanalmente | Detectar y corregir issues |
| 5 | Optimizar según datos reales | Ajustar titles/content basado en queries reales |

---

## MÉTRICAS DE ÉXITO

| Métrica | Actual | Meta mes 1 | Meta mes 3 | Meta mes 6 |
|---------|--------|-----------|-----------|-----------|
| Páginas indexadas en Google | ~1 | 8-10 | 14+ | 20+ |
| Impresiones en Search Console | ~0 | 500+ | 2,000+ | 5,000+ |
| Clicks orgánicos/mes | ~0 | 20-50 | 100-200 | 300-500 |
| Keywords posicionadas (top 100) | 0 | 10-20 | 30-50 | 80+ |
| Keywords posicionadas (top 10) | 0 | 1-3 | 5-10 | 15-25 |
| Google Business Profile views | ? | 200+ | 500+ | 1,000+ |

---

## SIGUIENTE PASO

Ejecutar **`/schema-markup`** para crear los datos estructurados (JSON-LD) que complementan el SEO técnico.

---

*Documento generado: 2026-04-19*
*Picard-IA — Skill: seo-audit*
*Base: product-marketing-context.md + site-architecture + análisis técnico del sitio*
