# Arquitectura de Infraestructura

## Versión Mermaid (renderiza en GitHub, Notion, Obsidian)

```mermaid
flowchart LR
    subgraph AG["🏢 AGENCIAS"]
        A1[Agencia 1]
        A2[Agencia 2]
        A3[Agencia N]
    end

    SW{{Switch Core}}

    subgraph DC["🏛️ DATA CENTER"]
        direction TB
        DCP[(Servidor<br/>PRINCIPAL)]
        DCA[(Servidor<br/>ALTERNO)]
        DCP <-.Replicación.-> DCA
    end

    FW{{🛡️ Firewall}}

    subgraph CLOUD["☁️ SERVICIOS CLOUD"]
        direction TB
        AWS["☁️ AWS"]
        AZ["☁️ Azure"]
        GCP["☁️ Google Cloud"]
        ORA["☁️ Oracle Cloud"]
    end

    subgraph PROC["⚙️ PROCESOS"]
        direction TB
        PAWS["<b>AWS</b><br/>• Indemnización<br/>• Suscripción<br/>• Recaudo"]
        PAZ["<b>Azure</b><br/>• Indemnización · Suscripción<br/>• Recaudo · Gestión documental<br/>• Analítica"]
        PGCP["<b>GCP</b><br/>• Proceso A1"]
        PORA["<b>Oracle</b><br/>• Proceso A2"]
    end

    A1 --> SW
    A2 --> SW
    A3 --> SW
    SW --> DCP
    DCP --> FW
    FW --> AWS
    FW --> AZ
    FW --> GCP
    FW --> ORA
    AWS -.-> PAWS
    AZ -.-> PAZ
    GCP -.-> PGCP
    ORA -.-> PORA

    classDef ag fill:#EAF1FB,stroke:#1F4E79,color:#1F4E79
    classDef dc fill:#D9E7F5,stroke:#1F4E79,color:#1F4E79
    classDef aws fill:#FFF2E5,stroke:#FF9900,color:#232F3E
    classDef az fill:#E5F1FB,stroke:#0078D4,color:#0078D4
    classDef gcp fill:#E8F0FE,stroke:#4285F4,color:#4285F4
    classDef ora fill:#FBEAE6,stroke:#C74634,color:#C74634

    class A1,A2,A3 ag
    class DCP,DCA dc
    class AWS,PAWS aws
    class AZ,PAZ az
    class GCP,PGCP gcp
    class ORA,PORA ora
```

---

## Componentes

| Capa | Componentes | Descripción |
|---|---|---|
| **Agencias** | N sucursales | Puntos de acceso de usuarios finales |
| **Data Center** | Principal + Alterno | Replicación activa entre sitios |
| **Cloud** | AWS · Azure · GCP · Oracle | Estrategia multi-cloud por carga de trabajo |
| **Procesos** | Indemnización, Suscripción, Recaudo, Gestión documental, Analítica, A1, A2 | Servicios de negocio distribuidos según proveedor |

## Distribución de procesos

- **AWS** → Indemnización, Suscripción, Recaudo
- **Azure** → Indemnización, Suscripción, Recaudo, Gestión documental, Analítica
- **Google Cloud** → Proceso A1
- **Oracle Cloud** → Proceso A2
