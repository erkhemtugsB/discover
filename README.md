# Discover Referral Funnel (React + Vite)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env file and fill values:
   ```bash
   cp .env.example .env
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```

## Required env vars

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_REFERRAL_LINK`

## Supabase table

Run SQL from `src/README_SUPABASE.sql` in your Supabase SQL editor to create `leads` table.
