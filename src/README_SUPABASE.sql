create table if not exists public.leads (
  id bigserial primary key,
  name text not null,
  email text not null,
  phone text not null,
  age int,
  location text,
  created_at timestamptz not null default now()
);
