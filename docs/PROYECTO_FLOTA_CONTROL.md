# FlotaControl - Sistema de Gestión de Flotas Chia-Bogotá

## 1. Contexto del Problema

**Ruta:** Chía (Cundinamarca) <-> Bogotá (Terminal de Transporte)
**Checkpoint de referencia:** Km 5 vía Siberia-Cota
**Frecuencia objetivo:**
- Hora pico: cada 3 minutos
- Hora valle: cada 7 minutos
- 4+ checkpoints a lo largo del trayecto

**Problemas actuales:**
1. "Guerra del centavo": conductores aceleran/frenan para recoger más pasajeros
2. Control manual en checkpoints (persona con app escaneando)
3. Sin visibilidad en tiempo real de la posición y distancia entre flotas
4. Sin registro digital del orden de salida ni cumplimiento de tiempos

---

## 2. Roles del Sistema

| Rol | Descripción |
|-----|-------------|
| **Conductor** | Operador de la flota/buseta. Usa app móvil |
| **Despachador** | Controla la cola de salida en terminal (Chía o Bogotá) |
| **Administrador** | Gestiona toda la operación, ve dashboard general |
| **Verificador** | Persona en checkpoint (rol eliminable con GPS automático) |

---

## 3. Historias de Usuario

### Epic 1: Gestión de Cola de Salida

**HU-01: Registro en cola de salida**
> Como **conductor**, quiero abrir la app al llegar al punto de despacho para que el sistema me asigne automáticamente un lugar en la cola de salida, y así no haya discusiones sobre el orden.

**Criterios de aceptación:**
- Al abrir la app dentro del geofence del terminal, se registra automáticamente en la cola
- Se muestra la posición en la cola y el tiempo estimado de salida
- No se puede registrar si ya está en un trayecto activo
- Se notifica cuando es su turno de salir

**HU-02: Visualización de cola**
> Como **despachador**, quiero ver la cola de flotas en tiempo real para autorizar la salida de cada una en el orden correcto.

**Criterios de aceptación:**
- Lista ordenada de flotas en espera con placa, conductor y hora de llegada
- Botón para autorizar salida (inicia el trayecto)
- Posibilidad de reordenar la cola en casos excepcionales (con justificación)
- Indicador del tiempo desde la última salida

**HU-03: Salida autorizada**
> Como **despachador**, quiero autorizar la salida de una flota solo cuando hayan pasado los minutos requeridos (3 o 7 según horario) desde la última salida, para mantener la frecuencia.

**Criterios de aceptación:**
- Temporizador visible desde la última salida
- Alerta si se intenta despachar antes del intervalo mínimo
- Registro automático de hora exacta de salida
- Configuración del intervalo según franja horaria (pico/valle)

---

### Epic 2: Monitoreo GPS en Tiempo Real

**HU-04: Tracking de posición del conductor**
> Como **conductor**, quiero que la app envíe mi ubicación automáticamente mientras estoy en trayecto, sin que tenga que hacer nada manualmente.

**Criterios de aceptación:**
- GPS activo desde el momento de salida autorizada hasta fin de trayecto
- Envío de posición cada 10-15 segundos
- Funciona en segundo plano (background location)
- Indicador visual de que el tracking está activo
- Consumo de batería optimizado

**HU-05: Distancia entre flotas**
> Como **administrador**, quiero ver en tiempo real la distancia (en tiempo) entre cada flota consecutiva para detectar si se están juntando o separando demasiado.

**Criterios de aceptación:**
- Mapa con todas las flotas activas en la ruta
- Indicador de tiempo entre cada par de flotas consecutivas
- Código de colores: verde (distancia OK), amarillo (riesgo), rojo (fuera de rango)
- Alertas automáticas cuando la distancia sale del rango configurado

**HU-06: Alerta de distancia al conductor**
> Como **conductor**, quiero recibir alertas si me estoy acercando demasiado a la flota de adelante o si me estoy alejando demasiado, para ajustar mi velocidad.

**Criterios de aceptación:**
- Notificación sonora/vibración si distancia < umbral mínimo
- Notificación si distancia > umbral máximo
- Visualización simple: "Vas bien" / "Acércate" / "Aléjate"
- No distrae al conductor (mínima interacción visual)

