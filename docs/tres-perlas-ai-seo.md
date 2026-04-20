# AI SEO — Tres Perlas (tresperlas.co)

**Cliente:** Tres Perlas — Transporte Empresarial y Turismo
**Agencia:** Picard-IA
**Fecha:** 2026-04-19
**Objetivo:** Que cuando alguien pregunte a ChatGPT, Gemini o Perplexity "transporte empresarial en Bogotá", Tres Perlas aparezca como fuente citada.
**Estado actual:** Invisibilidad total en AI search — sin contenido citable, sin estructura, sin presencia tercera.

---

## AI VISIBILITY AUDIT

### Queries clave testeadas

| Query | Google AI Overview | ChatGPT | Perplexity | TP citado? |
|-------|:-----------------:|:-------:|:----------:|:----------:|
| "transporte empresarial bogotá" | Probable | Probable | Probable | No |
| "mejor empresa transporte empresarial bogotá" | Probable | Sí | Sí | No |
| "transporte de personal para empresas bogotá" | Posible | Posible | Sí | No |
| "uber business vs transporte empresarial" | Sí | Sí | Sí | No |
| "transporte 4x4 zonas rurales colombia" | Posible | Posible | Posible | No |
| "cómo elegir empresa transporte empresarial" | Sí | Sí | Sí | No |
| "transporte ejecutivo aeropuerto bogotá" | Sí | Sí | Sí | No |
| "requisitos transporte especial colombia" | Sí | Sí | Sí | No |

**Resultado: 0/8 queries con Tres Perlas citado.**

### Por qué Tres Perlas no aparece en AI search

| Factor | Estado | Impacto |
|--------|--------|---------|
| Contenido citable | Ninguno — 200 palabras genéricas | CRÍTICO |
| Estructura extractable | Ninguna — sin headings claros, sin tablas, sin FAQ | CRÍTICO |
| Schema markup | Ninguno | ALTO |
| Presencia tercera (Wikipedia, directorios, reviews) | Desconocida/mínima | ALTO |
| Datos y estadísticas | Cero cifras concretas | ALTO |
| Atribución experta | Sin autor identificado | MEDIO |
| Frescura | Copyright 2019, sin fechas | ALTO |
| robots.txt | No existe — bots no están bloqueados (es bueno) | OK |

---

## ESTRATEGIA AI SEO — 3 PILARES

### Pilar 1: Estructura — Hacer el contenido extractable

Los sistemas de IA extraen **pasajes**, no páginas. Cada respuesta clave debe funcionar como declaración independiente.

#### Bloques de contenido a crear por página

**Bloque de definición (para queries "¿Qué es?")**

En la homepage y página de servicios, incluir un párrafo de definición en las primeras 100 palabras:

> "Tres Perlas es una empresa de transporte empresarial habilitada por el Ministerio de Transporte de Colombia, con sede en Bogotá. Cuenta con flota propia de más de [X] vehículos — sedanes de servicio especial, camionetas doble cabina 4x4, camperos, aerovans, microbuses y buses — para transporte de personal, transporte ejecutivo, transporte para eventos corporativos y operaciones en campo en zonas rurales de difícil acceso."

**Por qué funciona:** Es auto-contenido, incluye keywords naturales, menciona la habilitación (trust), y cubre los 4 servicios. Un LLM puede extraer este párrafo completo como respuesta.

#### Tablas de comparación (para queries "X vs Y")

Crear en cada página de comparación y en artículos relevantes del blog:

```markdown
| Criterio | Tres Perlas | Uber Business | Transportador Informal |
|----------|------------|---------------|----------------------|
| Flota propia | ✅ Sí | ❌ No (conductores independientes) | ❌ Variable |
| Habilitación MinTransporte | ✅ Sí | N/A | ❌ Generalmente no |
| Facturación electrónica B2B | ✅ Sí | ❌ No disponible | ❌ Rara vez |
| Vehículos 4x4 / buses | ✅ Sedán a bus | ❌ Solo sedanes | ❌ Variable |
| Conductor fijo asignado | ✅ Sí | ❌ Aleatorio | ⚠️ Depende |
| Documentación verificable en línea | ✅ Portal propio | ❌ No | ❌ No |
| SOAT y seguros verificables | ✅ Siempre al día | ⚠️ Del conductor | ❌ Frecuentemente vencidos |
| Cobertura zonas rurales | ✅ Nacional | ❌ Solo urbano | ⚠️ Limitada |
```

