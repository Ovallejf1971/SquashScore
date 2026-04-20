# SCHEMA MARKUP — Tres Perlas (tresperlas.co)

**Cliente:** Tres Perlas — Transporte Empresarial y Turismo
**Agencia:** Picard-IA
**Fecha:** 2026-04-19
**Estado actual:** Sin schema markup de ningún tipo
**Formato:** JSON-LD (recomendado por Google)
**Ubicación:** En `<head>` de cada página

---

## SCHEMAS POR PÁGINA

### 1. Homepage — Organization + WebSite + LocalBusiness + BreadcrumbList

Colocar en el `<head>` de la homepage (`/`):

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://tresperlas.co/#organization",
      "name": "Tres Perlas",
      "alternateName": "Tres Perlas S.A.S.",
      "url": "https://tresperlas.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tresperlas.co/images/logo-tres-perlas.png",
        "width": 300,
        "height": 100
      },
      "image": "https://tresperlas.co/images/flota-tres-perlas.jpg",
      "description": "Transporte empresarial seguro y puntual en Bogotá y toda Colombia. Flota propia: sedanes, 4x4, vans y buses. Documentación al día.",
      "telephone": "+573163344149",
      "email": "info@tresperlas.co",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Americas #62-84, Centro Comercial Outlet Factory, Local 241",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "postalCode": "110931",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 4.6281,
        "longitude": -74.1180
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "20:00"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Bogotá"
        },
        {
          "@type": "Country",
          "name": "Colombia"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "COP",
      "paymentAccepted": "Transferencia bancaria, Efectivo",
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+573163344149",
        "contactType": "sales",
        "availableLanguage": "Spanish",
        "areaServed": "CO"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Transporte Empresarial",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte de Personal",
              "url": "https://tresperlas.co/servicios/transporte-de-personal"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte Ejecutivo",
              "url": "https://tresperlas.co/servicios/transporte-ejecutivo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte para Eventos",
              "url": "https://tresperlas.co/servicios/transporte-para-eventos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transporte en Campo",
              "url": "https://tresperlas.co/servicios/transporte-en-campo"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://tresperlas.co/#website",
      "name": "Tres Perlas — Transporte Empresarial",
      "url": "https://tresperlas.co",
      "publisher": {
        "@id": "https://tresperlas.co/#organization"
      }
    }
  ]
}
</script>
```

**Rich results esperados:**
- Knowledge Panel con logo, dirección, teléfono, horario
- Google Maps con datos de negocio
- Sitelinks en búsquedas de marca

---

### 2. Páginas de servicio — Service + BreadcrumbList + FAQPage

Template para cada página de servicio. Ejemplo para `/servicios/transporte-de-personal`:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://tresperlas.co/servicios/transporte-de-personal/#service",
      "name": "Transporte de Personal para Empresas",
      "description": "Rutas diarias de transporte de personal para empresas en Bogotá. Conductores fijos, GPS en tiempo real, flota propia de vans, microbuses y buses.",
      "url": "https://tresperlas.co/servicios/transporte-de-personal",
      "provider": {
        "@id": "https://tresperlas.co/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Bogotá"
      },
      "serviceType": "Transporte especial de personal",
      "category": "Transporte empresarial",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Vehículos para transporte de personal",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Aerovan (5-15 personas)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Microbús (16-30 personas)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Bus (30+ personas)"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://tresperlas.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Servicios",
          "item": "https://tresperlas.co/servicios"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Transporte de Personal"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Cuántos pasajeros pueden transportar por ruta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Desde 5 hasta más de 40 pasajeros por ruta. Contamos con aerovans (5-15 personas), microbuses (16-30 personas) y buses (30+ personas). Diseñamos las rutas según la ubicación de sus empleados."
          }
        },
        {
          "@type": "Question",
          "name": "¿El servicio incluye conductor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí. Todos nuestros servicios incluyen conductor profesional capacitado, con licencia vigente y experiencia en transporte empresarial. Asignamos conductores fijos para que conozcan las rutas."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa si un vehículo falla durante la ruta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contamos con vehículos de respaldo. Si un vehículo presenta algún inconveniente, enviamos un reemplazo inmediatamente para que su operación no se detenga."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo puedo verificar que la documentación del vehículo está al día?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A través de nuestro portal de afiliados puede consultar en tiempo real el estado del SOAT, seguros, revisión técnico-mecánica y licencia de conducción de cualquier vehículo de nuestra flota."
          }
        }
      ]
    }
  ]
}
</script>
```

**Rich results esperados:**
- FAQ dropdowns en resultados de Google
- Breadcrumbs visibles en SERP
- Rich snippet de servicio

---

### 3. Variaciones por servicio (solo el nodo Service + FAQ)

#### Transporte Ejecutivo (`/servicios/transporte-ejecutivo`)

