import { PageHero } from '@/components/website/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { company } from '@/data/site'

export function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Kontakt"
        title="Sprechen Sie mit Aboné Consulting"
        description="Ob Unternehmensanfrage, Bewerbung oder Coaching — wir sind persönlich erreichbar."
        image="/brand/office.jpg"
        imageAlt="Kontakt zu Aboné Consulting"
      />

      <section className="py-20">
        <div className="container-abone grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-navy">Kontaktdaten</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink">
              <p className="font-semibold">{company.legalName}</p>
              <p>
                {company.address.street}
                <br />
                {company.address.city}
                <br />
                {company.address.country}
              </p>
              <p>
                Telefon:{' '}
                <a className="underline" href={`tel:${company.phonePl.replace(/\s/g, '')}`}>
                  {company.phonePl}
                </a>
              </p>
              <p>
                Mobil DE:{' '}
                <a className="underline" href={`tel:${company.phoneDe.replace(/\s/g, '')}`}>
                  {company.phoneDe}
                </a>
              </p>
              <p>
                E-Mail:{' '}
                <a className="underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
            </div>
          </div>
          <ContactForm type="general" sourcePage="/kontakt" />
        </div>
      </section>
    </div>
  )
}
