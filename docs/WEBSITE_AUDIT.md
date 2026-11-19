# Website Audit — abone-consulting.eu

**Audit date:** 2026-11-19  
**Source:** Live WordPress site via HTTP + WP REST API + sitemaps  
**Status:** Complete (with noted access limitations)

---

## 1. Technical snapshot

| Item | Finding |
|------|---------|
| Platform | WordPress + Elementor 3.13.2 |
| Hosting | WEBD.pl / Globtel Internet (Gdańsk) |
| Domain | `abone-consulting.eu` → `194.181.228.205` |
| HTTPS | **Broken** — TLS cert is for `panel81.webd.pl`, not the domain. HTTPS fails certificate validation. Site serves correctly over **HTTP**. |
| Language | `lang="de"` (German UI) |
| CMS builder | Elementor (+ Elementor Pro namespaces present) |
| Custom post types | `job-angebote`, `kandydaci` |
| Taxonomies | `lokalizacje`, `branza`, `typ_kontraktu`, `category` |
| Forms | Contact forms with optional CV upload on multiple pages |
| Spam / quality | Two unrelated English blog posts (casino / online info) published — **do not migrate** |
| Sample page | `/sample-page/` — WordPress default — **do not migrate** |

### Crawl method

1. WP REST API (`/wp-json/wp/v2/pages|posts|media|types|job-angebote|kandydaci|…`)
2. `robots.txt` + `wp-sitemap.xml` and child sitemaps
3. Full HTML download of all primary pages
4. Media library download (24 assets)
5. HTTPS attempted first; fell back to HTTP after SSL SAN mismatch

---

## 2. Company facts (verified from site)

| Field | Value | Source |
|-------|-------|--------|
| Legal name | Aboné Consulting F.H.U. Janusz Kopec | Impressum |
| Managing director | Janusz Kopec | Datenschutz |
| Address | ul. Rynek 11, 47-200 Kędzierzyn-Koźle, Polen | Impressum / Kontakt / Datenschutz |
| Phone (DE mobile style) | 0176 84648096 / +49 176 84648096 | Impressum / search snippet |
| Phone (PL) | +48 603 811 279 | Kontakt / Datenschutz |
| Email | info@abone-consulting.eu | Impressum / Kontakt |
| Alt email (mailto) | info@abone-consulting.com | Homepage mailto link |
| Tax ID | NIP 749-150-46-23 | Impressum |
| VAT ID line | Present as heading; number shown as NIP | Impressum — **confirm with client** |
| Positioning | Consulting, Karriereberatung, Coaching, European-Recruiting | Homepage |
| Tagline triad | Consulting · Coaching · Connecting | Homepage |
| Industries | IT, HR, Marketing, Finance & Accounting, Facility Management, HealthCare | Homepage |
| Claim | Über 60% der Kunden und Kandidaten haben internationalen Hintergrund | Homepage — **marketing claim, preserve as-is** |

---

## 3. Navigation (current)

**Primary**

- Für Bewerber → `/fur-bewerber/`
- Für Kunden → `/fur-kunden/`
- Kontakt → `/kontakt/`

**Footer / legal**

- Impressum → `/impressum`
- Datenschutz → `/datechutz` ⚠️ **typo in production URL**

**In-page CTAs**

- Job finden → `/job-finden/`
- Coaching → `/coaching/`

Logo asset: `/wp-content/uploads/2022/12/Unbenannttt.jpg` (ABONÉ CONSULTING wordmark + cyan→indigo “A” mark)

---

## 4. Page-by-page findings

### Homepage `/`

- Hero triad: Consulting / Coaching / Connecting
- About section with network / Direct Search messaging
- Industry list (6 areas)
- CTAs to Job finden + Coaching
- Shared contact form (Vorname, Nachname, Firma, Position, Telefon, E-Mail, Nachricht, CV optional)
- No testimonials, no numeric stats beyond the 60% claim
- Visual: stock photography + brand graphics (Group-911x assets)

### `/fur-bewerber/`

- Candidate value proposition: beraten, coachen, connecten — unverbindlich
- Links to Coaching and Job finden
- Contact form with CV upload

