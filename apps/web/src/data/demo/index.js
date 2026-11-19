/** Clearly labeled demo fixtures for when Supabase is not configured. */

export const demoJobs = [
  {
    id: 'demo-job-1',
    title: 'Senior IT Consultant (Demo)',
    slug: 'senior-it-consultant-demo',
    location: 'Deutschland / Remote',
    industry: 'IT',
    employmentType: 'Festanstellung',
    status: 'published',
    isDemo: true,
    summary:
      'Demo-Stelle zur Illustration der Stellensuche. Keine echte Vakanz.',
    description:
      'Dies ist eine Demo-Stellenanzeige. Echte Positionen werden über das Admin-CMS veröffentlicht.',
    requirements: ['Mehrjährige IT-Erfahrung', 'Deutsch und Englisch'],
    publishedAt: '2026-11-01',
  },
  {
    id: 'demo-job-2',
    title: 'Finance Business Partner (Demo)',
    slug: 'finance-business-partner-demo',
    location: 'Österreich',
    industry: 'Finance & Accounting',
    employmentType: 'Festanstellung',
    status: 'published',
    isDemo: true,
    summary: 'Demo-Stelle für Filter und Detailansicht.',
    description:
      'Placeholder-Inhalt für die öffentliche Job-Experience. Nicht bewerben als reale Stelle.',
    requirements: ['Finance-Hintergrund', 'Analytische Stärken'],
    publishedAt: '2026-11-05',
  },
]

export const demoInquiries = [
  {
    id: 'inq-1',
    type: 'business',
    status: 'new',
    sourcePage: '/fur-kunden',
    createdAt: '2026-11-18T09:12:00Z',
    payload: {
      firstName: 'Anna',
      lastName: 'Meier',
      company: 'Nordwerk GmbH',
      position: 'HR Lead',
      email: 'anna.meier@example.com',
      phone: '+49 170 0000000',
      message: 'Wir suchen Verstärkung im IT-Bereich.',
    },
  },
  {
    id: 'inq-2',
    type: 'candidate',
    status: 'in_progress',
    sourcePage: '/fur-bewerber',
    createdAt: '2026-11-17T14:40:00Z',
    payload: {
      firstName: 'Tomasz',
      lastName: 'Kowalski',
      company: '',
      position: 'Software Engineer',
      email: 'tomasz@example.com',
      phone: '+48 600 000000',
      message: 'Interesse an Positionen in DE/AT.',
    },
  },
]

export const demoCandidates = [
  {
    id: 'cand-1',
    fullName: 'Demo Kandidat A',
    email: 'kandidat.a@example.com',
    phone: '+49 171 1111111',
    location: 'Berlin',
    title: 'IT Project Manager',
    status: 'screening',
    skills: ['IT', 'PMO', 'Deutsch', 'Englisch'],
    isDemo: true,
  },
  {
    id: 'cand-2',
    fullName: 'Demo Kandidatin B',
    email: 'kandidatin.b@example.com',
    phone: '+49 172 2222222',
    location: 'München',
    title: 'HR Business Partner',
    status: 'qualified',
    skills: ['HR', 'Recruiting', 'Coaching'],
    isDemo: true,
  },
]

export const demoCompanies = [
  {
    id: 'co-1',
    name: 'Nordwerk GmbH',
    industry: 'IT',
    city: 'Hamburg',
    country: 'Deutschland',
    status: 'active',
    isDemo: true,
  },
  {
    id: 'co-2',
    name: 'Alpine Care AG',
    industry: 'HealthCare',
    city: 'Wien',
    country: 'Österreich',
    status: 'lead',
    isDemo: true,
  },
]

export const demoLeads = [
  {
    id: 'lead-1',
    title: 'IT-Teamaufbau Nordwerk',
    companyId: 'co-1',
    stage: 'meeting_scheduled',
    priority: 'high',
    source: 'website',
    isDemo: true,
  },
  {
    id: 'lead-2',
    title: 'HealthCare Fachkräfte Alpine',
    companyId: 'co-2',
    stage: 'interested',
    priority: 'medium',
    source: 'referral',
    isDemo: true,
  },
]

export const demoTasks = [
  {
    id: 'task-1',
    title: 'Rückruf Nordwerk HR',
    status: 'todo',
    priority: 'high',
    dueDate: '2026-11-20',
    relatedType: 'lead',
    relatedId: 'lead-1',
  },
  {
    id: 'task-2',
    title: 'CV Screening Demo Kandidat A',
    status: 'in_progress',
    priority: 'medium',
    dueDate: '2026-11-21',
    relatedType: 'candidate',
    relatedId: 'cand-1',
  },
]

export const demoStats = {
  candidates: 2,
  applications: 3,
  openJobs: 2,
  newInquiries: 1,
  activeLeads: 2,
  placementsThisMonth: 0,
}