```json
{
  "@type": "Service",
  "name": "Transporte Ejecutivo en Bogotá",
  "description": "Transporte ejecutivo con conductor profesional en Bogotá y Colombia. Sedanes de lujo y camionetas 4x4 para directivos, clientes VIP y visitantes internacionales.",
  "url": "https://tresperlas.co/servicios/transporte-ejecutivo",
  "serviceType": "Transporte ejecutivo",
  "provider": { "@id": "https://tresperlas.co/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Bogotá" },
    { "@type": "Country", "name": "Colombia" }
  ]
}
```

**FAQ — Transporte Ejecutivo:**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Ofrecen servicio de transporte al aeropuerto El Dorado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Ofrecemos traslados al aeropuerto El Dorado de Bogotá con recogida en cualquier punto de la ciudad. Servicio disponible las 24 horas, los 7 días de la semana."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen conductores bilingües?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contamos con conductores con nivel básico de inglés para la atención de visitantes internacionales. Para requerimientos específicos de idioma, consúltenos con anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿El servicio está disponible 24/7?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El transporte ejecutivo está disponible las 24 horas del día, los 7 días de la semana. Para servicios fuera de horario regular, recomendamos agendar con al menos 12 horas de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Emiten facturación electrónica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Emitimos facturación electrónica según la normatividad de la DIAN. Podemos facturar por servicio individual o de forma consolidada mensual según las necesidades de su empresa."
      }
    }
  ]
}
```

#### Transporte para Eventos (`/servicios/transporte-para-eventos`)

```json
{
  "@type": "Service",
  "name": "Transporte para Eventos Corporativos",
  "description": "Logística completa de transporte para eventos corporativos en Colombia. Convenciones, team buildings, lanzamientos. De 10 a 500+ personas.",
  "url": "https://tresperlas.co/servicios/transporte-para-eventos",
  "serviceType": "Transporte para eventos",
  "provider": { "@id": "https://tresperlas.co/#organization" },
  "areaServed": { "@type": "Country", "name": "Colombia" }
}
```

**FAQ — Transporte para Eventos:**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación debo reservar transporte para mi evento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 2 semanas de anticipación para eventos de más de 50 personas. Para eventos más pequeños, podemos coordinar con 3-5 días de anticipación dependiendo de la disponibilidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden manejar múltiples rutas simultáneas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestra flota nos permite coordinar múltiples rutas simultáneas. Diseñamos el plan de rutas según los puntos de recogida y el horario de su evento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si cambia el número de personas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos adaptamos. Si el número de asistentes cambia, ajustamos los vehículos asignados. Le pedimos confirmación final 48 horas antes del evento para garantizar la disponibilidad."
      }
    }
  ]
}
```

#### Transporte en Campo (`/servicios/transporte-en-campo`)

```json
{
  "@type": "Service",
  "name": "Transporte 4x4 para Operaciones en Campo",
  "description": "Camionetas doble cabina 4x4 y camperos para operaciones en zonas rurales, minería, energía y construcción en Colombia. Preparados para trocha.",
  "url": "https://tresperlas.co/servicios/transporte-en-campo",
  "serviceType": "Transporte en campo 4x4",
  "provider": { "@id": "https://tresperlas.co/#organization" },
  "areaServed": { "@type": "Country", "name": "Colombia" }
}
```

**FAQ — Transporte en Campo:**

```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué zonas rurales cubren en Colombia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Operamos en todo el territorio nacional, incluyendo zonas rurales de difícil acceso. Tenemos experiencia en rutas para el sector minero, petrolero, agroindustrial y de construcción en departamentos como Cundinamarca, Boyacá, Meta, Santander, entre otros."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los vehículos 4x4 están preparados para trocha?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestras camionetas doble cabina 4x4 y camperos están equipados para vías sin pavimentar. Los conductores tienen experiencia en conducción en terrenos difíciles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los vehículos tienen seguro todo riesgo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Toda nuestra flota cuenta con SOAT vigente, póliza de responsabilidad civil contractual y extracontractual, y seguro contra todo riesgo. Puede verificar la documentación en nuestro portal."
      }
    }
  ]
}
```

---