### `/fur-kunden/`

- Business value proposition: Fach- und Führungskräfte via network
- “Aktuelle Top-Kandidaten” section listing 3 CPT candidates — **all Lorem Ipsum placeholders**
- Contact form

### `/kontakt/`

- Full address, phone +48, email
- Contact form

### `/job-finden/`

- Filter UI: Einsatzort / Bereich / Vertragstyp
- Taxonomy options currently: Austria, Niemcy | Finanse, Konsultant | Na stałe, Umowa śmieciowa (mixed DE/PL labels)
- 13 published `job-angebote` entries — **all placeholder titles/content (Job1, lorem)**
- **Do not present these as real vacancies**

### `/coaching/`

- Intro + free initial consultation mention
- Three priced modules:
  - Zielsetzung — €299
  - Bewerbungs-Check — €399
  - Interviewtraining — €449
- Contact form

### `/impressum/`

- TMG §5 company details, liability disclaimer, copyright — keep editable via CMS

### `/datechutz/` (Datenschutz)

- Full DSGVO-style privacy policy
- Hosting disclosure (WEBD.pl)
- reCAPTCHA section present
- Applicant data / Bewerber-Pool retention rules (6 months / 2 years pool)
- **Preserve content; flag for legal review**

---

## 5. Functionality inventory

| Feature | Status on current site | New platform plan |
|---------|------------------------|-------------------|
| Multi-page corporate site | Yes | Redesign + CMS |
| Contact forms + CV upload | Yes (Elementor) | Supabase inquiries + private storage |
| Job listing + filters | Yes (CPT + taxonomies) | Jobs module; empty/demo until real jobs |
| Public candidate cards | Yes (placeholder) | Optional anonymized “Talent” CMS; no fake people |
| Coaching packages + prices | Yes | CMS-managed coaching offerings |
| Blog | Spam posts only | Omit until real content |
| Multilingual | German only | DE default, EN-ready i18n |
| Analytics / cookies | Privacy text mentions tools | Consent manager + first-party events |
| Admin CRM | None | New `/admin` platform |

---

## 6. Design observations

- Elementor sections, heavy stock photos, teal/blue accents (`#00a99d`, `#03AFF0`, `#1d4354`)
- Logo gradient cyan → indigo/purple
- Responsive menu plugin present
- Visual quality is generic WP — redesign target is premium German corporate

### Brand palette decision (post-logo inspection)

Keep navy/ivory corporate base from the master spec, but replace champagne-gold-as-primary accent with **logo cyan/indigo** accents for authenticity:

- Midnight navy `#0B1B2B`
- Deep charcoal `#07131E`
- Warm ivory `#F7F4EE`
- Brand cyan `#03AFF0`
- Brand indigo `#5B3FD6`
- Text `#172536` / muted `#66717D`

---

## 7. SEO / indexation

- robots.txt allows crawl; disallows `/wp-admin/`
- Sitemap includes pages, posts, jobs, candidates, taxonomies, users
- Mixed Polish/German URL and taxonomy labels hurt SEO clarity
- Broken HTTPS hurts trust and ranking
- Spam posts risk SEO damage — exclude from new sitemap

---

## 8. Failures & limitations

| Issue | Handling |
|-------|----------|
| HTTPS certificate mismatch | Documented; crawl used HTTP |
| WebFetch tool 500 on HTTPS | Bypassed via HTTP/Python |
| WP menus API requires auth | Nav reconstructed from HTML |
| Job/candidate CPTs are placeholders | Not migrated as real content |
| Contact form backend not inspected end-to-end | Reimplemented with new inquiry pipeline |
| No verified social profiles found in crawl | Leave empty until confirmed |
| Physical office hours / map | Not published — omit until confirmed |

---

## 9. Assets preserved

Downloaded to `docs/research/assets/` (24 media files) including logo `Unbenannttt.jpg`, brand illustrations `Group-9117/9118/9119`, page banners, and stock photography used on the current site.

Raw HTML snapshots: `docs/research/pages/*.html`  
API dumps: `docs/research/wp-*.json`
