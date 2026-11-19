import { PageHero } from '@/components/website/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { coachingCopy, coachingModules } from '@/data/site'
import { formatCurrency } from '@/lib/utils'

export function CoachingPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Coaching"
        title={coachingCopy.hero}
        description={coachingCopy.body}
        primaryCta={{ href: '/kontakt', label: 'Beratungsgespräch anfragen' }}
        image="/brand/coaching.jpg"
        imageAlt="Karriere-Coaching"
      />

      <section className="bg-mist py-20 md:py-24">
        <div className="container-abone">
          <span className="section-label">Module</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink">Coachingmodule</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Klare Pakete mit transparenten Preisen — wie auf der bisherigen Website
            veröffentlicht.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {coachingModules.map((module, index) => (
              <article
                key={module.id}
                className={
                  index === 1
                    ? 'flex flex-col rounded-[2rem] bg-lime p-8 text-ink shadow-card'
                    : 'flex flex-col rounded-[2rem] bg-white p-8 shadow-card'
                }
              >
                <h3 className="font-display text-2xl font-bold">{module.title}</h3>
                <p className="mt-3 font-display text-4xl font-extrabold">
                  {formatCurrency(module.priceCents)}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/70">
                  {module.features.map((feature) => (
                    <li key={feature} className="border-l-2 border-ink/20 pl-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-abone grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">Anfrage</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold text-ink">
              Coaching-Anfrage
            </h2>
            <p className="mt-4 text-muted">
              Nennen Sie gerne das gewünschte Modul — wir planen das weitere Vorgehen mit
              Ihnen.
            </p>
          </div>
          <ContactForm type="coaching" sourcePage="/coaching" ctaLabel="Coaching anfragen" />
        </div>
      </section>
    </div>
  )
}
