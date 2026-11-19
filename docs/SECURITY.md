# Security & GDPR

## Principles

- No service-role keys in the browser
- RLS on every table; public can only read published CMS/jobs
- Private candidate files via signed URLs only
- Auth required for all `/admin/*` except login/recovery
- Role checks in RLS policies and Edge Functions

## Roles

| Role | Access |
|------|--------|
| Owner | Full |
| Administrator | Website + CRM + reports |
| Recruiter | Candidates, applications, jobs, tasks |
| Sales | Companies, contacts, leads, opportunities |
| Content Editor | CMS/media only |

## Public surface

Allowed anonymous: published pages/sections, published jobs, public media, inquiry submissions (rate-limited), coaching modules.

Forbidden anonymous: candidates, applications, companies, leads, private docs, analytics raw tables (except insert of consented events).

## GDPR workflows

- Consent timestamp + privacy notice version on every form
- Candidate retention settings (default 6 months post-process; pool max 2 years per current policy text)
- Admin workflows: export, anonymize, delete
- Cookie categories: necessary / analytics / marketing
- Legal pages editable; flagged for professional review before go-live

## Forms & uploads

- Zod validation client + server (Edge Function)
- File type allowlist: pdf, doc, docx; size cap 5MB
- Spam protection: honeypot + optional Turnstile/reCAPTCHA when configured
- Rate limit Edge Functions

## Secrets

Documented in `.env.example` only. Never commit real keys.
