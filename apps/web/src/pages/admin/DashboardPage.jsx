import { Link } from 'react-router-dom'
import {
  demoCandidates,
  demoCompanies,
  demoInquiries,
  demoJobs,
  demoLeads,
  demoStats,
  demoTasks,
} from '@/data/demo'
import { Badge } from '@/components/ui/badge'
import { isDemoMode } from '@/lib/supabase'

const cards = [
  { label: 'Kandidaten', value: demoStats.candidates, to: '/admin/candidates' },
  { label: 'Offene Stellen', value: demoStats.openJobs, to: '/admin/jobs' },
  { label: 'Neue Anfragen', value: demoStats.newInquiries, to: '/admin/inbox' },
  { label: 'Aktive Leads', value: demoStats.activeLeads, to: '/admin/leads' },
]

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-navy">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">
          Überblick über Recruiting, CRM und Website-Anfragen.
          {isDemoMode ? ' Werte stammen aus Demo-Daten.' : ''}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            to={card.to}
            className="rounded-xl border border-border bg-white p-5 shadow-sm transition hover:shadow-soft"
          >
            <p className="text-sm text-muted">{card.label}</p>
            <p className="mt-2 text-3xl font-extrabold text-navy">{card.value}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="rounded-xl border border-border bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold text-navy">Inbox</h2>
            <Link to="/admin/inbox" className="text-sm text-cyan">
              Alle
            </Link>
          </div>
          <div className="space-y-3">
            {demoInquiries.map((item) => (
              <div key={item.id} className="rounded-lg border border-border px-3 py-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-navy">
                    {item.payload.firstName} {item.payload.lastName}
                  </p>
                  <Badge variant={item.status === 'new' ? 'cyan' : 'outline'}>{item.status}</Badge>
                </div>
                <p className="mt-1 text-xs text-muted">
                  {item.type} · {item.sourcePage}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-border bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold text-navy">Aufgaben</h2>
            <Link to="/admin/tasks" className="text-sm text-cyan">
              Alle
            </Link>
          </div>
          <div className="space-y-3">
            {demoTasks.map((task) => (
              <div key={task.id} className="rounded-lg border border-border px-3 py-3">
                <p className="font-medium text-navy">{task.title}</p>
                <p className="mt-1 text-xs text-muted">
                  {task.status} · fällig {task.dueDate}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <MiniList title="Kandidaten" to="/admin/candidates" items={demoCandidates.map((c) => c.fullName)} />
        <MiniList title="Unternehmen" to="/admin/companies" items={demoCompanies.map((c) => c.name)} />
        <MiniList title="Leads" to="/admin/leads" items={demoLeads.map((l) => l.title)} />
      </div>

      <section className="rounded-xl border border-border bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-navy">Stellen</h2>
          <Link to="/admin/jobs" className="text-sm text-cyan">
            Verwalten
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {demoJobs.map((job) => (
            <div key={job.id} className="rounded-lg border border-border px-3 py-3">
              <p className="font-medium text-navy">{job.title}</p>
              <p className="text-xs text-muted">
                {job.location} · {job.industry}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function MiniList({ title, to, items }) {
  return (
    <section className="rounded-xl border border-border bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-navy">{title}</h2>
        <Link to={to} className="text-sm text-cyan">
          Öffnen
        </Link>
      </div>
      <ul className="space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item} className="rounded-md bg-ivory px-3 py-2 text-ink">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