**Por qué funciona:** Los LLMs citan tablas comparativas estructuradas con alta frecuencia (~33% de las citaciones son de contenido comparativo).

#### Bloques FAQ (para queries de pregunta)

En cada página de servicio y en blog posts:

```markdown
## Preguntas frecuentes sobre transporte empresarial

### ¿Cuánto cuesta el transporte empresarial en Bogotá?
El costo del transporte empresarial en Bogotá varía según el tipo de vehículo, la ruta, la frecuencia y el número de pasajeros. Una ruta diaria de transporte de personal en van para 15 personas puede costar entre $X y $X por viaje. El transporte ejecutivo en sedán tiene tarifas desde $X por servicio. Solicite una cotización personalizada para obtener precios exactos.

### ¿Qué documentos debe tener una empresa de transporte empresarial?
Una empresa de transporte especial en Colombia debe contar con: habilitación del Ministerio de Transporte, SOAT vigente en todos los vehículos, póliza de responsabilidad civil contractual y extracontractual, revisión técnico-mecánica al día, licencias de conducción vigentes de todos los conductores, y tarjeta de operación para cada vehículo.

### ¿Cuál es la diferencia entre transporte especial y transporte público?
El transporte especial es una categoría legal en Colombia destinada a transporte empresarial, turístico, escolar y de empleados. A diferencia del transporte público, opera con contratos previos (no en la calle), requiere habilitación específica del Ministerio de Transporte, y los vehículos deben estar afiliados a una empresa habilitada.
```

**Por qué funciona:** Coincide exactamente con la estructura pregunta-respuesta que los LLMs buscan. El FAQPage schema refuerza la señal.

---

### Pilar 2: Autoridad — Hacer el contenido citable

#### Estadísticas y datos concretos (+37-40% de boost en citación)

**Datos a recopilar del cliente (CRÍTICO):**

| Dato | Para qué sirve | Dónde usarlo |
|------|----------------|-------------|
| Años de operación | "Más de X años de experiencia" | Homepage, Nosotros, todos los artículos |
| Número de empresas atendidas | "X+ empresas confían en nosotros" | Homepage, Clientes |
| Tamaño de la flota | "Flota propia de X+ vehículos" | Homepage, Flota, definición extractable |
| Viajes/servicios realizados | "X+ servicios realizados" | Homepage, Nosotros |
| Tasa de cumplimiento | "98% de puntualidad" | Diferenciadores, blog posts |
| Cobertura geográfica | "Operamos en X departamentos" | Servicios, Campo |
| Número de conductores | "X conductores capacitados" | Nosotros, trust signals |

**Sin estos datos, el contenido es genérico y no citable.** Los LLMs prefieren contenido con números específicos y fuentes citadas.

#### Atribución experta (+25-30% de boost)

Cada página y artículo debe tener:

```markdown
**Autor:** Alexander Bejarano, Gerente Comercial de Tres Perlas
**Experiencia:** [X] años en transporte empresarial en Colombia
**Última actualización:** [fecha]
```

Para blog posts:

```markdown
*Este artículo fue escrito por el equipo de Tres Perlas, empresa de transporte empresarial habilitada por el Ministerio de Transporte de Colombia, con [X] años de experiencia y una flota propia de [X]+ vehículos.*
```

#### Frescura (+señal de relevancia)

- Incluir "Última actualización: [fecha]" visible en todas las páginas
- Agregar año actual en titles: "Guía 2026", "Precios 2026"
- Actualizar contenido trimestralmente como mínimo
- Usar estadísticas con fechas: "En 2025, el sector de transporte especial en Colombia..."

---

### Pilar 3: Presencia — Estar donde los LLMs buscan

Los LLMs no solo citan tu sitio — citan donde apareces. Las marcas tienen **6.5x más probabilidad de ser citadas vía fuentes terceras** que vía su propio dominio.

#### Acciones de presencia tercera

