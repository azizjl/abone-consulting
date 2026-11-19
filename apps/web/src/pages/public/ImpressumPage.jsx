import { PageHero } from '@/components/website/PageHero'
import { company } from '@/data/site'

export function ImpressumPage() {
  return (
    <div>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="py-16">
        <div className="container-abone max-w-3xl space-y-8 text-sm leading-relaxed text-ink">
          <div>
            <h2 className="text-lg font-bold text-navy">Angaben gem. § 5 TMG</h2>
            <p className="mt-3">
              {company.legalName}
              <br />
              {company.address.street}
              <br />
              {company.address.city}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Kontaktaufnahme</h2>
            <p className="mt-3">
              Telefon: {company.phoneDe}
              <br />
              E-Mail: {company.email}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Umsatzsteuer-ID</h2>
            <p className="mt-3">
              Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:
              <br />
              NIP {company.nip}
            </p>
            <p className="mt-2 text-muted">
              Hinweis: Inhalt aus dem bestehenden Impressum übernommen — vor Go-Live
              rechtlich prüfen lassen.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">Haftungsausschluss</h2>
            <p className="mt-3 text-muted">
              Alle Inhalte wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und
              Aktualität wird keine Gewähr übernommen. Als Diensteanbieter sind wir gemäß § 7
              Abs. 1 TMG für eigene Inhalte verantwortlich. Nach §§ 8 bis 10 TMG besteht keine
              Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu
              überwachen. Bei Bekanntwerden von Rechtsverletzungen entfernen wir betroffene
              Inhalte unverzüglich.
            </p>
            <p className="mt-3 text-muted">
              Für externe Links übernehmen wir keine Haftung für deren Inhalte. Für illegale
              oder fehlerhafte Inhalte haftet der jeweilige Anbieter der verlinkten Seite.
            </p>
            <p className="mt-3 text-muted">
              Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung,
              Bearbeitung und Verbreitung außerhalb der gesetzlichen Grenzen bedürfen der
              schriftlichen Zustimmung des jeweiligen Urhebers.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