---

### Epic 3: Sistema de Checkpoints

**HU-07: Registro automático en checkpoint**
> Como **sistema**, quiero registrar automáticamente el paso de una flota por un checkpoint cuando su GPS entre en el radio del punto, eliminando la necesidad de escaneo manual.

**Criterios de aceptación:**
- Geofence configurado por cada checkpoint (radio ~100m)
- Registro automático: flota, hora, checkpoint, tiempo desde el anterior
- No requiere acción del conductor
- Funciona aunque no haya señal de datos (sync posterior)

**HU-08: Registro manual en checkpoint (fallback)**
> Como **verificador**, quiero poder registrar manualmente el paso de una flota en caso de fallo del GPS, escaneando un QR o ingresando la placa.

**Criterios de aceptación:**
- Opción de escaneo QR (cada flota tiene un QR único)
- Opción de ingreso manual de placa
- Se marca como "registro manual" vs "registro automático"
- Requiere estar dentro del geofence del checkpoint

**HU-09: Configuración de checkpoints**
> Como **administrador**, quiero poder crear, editar y desactivar checkpoints en el mapa, definiendo sus coordenadas y radio de detección.

**Criterios de aceptación:**
- Interfaz de mapa para colocar checkpoints
- Radio de detección configurable por checkpoint
- Nombre/descripción del checkpoint
- Activar/desactivar sin eliminar

---

### Epic 4: Dashboard de Administración

**HU-10: Tablero general de operación**
> Como **administrador**, quiero ver un dashboard en tiempo real con todas las flotas en operación, cola de espera, y estado de checkpoints, para tener control total de la operación.

**Criterios de aceptación:**
- Mapa con flotas activas, checkpoints, y terminales
- Panel lateral con cola de salida en cada terminal
- Indicadores: flotas activas, en cola, completadas hoy
- Filtros por dirección (Chía→Bogotá, Bogotá→Chía)

**HU-11: Historial y reportes**
> Como **administrador**, quiero consultar el historial de trayectos por día, flota o conductor, para analizar cumplimiento de frecuencias y tiempos.

**Criterios de aceptación:**
- Filtros: fecha, flota, conductor, dirección
- Tabla con: hora salida, hora llegada, tiempos en cada checkpoint
- Indicador de cumplimiento de frecuencia (verde/rojo)
- Exportar a Excel/CSV

**HU-12: Gestión de flotas y conductores**
> Como **administrador**, quiero registrar flotas (placa, capacidad, estado) y conductores (nombre, cédula, licencia) para tener un inventario actualizado.

**Criterios de aceptación:**
- CRUD de flotas con: placa, modelo, capacidad, foto, estado (activo/inactivo/mantenimiento)
- CRUD de conductores con: nombre, cédula, licencia, foto, estado
- Asignación flota-conductor (puede cambiar por día)
- Historial de asignaciones

---

### Epic 5: Configuración Operativa

**HU-13: Franjas horarias y frecuencias**
> Como **administrador**, quiero configurar las franjas horarias (pico/valle) y sus frecuencias de despacho para cada dirección de la ruta.

**Criterios de aceptación:**
- Definir horarios pico y valle por día de la semana
- Frecuencia de despacho por franja (ej: 3 min pico, 7 min valle)
- Posibilidad de crear franjas especiales (festivos, eventos)
- Cambios aplican en tiempo real

**HU-14: Definición de rutas**
> Como **administrador**, quiero definir la ruta (polilínea en mapa) y la dirección (ida/vuelta) para que el sistema calcule correctamente las distancias y checkpoints.

**Criterios de aceptación:**
- Dibujar ruta sobre el mapa
- Definir puntos de inicio y fin (terminales)
- Asociar checkpoints a la ruta
- Distancia total y estimación de tiempo de recorrido

---

## 4. Arquitectura de Servicios (Definitiva)

### 4.1 Vista General

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND                                │
│                                                              │
│  ┌─────────────────────┐    ┌────────────────────────────┐   │
│  │   App Móvil Android │    │   Dashboard Web Admin      │   │
│  │   Ionic + Capacitor │    │   React + Leaflet          │   │
│  │   (Conductor y      │    │   (Desplegado en Vercel)   │   │
│  │    Despachador)     │    │                            │   │
│  └──────────┬──────────┘    └─────────────┬──────────────┘   │
└─────────────┼─────────────────────────────┼──────────────────┘
              │                             │
              │         HTTPS / WSS         │
              ▼                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      SUPABASE (BaaS)                         │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌──────────┐ ┌────────────┐  │