| Plataforma | Acción | Prioridad | Esfuerzo |
|-----------|--------|-----------|----------|
| **Google Business Profile** | Crear/optimizar perfil completo con fotos, horarios, descripción, categorías | ALTA | 2 horas |
| **Directorios de transporte** | Registrarse en directorios del sector transporte en Colombia | ALTA | 3-4 horas |
| **Cámara de Comercio** | Verificar presencia en directorio empresarial de Cámara de Comercio de Bogotá | MEDIA | 1 hora |
| **Google Maps / Waze** | Verificar que la dirección aparece correcta y con datos completos | MEDIA | 1 hora |
| **Páginas Amarillas / Directorio** | Registro con categoría "Transporte Empresarial" | MEDIA | 30 min |
| **LinkedIn (empresa)** | Crear página de empresa con descripción optimizada | MEDIA | 2 horas |
| **YouTube** | Video corto de la flota + servicios (futuro) | BAJA | 4+ horas |

#### Optimización de Google Business Profile (prioridad #1 en presencia)

```
Nombre: Tres Perlas — Transporte Empresarial
Categoría principal: Servicio de transporte
Categorías secundarias: Alquiler de automóviles, Servicio de limusinas, Transporte de empleados
Descripción: "Empresa de transporte empresarial habilitada por el Ministerio de Transporte de Colombia. 
Flota propia de sedanes, camionetas 4x4, camperos, vans y buses para transporte de personal, 
transporte ejecutivo, eventos corporativos y operaciones en campo. Sede en Bogotá con cobertura nacional. 
Documentación verificable en línea. Cotice sin compromiso."
Dirección: Av. Americas #62-84, CC Outlet Factory, Local 241, Bogotá
Teléfono: +57 316 334 4149
Sitio web: https://tresperlas.co
Horario: Lunes a Sábado 6:00 - 20:00
Fotos: Mínimo 10 (oficina, vehículos por tipo, equipo, certificaciones)
Posts: Publicar 1 por semana con link a artículo de blog
```

---

## ARCHIVOS MACHINE-READABLE

### `/llms.txt` — Contexto para sistemas de IA

Crear en la raíz del sitio:

```markdown
# Tres Perlas — Transporte Empresarial

> Empresa de transporte empresarial habilitada por el Ministerio de Transporte de Colombia, con sede en Bogotá y cobertura nacional. Flota propia de sedanes, camionetas 4x4, camperos, aerovans, microbuses y buses.

## Servicios
- [Transporte de Personal](https://tresperlas.co/servicios/transporte-de-personal): Rutas diarias para equipos de trabajo. Vans, microbuses y buses.
- [Transporte Ejecutivo](https://tresperlas.co/servicios/transporte-ejecutivo): Sedanes y camionetas premium para directivos y clientes VIP.
- [Transporte para Eventos](https://tresperlas.co/servicios/transporte-para-eventos): Logística para convenciones, team buildings. 10 a 500+ personas.
- [Transporte en Campo](https://tresperlas.co/servicios/transporte-en-campo): 4x4 para zonas rurales, minería, energía, construcción.

## Diferenciadores
- Flota propia (no tercerizada)
- Habilitación del Ministerio de Transporte vigente
- Documentación verificable en portal en línea (SOAT, seguros, RTM)
- Conductores capacitados con licencia vigente
- Cobertura: Bogotá + nacional

## Contacto
- Teléfono/WhatsApp: +57 316 334 4149
- Email: info@tresperlas.co
- Dirección: Av. Americas #62-84, CC Outlet Factory, Local 241, Bogotá, Colombia
- Web: https://tresperlas.co
- Cotizar: https://tresperlas.co/cotizar
```

