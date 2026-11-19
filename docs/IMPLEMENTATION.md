# Implementation Plan & Checklist

Legend: `[ ]` todo · `[~]` in progress · `[x]` done · `[-]` blocked/deferred

---

## Phase 1 — Research

- [x] Inspect workspace (only `project.md` present)
- [x] Crawl website (HTTP + WP API + sitemaps; HTTPS cert broken)
- [x] Discover pages, CPTs, taxonomies, media
- [x] Download reusable assets to `docs/research/assets` + `apps/web/public/brand`
- [x] Document audit, content inventory, route map

## Phase 2 — Architecture & scaffolding

- [x] Vite React JS app in `apps/web`
- [x] Tailwind CSS v4
- [x] shadcn-style JS UI primitives (Button, Input, Textarea, Label, Badge)
- [x] React Router (public + admin split, lazy loaded)
- [x] Zustand + TanStack Query
- [x] Supabase client + demo-mode data layer
- [x] Root workspace package.json
- [x] `.env.example`, README
- [x] Initial SQL migration + seed

## Phase 3 — Design system

- [x] CSS variables / tokens (navy + logo cyan/indigo)
- [x] Typography (Manrope)
- [x] Public layout (Header, Footer, Cookie banner)
- [x] Admin shell (sidebar, topbar, auth gate)
- [~] Expand shared UI primitives as modules grow

## Phase 4 — Public website

- [x] Homepage
- [x] `/fur-bewerber`
- [x] `/fur-kunden`
- [x] `/kontakt`
- [x] `/job-finden` + detail
- [x] `/coaching`
- [x] `/leistungen`
- [x] `/branchen`
- [x] `/impressum`
- [x] `/datenschutz` + redirect from `/datechutz`
- [x] `/job-angebote/:slug` → `/job-finden/:slug`
- [x] Forms → inquiry service (localStorage demo + Supabase path)
- [x] Cookie consent
- [x] i18n dictionaries foundation (DE/EN)
- [ ] GSAP polish on remaining pages
- [ ] Job application duplicate protection hardening

## Phase 5 — Database & security

- [x] SQL migrations (core tables + RLS starter policies)
- [x] Seed (roles, stages, industries, coaching, redirects, company settings)
- [~] Expand RLS for remaining tables
- [ ] Auth profiles trigger on signup
- [ ] Storage buckets + policies
- [ ] Edge Functions for inquiry rate limiting / email

## Phase 6 — CMS

- [~] Admin pages list + media gallery (read-only foundation)
- [ ] Section editor with live preview
- [ ] Services / industries / FAQs CRUD
- [ ] Navigation & settings editors
- [ ] Testimonials gated until verified content exists

## Phase 7 — Business CRM

- [~] Companies / contacts / leads / inbox list views (demo data)
- [ ] Full create/edit drawers wired to Supabase
- [ ] Inquiry → company/contact/lead conversion workflow
- [ ] Opportunities module

## Phase 8 — Recruitment CRM

- [~] Candidates / jobs / applications / pipeline boards (demo)
- [ ] Candidate workspace tabs
- [ ] dnd-kit pipeline transitions + history
- [ ] Placements module
- [ ] Private CV storage + signed URLs

## Phase 9 — Operations

- [~] Tasks list (demo)
- [ ] Calendar events
- [ ] Communications history
- [ ] Notifications + Realtime
- [ ] Automation rules execution

## Phase 10 — Analytics

- [ ] Dashboard KPIs from live tables
- [ ] CSV export
- [ ] Consent-gated first-party events

## Phase 11 — Integrations

- [ ] Transactional email provider
- [ ] Honest disconnected integration settings UI (partially present)

## Phase 12 — QA & deployment

- [x] Production Vite build succeeds
- [ ] Playwright smoke tests
- [ ] Nginx sample config file in repo
- [ ] Fix production TLS for abone-consulting.eu (hosting)

---

## Current focus

Deepen CRM CRUD + CMS section editor + Supabase storage policies while keeping demo mode usable.
