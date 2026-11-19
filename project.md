# ABONE CONSULTING — ULTIMATE MASTER PROJECT SPECIFICATION
## Complete Website Redesign + Recruitment CRM + CMS + Business Management Platform

You are acting as an elite multidisciplinary development team consisting of:

- Senior React.js developer
- Senior JavaScript architect
- Senior UI/UX and brand designer
- Recruitment CRM product architect
- Supabase database architect
- Security engineer
- SEO specialist
- Performance engineer
- QA engineer

Your responsibility is to design, architect and build a complete production-ready digital platform for ABONE Consulting, a German personnel placement and recruitment consultancy.

This is not a simple website redesign.

You are building a complete business platform that combines:

1. A premium public-facing corporate website.
2. A complete recruitment and applicant management CRM.
3. A business customer and lead management CRM.
4. A powerful website CMS.
5. Job and application management.
6. Business analytics and reporting.
7. Automation and communication workflows.
8. A secure administrative dashboard.

The finished product must be visually outstanding, highly functional, maintainable, secure and ready for real business operations.

Do not deliver a static prototype or a dashboard full of fake buttons.

Every implemented feature must work.

---

# 1. BUSINESS CONTEXT

Company: ABONE Consulting

Official website:
https://abone-consulting.eu/

Market: Germany.

Primary language: German.

Secondary language: English-ready.

Business focus: Personnel placement, recruitment and consulting.

The company's website must communicate its services, business areas, approach and value to potential customers and candidates.

The main commercial goal is to attract companies that need qualified personnel and convert them into business customers.

The platform must also support the candidate-facing experience.

## Client requirements

Paulina wants:

- A clear overview of services.
- A professional presentation of business areas.
- A more attractive and credible website.
- A clear explanation of what ABONE Consulting does.
- A better overall user experience.

The candidates section may not be the immediate priority, but existing candidate pages and functionality must be preserved.

Do not invent business facts.

All company information, services, industry specializations, testimonials, statistics, legal information and contact details must come from verified sources or be marked for confirmation.

---

# 2. TECHNOLOGY STACK — STRICT REQUIREMENTS

Use this stack:

### Frontend

- React.js
- Vite
- JavaScript ES6+
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React
- React Router
- GSAP
- GSAP ScrollTrigger
- Zustand
- TanStack Query
- React Hook Form
- Zod

### Backend

- Supabase
- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Supabase Edge Functions
- Supabase Realtime where appropriate

### Additional libraries

Use libraries only when they provide real value.

Potential libraries:

- Recharts for analytics.
- dnd-kit for drag-and-drop pipelines and ordering.
- date-fns for dates.
- Sonner for notifications.
- Tiptap for rich text editing.
- React Email or an equivalent for email templates.
- Playwright for browser testing.

### Restrictions

- JavaScript only.
- Absolutely no TypeScript.
- No .ts or .tsx files.
- No Next.js.
- No unnecessary backend server.
- No separate database.
- No unnecessary microservices.
- No fake functionality.
- No frontend-only security.
- No unnecessary dependencies.

Use npm unless the existing environment requires another package manager.

---

# 3. MONOREPO ARCHITECTURE

Create a well-organized monorepo.

Recommended structure:

abone-consulting/
│
├── apps/
│   └── web/
│       ├── public/
│       ├── src/
│       │   ├── app/
│       │   ├── assets/
│       │   ├── components/
│       │   │   ├── ui/
│       │   │   ├── layout/
│       │   │   ├── navigation/
│       │   │   ├── website/
│       │   │   ├── dashboard/
│       │   │   ├── forms/
│       │   │   ├── crm/
│       │   │   └── shared/
│       │   ├── features/
│       │   │   ├── auth/
│       │   │   ├── cms/
│       │   │   ├── jobs/
│       │   │   ├── candidates/
│       │   │   ├── applications/
│       │   │   ├── companies/
│       │   │   ├── contacts/
│       │   │   ├── leads/
│       │   │   ├── recruitment/
│       │   │   ├── tasks/
│       │   │   ├── communications/
│       │   │   ├── analytics/
│       │   │   └── settings/
│       │   ├── pages/
│       │   │   ├── public/
│       │   │   └── admin/
│       │   ├── hooks/
│       │   ├── lib/
│       │   ├── services/
│       │   ├── store/
│       │   ├── locales/
│       │   ├── styles/
│       │   ├── App.jsx
│       │   └── main.jsx
│       └── index.html
│
├── packages/
│   └── shared/
│       ├── constants/
│       ├── schemas/
│       └── utils/
│
├── supabase/
│   ├── migrations/
│   ├── functions/
│   ├── templates/
│   └── seed.sql
│
├── docs/
│   ├── WEBSITE_AUDIT.md
│   ├── CONTENT_INVENTORY.md
│   ├── ROUTE_MAP.md
│   ├── DESIGN_SYSTEM.md
│   ├── DATABASE.md
│   ├── SECURITY.md
│   ├── CRM_WORKFLOW.md
│   ├── DEPLOYMENT.md
│   └── IMPLEMENTATION.md
│
├── .env.example
├── package.json
└── README.md

