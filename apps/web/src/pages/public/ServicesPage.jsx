import { Link } from 'react-router-dom'
import { PageHero } from '@/components/website/PageHero'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Personalberatung & Recruiting',
    text: 'Besetzung von Fach- und Führungsrollen über Netzwerk und Direktansprache.',
    href: '/fur-kunden',
  },
  {
    title: 'European Recruiting',
    text: 'Internationales Netzwerk kombiniert mit lokaler Marktkenntnis.',
    href: '/fur-kunden',
  },
  {
    title: 'Karriereberatung für Bewerber',
    text: 'Unverbindliche Begleitung bei Bewerbung, Orientierung und Vermittlung.',
    href: '/fur-bewerber',
  },
  {
    title: 'Coaching',
    text: 'Zielsetzung, Bewerbungs-Check und Interviewtraining mit klaren Modulen.',
    href: '/coaching',
  },
]

export function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Leistungen"
        title="Was Aboné Consulting für Sie tut"
        description="Consulting, Coaching und Connecting — für Unternehmen und Talente."
      />
      <section className="py-20">
        <div className="container-abone grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-border bg-white p-7">
              <h2 className="text-xl font-bold text-navy">{service.title}</h2>
              <p className="mt-3 text-sm text-muted">{service.text}</p>
              <Button asChild variant="outline" className="mt-6">
                <Link to={service.href}>Mehr erfahren</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
