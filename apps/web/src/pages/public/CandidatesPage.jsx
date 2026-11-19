import { PageHero } from '@/components/website/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { ArrowCta } from '@/components/website/ArrowCta'
import { candidateCopy } from '@/data/site'

export function CandidatesPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Für Bewerber"
        title={candidateCopy.hero}
        description={candidateCopy.body}
        primaryCta={{ href: '/job-finden', label: 'Job finden' }}
        secondaryCta={{ href: '/coaching', label: 'Coaching entdecken' }}
        image="/brand/candidates.jpg"
        imageAlt="Bewerber und Karriereplanung"
      />

      <section className="bg-mist py-20 md:py-24">
        <div className="container-abone grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Beraten',
              text: 'Wir hören zu, verstehen Ihre Ziele und entwickeln eine realistische Karriererichtung.',
            },
            {
              title: 'Coachen',
              text: 'Von Unterlagen bis Interview — wir stärken Ihre Wirkung am Markt.',
            },
            {
              title: 'Connecten',
              text: 'Über unser Netzwerk bringen wir Sie mit passenden Unternehmen zusammen.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] bg-white p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-abone flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink px-8 py-10 text-white md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">Perfekte Grundlage für Ihre Zukunft</h2>
            <p className="mt-2 text-white/65">
              Nutzen Sie unsere Coachingangebote — unverbindliches Erstgespräch möglich.
            </p>
          </div>
          <ArrowCta to="/coaching">Zu den Coachingmodulen</ArrowCta>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24">
        <div className="container-abone grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">Kontakt</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold text-ink">
              Jetzt Kontakt aufnehmen
            </h2>
            <p className="mt-4 text-muted">
              Erzählen Sie uns von Ihrem Profil — optional mit CV. Wir melden uns persönlich.
            </p>
          </div>
          <ContactForm
            type="candidate"
            sourcePage="/fur-bewerber"
            showCompany={false}
            ctaLabel="Bewerbung senden"
          />
        </div>
      </section>
    </div>
  )
}
