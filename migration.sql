-- Ejecutar en Supabase → SQL Editor
-- Crea la tabla para guardar las consultas del formulario de contacto.

create table if not exists public.consultas (
  id          bigserial primary key,
  nombre      text        not null,
  telefono    text        not null,
  servicio    text        not null,
  detalle     text        not null,
  creado_en   timestamptz not null default now(),
  leido       boolean     not null default false
);

-- Permite que el frontend (anon key) inserte filas pero NO las lea.
alter table public.consultas enable row level security;

create policy "Insertar consulta pública"
  on public.consultas
  for insert
  to anon
  with check (true);

-- Solo usuarios autenticados (vos) pueden leer las consultas.
create policy "Leer consultas (admin)"
  on public.consultas
  for select
  to authenticated
  using (true);
