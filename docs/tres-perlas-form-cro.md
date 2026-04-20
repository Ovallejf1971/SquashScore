# FORM CRO — Tres Perlas (tresperlas.co)

**Cliente:** Tres Perlas — Transporte Empresarial y Turismo
**Agencia:** Picard-IA
**Fecha:** 2026-04-19
**Form Type:** Quote/Estimate Request (solicitud de cotización B2B)
**Conversion Goal:** Lead cualificado → cotización → contrato de transporte

---

## ESTADO ACTUAL DEL FORMULARIO

### Campos actuales (3)
```
Nombre:  [________________________________________]
Email:   [________________________________________]
Mensaje: [________________________________________]

[Enviar]
```

### Diagnóstico

| Problema | Impacto |
|----------|---------|
| Solo 3 campos genéricos — no cualifican al lead | El equipo comercial recibe "Hola, quiero info" y debe hacer 5 preguntas de vuelta |
| Botón "Enviar" no comunica valor | No hay motivación para completar |
| Sin campo de WhatsApp/teléfono | El medio de respuesta #1 en Colombia B2B no se captura |
| Sin campo de tipo de servicio | No se sabe si necesita un sedán o un bus de 40 personas |
| Sin indicación de tiempo de respuesta | El usuario no sabe si le van a contestar en 1 hora o en 1 semana |
| "Mensaje" como campo libre obligatorio | Genera fricción — el usuario no sabe qué escribir |
| Sin validación inline | No hay feedback hasta que envía |
| Sin alternativa WhatsApp | Quien no quiere llenar formulario no tiene otra opción |
| Sin versión mobile optimizada | Probable — el sitio es de 2019 |

### Resultado actual estimado
- **Formularios enviados/mes:** ~0-2
- **Leads cualificados:** ~0 (la info no alcanza para cotizar sin ida y vuelta)
- **Tasa de conversión del formulario:** Desconocida (sin analytics)

---

## NUEVO FORMULARIO DE COTIZACIÓN

### Principio de diseño

> **Recoger justo lo necesario para enviar una cotización en 24h, sin ida y vuelta.**
> El formulario debe sentirse como una conversación rápida, no como un trámite.

---

### Diseño: Multi-step (2 pasos)

Se recomienda multi-step porque:
- Hay 8 campos necesarios (más de 6 = caída significativa en completación)
- Los campos se agrupan lógicamente: "qué necesita" vs. "cómo lo contactamos"
- El paso 1 genera compromiso antes de pedir datos personales
- Permite lógica condicional en el paso 1

---

### PASO 1: "Cuéntenos qué necesita" (4 campos)

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║  Cotice su transporte empresarial                             ║
║  Respondemos en menos de 24 horas                             ║
║                                                               ║
║  ─── Paso 1 de 2: Su necesidad ──────────────── ●───○        ║
║                                                               ║
║  ¿Qué tipo de servicio necesita? *                            ║
║  ┌─────────────────────────────────────────────┐              ║
║  │ ○ Transporte de personal (rutas diarias)    │              ║
║  │ ○ Transporte ejecutivo                      │              ║
║  │ ○ Transporte para evento                    │              ║
║  │ ○ Operación en campo (4x4, zonas rurales)   │              ║
║  │ ○ Otro                                      │              ║
║  └─────────────────────────────────────────────┘              ║
║                                                               ║
║  ¿Cuántas personas? *                                         ║
║  ┌─────────────────────────────────────────────┐              ║
║  │ ○ 1 a 4 personas                           │              ║
║  │ ○ 5 a 15 personas                          │              ║
║  │ ○ 16 a 30 personas                         │              ║
║  │ ○ Más de 30 personas                       │              ║
║  └─────────────────────────────────────────────┘              ║
║                                                               ║
║  Ruta o destino                                               ║
║  [Ej: Bogotá - Chía, ruta diaria zona norte    ]             ║
║                                                               ║
║  Fecha aproximada de inicio                                   ║
║  [ 📅  dd/mm/aaaa                               ]             ║
║                                                               ║
║                              [Siguiente →]                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Notas de campo:**

