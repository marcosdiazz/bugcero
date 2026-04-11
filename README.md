# BugCero — Deploy en GitHub + Vercel + Supabase

## Estructura del proyecto

```
bugcero/
├── index.html          ← Página principal
├── logo.png            ← Logo de BugCero
├── api/
│   └── env.js          ← Serverless function (expone vars de entorno)
├── supabase/
│   └── migration.sql   ← SQL para crear la tabla en Supabase
├── vercel.json         ← Configuración de rutas Vercel
└── .gitignore
```

---

## Paso 1 — Supabase

1. Entrá a https://supabase.com y creá un proyecto nuevo.
2. Una vez creado, andá a SQL Editor y pegá el contenido de supabase/migration.sql. Ejecutalo.
3. En Project Settings → API, copiá:
   - Project URL  →  va como SUPABASE_URL en Vercel
   - anon public key  →  va como SUPABASE_ANON_KEY en Vercel

---

## Paso 2 — GitHub

```bash
git init
git add .
git commit -m "feat: BugCero landing inicial"
# Creá un repositorio nuevo en github.com
git remote add origin https://github.com/TU_USUARIO/bugcero.git
git branch -M main
git push -u origin main
```

---

## Paso 3 — Vercel

1. Entrá a https://vercel.com e iniciá sesión con GitHub.
2. Add New Project → elegí el repositorio bugcero.
3. NO cambies el framework (es sitio estático).
4. En Environment Variables agregá:

   SUPABASE_URL        →  https://xxxx.supabase.co
   SUPABASE_ANON_KEY   →  tu-anon-key-aqui

5. Deploy. En ~30 segundos el sitio está online.

---

## Ver consultas recibidas

En Supabase → Table Editor → consultas.
Podés marcar leido = true directamente en la tabla.

---

## Desarrollo local

Creá un archivo env.js en la raíz (ya está en .gitignore):

```js
window.__ENV__ = {
  SUPABASE_URL: "https://xxxx.supabase.co",
  SUPABASE_ANON_KEY: "tu-anon-key-aqui"
};
```

Luego abrí index.html con Live Server (VS Code) o: npx serve .