### 4. Página de Flota (`/flota`)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "name": "Flota de Transporte Empresarial Tres Perlas",
      "description": "Vehículos propios para transporte empresarial: sedanes, camionetas 4x4, camperos, aerovans, microbuses y buses.",
      "url": "https://tresperlas.co/flota",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Sedán de Servicio Especial",
            "description": "Automóvil para transporte ejecutivo. 1-3 pasajeros. Ideal para traslados al aeropuerto y reuniones de negocios.",
            "category": "Transporte Ejecutivo"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Camioneta Doble Cabina 4x4",
            "description": "Camioneta para operaciones en campo y zonas rurales. 1-4 pasajeros. Preparada para trocha y vías sin pavimentar.",
            "category": "Transporte en Campo"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Campero de Servicio Especial",
            "description": "Campero de lujo para terrenos difíciles. 1-6 pasajeros. Comodidad en zonas rurales.",
            "category": "Transporte en Campo"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Product",
            "name": "Aerovan",
            "description": "Van para transporte de personal y grupos. 5-15 pasajeros. Ideal para rutas empresariales diarias.",
            "category": "Transporte de Personal"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Product",
            "name": "Microbús",
            "description": "Microbús para transporte de personal y eventos. 16-30 pasajeros.",
            "category": "Transporte de Personal"
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "Product",
            "name": "Bus",
            "description": "Bus para transporte masivo de personal y eventos corporativos. 30-40+ pasajeros.",
            "category": "Transporte de Personal"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://tresperlas.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nuestra Flota"
        }
      ]
    }
  ]
}
</script>
```

---

### 5. Blog Posts (template)

Para cada blog post en `/blog/{slug}`:

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "[TÍTULO DEL POST]",
      "description": "[DESCRIPCIÓN CORTA - 150-160 chars]",
      "image": "https://tresperlas.co/blog/images/[slug].jpg",
      "datePublished": "[YYYY-MM-DD]",
      "dateModified": "[YYYY-MM-DD]",
      "author": {
        "@type": "Organization",
        "name": "Tres Perlas",
        "url": "https://tresperlas.co"
      },
      "publisher": {
        "@id": "https://tresperlas.co/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://tresperlas.co/blog/[slug]"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://tresperlas.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://tresperlas.co/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "[TÍTULO DEL POST]"
        }
      ]
    }
  ]
}
</script>
```

---

### 6. Página Cotizar (`/cotizar`)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Cotizar Transporte Empresarial",
      "description": "Solicite cotización de transporte empresarial sin compromiso. Respondemos en menos de 24 horas.",
      "url": "https://tresperlas.co/cotizar",
      "isPartOf": {
        "@id": "https://tresperlas.co/#website"
      }
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "telephone": "+573163344149",
      "email": "info@tresperlas.co",
      "availableLanguage": "Spanish",
      "areaServed": "CO",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "06:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://tresperlas.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cotizar"
        }
      ]
    }
  ]
}
</script>
```

---

## RESUMEN DE SCHEMAS POR PÁGINA

| Página | Schema Types | Rich Results esperados |
|--------|-------------|----------------------|
| Homepage `/` | Organization + LocalBusiness + WebSite | Knowledge Panel, Google Maps, Sitelinks |
| Transporte de Personal | Service + BreadcrumbList + FAQPage | FAQ dropdowns, Breadcrumbs |
| Transporte Ejecutivo | Service + BreadcrumbList + FAQPage | FAQ dropdowns, Breadcrumbs |
| Transporte Eventos | Service + BreadcrumbList + FAQPage | FAQ dropdowns, Breadcrumbs |
| Transporte en Campo | Service + BreadcrumbList + FAQPage | FAQ dropdowns, Breadcrumbs |
| Flota | ItemList + BreadcrumbList | Breadcrumbs |
| Blog posts | Article + BreadcrumbList | Article rich result, Breadcrumbs |
| Cotizar | WebPage + ContactPoint + BreadcrumbList | Breadcrumbs |
| Nosotros | AboutPage + BreadcrumbList | Breadcrumbs |
| Clientes | WebPage + BreadcrumbList | Breadcrumbs |

---

## IMPLEMENTACIÓN

### Paso 1: Validar antes de publicar
1. Copiar cada JSON-LD
2. Pegar en [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Verificar 0 errores, 0 warnings
4. Corregir si hay issues

### Paso 2: Insertar en HTML
- Cada `<script type="application/ld+json">` va en el `<head>` de la página correspondiente
- Si el sitio usa CMS: configurar como plugin/componente reutilizable
- Si es HTML estático: incluir directamente

### Paso 3: Monitorear en Search Console
- Ir a Search Console > Enhancements
- Verificar que Google detecte los schemas
- Corregir errores que aparezcan

### Datos a completar con el cliente

| Dato | Para qué | Dónde va |
|------|----------|---------|
| Coordenadas GPS exactas de la oficina | LocalBusiness.geo | Homepage |
| Código postal exacto | LocalBusiness.address | Homepage |
| URL del logo en alta resolución | Organization.logo | Homepage |
| Foto principal de la flota | Organization.image | Homepage |
| Redes sociales (si tiene) | Organization.sameAs | Homepage |
| Horario exacto de atención | openingHoursSpecification | Homepage + Cotizar |

---

## SIGUIENTE PASO

Ejecutar **`/content-strategy`** para planear el blog y contenido SEO.

---

*Documento generado: 2026-04-19*
*Picard-IA — Skill: schema-markup*
*Base: product-marketing-context.md + site-architecture + seo-audit*
