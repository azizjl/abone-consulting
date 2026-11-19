-- ABONE Consulting initial schema
-- Apply with Supabase CLI or SQL editor. Enable RLS on all tables.

create extension if not exists "pgcrypto";

-- Roles
create table if not exists public.roles (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  email text,
  avatar_url text,
  locale text default 'de',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_roles (
  user_id uuid not null references public.profiles (id) on delete cascade,
  role_id uuid not null references public.roles (id) on delete cascade,
  primary key (user_id, role_id)
);

create table if not exists public.role_permissions (
  id uuid primary key default gen_random_uuid(),
  role_id uuid not null references public.roles (id) on delete cascade,
  permission_key text not null,
  unique (role_id, permission_key)
);

create table if not exists public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles (id),
  entity_type text not null,
  entity_id uuid,
  action text not null,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- CMS
create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  seo jsonb default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages (id) on delete cascade,
  type text not null,
  sort_order int not null default 0,
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.page_redirects (
  id uuid primary key default gen_random_uuid(),
  from_path text not null unique,
  to_path text not null,
  status_code int not null default 301
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text,
  body text,
  icon text,
  sort_order int not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.industries (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text,
  body text,
  published boolean not null default true,
  sort_order int not null default 0
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  category text,
  sort_order int not null default 0,
  published boolean not null default false
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  role text,
  company text,
  quote text not null,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.coaching_modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  price_cents int not null,
  currency text not null default 'EUR',
  features jsonb not null default '[]'::jsonb,
  published boolean not null default true,
  sort_order int not null default 0
);

create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  bucket text not null,
  mime text,
  width int,
  height int,
  alt text,
  size_bytes bigint,
  created_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.navigation_items (
  id uuid primary key default gen_random_uuid(),
  location text not null default 'header',
  label text not null,
  href text not null,
  parent_id uuid references public.navigation_items (id),
  sort_order int not null default 0,
  locale text not null default 'de'
);

-- Business CRM
create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  website text,
  address text,
  city text,
  country text default 'Deutschland',
  email text,
  phone text,
  company_size text,
  source text,
  relationship_status text default 'lead',
  notes text,
  assigned_to uuid references public.profiles (id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies (id),
  first_name text not null,
  last_name text not null,
  job_title text,
  email text,
  phone text,
  preferred_contact_method text,
  notes text,
  relationship_status text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create unique index if not exists contacts_email_unique
  on public.contacts (lower(email))
  where email is not null and deleted_at is null;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company_id uuid references public.companies (id),
  contact_id uuid references public.contacts (id),
  stage text not null default 'new',
  priority text default 'medium',
  source text,
  follow_up_at timestamptz,
  notes text,
  assigned_to uuid references public.profiles (id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company_id uuid references public.companies (id),
  contact_id uuid references public.contacts (id),
  expected_value_cents int,
  currency text default 'EUR',
  probability int,
  stage text not null default 'proposal',
  expected_close_date date,
  assigned_to uuid references public.profiles (id),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

-- Recruitment
create table if not exists public.candidates (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  phone text,
  location text,
  professional_title text,
  availability text,
  salary_expectation text,
  source text,
  status text not null default 'new',
  assigned_to uuid references public.profiles (id),
  consent boolean not null default false,
  consent_at timestamptz,
  privacy_notice_version text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create unique index if not exists candidates_email_unique
  on public.candidates (lower(email))
  where email is not null and deleted_at is null;

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text,
  description text,
  responsibilities text,
  requirements jsonb default '[]'::jsonb,
  benefits text,
  location text,
  employment_type text,
  industry text,
  salary_range text,
  company_id uuid references public.companies (id),
  status text not null default 'draft'
    check (status in ('draft', 'published', 'paused', 'closed', 'archived')),
  closing_date date,
  seo jsonb default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.recruitment_stages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  key text not null unique,
  sort_order int not null default 0,
  is_terminal boolean not null default false
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references public.candidates (id),
  job_id uuid references public.jobs (id),
  company_id uuid references public.companies (id),
  stage_id uuid references public.recruitment_stages (id),
  status text not null default 'active',
  source text,
  notes text,
  assigned_to uuid references public.profiles (id),
  applied_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.application_stage_history (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null references public.applications (id) on delete cascade,
  from_stage_id uuid references public.recruitment_stages (id),
  to_stage_id uuid references public.recruitment_stages (id),
  changed_by uuid references public.profiles (id),
  created_at timestamptz not null default now()
);

create table if not exists public.placements (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid references public.candidates (id),
  company_id uuid references public.companies (id),
  job_id uuid references public.jobs (id),
  placement_date date,
  status text not null default 'pending',
  recruiter_id uuid references public.profiles (id),
  fee_cents int,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.candidate_documents (
  id uuid primary key default gen_random_uuid(),
  candidate_id uuid not null references public.candidates (id) on delete cascade,
  storage_path text not null,
  file_name text,
  mime text,
  uploaded_by uuid references public.profiles (id),
  created_at timestamptz not null default now()
);

-- Operations
create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  due_date date,
  priority text default 'medium',
  status text not null default 'todo',
  assigned_to uuid references public.profiles (id),
  related_candidate_id uuid references public.candidates (id),
  related_company_id uuid references public.companies (id),
  related_lead_id uuid references public.leads (id),
  related_application_id uuid references public.applications (id),
  related_job_id uuid references public.jobs (id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.calendar_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  event_type text,
  related_entity_type text,
  related_entity_id uuid,
  created_by uuid references public.profiles (id),
  created_at timestamptz not null default now()
);

create table if not exists public.communications (
  id uuid primary key default gen_random_uuid(),
  related_entity_type text not null,
  related_entity_id uuid,
  type text not null,
  subject text,
  content text,
  direction text,
  author_id uuid references public.profiles (id),
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  type text not null,
  title text not null,
  body text,
  link text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

-- Inquiries
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  type text not null,
  source_page text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'new',
  consent boolean not null default false,
  consent_at timestamptz,
  privacy_notice_version text,
  attachment_path text,
  assigned_to uuid references public.profiles (id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inquiry_history (
  id uuid primary key default gen_random_uuid(),
  inquiry_id uuid not null references public.inquiries (id) on delete cascade,
  status text not null,
  note text,
  actor_id uuid references public.profiles (id),
  created_at timestamptz not null default now()
);

create table if not exists public.automation_rules (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  trigger text not null,
  conditions jsonb default '{}'::jsonb,
  actions jsonb default '[]'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.automation_executions (
  id uuid primary key default gen_random_uuid(),
  rule_id uuid references public.automation_rules (id),
  status text not null,
  error text,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.email_templates (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  subject text not null,
  body text not null,
  locale text not null default 'de',
  updated_at timestamptz not null default now()
);

create table if not exists public.email_logs (
  id uuid primary key default gen_random_uuid(),
  template_key text,
  to_email text,
  status text not null,
  provider_message_id text,
  error text,
  created_at timestamptz not null default now()
);

create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  path text,
  meta jsonb default '{}'::jsonb,
  session_id text,
  created_at timestamptz not null default now()
);

-- Helper: authenticated staff check
create or replace function public.is_staff()
returns boolean
language sql
stable
as $$
  select auth.uid() is not null
    and exists (
      select 1
      from public.user_roles ur
      join public.profiles p on p.id = ur.user_id
      where ur.user_id = auth.uid() and p.is_active = true
    );
$$;

-- RLS
alter table public.profiles enable row level security;
alter table public.pages enable row level security;
alter table public.jobs enable row level security;
alter table public.inquiries enable row level security;
alter table public.candidates enable row level security;
alter table public.companies enable row level security;
alter table public.contacts enable row level security;
alter table public.leads enable row level security;
alter table public.applications enable row level security;
alter table public.coaching_modules enable row level security;
alter table public.industries enable row level security;
alter table public.services enable row level security;
alter table public.site_settings enable row level security;

create policy "Public read published pages"
  on public.pages for select
  using (status = 'published' and deleted_at is null);

create policy "Staff manage pages"
  on public.pages for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Public read published jobs"
  on public.jobs for select
  using (status = 'published' and deleted_at is null);

create policy "Staff manage jobs"
  on public.jobs for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Public insert inquiries"
  on public.inquiries for insert
  with check (true);

create policy "Staff read inquiries"
  on public.inquiries for select
  using (public.is_staff());

create policy "Staff update inquiries"
  on public.inquiries for update
  using (public.is_staff());

create policy "Staff manage candidates"
  on public.candidates for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Staff manage companies"
  on public.companies for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Staff manage contacts"
  on public.contacts for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Staff manage leads"
  on public.leads for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Staff manage applications"
  on public.applications for all
  using (public.is_staff())
  with check (public.is_staff());

create policy "Public read coaching modules"
  on public.coaching_modules for select
  using (published = true);

create policy "Public read industries"
  on public.industries for select
  using (published = true);

create policy "Public read published services"
  on public.services for select
  using (published = true);

create policy "Public read site settings"
  on public.site_settings for select
  using (true);