## Application routing

Use one Vite React application with two completely separated experiences:

- Public website: `/`
- Administrative application: `/admin/*`

Use React Router.

The dashboard must have its own layout, navigation, authentication protection and design system.

The public website must never display dashboard navigation.

The admin interface must never inherit the public website layout.

Use lazy loading and code splitting between public and admin sections.

Keep the architecture modular.

---

# 4. PHASE ONE — COMPLETE WEBSITE RESEARCH AND CRAWLING

Before implementation, perform a comprehensive audit of the current website.

Start with:

https://abone-consulting.eu/
https://abone-consulting.eu/fur-bewerber/
https://abone-consulting.eu/fur-kunden/
https://abone-consulting.eu/kontakt/
https://abone-consulting.eu/job-finden/
https://abone-consulting.eu/coaching/

Do not stop at these URLs.

## Crawl the entire website

Use Playwright or an available browser automation tool.

If browser automation is not installed, inspect available tools and set up an appropriate solution.

Discover:

- All internal pages.
- All navigation links.
- Dropdown menus.
- Footer links.
- Sitemap.xml.
- Robots.txt.
- Existing WordPress pages, if applicable.
- Legal pages.
- Blog or resource pages.
- Job-related pages.
- Contact pages.
- Additional landing pages.

Stay within the official domain when crawling internal pages.

Record external destinations separately.

## Inspect every page

Collect:

- URL.
- Page title.
- Headings.
- Full visible text.
- Images.
- Image URLs.
- Alt text.
- Buttons.
- Links.
- Forms.
- Form fields.
- Contact details.
- Social media links.
- Page structure.
- SEO title and description.
- Canonical URLs.
- Existing functionality.

Inspect desktop and mobile layouts.

Take screenshots of the original website.

## Asset collection

Download and organize reusable original assets when legally and technically appropriate.

Preserve:

- Original ABONE logo.
- Existing brand images.
- Relevant business photography.
- Icons.
- Fonts.
- Existing visual assets.

Do not use assets from third-party websites without appropriate usage rights.

## Crawl failure handling

If a page returns an error:

- Retry.
- Try URL variants.
- Check sitemap references.
- Check indexed content.
- Record the failure.
- Continue researching other pages.

Do not invent missing information.

## Documentation

Generate:

docs/WEBSITE_AUDIT.md
docs/CONTENT_INVENTORY.md
docs/ROUTE_MAP.md

The route map must show every original URL and its new equivalent.

Preserve existing URLs wherever possible.

Implement redirects when URLs must change.

---

# 5. BRAND AND DESIGN SYSTEM

Create a premium, recognizable German corporate identity.

The website should look like an established recruitment consultancy with an international-quality digital presence.

## Visual direction

Primary palette:

- Midnight navy: #0B1B2B
- Deep charcoal: #07131E
- Warm ivory: #F7F4EE
- Champagne gold: #D7B477
- Muted gold: #B99560
- Main text: #172536
- Secondary text: #66717D
- White: #FFFFFF

Adjust the palette after inspecting the existing logo.

## Design principles

- Premium editorial layout.
- Strong typography.
- Beautiful photography.
- Intentional whitespace.
- High contrast.
- Asymmetric composition.
- Refined cards.
- Clear CTAs.
- Elegant section transitions.
- Strong visual hierarchy.

Avoid:

- Generic AI website layouts.
- Excessive rounded cards.
- Excessive gradients.
- Random stock imagery.
- Excessive glassmorphism.
- Overly complicated animations.
- Repetitive section structures.

## Typography

Use Manrope, Inter or another appropriate modern font.

Create consistent font scales for headings, paragraphs, labels and UI elements.

## Responsive design

Test:

- 1440px desktop.
- 1280px laptop.
- 768px tablet.
- 390px mobile.
- 360px small mobile.

Design mobile layouts intentionally.

---

# 6. PUBLIC WEBSITE — COMPLETE PAGE SYSTEM

Preserve every discovered existing page.

The following routes are mandatory:

## Homepage `/`

Sections:

1. Premium header.
2. Hero.
3. Trust indicators where verified.
4. About ABONE introduction.
5. Services overview.
6. Industry specializations.
7. Why choose ABONE.
8. Recruitment approach.
9. Recruitment process.
10. Testimonials if verified.
11. Business CTA.
12. Contact section.
13. Comprehensive footer.