| Campo | Tipo | Requerido | Por qué |
|-------|------|-----------|---------|
| Tipo de servicio | Radio buttons (5 opciones) | Sí | Determina tipo de vehículo y precio. Radio buttons > dropdown porque son <5 opciones y son más fáciles de escanear |
| Cantidad de personas | Radio buttons (4 rangos) | Sí | Determina tamaño de vehículo. Rangos en lugar de número exacto para reducir fricción |
| Ruta o destino | Texto libre | No | Contexto para cotizar. Placeholder con ejemplo concreto para guiar |
| Fecha aproximada | Date picker | No | Indica urgencia. Opcional porque a veces el cliente aún no tiene fecha |

**Lógica condicional (si se implementa):**
- Si selecciona "Transporte de personal" → mostrar campo adicional: "¿Con qué frecuencia? (diario / semanal / ocasional)"
- Si selecciona "Transporte para evento" → mostrar campo adicional: "Tipo de evento (convención / team building / otro)"
- Si selecciona "Otro" → mostrar campo de texto: "Descríbanos su necesidad"

---

### PASO 2: "¿Cómo lo contactamos?" (4 campos)

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║  Cotice su transporte empresarial                             ║
║  Respondemos en menos de 24 horas                             ║
║                                                               ║
║  ─── Paso 2 de 2: Sus datos ────────────────── ●───●        ║
║                                                               ║
║  Nombre de contacto *                                         ║
║  [                                               ]            ║
║                                                               ║
║  Empresa *                                                    ║
║  [                                               ]            ║
║                                                               ║
║  WhatsApp *                                                   ║
║  [+57 3XX XXX XXXX                               ]            ║
║  Le enviaremos la cotización por este medio                   ║
║                                                               ║
║  Email                                                        ║
║  [nombre@empresa.com                             ]            ║
║  Opcional — para enviar copia formal de la cotización         ║
║                                                               ║
║  ┌──────────────────────────────────────────────┐             ║
║  │  ✓ No compartimos sus datos con terceros     │             ║
║  │  ✓ Sin compromiso — cotizar es gratis        │             ║
║  └──────────────────────────────────────────────┘             ║
║                                                               ║
║         [← Volver]          [Solicitar cotización]            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Notas de campo:**

| Campo | Tipo | Requerido | Por qué |
|-------|------|-----------|---------|
| Nombre | Texto (un solo campo, no separar nombre/apellido) | Sí | Personalizar la respuesta |
| Empresa | Texto | Sí | Cualificar lead B2B — si no tiene empresa, no es cliente objetivo |
| WhatsApp | Tel con formato +57 | Sí | Canal #1 de respuesta en Colombia B2B. Help text explica para qué se usa |
| Email | Email | No | Para copia formal. Opcional reduce fricción — muchos prefieren solo WhatsApp |

---

### ESTADO POST-ENVÍO: Confirmación

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║                         ✓                                     ║
║                                                               ║
║  ¡Recibimos su solicitud!                                     ║
║                                                               ║
║  Le enviaremos su cotización por WhatsApp                     ║
║  en menos de 24 horas.                                        ║
║                                                               ║
║  ¿Necesita respuesta más rápida?                              ║
║                                                               ║
║  [💬 Escribir a Alexander por WhatsApp]                       ║
║                                                               ║
║  Resumen de su solicitud:                                     ║
║  ─────────────────────────                                    ║
║  Servicio: Transporte de personal                             ║
║  Personas: 16 a 30                                            ║
║  Ruta: Bogotá - Chía, zona norte                              ║
║  Fecha: 15/05/2026                                            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Elementos clave de la confirmación:**
- Resumen visual de lo que pidió (reduce ansiedad de "¿se envió bien?")
- Expectativa clara de tiempo de respuesta
- Escape directo a WhatsApp si necesita algo urgente
- No redirigir a homepage — mantener en la confirmación

---

## ALTERNATIVA: MINI-FORMULARIO WHATSAPP

Para visitantes que no quieren llenar el formulario completo, ofrecer una alternativa de 1 click.

### Botón flotante WhatsApp (siempre visible)

```
┌───────────────────────────────┐
│  💬 Cotizar por WhatsApp      │
└───────────────────────────────┘
```

