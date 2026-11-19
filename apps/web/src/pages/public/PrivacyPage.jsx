import { PageHero } from '@/components/website/PageHero'
import { company } from '@/data/site'

export function PrivacyPage() {
  return (
    <div>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="py-16">
        <div className="container-abone prose-abone max-w-3xl space-y-8 text-sm leading-relaxed text-ink">
          <p className="rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-warning">
            Dieser Text basiert auf der bestehenden Website und ist vor produktivem Einsatz
            durch eine Fachperson zu prüfen.
          </p>

          <section>
            <h2 className="text-lg font-bold text-navy">1. Datenschutz auf einen Blick</h2>
            <p className="mt-3 text-muted">
              Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">Verantwortliche Stelle</h2>
            <p className="mt-3">
              {company.name}
              <br />
              Geschäftsführer: {company.director}
              <br />
              {company.address.street}
              <br />
              {company.address.city}, {company.address.country}
              <br />
              E-Mail: {company.email}
              <br />
              Telefon: {company.phonePl}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">Kontaktformulare & Bewerbungen</h2>
            <p className="mt-3 text-muted">
              Wenn Sie uns über Formulare kontaktieren oder bewerben, verarbeiten wir die von
              Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage bzw. Bewerbung.
              Rechtsgrundlagen können Art. 6 Abs. 1 lit. a/b DSGVO sowie § 26 BDSG sein.
              Bewerbungsunterlagen werden vertraulich behandelt. Sofern kein
              Beschäftigungsverhältnis zustande kommt, speichern wir Daten in der Regel bis zu
              6 Monate nach Abschluss des Verfahrens, länger nur mit Einwilligung oder bei
              gesetzlichen Aufbewahrungspflichten. Die Aufnahme in einen Bewerber-Pool erfolgt
              ausschließlich mit ausdrücklicher Einwilligung und wird spätestens nach zwei
              Jahren gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">Cookies</h2>
            <p className="mt-3 text-muted">
              Notwendige Cookies sind für den Betrieb der Website erforderlich. Analyse- oder
              Marketing-Cookies setzen wir nur nach Ihrer Einwilligung über den Cookie-Banner.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">Ihre Rechte</h2>
            <p className="mt-3 text-muted">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Erteilte Einwilligungen
              können Sie jederzeit widerrufen. Zudem besteht ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
