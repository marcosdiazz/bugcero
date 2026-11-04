// api/env.js — Vercel Serverless Function
// Expone las variables de entorno como window.__ENV__ para el frontend estático.
// NUNCA pongas la service_role key aquí, solo la anon key.
const http = require('http');

const server = http.createServer((req, res) => {
  // Verificamos si piden la ruta /env.js
  if (req.url === '/env.js') {
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'no-store');
    
    const envData = `window.__ENV__ = ${JSON.stringify({
      SUPABASE_URL: process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || '',
    })};`;

    res.writeHead(200);
    res.end(envData);
  } else {
    // Otras rutas de tu servidor...
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);