# Route Map — Original → New Platform

Preserve SEO URLs wherever possible. Trailing-slash variants redirect to the canonical path.

## Public website

| Original URL | New route | Notes |
|--------------|-----------|-------|
| `/` | `/` | Homepage redesign |
| `/fur-bewerber/` | `/fur-bewerber` | Preserve slug (no umlaut in original) |
| `/fur-kunden/` | `/fur-kunden` | Business conversion page |
| `/kontakt/` | `/kontakt` | Contact + form |
| `/job-finden/` | `/job-finden` | Job search |
| `/job-angebote/:slug/` | `/job-finden/:slug` | Job detail; redirect from old CPT URLs |
| `/coaching/` | `/coaching` | Coaching modules + inquiry |
| `/impressum/` | `/impressum` | Legal |
| `/datechutz/` | `/datenschutz` | **Fix typo**; keep redirect from `/datechutz` |
| `/datechutz` | → `/datenschutz` | Permanent redirect |
| `/sample-page/` | — | Drop; 404 or redirect to `/` |
| Blog spam posts | — | Drop; no index |
| `/kandydaci/:slug/` | — | Drop public placeholder profiles; optional future `/talente` via CMS |

### Optional new public routes (CMS-backed, only if content exists)

| Route | Purpose |
|-------|---------|
| `/leistungen` | Services overview |
| `/branchen` | Industries detail |
| `/ueber-uns` | About expansion |
| `/bewerbung` | General application (no specific job) |

## Admin application

| Route | Module |
|-------|--------|
| `/admin/login` | Auth |
| `/admin` | Dashboard overview |
| `/admin/candidates` | Recruitment CRM |
| `/admin/candidates/:id` | Candidate workspace |
| `/admin/applications` | Applications |
| `/admin/jobs` | Job management |
| `/admin/pipeline` | Recruitment Kanban |
| `/admin/placements` | Placements |
| `/admin/companies` | Business CRM |
| `/admin/contacts` | Contacts |
| `/admin/leads` | Lead pipeline |
| `/admin/opportunities` | Deals |
| `/admin/inbox` | Inquiries inbox |
| `/admin/tasks` | Tasks |
| `/admin/calendar` | Calendar |
| `/admin/communications` | Communication history |
| `/admin/cms/pages` | Page CMS |
| `/admin/cms/services` | Services |
| `/admin/cms/industries` | Industries |
| `/admin/cms/faqs` | FAQs |
| `/admin/cms/testimonials` | Testimonials |
| `/admin/cms/media` | Media library |
| `/admin/cms/navigation` | Navigation |
| `/admin/analytics` | Reports |
| `/admin/team` | Users & roles |
| `/admin/settings` | Site & integrations |
| `/admin/audit-logs` | Audit |

## Redirect rules (production Nginx / SPA)

```
/datechutz  /datechutz/  →  /datenschutz  (301)
/job-angebote/:slug      →  /job-finden/:slug  (301)
/impressum/              →  /impressum
…trailing slash variants → canonical without trailing slash (except if preferred)
```