The homepage must immediately answer:

- What does ABONE do?
- Who does ABONE help?
- What services are available?
- Why should a company get in touch?

## `/fur-bewerber/`

Candidate-focused page.

Preserve original content and functionality.

Improve:

- Candidate introduction.
- Benefits.
- Recruitment process.
- Candidate guidance.
- Relevant opportunities.
- FAQ.
- Application CTA.

## `/fur-kunden/`

Business customer page.

This is a major conversion page.

Include:

- Business-focused hero.
- Personnel challenges.
- ABONE services.
- Benefits.
- Verified industries.
- Recruitment methodology.
- Cooperation process.
- FAQ.
- Business inquiry form.

## `/kontakt/`

Include:

- Verified contact information.
- Contact details.
- Inquiry form.
- Company address when confirmed.
- Map when appropriate.
- Privacy information.
- Clear confirmation states.

## `/job-finden/`

Preserve the current job discovery experience.

If existing vacancies exist, migrate their verified content.

Provide:

- Search.
- Location filtering.
- Category filtering.
- Employment type filtering.
- Job cards.
- Job detail pages.
- Application CTA.
- Empty states.

## `/coaching/`

Preserve original coaching content.

Provide a professional presentation of verified coaching services, audience, process, benefits, FAQ and inquiry form.

## Additional pages

Discover and preserve all other existing routes.

Potential new pages:

- `/leistungen/`
- `/branchen/`
- `/ueber-uns/`
- `/impressum/`
- `/datenschutz/`

Only publish pages containing appropriate and verified information.

## Global features

- Desktop navigation.
- Mobile navigation.
- Dropdown navigation.
- Sticky header.
- Language selector.
- Contact CTA.
- Breadcrumbs where appropriate.
- Footer.
- Cookie settings.
- Back-to-top interaction where appropriate.

---

# 7. ADMIN DASHBOARD DESIGN

Build a complete premium administrative interface using shadcn/ui.

Route: `/admin`

Design it like a professional SaaS platform.

## Dashboard shell

Include:

- Collapsible sidebar.
- Top navigation.
- Breadcrumbs.
- Global search.
- Notification center.
- User profile menu.
- Theme toggle.
- Responsive navigation.
- Command menu.
- Page title and contextual actions.

Sidebar sections:

**Overview**
- Dashboard

**Recruitment**
- Candidates
- Applications
- Jobs
- Recruitment pipeline
- Placements

**Business CRM**
- Companies
- Contacts
- Leads
- Deals / Opportunities

**Communication**
- Inbox
- Tasks
- Calendar
- Activity

**Website**
- Pages
- Services
- Industries
- Blog / Resources, if used
- Testimonials
- FAQs
- Navigation
- Media library

**Reports**
- Analytics
- Recruitment reports
- Business reports

**Administration**
- Team members
- Roles and permissions
- Settings
- Audit logs

Use real database information throughout.

---

# 8. AUTHENTICATION AND TEAM MANAGEMENT

Implement Supabase Auth.

Features:

- Login.
- Logout.
- Password recovery.
- Session persistence.
- Protected routes.
- User profile.
- Admin authorization.

## Team roles

Implement role-based access control.

Suggested roles:

**Owner**
- Full access.
- Manage users.
- Manage permissions.
- Manage settings.
- Access all records.

**Administrator**
- Manage website.
- Manage CRM.
- Manage jobs and candidates.
- Manage reports.

**Recruiter**
- Manage candidates.
- Manage applications.
- Manage assigned jobs.
- Manage recruitment tasks.

**Sales / Business Manager**
- Manage companies.
- Manage contacts.
- Manage leads.
- Manage business opportunities.

**Content Editor**
- Manage public website content.
- Manage pages and media.
- No access to private recruitment records.

Create configurable permissions where appropriate.

Implement authorization in Supabase RLS and secure backend operations, not only in React.

---

# 9. RECRUITMENT CRM

This is a core component.

Build a proper recruitment management system.

## 9.1 Candidate management

Create a candidate database.

Candidate fields:

- Full name.
- Email.
- Phone.
- Location.
- Professional title.
- Skills.
- Work experience.
- Education.
- Languages.
- Employment preferences.
- Availability.
- Salary expectations, when voluntarily provided.
- CV attachment.
- Other documents.
- Source.
- Internal notes.
- Assigned recruiter.
- Recruitment status.
- Consent status.
- Created date.
- Updated date.

Allow:

- Create candidate.
- Edit candidate.
- Archive candidate.
- Search candidates.
- Filter candidates.
- Sort candidates.
- View complete candidate profile.
- Upload CV.
- Attach documents.
- Add notes.
- View activity history.
- Assign recruiter.
- Track applications.

CVs and private documents must be stored in private Supabase Storage buckets.

Use signed URLs for authorized access.

Never expose private candidate information through public queries.

## 9.2 Candidate profile

Create a detailed candidate workspace.

Tabs:

- Overview.
- Personal information.
- Professional experience.
- Skills.
- Education.
- Languages.
- Documents.
- Applications.
- Notes.
- Tasks.
- Communication history.
- Activity timeline.

Display important information in a clean, readable layout.

## 9.3 Recruitment pipeline

Create a visual Kanban recruitment pipeline.

Suggested stages:

1. New.
2. Contact pending.
3. Contacted.
4. Screening.
5. Qualified.
6. Interview.
7. Presented to client.
8. Offer.
9. Hired.
10. Rejected.
11. Archived.

These stages must be configurable.

Features:

- Drag and drop.
- Stage transitions.
- Candidate cards.
- Job association.
- Recruiter assignment.
- Filters.
- Search.
- Activity tracking.
- Stage transition history.

Record who changed a candidate's stage and when.

## 9.4 Applications management

Track applications independently from candidate records.

An application should connect:

- Candidate.
- Job.
- Company.
- Assigned recruiter.
- Current stage.
- Application date.
- Status.
- Notes.

A candidate may have multiple applications.

Application stages should be configurable per workflow where practical.

## 9.5 Job management

Create a complete job management system.

Fields:

- Job title.
- Slug.
- Description.
- Responsibilities.
- Requirements.
- Benefits.
- Location.
- Employment type.
- Salary range.
- Experience requirements.
- Required skills.
- Company.
- Publication status.
- Closing date.
- Application method.
- SEO metadata.

Statuses:

- Draft.
- Published.
- Paused.
- Closed.
- Archived.

Features:

- Create.
- Edit.
- Duplicate.
- Publish.
- Unpublish.
- Archive.
- Preview.
- Manage applications.
- View job performance.

Never invent vacancies.

## 9.6 Recruitment placement tracking

Create a placements section.

Track:

- Candidate.
- Company.
- Job.
- Placement date.
- Status.
- Recruiter.
- Notes.
- Optional agreed fee, if the business wants to record it.

Allow management of:

- Successful placements.
- Pending placements.
- Failed placements.
- Replacement or guarantee periods, only if applicable and verified.

Include reporting on recruitment outcomes.

---

# 10. BUSINESS CRM

Build a separate business CRM.

The purpose is to manage potential and existing company clients.

## 10.1 Companies

Company records:

- Company name.
- Industry.
- Website.
- Address.
- City.
- Country.
- Company email.
- Company phone.
- Company size, if known.
- Source.
- Relationship status.
- Internal notes.
- Assigned manager.
- Created date.

Company profile tabs:

- Overview.
- Contacts.
- Leads.
- Opportunities.
- Jobs.
- Inquiries.
- Notes.
- Tasks.
- Activity.

## 10.2 Contacts

A company can have multiple contacts.

Fields:

- First name.
- Last name.
- Job title.
- Email.
- Phone.
- Company.
- Preferred contact method.
- Notes.
- Relationship status.

Prevent accidental duplicate contacts.

## 10.3 Lead management

Build a lead pipeline.

Suggested stages:

1. New lead.
2. Attempted contact.
3. Contacted.
4. Interested.
5. Meeting scheduled.
6. Proposal sent.
7. Negotiation.
8. Won.
9. Lost.

Features:

- Kanban.
- List view.
- Lead details.
- Assignment.
- Follow-up date.
- Priority.
- Source.
- Internal notes.
- Activity timeline.
- Stage history.

## 10.4 Opportunities and deals

Track business opportunities.

Fields:

- Opportunity name.
- Company.
- Contact.
- Expected value, if provided.
- Probability.
- Stage.
- Expected closing date.
- Assigned manager.
- Notes.

Provide revenue forecasting only when meaningful financial data is available.

Do not present estimated values as actual revenue.

## 10.5 Business inquiry conversion

A public business inquiry should be convertible into:

- A company.
- A contact.
- A lead.
- An opportunity.
- A recruitment project.

Avoid duplicate records.

Provide a clear conversion workflow.

---

# 11. TASK MANAGEMENT AND CALENDAR

Create a centralized task system.

Task fields:

- Title.
- Description.
- Due date.
- Priority.
- Status.
- Assigned user.
- Related candidate.
- Related company.
- Related lead.
- Related application.
- Related job.

Statuses:

- To do.
- In progress.
- Waiting.
- Completed.
- Cancelled.

Features:

