/** Verified company content from the live website audit. */

export const company = {
  name: 'Aboné Consulting',
  legalName: 'Aboné Consulting F.H.U. Janusz Kopec',
  director: 'Janusz Kopec',
  tagline: 'Consulting · Coaching · Connecting',
  email: 'info@abone-consulting.eu',
  phoneDe: '+49 176 84648096',
  phonePl: '+48 603 811 279',
  phoneDisplay: '+48 603 811 279',
  whatsapp: '+49 176 70690447',
  whatsappDigits: '4917670690447',
  address: {
    street: 'ul. Rynek 11',
    city: '47-200 Kędzierzyn-Koźle',
    country: 'Polen',
  },
  nip: '749-150-46-23',
  claimInternational:
    'Über 60% unserer Kunden und Kandidaten haben einen internationalen Hintergrund.',
}

export const industries = [
  'IT',
  'HR',
  'Marketing',
  'Finance & Accounting',
  'Facility Management',
  'HealthCare',
]

/** Rich card content for industry UI — titles match verified website industries. */
export const industryCards = [
  {
    title: 'IT',
    slug: 'it',
    icon: 'cpu',
    summary: 'Fach- und Führungskräfte für digitale Produkte, Infrastruktur und Tech-Teams.',
  },
  {
    title: 'HR',
    slug: 'hr',
    icon: 'users',
    summary: 'Personalprofis, die Organisationen aufbauen, entwickeln und zusammenhalten.',
  },
  {
    title: 'Marketing',
    slug: 'marketing',
    icon: 'megaphone',
    summary: 'Talente für Markenaufbau, Growth, Kommunikation und Customer Experience.',
  },
  {
    title: 'Finance & Accounting',
    slug: 'finance-accounting',
    icon: 'calculator',
    summary: 'Experten für Controlling, Accounting, Finance Business Partnering und Reporting.',
  },
  {
    title: 'Facility Management',
    slug: 'facility-management',
    icon: 'building',
    summary: 'Spezialisten für Betrieb, Infrastruktur und effiziente Immobilienprozesse.',
  },
  {
    title: 'HealthCare',
    slug: 'healthcare',
    icon: 'heartPulse',
    summary: 'Qualifizierte Profile für Gesundheitswesen, Care und medizinnahe Organisationen.',
  },
]

export const coachingModules = [
  {
    id: 'zielsetzung',
    title: 'Zielsetzung',
    priceCents: 29900,
    features: [
      'Klare (Neu-)Definition Ihrer Berufsziele',
      'Vorbereitung auf Elevator-Pitch und präzise Skill-Kommunikation',
      'Individuelle Vorbereitung auf ein kommendes Vorstellungsgespräch',
    ],
  },
  {
    id: 'bewerbungs-check',
    title: 'Bewerbungs-Check',
    priceCents: 39900,
    features: [
      'Prüfung Ihrer Bewerbungsunterlagen und Zeugnisse',
      'Neukonzeption und Anpassung Ihrer Unterlagen inkl. XING und LinkedIn',
    ],
  },
  {
    id: 'interviewtraining',
    title: 'Interviewtraining',
    priceCents: 44900,
    features: [
      'Interview-Simulation: Auftreten, heikle Fragen, Gehaltsverhandlung',
      'Optimierung Ihrer Selbstdarstellung im Bewerbungsgespräch',
    ],
  },
]

export const navItems = [
  { label: 'Für Bewerber', href: '/fur-bewerber' },
  { label: 'Für Kunden', href: '/fur-kunden' },
  { label: 'Job finden', href: '/job-finden' },
  { label: 'Coaching', href: '/coaching' },
  { label: 'Kontakt', href: '/kontakt' },
]

export const aboutCopy = {
  intro:
    'Aboné ist Ihr Personalberater und Ansprechpartner rund um Consulting, Karriereberatung, Coaching und European-Recruiting. Neben klassischen Recruiting-Tools setzen wir auf unser nationales und internationales Netzwerk sowie die Direktansprache — für die besten Talente und Jobs von morgen.',
  approach:
    'Wir pflegen unser Netzwerk seit Jahren und arbeiten auf Augenhöhe. Bei uns geht es nicht nur um Consulting — wir setzen auf Coaching und Connecting, um aus Kandidaten das Beste hervorzubringen und Kunden die Talente von morgen zu bieten.',
  sustainability:
    'Wir arbeiten effizient und nachhaltig. Langfristige Connections sind der Schlüssel zum Erfolg. Zuerst erkennen wir die Bedürfnisse von Kandidaten und Kunden, dann beraten wir gezielt und ermöglichen Weiterentwicklung auf beiden Seiten.',
  network:
    'Der entscheidende Erfolgsfaktor unserer Personalgewinnung ist die Kombination aus internationalem Netzwerk und lokaler Marktkenntnis. Fachkräftemangel in Deutschland ist für uns kein Fremdwort — hier kommt unser internationales Netzwerk zum Tragen.',
}

export const candidateCopy = {
  hero: 'Dank Aboné profitieren Sie von dem Netzwerk unseres Vertrauens.',
  body: 'Wir beraten, coachen und connecten Sie zuverlässig, kompatibel und komplett unverbindlich. Wir perfektionieren nicht nur Ihre Bewerbung, sondern helfen Ihnen bei Ihrer persönlichen Karriereplanung. Vom ersten Moment an sind wir Ihr nachhaltiger Partner für Personalberatung und die Vermittlung von Fach- und Führungskräften.',
}

export const customerCopy = {
  hero: 'Bei Aboné bieten wir Ihnen die besten Talente von morgen.',
  body: 'Mit dem Zugriff auf unser ständig qualitativ wachsendes Netzwerk können wir Ihrem Unternehmen ein optimales Angebot an Fach- und Führungskräften bieten. Durch die ständige Pflege der Beziehung zu unseren Kandidaten wissen wir stets, wer aktuell für Ihre Vakanz geeignet ist. Jeder unserer Berater ist auf ein spezielles Berufsfeld fokussiert und kann Ihre Vakanz zeitnah besetzen.',
}

export const coachingCopy = {
  hero: 'Wir schaffen die perfekte Grundlage für Ihre berufliche Zukunft.',
  body: 'Das Coachingangebot von Aboné unterstützt Sie von Fragen zu Bewerbungsunterlagen über die Vorbereitung auf Bewerbungsgespräche bis hin zur Umorientierung oder neuen Karriereplanung. Wir gehen auf Ihre individuelle Situation ein. Für ein konkretes Coaching führen wir gerne vorab ein unverbindliches Beratungsgespräch.',
}
