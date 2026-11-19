# ABONE Consulting Platform

Premium public website + recruitment/business CRM + CMS for **Aboné Consulting**.

## Stack

- React + Vite + JavaScript (no TypeScript)
- Tailwind CSS + shadcn-style Radix UI
- Supabase (Auth, Postgres, Storage)
- Zustand, TanStack Query, React Hook Form, Zod, GSAP

## Quick start

```bash
npm install
npm run dev
```

App: [http://localhost:5173](http://localhost:5173)  
Admin: [http://localhost:5173/admin](http://localhost:5173/admin) (demo login accepts any credentials while `VITE_DEMO_MODE=true`)

## Configuration

1. Copy `.env.example` to `apps/web/.env`
2. Leave Supabase empty to stay in demo mode, or set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_DEMO_MODE=false`
3. Apply `supabase/migrations/202611190001_init.sql` and `supabase/seed.sql`

## Documentation

| File | Purpose |
|------|---------|
| `docs/WEBSITE_AUDIT.md` | Crawl findings |
| `docs/CONTENT_INVENTORY.md` | Verified content |
| `docs/ROUTE_MAP.md` | URL mapping |
| `docs/DESIGN_SYSTEM.md` | Brand tokens |
| `docs/DATABASE.md` | Schema overview |
| `docs/SECURITY.md` | RLS / GDPR |
| `docs/CRM_WORKFLOW.md` | CRM flows |
| `docs/DEPLOYMENT.md` | Nginx / production |
| `docs/IMPLEMENTATION.md` | Progress checklist |

## Monorepo layout

```
apps/web          Vite React application (public + /admin)
packages/shared   Shared constants/schemas/utils
supabase/         Migrations, seed, functions
docs/             Architecture & audit docs
```

## Important rules

- Do not invent company facts, jobs, or testimonials
- Private candidate documents stay in private storage
- `/datechutz` redirects to `/datenschutz`
- German is the default language