- Task list.
- Kanban.
- Calendar view.
- Overdue indicators.
- Priority filters.
- Assigned-to filters.
- Task reminders.
- Quick task creation.
- Related-record links.

Calendar should display:

- Interviews.
- Meetings.
- Follow-ups.
- Deadlines.
- Tasks.

Build the internal calendar first.

External Google Calendar integration can be added through an optional integration setting, never assumed to exist.

---

# 12. COMMUNICATION CENTER

Create a communication history for candidates, companies and contacts.

Track:

- Emails.
- Phone calls.
- Meetings.
- Internal notes.
- Other interactions.

Each communication record should include:

- Related entity.
- Type.
- Subject.
- Content or summary.
- Date.
- Author.
- Direction, when applicable.

## Email functionality

Create an email module with:

- Email templates.
- Reusable signatures.
- Personalized variables.
- Candidate communication templates.
- Business inquiry responses.
- Interview invitations.
- Follow-up templates.

Use a transactional email provider through a secure server-side integration.

Keep provider credentials outside the browser.

Do not claim that an email was sent if delivery failed.

Track delivery results where supported.

Avoid creating a fake inbox. If full Gmail/IMAP synchronization is not configured, show an honest communication history and sending interface.

---

# 13. AUTOMATIONS AND WORKFLOWS

Create an automation system for repetitive business tasks.

Initial automation rules:

**New business inquiry**
- Save inquiry.
- Notify administrators.
- Create a follow-up task if configured.
- Show the inquiry in the CRM.

**New candidate submission**
- Save candidate information.
- Record consent.
- Notify the recruitment team.
- Create a candidate record or application according to the selected form.

**New application**
- Link candidate and job.
- Create application record.
- Notify the assigned recruiter.
- Record source.

**Lead follow-up**
- Create reminder.
- Notify assigned manager.

**Interview scheduled**
- Add calendar event.
- Notify relevant users.

**Candidate status changed**
- Record activity.
- Notify assigned recruiter if configured.

**Job published**
- Update public job listing.
- Regenerate or update sitemap data where appropriate.

Build automation rules with:

- Trigger.
- Conditions.
- Actions.
- Active/inactive state.
- Execution history.
- Error reporting.

Start with a safe set of predefined workflows.

Do not create an overly complicated visual automation builder unless the simpler rule system is fully functional.

---

# 14. CRM INBOX AND PUBLIC INQUIRIES

Create one central inbox for all incoming website interactions.

Sources:

- General contact.
- Business inquiry.
- Candidate inquiry.
- Job application.
- Coaching inquiry.
- Other existing website forms.

Features:

- All inquiries.
- Unread.
- New.
- Assigned.
- In progress.
- Completed.
- Archived.

Filters:

- Type.
- Status.
- Date.
- Assigned user.
- Source.

Inquiry details:

- Submitted data.
- Message.
- Date.
- Consent.
- Source page.
- Status history.
- Internal notes.
- Conversion actions.

Provide CSV export.

Use appropriate access restrictions.

---

# 15. WEBSITE CMS

Build a real content management system.

## Page builder

Create a reusable section-based page editor.

Administrators should be able to:

- Create pages.
- Edit pages.
- Save drafts.
- Preview pages.
- Publish pages.
- Unpublish pages.
- Schedule publication if supported.
- Change page metadata.
- Manage slugs.
- Configure navigation visibility.
- Reorder sections.

## Supported page sections

Build reusable blocks:

- Hero.
- Text and image.
- Image gallery.
- Services grid.
- Industries grid.
- Statistics.
- Benefits.
- Process steps.
- Testimonials.
- FAQ.
- CTA.
- Contact form.
- Job listings.
- Rich text.
- Logo strip.

Each section should support configuration appropriate to its purpose.

Do not build an unnecessarily complicated drag-and-drop website builder.

Provide a practical section editor with live preview.

## Additional CMS modules

- Services.
- Industries.
- FAQs.
- Testimonials.
- Navigation.
- Footer.
- Blog or resources if present on the original website.
- SEO.
- Redirect management.

---

# 16. MEDIA LIBRARY

Create a professional media manager.

Features:

- Upload.
- Preview.
- Search.
- Filter.
- Delete.
- Copy URL.
- Image metadata.
- Alt text.
- File size.
- Dimensions.
- File type.
- Usage reference where practical.

Use Supabase Storage.

Use image optimization.

Separate public website assets from private candidate documents.

Never make private candidate files publicly accessible.

---

# 17. ANALYTICS AND REPORTING

Create a dashboard overview with meaningful KPIs.

### Website analytics

- Page views.
- Top pages.
- Traffic sources.
- Contact form submissions.
- Business inquiries.
- Job applications.
- Conversion rates.

