import { PageHero } from '@/components/website/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { customerCopy, industries } from '@/data/site'

export function CustomersPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Für Kunden"
        title={customerCopy.hero}
        description={customerCopy.body}
        primaryCta={{ href: '/kontakt', label: 'Anfrage senden' }}
        secondaryCta={{ href: '/leistungen', label: 'Leistungen' }}
        image="/brand/business.jpg"
        imageAlt="Zusammenarbeit mit Unternehmen"
      />

      <section className="py-20 md:py-24">
        <div className="container-abone grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] bg-mist p-8">
            <span className="section-label">Herausforderungen</span>
            <h2 className="mt-5 font-display text-3xl font-bold text-ink">Was Unternehmen bewegt</h2>
            <ul className="mt-6 space-y-4 text-muted">
              <li>Fachkräftemangel in kritischen Rollen</li>
              <li>Zeitdruck bei offenen Vakanzen</li>
              <li>Bedarf an internationalem Talent</li>
              <li>Qualität vor Quantität in der Vorauswahl</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-lime p-8 text-ink">
            <span className="section-label bg-ink/10 text-ink/70">Ansatz</span>
            <h2 className="mt-5 font-display text-3xl font-bold">So arbeiten wir</h2>
            <ol className="mt-6 space-y-4 text-ink/75">
              <li>1. Briefing und Anforderungsprofil</li>
              <li>2. Netzwerk- und Direktansprache</li>
              <li>3. Qualifizierung und Präsentation</li>
              <li>4. Begleitung bis zur Besetzung</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-abone">
          <h2 className="font-display text-3xl font-extrabold text-ink">Branchenschwerpunkte</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] bg-white px-4 py-5 text-center font-display font-semibold text-ink shadow-card"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-abone grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">Anfrage</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold text-ink">Geschäftsanfrage</h2>
            <p className="mt-4 text-muted">
              Schildern Sie Ihre Vakanz — wir melden uns mit dem nächsten Schritt.
            </p>
          </div>
          <ContactForm type="business" sourcePage="/fur-kunden" ctaLabel="Anfrage senden" />
        </div>
      </section>
    </div>
  )
}
