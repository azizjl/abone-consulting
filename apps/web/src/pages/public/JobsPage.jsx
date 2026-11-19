import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/website/PageHero'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { listJobs } from '@/services/jobs'
import { industries } from '@/data/site'
import { isDemoMode } from '@/lib/supabase'

export function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [q, setQ] = useState('')
  const [location, setLocation] = useState('all')
  const [industry, setIndustry] = useState('all')
  const [employmentType, setEmploymentType] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    listJobs({ q, location, industry, employmentType }).then((data) => {
      if (active) {
        setJobs(data)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [q, location, industry, employmentType])

  const locations = useMemo(
    () => ['all', 'Deutschland', 'Österreich', 'Remote'],
    [],
  )

  return (
    <div>
      <PageHero
        eyebrow="Job finden"
        title="Aktuelle Stellenangebote"
        description="Durchsuchen Sie veröffentlichte Positionen nach Ort, Bereich und Vertragstyp."
        image="/brand/candidates.jpg"
        imageAlt="Stellensuche"
      />

      <section className="py-16">
        <div className="container-abone">
          {isDemoMode ? (
            <div className="mb-6 rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm text-navy">
              Demo-Modus: Es werden gekennzeichnete Beispielstellen angezeigt. Echte
              Vakanzen erscheinen nach Veröffentlichung im Admin-CMS. Placeholder-Jobs der
              alten WordPress-Seite wurden nicht übernommen.
            </div>
          ) : null}

          <div className="grid gap-3 rounded-2xl border border-border bg-white p-4 md:grid-cols-4">
            <Input
              placeholder="Suche…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <select
              className="h-11 rounded-md border border-border bg-white px-3 text-sm"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item === 'all' ? 'Alle Einsatzorte' : item}
                </option>
              ))}
            </select>
            <select
              className="h-11 rounded-md border border-border bg-white px-3 text-sm"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="all">Alle Bereiche</option>
              {industries.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              className="h-11 rounded-md border border-border bg-white px-3 text-sm"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <option value="all">Alle Vertragstypen</option>
              <option value="Festanstellung">Festanstellung</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>

          <div className="mt-8 grid gap-4">
            {loading ? (
              <p className="text-muted">Stellen werden geladen…</p>
            ) : jobs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-white p-10 text-center">
                <h2 className="text-xl font-bold text-navy">Keine Stellen gefunden</h2>
                <p className="mt-2 text-muted">
                  Aktuell sind keine passenden veröffentlichten Positionen verfügbar.
                  Senden Sie uns gerne eine Initiativbewerbung.
                </p>
                <Button asChild className="mt-6">
                  <Link to="/fur-bewerber">Initiativ bewerben</Link>
                </Button>
              </div>
            ) : (
              jobs.map((job) => (
                <article
                  key={job.id}
                  className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-soft"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-navy">{job.title}</h2>
                      <p className="mt-2 text-sm text-muted">
                        {job.location} · {job.industry} · {job.employmentType}
                      </p>
                    </div>
                    {job.isDemo ? <Badge variant="warning">Demo</Badge> : null}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{job.summary}</p>
                  <Button asChild variant="outline" className="mt-5">
                    <Link to={`/job-finden/${job.slug}`}>Details & Bewerbung</Link>
                  </Button>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