**Link con mensaje pre-llenado:**
```
https://wa.me/573163344149?text=Hola%2C%20me%20interesa%20cotizar%20transporte%20empresarial%20con%20Tres%20Perlas.%20%C2%BFMe%20pueden%20ayudar%3F
```

**Mensaje que llega al WhatsApp de Alexander:**
> "Hola, me interesa cotizar transporte empresarial con Tres Perlas. ¿Me pueden ayudar?"

### Mini-form inline (junto al formulario principal)

```
╔═══════════════════════════════════════╗
║  ¿Prefiere cotizar por WhatsApp?      ║
║                                       ║
║  Escríbanos directo y le respondemos  ║
║  en minutos.                          ║
║                                       ║
║  [💬 Abrir WhatsApp]                  ║
║                                       ║
║  📞 (316) 334 4149 — Alexander        ║
╚═══════════════════════════════════════╝
```

---

## VALIDACIÓN Y ERRORES

### Validación inline (campo por campo)

| Campo | Validación | Mensaje de error |
|-------|-----------|-----------------|
| Tipo de servicio | Selección requerida | "Seleccione el tipo de servicio que necesita" |
| Cantidad de personas | Selección requerida | "Indique cuántas personas necesitan transporte" |
| Ruta o destino | Ninguna (opcional) | — |
| Fecha | Formato válido, no pasada | "Ingrese una fecha futura válida" |
| Nombre | Mínimo 2 caracteres | "Ingrese su nombre" |
| Empresa | Mínimo 2 caracteres | "Ingrese el nombre de su empresa" |
| WhatsApp | Formato colombiano (10 dígitos después de +57) | "Ingrese un número de WhatsApp válido (ej: 316 334 4149)" |
| Email | Formato email válido | "Ingrese un email válido (ej: nombre@empresa.com)" |

### Comportamiento de validación
- Validar al salir del campo (on blur), no mientras escribe
- Borde rojo + mensaje debajo del campo con error
- Borde verde + check cuando el campo es válido
- Al enviar: scroll al primer campo con error + focus
- Nunca borrar datos del usuario al mostrar error

---

## OPTIMIZACIÓN MOBILE

### Teclados específicos por campo

| Campo | Tipo HTML | Teclado mobile |
|-------|-----------|---------------|
| WhatsApp | `type="tel"` | Numérico |
| Email | `type="email"` | Con @ y .com |
| Fecha | `type="date"` | Date picker nativo |
| Nombre / Empresa / Ruta | `type="text"` | Texto estándar |

### Layout mobile
- **Una sola columna** siempre
- Radio buttons con área de toque de **44px mínimo** de alto
- Botón "Solicitar cotización" de **ancho completo** en mobile
- Sticky en la parte inferior de la pantalla si el formulario es largo
- Espaciado de **16px mínimo** entre campos
- Font size mínimo **16px** (evita zoom automático en iOS)

---

## ESPECIFICACIÓN TÉCNICA

### Datos que se envían

```json
{
  "tipo_servicio": "transporte_personal",
  "cantidad_personas": "16_30",
  "frecuencia": "diario",
  "ruta": "Bogotá - Chía, zona norte",
  "fecha_inicio": "2026-05-15",
  "nombre": "María López",
  "empresa": "Industrias ABC",
  "whatsapp": "+573163344149",
  "email": "maria@industriasabc.com",
  "fuente": "web_formulario",
  "timestamp": "2026-04-19T14:30:00-05:00",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "transporte-empresarial-bogota"
}
```

### Destino de los datos

**Opción A — Mínimo viable (recomendada para arrancar):**
1. Email a `info@tresperlas.co` con formato legible
2. Notificación WhatsApp a Alexander (vía API o n8n)
3. Google Sheet como CRM básico

**Opción B — Escalable (fase 2):**
1. Webhook a n8n / Make
2. n8n crea registro en CRM (HubSpot free / Google Sheets)
3. n8n envía notificación WhatsApp al asesor con datos del lead
4. n8n envía auto-respuesta WhatsApp al cliente: "Recibimos su solicitud. Le enviaremos cotización en menos de 24h."
5. n8n programa follow-up si no hay respuesta en 48h