Use a privacy-conscious analytics provider or first-party event collection with appropriate consent.

Do not fabricate visitor data.

### Recruitment analytics

- Total candidates.
- New candidates.
- Active applications.
- Interviews.
- Successful placements.
- Applications per job.
- Candidate pipeline distribution.
- Average time in recruitment stages.

### Business CRM analytics

- New leads.
- Leads by source.
- Leads by stage.
- Won and lost opportunities.
- Conversion rate.
- Outstanding follow-ups.
- Active companies.
- New business inquiries.

### Reports

Provide date filters:

- Today.
- Last 7 days.
- Last 30 days.
- Last 90 days.
- Custom period.

Support CSV exports.

Clearly distinguish actual results from forecasts.

---

# 18. SEARCH AND GLOBAL COMMAND CENTER

Implement global search inside the dashboard.

Search across:

- Candidates.
- Companies.
- Contacts.
- Leads.
- Jobs.
- Applications.
- Tasks.
- Inquiries.

Provide:

- Keyboard shortcut.
- Search suggestions.
- Grouped results.
- Direct navigation.
- Recent searches where appropriate.

Use a command menu for quick actions:

- Create candidate.
- Create company.
- Create lead.
- Create job.
- Create task.
- Add inquiry.
- Open settings.

---

# 19. DATABASE ARCHITECTURE

Use Supabase PostgreSQL.

Create proper SQL migrations.

Recommended tables:

## Authentication and administration

- profiles
- user_roles
- role_permissions
- activity_logs

## CMS

- pages
- page_revisions
- page_redirects
- navigation_items
- services
- industries
- faqs
- testimonials
- media
- site_settings
- blog_posts, if needed

## Recruitment

- candidates
- candidate_experiences
- candidate_education
- candidate_skills
- candidate_languages
- candidate_documents
- jobs
- applications
- application_stage_history
- recruitment_stages
- placements

## Business CRM

- companies
- contacts
- leads
- lead_stage_history
- opportunities

## Operations

- tasks
- task_comments
- calendar_events
- communications
- notes
- notifications

## Inquiries

- inquiries
- inquiry_history

## Automation

- automation_rules
- automation_executions
- email_templates
- email_logs

## Analytics

- analytics_events, if using first-party analytics.

Use appropriate:

- UUID primary keys.
- Foreign keys.
- Indexes.
- Unique constraints.
- Timestamps.
- Soft deletion where appropriate.
- Audit history.

Use JSONB only when flexible structured data is genuinely beneficial.

Avoid putting the entire application into one giant JSONB table.

Document all relationships.

---

# 20. SECURITY AND DATA PROTECTION

This system handles personal data and potentially sensitive recruitment documents.

Security is critical.

Implement:

- Supabase RLS.
- Role-based authorization.
- Secure session management.
- Private candidate document storage.
- Signed URLs.
- Server-side validation.
- Input sanitization.
- Rate limiting.
- Spam protection.
- File type validation.
- File size restrictions.
- Secure secrets management.
- Audit logging.

Never expose:

- Service role keys.
- Email provider secrets.
- Private documents.
- Unauthorized candidate information.

Public website access must be restricted to published public content.

Public users must not be able to query private CRM records.

## GDPR workflows

Implement:

- Candidate consent tracking.
- Privacy notice version.
- Consent timestamp.
- Data source.
- Retention policy.
- Data export workflow.
- Deletion/anonymization workflow.
- Communication preference management.
- Document access control.

Make retention periods configurable and subject to legal review.

Do not assume that a candidate's consent is valid indefinitely or for every purpose.

Add an administrator workflow to handle data deletion and access requests.

Avoid collecting unnecessary sensitive personal information.

Flag GDPR and German legal matters for professional review.

---

# 21. EMAIL AND NOTIFICATION SYSTEM

Create a notification center.

Notification types:

- New inquiry.
- New application.
- New candidate.
- Task assigned.
- Task overdue.
- Interview upcoming.
- Lead follow-up.
- Job application update.
- Automation failure.

Features:

- Read/unread.
- Mark all as read.
- Direct links to related records.
- Notification preferences.

Use Supabase Realtime where it improves the experience.

Email notifications should be configurable by administrators.

---

# 22. JOB APPLICATION EXPERIENCE

Create a professional public application flow.

A candidate should be able to:

1. Browse available jobs.
2. Open a job detail page.
3. Click apply.
4. Complete an application form.
5. Upload a CV.
6. Provide contact information.
7. Confirm the privacy notice.
8. Submit.

After submission:

- Save the candidate record or link to an existing candidate.
- Create an application.
- Associate the job.
- Record the application source.
- Notify the recruitment team.
- Display a confirmation page.

