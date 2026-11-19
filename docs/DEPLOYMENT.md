# Deployment

## Target

- Public: `https://abone-consulting.eu/`
- Admin: `https://abone-consulting.eu/admin`
- Stack: Vite SPA (Vercel or Nginx VPS) + Supabase cloud

## Vercel

**Recommended Project Settings**

1. **Root Directory:** `apps/web`
2. **Framework Preset:** Vite
3. **Build Command:** `npm run build` (default)
4. **Output Directory:** `dist` (default — leave as-is)
5. **Install Command:** `npm install`

If Root Directory stays the repository root instead, use the root `vercel.json` which builds with `npm run build -w web` and sets Output Directory to `apps/web/dist`.

SPA rewrites + legacy redirects live in:

- `apps/web/vercel.json` (when Root Directory = `apps/web`)
- `vercel.json` (when deploying from repo root)

Apache alternative: `apps/web/public/.htaccess` is copied into `dist` on build.

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
