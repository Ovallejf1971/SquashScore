# DIAGNÓSTICO DIGITAL: Tres Perlas — tresperlas.co

**Cliente:** Tres Perlas — Transporte Empresarial y Turismo
**Agencia:** Picard-IA
**Fecha:** 2026-04-19
**Analista:** Picard-IA (con skills de marketing)
**Segmento:** B — "El que tiene pero no funciona"

---

## SCORE DIGITAL: 28/100

```
CATEGORÍA                    PUNTAJE    ESTADO
─────────────────────────────────────────────────
Propuesta de valor clara      2/10      🔴 Crítico
Headlines y copy              2/10      🔴 Crítico
CTAs (llamados a acción)      1/10      🔴 Crítico
Estructura de página          3/10      🔴 Crítico
Social proof                  2/10      🔴 Crítico
Formularios                   3/10      🟡 Débil
Navegación y UX               4/10      🟡 Débil
SEO on-page                   2/10      🔴 Crítico
Trust signals                 3/10      🟡 Débil
Mobile / velocidad            3/10      🟡 Débil
Analytics / tracking          1/10      🔴 Crítico
Contenido / blog              1/10      🔴 Crítico
─────────────────────────────────────────────────
TOTAL                        28/100     🔴 NECESITA INTERVENCIÓN URGENTE
```

---

## HALLAZGOS PRINCIPALES

### 🔴 Hallazgo #1: El sitio está hecho para empleados, NO para clientes

**Problema:** Los CTAs principales son "Ingreso Afiliados" y "ACCESO EMPLEADOS". No existe un botón visible de "Cotizar", "Solicitar servicio" o "WhatsApp". Un cliente potencial que llega al sitio **no sabe qué hacer para contratar**.

**Impacto:** Se pierden el 100% de los leads digitales. El sitio funciona como intranet, no como herramienta comercial.

**Solución:** Agregar CTA principal "Cotiza tu transporte" visible en hero, header fijo y al final de cada sección.

---

### 🔴 Hallazgo #2: La propuesta de valor es invisible

**Problema:** El hero dice "Transporte de turismo — Conócenos, ¿Qué esperas?" y "Refleja la imagen de tu empresa en tu transporte". Estos mensajes son vagos y no comunican por qué elegir Tres Perlas.

**Impacto:** En 5 segundos el visitante no entiende qué hace Tres Perlas ni por qué debería quedarse. Se va.

**Solución propuesta para el hero:**
> **Headline:** "Transporte empresarial seguro, puntual y con toda la documentación al día"
> **Subheadline:** "Flota propia: sedanes, 4x4, camperos, vans y buses. Un solo proveedor para todas sus necesidades de transporte corporativo en Colombia."
> **CTA:** "Cotizar ahora" + "Ver nuestra flota"

---

### 🔴 Hallazgo #3: Cero social proof efectivo

**Problema:**
- 0 testimoniales de clientes
- 0 cifras de impacto (años, clientes, viajes)
- Logos de clientes sin nombres ni contexto
- 0 certificaciones o habilitaciones visibles
- No mencionan años de experiencia en ningún lado

**Impacto:** No hay razón para confiar. Cualquier empresa puede poner una web bonita. Sin pruebas, no hay conversión.

**Solución:**
- Agregar contador: "X+ años | X+ empresas atendidas | X+ vehículos"
- Agregar 3 testimoniales reales con nombre, cargo y empresa
- Mostrar habilitación del Ministerio de Transporte
- Destacar SOAT y seguros vigentes como diferenciador

---

### 🔴 Hallazgo #4: SEO inexistente

**Problema:**
- Sin blog ni contenido indexable
- Probablemente sin meta descriptions optimizadas
- Sin schema markup (LocalBusiness, TransportService)
- Sin Google My Business optimizado (no verificado)
- Keywords como "transporte empresarial Bogotá" probablemente no rankean

**Impacto:** Cuando alguien busca "transporte empresarial Bogotá" en Google, Tres Perlas no aparece. Todo el tráfico es por referidos directos.

**Solución:** SEO técnico + contenido + Google My Business (detallado en plan de acción).

---

### 🟡 Hallazgo #5: Formulario de contacto genérico

**Problema:** El formulario tiene solo nombre, email y mensaje. No pregunta qué servicio necesita, cuántas personas, para cuándo, ni ruta. El cliente tiene que escribir todo en texto libre.

**Impacto:** Leads de baja calidad, trabajo manual para calificar cada uno.

**Solución:** Formulario inteligente con campos:
- Tipo de servicio (dropdown: transporte de personal / ejecutivo / evento / turismo)
- Número de personas
- Ruta o destino
- Fecha aproximada
- WhatsApp de contacto

---

### 🟡 Hallazgo #6: Estructura de página desordenada

**Problema actual:**
```
1. Hero (vago)
2. Quiénes somos (misión/visión)  ← Nadie lee esto primero
3. Servicios
4. Instalaciones (fotos)          ← Poco relevante para el cliente
5. Clientes (logos sin contexto)
6. Contacto (formulario básico)
```