│  │    Auth    │ │ PostgreSQL │ │ Realtime │ │   Edge     │  │
│  │            │ │ + PostGIS  │ │ (WS)    │ │ Functions  │  │
│  │ - JWT     │ │            │ │          │ │ (Deno)     │  │
│  │ - Roles   │ │ - Usuarios │ │ - GPS   │ │            │  │
│  │ - Login   │ │ - Flotas   │ │ - Colas │ │ - Alertas  │  │
│  │   tel/pwd │ │ - Colas    │ │ - Estado│ │ - Geofence │  │
│  │           │ │ - Trayectos│ │         │ │   server   │  │
│  │           │ │ - CheckPts │ │         │ │ - Reportes │  │
│  │           │ │ - GPS logs │ │         │ │            │  │
│  └────────────┘ └────────────┘ └──────────┘ └────────────┘  │
│                                                              │
│  ┌────────────┐ ┌────────────────────────┐                   │
│  │  Storage   │ │  Cron Jobs (pg_cron)   │                   │
│  │ - Fotos   │ │ - Limpieza GPS antiguo │                   │
│  │ - QR codes│ │ - Reportes diarios     │                   │
│  └────────────┘ └────────────────────────┘                   │
└─────────────────────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│                   SERVICIOS EXTERNOS                         │
│  ┌──────────────────┐  ┌─────────────────────────────────┐   │
│  │ Firebase Cloud   │  │ GitHub Actions (CI/CD)          │   │
│  │ Messaging (Push) │  │ (Build APK + Deploy dashboard)  │   │
│  └──────────────────┘  └─────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Stack Tecnológico Definitivo

| Capa | Tecnología | Por qué esta y no otra |
|------|-----------|------------------------|
| **App Móvil** | Ionic + Capacitor (Angular/React) | Ya tienes Capacitor configurado en este repo con GitHub Actions. Reutilizamos el setup existente. Una sola app para conductor y despachador (cambia según rol) |
| **Dashboard Web** | React + Leaflet (mapas OSM gratuitos) | Mapas interactivos sin costo de API (OpenStreetMap). Leaflet es ligero y maduro |
| **Backend** | Supabase (BaaS) | Auth + DB + Realtime + Edge Functions + Storage en una sola plataforma. Sin servidor que mantener |
| **Base de datos** | PostgreSQL + PostGIS (incluido en Supabase) | Consultas geoespaciales nativas: `ST_DWithin()` para geofence, `ST_DistanceSphere()` para distancias. Tabla de GPS con índice temporal |
| **Tiempo real** | Supabase Realtime (WebSocket incluido) | Escuchas cambios en tablas directamente desde la app. Cero config adicional |
| **Lógica servidor** | Supabase Edge Functions (Deno/TypeScript) | Cálculo de alertas, validación geofence server-side, anti-spoofing GPS |
| **Autenticación** | Supabase Auth (JWT + RBAC) | Login por teléfono/password, roles (conductor, despachador, admin), Row Level Security en BD |
| **Push notifications** | Firebase Cloud Messaging | Alertas al conductor cuando está fuera de rango. Gratis |
| **Hosting dashboard** | Vercel (plan free) | Deploy automático desde GitHub, HTTPS gratis |
| **CI/CD** | GitHub Actions | Ya configurado en el repo. Build APK Android + deploy dashboard |
| **Almacenamiento** | Supabase Storage | Fotos de flotas, QR codes, avatares de conductores |

### 4.3 Qué NO necesitamos (y por qué)

