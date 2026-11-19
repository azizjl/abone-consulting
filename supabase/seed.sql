insert into public.roles (key, name) values
  ('owner', 'Owner'),
  ('administrator', 'Administrator'),
  ('recruiter', 'Recruiter'),
  ('sales', 'Sales / Business Manager'),
  ('content_editor', 'Content Editor')
on conflict (key) do nothing;

insert into public.recruitment_stages (name, key, sort_order, is_terminal) values
  ('Neu', 'new', 1, false),
  ('Kontakt ausstehend', 'contact_pending', 2, false),
  ('Kontaktiert', 'contacted', 3, false),
  ('Screening', 'screening', 4, false),
  ('Qualifiziert', 'qualified', 5, false),
  ('Interview', 'interview', 6, false),
  ('Beim Kunden vorgestellt', 'presented', 7, false),
  ('Angebot', 'offer', 8, false),
  ('Eingestellt', 'hired', 9, true),
  ('Abgelehnt', 'rejected', 10, true),
  ('Archiviert', 'archived', 11, true)
on conflict (key) do nothing;

insert into public.industries (title, slug, published, sort_order) values
  ('IT', 'it', true, 1),
  ('HR', 'hr', true, 2),
  ('Marketing', 'marketing', true, 3),
  ('Finance & Accounting', 'finance-accounting', true, 4),
  ('Facility Management', 'facility-management', true, 5),
  ('HealthCare', 'healthcare', true, 6)
on conflict (slug) do nothing;

insert into public.coaching_modules (title, slug, price_cents, features, published, sort_order) values
  (
    'Zielsetzung',
    'zielsetzung',
    29900,
    '["Klare (Neu-)Definition Ihrer Berufsziele","Vorbereitung auf Elevator-Pitch","Individuelle Interview-Vorbereitung"]'::jsonb,
    true,
    1
  ),
  (
    'Bewerbungs-Check',
    'bewerbungs-check',
    39900,
    '["Prüfung von Unterlagen und Zeugnissen","Neukonzeption inkl. XING/LinkedIn"]'::jsonb,
    true,
    2
  ),
  (
    'Interviewtraining',
    'interviewtraining',
    44900,
    '["Interview-Simulation","Gehaltsverhandlung","Optimierte Selbstdarstellung"]'::jsonb,
    true,
    3
  )
on conflict (slug) do nothing;

insert into public.page_redirects (from_path, to_path, status_code) values
  ('/datechutz', '/datenschutz', 301),
  ('/datechutz/', '/datenschutz', 301)
on conflict (from_path) do nothing;

insert into public.site_settings (key, value) values
  (
    'company',
    '{
      "name": "Aboné Consulting",
      "legalName": "Aboné Consulting F.H.U. Janusz Kopec",
      "director": "Janusz Kopec",
      "email": "info@abone-consulting.eu",
      "phonePl": "+48 603 811 279",
      "phoneDe": "+49 176 84648096",
      "address": {
        "street": "ul. Rynek 11",
        "city": "47-200 Kędzierzyn-Koźle",
        "country": "Polen"
      },
      "nip": "749-150-46-23"
    }'::jsonb
  )
on conflict (key) do update set value = excluded.value;