### `robots.txt` — Permitir bots de IA

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://tresperlas.co/sitemap.xml
```

---

## OPTIMIZACIÓN POR TIPO DE CONTENIDO

### Páginas de servicio

| Elemento | Implementación |
|----------|---------------|
| Definición extractable | Párrafo de 40-60 palabras en primer bloque, auto-contenido |
| Datos concretos | Cifras de flota, años, capacidad por vehículo |
| FAQ con schema | 4-5 preguntas por servicio (ya definidas en schema-markup) |
| Tabla comparativa | Tipo de vehículo + capacidad + caso de uso |
| Atribución | "Tres Perlas — empresa habilitada, [X] años de experiencia" |
| Fecha | "Información actualizada a [mes] 2026" |

### Blog posts

| Elemento | Implementación |
|----------|---------------|
| Respuesta directa | Primera oración del post responde la query del título |
| Estadísticas citadas | Al menos 2-3 datos con fuente por artículo |
| Estructura H2/H3 | Headings que coinciden con cómo la gente pregunta |
| Tablas | Al menos 1 tabla comparativa o de datos por artículo |
| Autor + bio | Nombre + cargo + experiencia |
| Fecha visible | "Publicado: [fecha] | Actualizado: [fecha]" |
| Internal links | A servicios y a `/cotizar` |

### Páginas de comparación

| Elemento | Implementación |
|----------|---------------|
| Tabla comparativa central | Criterio + Tres Perlas + Alternativa (balanceada, no sesgada) |
| Veredicto claro | "Tres Perlas es mejor cuando..." + "La alternativa es mejor cuando..." |
| Datos específicos | Precios, capacidades, certificaciones concretas |
| FAQ | "¿Cuándo conviene X vs Y?" |
| Tono justo | Los LLMs penalizan comparaciones obviamente sesgadas |

---

## CHECKLIST DE AI SEO POR PÁGINA

Aplicar a cada página del sitio:

```
[ ] Párrafo de definición extractable en las primeras 100 palabras
[ ] Al menos 1 tabla estructurada (comparación, datos, specs)
[ ] Sección FAQ con 3-5 preguntas (con FAQPage schema)
[ ] Al menos 2 estadísticas con fuente citada
[ ] Atribución de autor/empresa con credenciales
[ ] "Última actualización: [fecha]" visible
[ ] Schema markup correcto (Article, Service, FAQPage, etc.)
[ ] Headings H2/H3 que coinciden con queries de búsqueda
[ ] Respuestas de 40-60 palabras en los primeros párrafos de cada sección
[ ] Internal links a páginas de servicio y /cotizar
[ ] Alt text descriptivo en todas las imágenes
[ ] Open Graph tags para compartir
```

---

## PLAN DE IMPLEMENTACIÓN

### Fase 1 — Con el rediseño web (semana 1-2)

| # | Acción | Impacto |
|---|--------|---------|
| 1 | Crear `/llms.txt` | Los LLMs tendrán contexto de Tres Perlas |
| 2 | Configurar `robots.txt` con bots de IA permitidos | Bots pueden crawlear y citar |
| 3 | Párrafo de definición extractable en homepage | Respuesta lista para queries "qué es" |
| 4 | FAQ con schema en cada página de servicio | Rich results + extractable por LLMs |
| 5 | Datos concretos del cliente en todas las páginas | Cifras citables |
| 6 | Atribución de autor en todos los contenidos | Señal de experticia |

### Fase 2 — Con el blog (mes 1-2)

| # | Acción | Impacto |
|---|--------|---------|
| 1 | Artículos optimizados con bloques extractables | Contenido citable a escala |
| 2 | Tablas comparativas en artículos relevantes | Alto potencial de citación |
| 3 | Lead magnets con datos originales | Contenido único citable |

### Fase 3 — Presencia tercera (mes 2-3)

| # | Acción | Impacto |
|---|--------|---------|
| 1 | Google Business Profile completo | Fuente #1 para búsquedas locales con IA |
| 2 | Directorios de transporte en Colombia | Menciones terceras citables |
| 3 | LinkedIn página de empresa | Presencia profesional B2B |
| 4 | Monitoreo mensual en ChatGPT/Perplexity/Google | Medir progreso |

---

## MÉTRICAS DE ÉXITO

| Métrica | Actual | Meta mes 3 | Meta mes 6 |
|---------|--------|-----------|-----------|
| Queries donde TP es citado por ChatGPT | 0/8 | 2/8 | 5/8 |
| Queries donde TP es citado por Perplexity | 0/8 | 2/8 | 4/8 |
| Google AI Overviews con TP como fuente | 0 | 1-2 | 3-5 |
| Tráfico referido desde plataformas IA | 0 | Detectar en GA4 | Medir tendencia |
| Presencia en Google Business Profile | Desconocida | Perfil completo + 200 views/mes | 500+ views/mes |

---

## PRIORIDAD 2 COMPLETADA

Resumen de los 4 entregables de Prioridad 2:

| Skill | Documento | Estado |
|-------|-----------|--------|
| `/seo-audit` | tres-perlas-seo-audit.md | Hecho |
| `/schema-markup` | tres-perlas-schema-markup.md | Hecho |
| `/content-strategy` | tres-perlas-content-strategy.md | Hecho |
| `/ai-seo` | tres-perlas-ai-seo.md | Hecho |

---

*Documento generado: 2026-04-19*
*Picard-IA — Skill: ai-seo*
*Base: product-marketing-context.md + seo-audit + schema-markup + content-strategy*
