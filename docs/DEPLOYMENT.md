# Deployment

## Target

- Public: `https://abone-consulting.eu/`
- Admin: `https://abone-consulting.eu/admin`
- Stack: Vite SPA on Nginx VPS + Supabase cloud

## Build

```bash
npm install
npm run build --workspace=apps/web
# output: apps/web/dist
```

## Environment

Copy `.env.example` → `apps/web/.env` / production secrets store:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_DEMO_MODE=true|false`
- Email provider keys only in Edge Function secrets

## Nginx (sketch)

- SPA fallback to `index.html`
- 301 `/datechutz` → `/datenschutz`
- 301 `/job-angebote/:slug` → `/job-finden/:slug`
- TLS with valid cert for `abone-consulting.eu` (current cert is broken — must fix at DNS/hosting)
- Cache hashed `/assets/*`

## Supabase

1. Apply `supabase/migrations/*`
2. Run `seed.sql`
3. Create storage buckets + policies
4. Deploy Edge Functions for inquiries/email

## Rollback

Keep previous `dist` artifact; revert Nginx root symlink; reverse migration only with backup.
