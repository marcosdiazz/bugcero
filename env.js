// api/env.js — Vercel Serverless Function
// Expone las variables de entorno como window.__ENV__ para el frontend estático.
// NUNCA pongas la service_role key aquí, solo la anon key.
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'public, max-age=60');
  res.send(
    `window.__ENV__ = ${JSON.stringify({
      SUPABASE_URL: process.env.SUPABASE_URL || '',
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
    })};`
  );
}