**Estructura recomendada:**
```
1. Hero con propuesta de valor + CTA "Cotizar"
2. Cifras de confianza (años, empresas, vehículos)
3. Servicios (con fotos de vehículos reales + beneficios)
4. Por qué elegirnos (diferenciadores con iconos)
5. Clientes (logos + testimoniales)
6. Certificaciones y documentación (trust signals)
7. Formulario de cotización inteligente
8. Contacto (teléfono, WhatsApp, dirección, mapa)
```

---

## PLAN DE ACCIÓN — SKILLS A EJECUTAR

### Fase 1: Fundamentos (Semana 1-2) — Skills prioritarios

| # | Skill | Acción | Entregable |
|---|-------|--------|-----------|
| 1 | ✅ `/product-marketing-context` | Documento base de contexto | **HECHO** — `.agents/product-marketing-context.md` |
| 2 | `/copywriting` | Reescribir todo el copy de la web | Nuevo copy: hero, servicios, quiénes somos, CTAs |
| 3 | `/page-cro` | Rediseñar estructura de cada página | Wireframe con nueva estructura orientada a conversión |
| 4 | `/form-cro` | Rediseñar formulario de contacto/cotización | Formulario inteligente con campos cualificadores |

### Fase 2: Visibilidad (Semana 3-4)

| # | Skill | Acción | Entregable |
|---|-------|--------|-----------|
| 5 | `/seo-audit` | Auditoría técnica completa del sitio | Reporte de issues + fixes priorizados |
| 6 | `/schema-markup` | Agregar datos estructurados | JSON-LD: LocalBusiness, TransportService, FAQPage |
| 7 | `/site-architecture` | Reorganizar URLs y estructura | Mapa del sitio nuevo + plan de redirecciones |
| 8 | `/analytics-tracking` | Configurar GA4, Search Console, tracking | Setup completo de medición |

### Fase 3: Generación de leads (Mes 2)

| # | Skill | Acción | Entregable |
|---|-------|--------|-----------|
| 9 | `/content-strategy` | Plan de contenido SEO para blog | 10 artículos priorizados por keyword volume |
| 10 | `/ai-seo` | Optimizar para búsquedas IA | Contenido optimizado para Gemini/ChatGPT/Perplexity |
| 11 | `/cold-email` | Secuencia de email frío B2B | 3-5 emails para prospectar empresas |
| 12 | `/popup-cro` | Crear popup de cotización rápida | Popup exit-intent con WhatsApp/formulario express |

### Fase 4: Escalar (Mes 3+)

| # | Skill | Acción | Entregable |
|---|-------|--------|-----------|
| 13 | `/paid-ads` | Campaña Google Ads local | Campaña "transporte empresarial Bogotá" |
| 14 | `/ad-creative` | Textos para anuncios | Headlines + descriptions para Google Ads |
| 15 | `/competitor-alternatives` | Páginas de comparación | "Tres Perlas vs Uber Business", "vs flota propia" |
| 16 | `/lead-magnets` | Recurso descargable | "Checklist: Cómo elegir tu empresa de transporte empresarial" |
| 17 | `/referral-program` | Programa de referidos | Descuento por referido corporativo |

---

## ALINEACIÓN CON ESTRATEGIA PICARD-IA

### Encaje en el proceso de venta (Sección 2.2 de la estrategia)

```
✅ DÍA 1: PRIMER CONTACTO
   └── Score Digital: 28/100 ← YA CALCULADO

✅ DÍA 2-3: DIAGNÓSTICO  
   └── Este documento ES el diagnóstico ← ESTAMOS AQUÍ

→  DÍA 4-5: PROPUESTA
   └── Crear PPT con hallazgos + plan + inversión
   
→  DÍA 6-10: CIERRE
   └── Follow-up WhatsApp + contrato
```

### Ticket estimado para Tres Perlas

| Concepto | Inversión |
|----------|-----------|
| **Proyecto inicial** (rediseño web + copy + CRO + SEO básico + formulario + analytics) | $3,500 - $4,500 |
| **Retainer mensual** (SEO + Google Ads + mantenimiento + reportes) | $800 - $1,200/mes |
| **Upsell futuro** — Asistente IA WhatsApp para cotizaciones automáticas | $1,000 setup + $300/mes |
| **Upsell futuro** — Blog + contenido SEO recurrente | $400-600/mes |

### Resultado esperado

| Métrica | Actual | Meta mes 3 | Meta mes 6 |
|---------|--------|-----------|-----------|
| Score Digital | 28/100 | 65/100 | 80/100 |
| Leads digitales/mes | ~0 | 10-15 | 25-40 |
| Posición Google "transporte empresarial Bogotá" | No aparece | Top 20 | Top 10 |
| Tasa de conversión web | ~0% | 3-5% | 5-8% |
| Cotizaciones desde WhatsApp/formulario | 0 | 8-12/mes | 20-30/mes |

---

## PRÓXIMO PASO

Ejecutar **`/copywriting`** para reescribir el copy completo de la web, empezando por el hero section y los CTAs. Este nuevo copy alimentará el rediseño de la página.

---

*Documento generado: 2026-04-19*
*Picard-IA — "Inteligencia con picardía"*
*Skill base: product-marketing-context (completado)*