Prevent accidental duplicate submissions.

Protect uploads.

Validate all fields.

If the existing website has a different application workflow, preserve it and improve it instead of replacing it blindly.

A full candidate login portal is optional and must only be introduced if the existing business process supports it or Paulina approves it.

---

# 23. SEO AND GERMAN MARKET OPTIMIZATION

Implement:

- SEO titles.
- Meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- XML sitemap.
- robots.txt.
- Breadcrumbs.
- Structured data.
- Organization schema.
- JobPosting schema for genuine vacancies.
- Semantic HTML.
- Image alt text.
- Internal links.
- German URL structures.
- Redirect management.

Target relevant German search intent around verified ABONE services.

Do not stuff keywords.

For Vite, implement a suitable SEO delivery strategy such as prerendering important public pages.

Ensure the public pages can be indexed correctly.

---

# 24. LEGAL AND PRIVACY FEATURES

German market requirements must be treated seriously.

Implement editable:

- Impressum.
- Datenschutzerklärung.
- Cookie settings.
- Privacy notices on forms.

Build a cookie consent manager with:

- Necessary cookies.
- Analytics cookies.
- Marketing cookies if applicable.
- Granular consent.
- Change preferences.
- Revoke consent.

Block non-essential tracking before consent.

Do not claim legal compliance merely because a cookie banner exists.

Do not invent company legal details.

Use verified information and flag all legal content for professional review.

---

# 25. INTERNATIONALIZATION

German is the default language.

Prepare English support.

Implement translation dictionaries and language-aware content.

Support:

- Navigation translations.
- Page translations.
- CMS translations.
- Form translations.
- Email templates.
- SEO metadata.

The admin dashboard should be capable of managing translated content.

Do not mix German and English accidentally.

---

# 26. OPTIONAL INTEGRATIONS

Design an integration architecture that can grow.

Potential future integrations:

- Google Calendar.
- Gmail.
- Microsoft Outlook.
- Transactional email provider.
- WhatsApp Business.
- Google Analytics or privacy-conscious alternatives.
- Google Maps.
- External job platforms.

Do not claim an integration is active unless it is configured and tested.

Provide integration settings with clear connected/disconnected states.

Use secure OAuth or provider-supported authentication when appropriate.

Do not build fake synchronization.

---

# 27. AI-ASSISTED FEATURES — OPTIONAL

Prepare the architecture for future AI functionality, but do not make it a dependency.

Potential features:

- Candidate profile summarization.
- CV text extraction.
- Candidate-job matching suggestions.
- Job description drafting.
- Email drafting.
- Lead summaries.
- Inquiry categorization.

Important:

- AI output must be clearly identified.
- Recruiters must make all hiring decisions.
- Never automatically reject or rank candidates as a final hiring decision.
- Never infer protected personal attributes.
- Never send private candidate data to an AI provider without an appropriate lawful basis and explicit configuration.
- Keep AI integrations disabled until credentials and privacy requirements are configured.

---

# 28. DASHBOARD USER EXPERIENCE

The dashboard must be usable by non-technical staff.

Important requirements:

- Consistent layouts.
- Clear page titles.
- Contextual actions.
- Searchable tables.
- Sorting.
- Filtering.
- Pagination.
- Bulk actions.
- Form validation.
- Confirmation dialogs.
- Toast notifications.
- Skeleton loaders.
- Empty states.
- Error states.
- Responsive tables.
- Keyboard accessibility.

Use shadcn/ui components consistently.

Use dialogs for small actions and dedicated pages for complex editing.

Avoid huge forms with dozens of unrelated fields.

Use tabs and logical sections for complex records.

Persist appropriate table filters and user preferences.

---

# 29. PRODUCTION DEPLOYMENT

Prepare the project for deployment.

Main domain:

https://abone-consulting.eu/

Dashboard:

https://abone-consulting.eu/admin

Requirements:

- Production Vite build.
- SPA fallback configuration.
- Correct asset paths.
- HTTPS.
- Environment variable documentation.
- Supabase migrations.
- Supabase production configuration.
- Storage policies.
- Email provider configuration.
- SEO files.
- Redirect configuration.
- Deployment documentation.

Prepare for deployment to an Nginx-based VPS.

Include:

- Nginx configuration example.
- Build commands.
- Deployment commands.
- Environment setup.
- Rollback guidance.
- Database migration instructions.

Never commit production secrets.

---

# 30. TESTING AND QUALITY ASSURANCE

Use Playwright for browser-level tests.

Test public website:

- All routes.
- Navigation.
- Mobile menu.
- Forms.
- Job search.
- Application flow.
- Language switching.
- Cookie consent.
- Page metadata.

