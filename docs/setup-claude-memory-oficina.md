# Setup memoria Claude en PC Oficina

## Paso 1 — Verificar que tengas Git instalado

Abre PowerShell o CMD y ejecuta:
```
git --version
```

Si NO sale versión:
- Descarga Git desde: https://git-scm.com/download/win
- Instala con opciones por defecto

## Paso 2 — Configurar autenticación GitHub

Ejecuta en terminal:
```
git config --global user.name "Ovallejf1971"
git config --global user.email "ovallejf@gmail.com"
```

## Paso 3 — Clonar el repo de memoria

```
cd ~/.claude/projects/c--Users-User-Downloads-Score-squash/
```

Si la carpeta memory existe, respáldala:
```
mv memory memory.bak
```

Clona el repo (te pedirá autenticación GitHub):
```
git clone https://github.com/Ovallejf1971/claude-memory.git memory
```

## Paso 4 — Autenticación GitHub

La primera vez te pedirá usuario y contraseña. **GitHub ya NO acepta contraseña normal**, necesitas un **Personal Access Token (PAT)**:

1. Ve a https://github.com/settings/tokens
2. Clic en **Generate new token (classic)**
3. Nombre: `claude-memory-sync`
4. Expiración: 1 año (o sin fecha)
5. Marca el scope: **repo** (acceso completo a repositorios privados)
6. Clic en **Generate token**
7. **Copia el token inmediatamente** (no lo volverás a ver)
8. Úsalo como contraseña cuando Git te la pida
9. Windows guardará el token automáticamente para futuros usos

## Paso 5 — Flujo diario

**Al empezar sesión con Claude:**
```
cd ~/.claude/projects/c--Users-User-Downloads-Score-squash/memory
git pull
```

**Al terminar sesión:**
```
cd ~/.claude/projects/c--Users-User-Downloads-Score-squash/memory
git add .
git commit -m "Update memory"
git push
```

## URL del repo
https://github.com/Ovallejf1971/claude-memory
