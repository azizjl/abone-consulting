# Database Architecture — Supabase PostgreSQL

UUID PKs, `created_at` / `updated_at`, soft delete (`deleted_at`) where business records need recovery. RLS on all tables. Demo mode uses local JSON fixtures when env vars are missing.

## Auth & admin

- `profiles` — id → auth.users, full_name, email, avatar_url, locale, is_active
- `roles` — owner, administrator, recruiter, sales, content_editor
- `user_roles` — user_id, role_id
- `role_permissions` — role_id, permission_key
- `activity_logs` — actor_id, entity_type, entity_id, action, meta jsonb

## CMS

- `pages` — slug, title, status, seo jsonb, published_at
- `page_sections` — page_id, type, sort_order, content jsonb
- `page_revisions` — page_id, snapshot jsonb, editor_id
- `page_redirects` — from_path, to_path, status_code
- `navigation_items` — location, label, href, parent_id, sort_order, locale
- `services` — title, slug, summary, body, icon, sort_order, published
- `industries` — title, slug, summary, body, published
- `faqs` — question, answer, category, sort_order, published
- `testimonials` — author, role, company, quote, published (**empty until verified**)
- `coaching_modules` — title, price_cents, currency, features jsonb, published
- `media` — path, bucket, mime, width, height, alt, size_bytes
- `site_settings` — key, value jsonb

## Recruitment

- `candidates` — personal + professional fields, status, consent, assigned_to
- `candidate_experiences`, `candidate_education`, `candidate_skills`, `candidate_languages`
- `candidate_documents` — private storage path, type, uploaded_by
- `jobs` — title, slug, description, location, employment_type, status, company_id, seo
- `recruitment_stages` — name, sort_order, is_terminal
- `applications` — candidate_id, job_id, company_id, stage_id, status, source
- `application_stage_history` — application_id, from_stage, to_stage, changed_by
- `placements` — candidate_id, company_id, job_id, date, status, fee_optional

## Business CRM

- `companies`, `contacts`, `leads`, `lead_stage_history`, `opportunities`

## Operations

- `tasks`, `task_comments`, `calendar_events`, `communications`, `notes`, `notifications`

## Inquiries & automation

- `inquiries` — type, payload jsonb, status, assigned_to, source_page, consent
- `inquiry_history`
- `automation_rules`, `automation_executions`
- `email_templates`, `email_logs`
- `analytics_events` — name, path, meta, session_id (consent-gated)

## Storage buckets

| Bucket | Public | Purpose |
|--------|--------|---------|
| `public-media` | Yes | Website images |
| `candidate-documents` | No | CVs / private docs (signed URLs) |
| `inquiry-attachments` | No | Form uploads |

## Seed

`supabase/seed.sql` loads roles, default stages, industries, coaching modules, site settings, and empty published jobs list. Demo fixtures live in `apps/web/src/data/demo/` for offline UI.