| Descartado | Razón |
|------------|-------|
| ~~Redis~~ | La cola de salida vive en una tabla PostgreSQL con Supabase Realtime. Para el volumen de esta operación (~50 flotas) no necesitamos cache en memoria |
| ~~TimescaleDB~~ | Tabla `posicion_gps` en PostgreSQL con índice `(trayecto_id, tiempo)` es suficiente. Se puede agregar después si el volumen lo requiere |
| ~~Docker / VPS~~ | Supabase es serverless. No hay infraestructura que mantener |
| ~~Nginx / Load Balancer~~ | Supabase maneja el balanceo y SSL |
| ~~Backend custom (NestJS/FastAPI)~~ | Edge Functions cubren la lógica puntual. El 90% de operaciones son CRUD directo contra PostgreSQL |
| ~~React Native / Flutter~~ | Ya tenemos Capacitor. Ionic da componentes UI móviles listos |
| ~~Mapbox~~ | Leaflet + OpenStreetMap = gratis. Mapbox cobra por tiles |

### 4.4 Servicios dentro de Supabase

Todo vive dentro de Supabase, organizado por dominio:

#### Dominio 1: Autenticación y Usuarios
- Supabase Auth con login teléfono/password
- Tabla `profiles` extendida con: cédula, rol, licencia, foto
- Row Level Security (RLS): cada rol solo ve lo que le corresponde

#### Dominio 2: Gestión de Flotas (CRUD directo a PostgreSQL)
- Tablas: `flotas`, `conductores`, `asignaciones`, `rutas`, `checkpoints`
- Configuración de franjas horarias y frecuencias
- Operaciones CRUD directas desde el cliente con RLS

#### Dominio 3: Cola de Salida (PostgreSQL + Realtime)
- Tabla `cola_salida` con campo `posicion` ordenado por `hora_llegada`
- Supabase Realtime: el despachador y conductores ven cambios al instante
- Edge Function: valida intervalo mínimo antes de autorizar salida

#### Dominio 4: Tracking GPS (Insert masivo + Realtime)
- Tabla `posicion_gps` optimizada para inserts frecuentes (cada 10-15s)
- Índice compuesto: `(trayecto_id, tiempo DESC)`
- Supabase Realtime: el dashboard escucha inserts nuevos para actualizar mapa
- Particionado por mes para mantener rendimiento

#### Dominio 5: Checkpoints (Edge Function + PostGIS)
- Edge Function `verificar_checkpoint`: recibe posición GPS, evalúa `ST_DWithin()` contra todos los checkpoints de la ruta activa
- Si está dentro del radio → inserta en `paso_checkpoint` automáticamente
- Se ejecuta con cada posición GPS recibida

#### Dominio 6: Alertas (Edge Function + FCM)
- Edge Function `calcular_distancia`: compara posición de flota actual vs flota anterior en la ruta
- Si distancia temporal fuera de rango → envía push via Firebase Cloud Messaging
- Ejecutada por un trigger de PostgreSQL en cada insert a `posicion_gps`

#### Dominio 7: Reportes (SQL Views + Edge Function)
- Vistas SQL materializadas para reportes frecuentes
- Edge Function para exportar a CSV/Excel
- pg_cron para regenerar vistas y limpiar GPS antiguo (>90 días)

### 4.5 Flujo Principal

```
1. Conductor llega al terminal
   └─> App detecta geofence del terminal (Capacitor Geolocation)
       └─> Insert en tabla `cola_salida` (posición automática)
           └─> Supabase Realtime → Despachador ve cola actualizada

2. Turno del conductor
   └─> Despachador toca "Autorizar salida"
       └─> Edge Function valida intervalo (3/7 min desde última salida)
           └─> Insert en `trayectos` con estado='en_curso'
               └─> App del conductor activa GPS tracking (foreground service)

3. Durante el trayecto
   └─> App envía posición GPS cada 10-15s → Insert en `posicion_gps`
       └─> Trigger PostgreSQL ejecuta Edge Functions:
           ├─> verificar_checkpoint() → ¿pasó por algún checkpoint?
           ├─> calcular_distancia() → ¿está en rango vs flota anterior?
           │   └─> Si fuera de rango → Push notification (FCM)
           └─> Supabase Realtime → Dashboard actualiza mapa en vivo

4. Fin de trayecto
   └─> App detecta geofence del terminal destino
       └─> Update `trayectos` estado='completado', hora_llegada=now()
           └─> Conductor puede entrar a cola del terminal destino
```

### 4.6 Modelo de Datos (PostgreSQL + PostGIS)