Test dashboard:

- Authentication.
- Permissions.
- Candidate CRUD.
- Company CRUD.
- Lead CRUD.
- Job CRUD.
- Applications.
- Recruitment pipeline.
- Task management.
- CMS.
- Media uploads.
- Inquiries.
- Reports.

Test security:

- Unauthorized routes.
- RLS restrictions.
- Private file access.
- Invalid form data.
- Upload restrictions.
- Cross-user data isolation.

Run production build.

Fix errors and warnings.

Do not leave placeholder buttons or broken interactions.

---

# 31. IMPLEMENTATION ORDER

Execute in this order.

### PHASE 1 — Research

- Inspect workspace.
- Crawl website.
- Discover pages.
- Download appropriate assets.
- Document original functionality.
- Create route inventory.

### PHASE 2 — Architecture

- Create Vite project.
- Configure Tailwind.
- Configure shadcn/ui.
- Install dependencies.
- Set up routing.
- Set up Supabase.
- Establish shared components.

### PHASE 3 — Design system

- Brand identity.
- Typography.
- Colors.
- Buttons.
- Inputs.
- Cards.
- Navigation.
- Dashboard shell.
- Responsive rules.

### PHASE 4 — Public website

Implement all original routes and enhanced pages.

### PHASE 5 — Database and security

Create migrations, RLS, authentication, roles and storage.

### PHASE 6 — CMS

Implement pages, sections, services, industries, FAQs, testimonials, media and settings.

### PHASE 7 — Business CRM

Implement companies, contacts, leads, opportunities and inquiries.

### PHASE 8 — Recruitment CRM

Implement candidates, jobs, applications, pipelines and placements.

### PHASE 9 — Operations

Implement tasks, calendar, communications, notifications and automation.

### PHASE 10 — Analytics

Implement meaningful reporting.

### PHASE 11 — Integrations

Implement configured email and optional external services.

### PHASE 12 — Testing and deployment

Test, optimize, document and prepare production deployment.

---

# 32. PROJECT EXECUTION RULES

These rules are mandatory.

1. Do not stop after writing documentation.
2. Do not stop after creating the homepage.
3. Do not create a static dashboard.
4. Do not create decorative buttons.
5. Do not hardcode CRM data.
6. Do not invent company information.
7. Do not invent testimonials.
8. Do not invent job listings.
9. Do not invent analytics.
10. Do not expose private candidate data.
11. Do not bypass RLS.
12. Do not use TypeScript.
13. Do not remove original routes without a proper replacement.
14. Do not break existing SEO URLs.
15. Do not create unnecessary complexity.
16. Do not add features that have no practical business value.
17. Use reusable components and maintainable code.
18. Use realistic demo data only in demo mode.
19. Clearly document missing environment configuration.
20. Test every important workflow.

If a task is too large to complete in one execution session, maintain a detailed implementation checklist and continue systematically. Never mark incomplete functionality as complete.

---

# 33. DEFINITION OF DONE

The project is complete only when:

**Website**
- All original pages are preserved.
- All important existing content is migrated.
- The redesign is consistent and premium.
- Every public page is responsive.
- Forms work.
- SEO is implemented.

**CMS**
- Pages can be edited.
- Content can be published.
- Services can be managed.
- Industries can be managed.
- Media can be uploaded.
- Settings can be changed.

**Business CRM**
- Companies can be managed.
- Contacts can be managed.
- Leads can be tracked.
- Opportunities can be managed.
- Inquiries can be converted into CRM records.

**Recruitment CRM**
- Candidates can be managed.
- Jobs can be managed.
- Applications can be tracked.
- Pipelines work.
- Placements can be recorded.
- Private documents are secure.

**Operations**
- Tasks work.
- Calendar works.
- Notifications work.
- Communication history works.
- Configured automations work.

**Security**
- Supabase RLS is implemented.
- Admin access is protected.
- Candidate data is private.
- Storage is secure.
- Sensitive keys are protected.

**Production**
- Build succeeds.
- No critical console errors.
- Deployment configuration exists.
- Documentation is complete.

---

# 34. FIRST ACTION

Inspect the current project directory.

Then start the original website crawl.

Create the audit documentation.

Establish the application architecture.

Begin implementing the actual project.

Use professional judgment and make reasonable technical decisions without asking unnecessary questions.

When company-specific information is missing, document it and make it configurable through the CMS.

When an integration is not configured, provide a clear setup requirement rather than pretending it works.

Build this as a real product that ABONE Consulting can use to manage its website, customers, candidates, recruitment operations and business inquiries.

**Your objective is to deliver a complete, premium, production-ready ABONE Consulting digital platform. Start now.**