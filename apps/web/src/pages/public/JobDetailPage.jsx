import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageHero } from '@/components/website/PageHero'
import { ContactForm } from '@/components/forms/ContactForm'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getJobBySlug } from '@/services/jobs'

export function JobDetailPage() {
  const { slug } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    getJobBySlug(slug).then((data) => {
      if (active) {
        setJob(data)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [slug])

  if (loading) {
    return <div className="container-abone py-32 text-muted">Stelle wird geladen…</div>
  }

  if (!job) {
    return (
      <div className="container-abone py-32 text-center">
        <h1 className="text-3xl font-bold text-navy">Stelle nicht gefunden</h1>
        <Button asChild className="mt-6">
          <Link to="/job-finden">Zurück zur Übersicht</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <PageHero
        eyebrow="Stellenangebot"
        title={job.title}
        description={`${job.location} · ${job.industry} · ${job.employmentType}`}
      />

      <section className="py-16">
        <div className="container-abone grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            {job.isDemo ? <Badge variant="warning">Demo-Stelle</Badge> : null}
            <p className="mt-4 leading-relaxed text-muted">{job.description}</p>
            {job.requirements?.length ? (
              <>
                <h2 className="mt-8 text-xl font-bold text-navy">Anforderungen</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                  {job.requirements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </article>
          <div>
            <h2 className="text-2xl font-bold text-navy">Jetzt bewerben</h2>
            <p className="mt-2 text-sm text-muted">
              Ihre Unterlagen werden vertraulich behandelt.
            </p>
            <div className="mt-6">
              <ContactForm
                type="application"
                sourcePage={`/job-finden/${job.slug}`}
                showCompany={false}
                ctaLabel="Bewerbung absenden"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