```sql
-- Extensión geoespacial
CREATE EXTENSION IF NOT EXISTS postgis;

-- Usuarios (extiende Supabase Auth)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    nombre TEXT NOT NULL,
    cedula TEXT UNIQUE NOT NULL,
    telefono TEXT,
    rol TEXT CHECK (rol IN ('conductor', 'despachador', 'admin')),
    licencia TEXT,
    foto_url TEXT,
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Flotas (busetas)
CREATE TABLE flotas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    placa TEXT UNIQUE NOT NULL,
    modelo TEXT,
    capacidad INTEGER,
    qr_code TEXT UNIQUE,
    estado TEXT CHECK (estado IN ('activo', 'inactivo', 'mantenimiento'))
        DEFAULT 'activo',
    foto_url TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Asignación diaria conductor ↔ flota
CREATE TABLE asignaciones (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conductor_id UUID REFERENCES profiles(id),
    flota_id UUID REFERENCES flotas(id),
    fecha DATE NOT NULL DEFAULT CURRENT_DATE,
    UNIQUE(flota_id, fecha),
    UNIQUE(conductor_id, fecha)
);

-- Rutas
CREATE TABLE rutas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nombre TEXT NOT NULL,           -- "Chía → Bogotá"
    origen TEXT NOT NULL,
    destino TEXT NOT NULL,
    polilinea GEOGRAPHY(LINESTRING, 4326),
    distancia_km NUMERIC(6,2),
    geofence_origen GEOGRAPHY(POINT, 4326),
    geofence_destino GEOGRAPHY(POINT, 4326),
    radio_terminal_metros INTEGER DEFAULT 200,
    activo BOOLEAN DEFAULT true
);

-- Checkpoints
CREATE TABLE checkpoints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ruta_id UUID REFERENCES rutas(id),
    nombre TEXT NOT NULL,
    ubicacion GEOGRAPHY(POINT, 4326) NOT NULL,
    radio_metros INTEGER DEFAULT 100,
    orden_en_ruta INTEGER NOT NULL,
    activo BOOLEAN DEFAULT true
);

-- Franjas horarias
CREATE TABLE franjas_horarias (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ruta_id UUID REFERENCES rutas(id),
    dia_semana INTEGER CHECK (dia_semana BETWEEN 0 AND 6), -- 0=domingo
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    tipo TEXT CHECK (tipo IN ('pico', 'valle', 'especial')),
    intervalo_minutos INTEGER NOT NULL  -- 3 o 7
);

-- Cola de salida
CREATE TABLE cola_salida (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    flota_id UUID REFERENCES flotas(id),
    conductor_id UUID REFERENCES profiles(id),
    ruta_id UUID REFERENCES rutas(id),
    terminal TEXT NOT NULL,          -- 'chia' o 'bogota'
    posicion SERIAL,
    hora_llegada TIMESTAMPTZ DEFAULT now(),
    hora_salida TIMESTAMPTZ,
    estado TEXT CHECK (estado IN ('esperando', 'listo', 'despachado', 'cancelado'))
        DEFAULT 'esperando',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Trayectos
CREATE TABLE trayectos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    flota_id UUID REFERENCES flotas(id),
    conductor_id UUID REFERENCES profiles(id),
    ruta_id UUID REFERENCES rutas(id),
    cola_id UUID REFERENCES cola_salida(id),
    hora_salida TIMESTAMPTZ NOT NULL DEFAULT now(),
    hora_llegada TIMESTAMPTZ,
    estado TEXT CHECK (estado IN ('en_curso', 'completado', 'cancelado'))
        DEFAULT 'en_curso',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Posiciones GPS (tabla de alto volumen)
CREATE TABLE posicion_gps (
    tiempo TIMESTAMPTZ NOT NULL DEFAULT now(),
    trayecto_id UUID REFERENCES trayectos(id),
    ubicacion GEOGRAPHY(POINT, 4326) NOT NULL,
    velocidad_kmh NUMERIC(5,1),
    precision_metros NUMERIC(5,1),
    es_mock BOOLEAN DEFAULT false     -- anti-spoofing flag
);
CREATE INDEX idx_gps_trayecto_tiempo ON posicion_gps (trayecto_id, tiempo DESC);
CREATE INDEX idx_gps_tiempo ON posicion_gps (tiempo DESC);

-- Paso por checkpoint
CREATE TABLE paso_checkpoint (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    trayecto_id UUID REFERENCES trayectos(id),
    checkpoint_id UUID REFERENCES checkpoints(id),
    hora_paso TIMESTAMPTZ DEFAULT now(),
    tipo TEXT CHECK (tipo IN ('automatico', 'manual')) DEFAULT 'automatico',
    ubicacion_real GEOGRAPHY(POINT, 4326),
    UNIQUE(trayecto_id, checkpoint_id)
);
```