### Tracking de analytics

```
Eventos a medir en GA4:
─────────────────────
form_view        → Formulario visible en pantalla
form_start       → Usuario interactúa con primer campo
step1_complete   → Completó paso 1 (click "Siguiente")
step2_complete   → Envió formulario (click "Solicitar cotización")
form_error       → Error de validación (con campo específico)
whatsapp_click   → Click en botón WhatsApp (alternativa)
confirmation_wa  → Click en WhatsApp desde pantalla de confirmación
```

---

## COMPARACIÓN: ANTES vs. DESPUÉS

| Aspecto | Formulario actual | Formulario propuesto |
|---------|------------------|---------------------|
| Campos | 3 (genéricos) | 8 (cualificadores) |
| Pasos | 1 | 2 (multi-step) |
| Tipo de servicio | No pregunta | Radio buttons (5 opciones) |
| Cantidad personas | No pregunta | Radio buttons (4 rangos) |
| WhatsApp | No captura | Campo principal de contacto |
| Empresa | No captura | Requerido (cualifica B2B) |
| Botón | "Enviar" | "Solicitar cotización" |
| Trust signals | Ninguno | 2 mensajes de confianza |
| Alternativa WhatsApp | No existe | Botón flotante + mini-form |
| Confirmación post-envío | Desconocida | Resumen + escape a WhatsApp |
| Validación | Sin validación visible | Inline por campo |
| Mobile | No optimizado | Teclados nativos + layout responsive |
| Tracking | Sin analytics | 7 eventos GA4 |
| Tiempo de respuesta indicado | No | "Menos de 24 horas" |

---

## MÉTRICAS DE ÉXITO

| Métrica | Actual (estimado) | Meta mes 1 | Meta mes 3 |
|---------|-------------------|-----------|-----------|
| Formularios enviados/mes | 0-2 | 8-12 | 20-30 |
| Tasa de completación (inicio → envío) | Desconocida | 40-50% | 55-65% |
| Drop-off paso 1 → paso 2 | N/A | <30% | <20% |
| Leads cualificados (con datos para cotizar) | ~0 | 80% de envíos | 90% de envíos |
| Contactos WhatsApp desde botón | 0 | 5-10/mes | 15-25/mes |
| Tiempo promedio de completación | N/A | <90 seg | <60 seg |

---

## TEST IDEAS (cuando haya tráfico)

| # | Hipótesis | Qué testear |
|---|-----------|-------------|
| 1 | WhatsApp como CTA principal convierte más que formulario | Botón WhatsApp grande vs. formulario como elemento principal |
| 2 | Formulario de 1 paso con 6 campos vs. multi-step de 2 pasos | Comparar tasas de completación |
| 3 | Pedir email como requerido vs. opcional | Impacto en completación y calidad de lead |
| 4 | Radio buttons vs. dropdown para tipo de servicio | Velocidad de completación |
| 5 | Mostrar precio estimado después del paso 1 | "Desde $X por viaje" — ¿aumenta completación del paso 2? |

---

## IMPLEMENTACIÓN: PRIORIDAD

### Fase 1 — MVP (semana 1)
1. Crear formulario multi-step con los 8 campos
2. Agregar botón WhatsApp flotante
3. Configurar envío a email + Google Sheet
4. Página de confirmación con resumen

### Fase 2 — Optimización (semana 2-3)
1. Validación inline
2. Lógica condicional por tipo de servicio
3. Tracking GA4 (7 eventos)
4. Auto-respuesta WhatsApp vía n8n

### Fase 3 — Escalar (mes 2+)
1. A/B testing formulario vs. WhatsApp
2. Integración CRM
3. Follow-up automático 48h
4. Enriquecimiento de datos por dominio de email

---

## SIGUIENTE PASO

Ejecutar **`/site-architecture`** para reorganizar la estructura completa del sitio — URLs, navegación y jerarquía de páginas.

---

*Documento generado: 2026-04-19*
*Picard-IA — Skill: form-cro*
*Base: product-marketing-context.md + page-cro*