### 4.7 Infraestructura y Costos

```
┌──────────────────────────────────────────────────┐
│           Infraestructura MVP Definitiva          │
│──────────────────────────────────────────────────│
│                                                  │
│  Supabase Pro ........................ $25/mes   │
│    ├─ PostgreSQL + PostGIS (8GB)                 │
│    ├─ Auth (50,000 MAU)                          │
│    ├─ Realtime (ilimitado)                       │
│    ├─ Edge Functions (500K invocaciones)          │
│    ├─ Storage (100GB)                            │
│    └─ Dashboard incluido                         │
│                                                  │
│  Vercel (dashboard web) .............. $0/mes    │
│    └─ Plan free (100GB bandwidth)                │
│                                                  │
│  Firebase Cloud Messaging ............ $0/mes    │
│    └─ Push notifications (gratis)                │
│                                                  │
│  Google Play (publicar app) .......... $25 único │
│                                                  │
│  Dominio flotacontrol.co (opcional) .. $12/año   │
│                                                  │
│  ═══════════════════════════════════════════════  │
│  TOTAL MENSUAL OPERACIÓN:            ~$25/mes    │
│  COSTO INICIAL ÚNICO:                ~$37        │
└──────────────────────────────────────────────────┘
```

### 4.8 Consideraciones Técnicas Clave

1. **GPS en background (Android):** Capacitor con `@capacitor/geolocation` + foreground service con notificación persistente ("FlotaControl - Trayecto activo"). Esencial para tracking continuo sin que Android mate la app.

2. **Offline-first:** Los conductores pueden perder señal en tramos de la ruta. La app almacena posiciones GPS en SQLite local (Capacitor SQLite) y sincroniza con Supabase cuando hay conexión.

3. **Batería:** Enviar GPS cada 10-15s consume batería. Los buses tienen cargador 12V, pero igualmente ofrecer modo de ahorro (30s) configurable.

4. **Geofencing:** Doble verificación — cliente (Capacitor nativo, más eficiente en batería) + servidor (Edge Function con PostGIS, más confiable).

5. **Cálculo de distancia temporal:** No es distancia en km (línea recta), sino tiempo estimado entre dos flotas sobre la ruta. Se calcula comparando la posición de cada flota proyectada sobre la polilínea de la ruta.

6. **Anti-spoofing GPS:** La Edge Function detecta saltos imposibles de posición (velocidad > 120 km/h en zona urbana, cambio brusco de coordenadas). El campo `es_mock` en `posicion_gps` marca posiciones sospechosas.

7. **Row Level Security (RLS):** Cada conductor solo ve sus propios trayectos. Despachadores ven la cola de su terminal. Admins ven todo. Esto se configura a nivel de PostgreSQL, no en código.

8. **Escalabilidad futura:** Si la operación crece a más rutas o más flotas, la migración sería: habilitar extensión TimescaleDB en Supabase para la tabla `posicion_gps` (un ALTER TABLE, sin cambiar nada más).

---

## 5. Fases de Implementación Sugeridas

### Fase 1 - MVP (4-6 semanas)
- Auth + registro de flotas/conductores
- Cola de salida con geofence en terminales
- Tracking GPS básico
- Dashboard web con mapa en tiempo real
- Checkpoints automáticos (geofence)

### Fase 2 - Control (2-3 semanas)
- Alertas de distancia al conductor
- Configuración de franjas horarias
- Historial y reportes básicos

### Fase 3 - Optimización (2-3 semanas)
- Reportes avanzados y exportación
- Detección de GPS mock
- Modo offline robusto
- Notificaciones push

### Fase 4 - Escala (futuro)
- Soporte multi-ruta
- App para pasajeros (tiempo de llegada estimado)
- Integración con sistemas de cobro
- Analytics predictivo
