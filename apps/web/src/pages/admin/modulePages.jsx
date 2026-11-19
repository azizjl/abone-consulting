import { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCorners,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { AdminListPage, CreateButton } from '@/components/dashboard/AdminListPage'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { coachingModules, industries } from '@/data/site'
import { formatCurrency, cn } from '@/lib/utils'
import { createRecord, loadCrm, upsertRecord } from '@/services/crm-store'

const PIPELINE_STAGES = [
  { id: 'new', label: 'Neu' },
  { id: 'screening', label: 'Screening' },
  { id: 'qualified', label: 'Qualifiziert' },
  { id: 'interview', label: 'Interview' },
]

function PipelineCard({ candidate }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: candidate.id,
    data: { candidate },
  })
  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={cn(
        'cursor-grab rounded-lg border border-border bg-ivory p-3 active:cursor-grabbing',
        isDragging && 'opacity-40',
      )}
    >
      <p className="font-medium text-navy">{candidate.fullName}</p>
      <p className="text-xs text-muted">{candidate.title}</p>
    </div>
  )
}

function PipelineColumn({ stage, candidates }) {
  const { setNodeRef, isOver } = useDroppable({ id: stage.id })
  return (
    <div
      ref={setNodeRef}
      className={cn(
        'rounded-xl border border-border bg-white p-4',
        isOver && 'ring-2 ring-cyan',
      )}
    >
      <h2 className="font-bold text-navy">
        {stage.label}{' '}
        <span className="text-sm font-medium text-muted">({candidates.length})</span>
      </h2>
      <div className="mt-4 min-h-40 space-y-3">
        {candidates.map((candidate) => (
          <PipelineCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  )
}

function PipelineBoard() {
  const { items, refresh } = useCrmCollection('candidates')
  const [activeId, setActiveId] = useState(null)
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }))
  const activeCandidate = items.find((c) => c.id === activeId)

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-navy">Recruiting-Pipeline</h1>
        <p className="mt-1 text-sm text-muted">
          Karten per Drag-and-drop zwischen Stufen verschieben. Änderungen werden im Demo-Store
          gespeichert.
        </p>
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={(event) => setActiveId(event.active.id)}
        onDragEnd={(event) => {
          setActiveId(null)
          const { active, over } = event
          if (!over) return
          const candidate = items.find((c) => c.id === active.id)
          const nextStage = PIPELINE_STAGES.some((s) => s.id === over.id)
            ? over.id
            : items.find((c) => c.id === over.id)?.status
          if (!candidate || !nextStage || candidate.status === nextStage) return
          upsertRecord('candidates', { ...candidate, status: nextStage })
          refresh()
          toast.success(`${candidate.fullName} → ${nextStage}`)
        }}
        onDragCancel={() => setActiveId(null)}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {PIPELINE_STAGES.map((stage) => (
            <PipelineColumn
              key={stage.id}
              stage={stage}
              candidates={items.filter((c) => c.status === stage.id)}
            />
          ))}
        </div>
        <DragOverlay>
          {activeCandidate ? (
            <div className="rounded-lg border border-cyan bg-white p-3 shadow-soft">
              <p className="font-medium text-navy">{activeCandidate.fullName}</p>
              <p className="text-xs text-muted">{activeCandidate.title}</p>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}

function useCrmCollection(collection) {
  const [data, setData] = useState(() => loadCrm())
  const refresh = () => setData(loadCrm())
  useEffect(() => {
    refresh()
  }, [])
  return { items: data[collection] || [], refresh, data }
}

function useFilter(items, predicate) {
  const [search, setSearch] = useState('')
  const rows = useMemo(
    () => items.filter((item) => predicate(item, search.toLowerCase())),
    [items, search, predicate],
  )
  return { search, setSearch, rows }
}

export function CandidatesAdminPage() {
  const { items, refresh } = useCrmCollection('candidates')
  const { search, setSearch, rows } = useFilter(items, (item, q) =>
    `${item.fullName} ${item.title || ''} ${item.location || ''}`.toLowerCase().includes(q),
  )
  const [draft, setDraft] = useState(null)

  return (
    <>
      <AdminListPage
        title="Kandidaten"
        description="Recruiting-Datenbank für Profile, Status und Zuordnung."
        search={search}
        onSearchChange={setSearch}
        actions={
          <CreateButton
            label="Kandidat anlegen"
            onClick={() =>
              setDraft({
                fullName: '',
                title: '',
                location: '',
                email: '',
                status: 'new',
              })
            }
          />
        }
        columns={[
          { key: 'fullName', label: 'Name' },
          { key: 'title', label: 'Titel' },
          { key: 'location', label: 'Ort' },
          {
            key: 'status',
            label: 'Status',
            render: (row) => <Badge variant="cyan">{row.status}</Badge>,
          },
        ]}
        rows={rows}
      />
      {draft ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/50 p-4">
          <form
            className="w-full max-w-md space-y-3 rounded-xl bg-white p-6 shadow-soft"
            onSubmit={(e) => {
              e.preventDefault()
              if (!draft.fullName) {
                toast.error('Name ist erforderlich')
                return
              }
              createRecord('candidates', draft)
              refresh()
              setDraft(null)
              toast.success('Kandidat angelegt')
            }}
          >
            <h2 className="text-lg font-bold text-navy">Neuer Kandidat</h2>
            {['fullName', 'title', 'location', 'email'].map((field) => (
              <Input
                key={field}
                placeholder={field}
                value={draft[field]}
                onChange={(e) => setDraft({ ...draft, [field]: e.target.value })}
              />
            ))}
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setDraft(null)}>
                Abbrechen
              </Button>
              <Button type="submit">Speichern</Button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  )
}

export function JobsAdminPage() {
  const { items, refresh } = useCrmCollection('jobs')
  const { search, setSearch, rows } = useFilter(items, (item, q) =>
    `${item.title} ${item.location} ${item.industry}`.toLowerCase().includes(q),
  )
  return (
    <AdminListPage
      title="Stellen"
      description="Veröffentlichen Sie nur verifizierte Vakanzen. Placeholder der alten Website wurden nicht migriert."
      search={search}
      onSearchChange={setSearch}
      actions={
        <CreateButton
          label="Stelle anlegen"
          onClick={() => {
            createRecord('jobs', {
              title: 'Neue Stelle',
              slug: `stelle-${Date.now()}`,
              location: 'Deutschland',
              industry: 'IT',
              employmentType: 'Festanstellung',
              status: 'draft',
              summary: 'Entwurf — bitte Inhalte prüfen vor Veröffentlichung.',
              description: '',
              requirements: [],
              isDemo: true,
            })
            refresh()
            toast.success('Stellen-Entwurf angelegt')
          }}
        />
      }
      columns={[
        { key: 'title', label: 'Titel' },
        { key: 'location', label: 'Ort' },
        { key: 'industry', label: 'Bereich' },
        {
          key: 'status',
          label: 'Status',
          render: (row) => <Badge>{row.status}</Badge>,
        },
      ]}
      rows={rows}
    />
  )
}

export function ApplicationsAdminPage() {
  const { data } = useCrmCollection('applications')
  const rows = (data.applications || []).map((app) => {
    const candidate = (data.candidates || []).find((c) => c.id === app.candidateId)
    const job = (data.jobs || []).find((j) => j.id === app.jobId)
    return {
      id: app.id,
      candidate: candidate?.fullName || app.candidateId,
      job: job?.title || app.jobId,
      stage: app.stage,
      source: app.source,
    }
  })
  return (
    <AdminListPage
      title="Bewerbungen"
      description="Verknüpfung von Kandidat, Stelle und Pipeline-Stufe."
      columns={[
        { key: 'candidate', label: 'Kandidat' },
        { key: 'job', label: 'Stelle' },
        { key: 'stage', label: 'Stufe' },
        { key: 'source', label: 'Quelle' },
      ]}
      rows={rows}
    />
  )
}

export function PipelineAdminPage() {
  return <PipelineBoard />
}

export function CompaniesAdminPage() {
  const { items, refresh } = useCrmCollection('companies')
  const { search, setSearch, rows } = useFilter(items, (item, q) =>
    `${item.name} ${item.industry} ${item.city}`.toLowerCase().includes(q),
  )
  return (
    <AdminListPage
      title="Unternehmen"
      description="Business-CRM für Kunden und Interessenten."
      search={search}
      onSearchChange={setSearch}
      actions={
        <CreateButton
          label="Unternehmen anlegen"
          onClick={() => {
            createRecord('companies', {
              name: 'Neues Unternehmen',
              industry: 'IT',
              city: '',
              country: 'Deutschland',
              status: 'lead',
            })
            refresh()
            toast.success('Unternehmen angelegt')
          }}
        />
      }
      columns={[
        { key: 'name', label: 'Unternehmen' },
        { key: 'industry', label: 'Branche' },
        { key: 'city', label: 'Stadt' },
        { key: 'status', label: 'Status' },
      ]}
      rows={rows}
    />
  )
}

export function ContactsAdminPage() {
  const rows = [
    {
      id: 'ct-1',
      name: 'Anna Meier',
      title: 'HR Lead',
      company: 'Nordwerk GmbH',
      email: 'anna.meier@example.com',
    },
  ]
  return (
    <AdminListPage
      title="Kontakte"
      description="Ansprechpartner zu Unternehmen."
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'title', label: 'Position' },
        { key: 'company', label: 'Unternehmen' },
        { key: 'email', label: 'E-Mail' },
      ]}
      rows={rows}
    />
  )
}

export function LeadsAdminPage() {
  const { items } = useCrmCollection('leads')
  return (
    <AdminListPage
      title="Leads"
      description="Lead-Pipeline für Geschäftsanfragen."
      columns={[
        { key: 'title', label: 'Lead' },
        { key: 'stage', label: 'Stufe' },
        { key: 'priority', label: 'Priorität' },
        { key: 'source', label: 'Quelle' },
      ]}
      rows={items}
    />
  )
}

export function InboxAdminPage() {
  const { items } = useCrmCollection('inquiries')
  return (
    <AdminListPage
      title="Inbox"
      description="Zentrale Anfragen aus Kontakt-, Bewerber-, Kunden- und Coaching-Formularen."
      columns={[
        {
          key: 'name',
          label: 'Absender',
          render: (row) => `${row.payload?.firstName || ''} ${row.payload?.lastName || ''}`.trim(),
        },
        { key: 'type', label: 'Typ' },
        { key: 'sourcePage', label: 'Quelle' },
        {
          key: 'status',
          label: 'Status',
          render: (row) => <Badge variant="cyan">{row.status}</Badge>,
        },
      ]}
      rows={items}
    />
  )
}

export function TasksAdminPage() {
  const { items } = useCrmCollection('tasks')
  return (
    <AdminListPage
      title="Aufgaben"
      description="Follow-ups, Screenings und interne To-dos."
      columns={[
        { key: 'title', label: 'Aufgabe' },
        { key: 'status', label: 'Status' },
        { key: 'priority', label: 'Priorität' },
        { key: 'dueDate', label: 'Fällig' },
      ]}
      rows={items}
    />
  )
}

export function CalendarAdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold text-navy">Kalender</h1>
      <p className="text-sm text-muted">
        Interne Termine für Interviews, Meetings und Follow-ups. Externe Kalender-Sync nur
        nach konfigurierter Integration.
      </p>
      <div className="rounded-xl border border-dashed border-border bg-white p-8 text-muted">
        Kalenderansicht wird als Nächstes angebunden. Aktuelle Aufgaben mit Datum finden Sie
        unter Aufgaben.
      </div>
    </div>
  )
}

export function CmsPagesAdminPage() {
  const pages = [
    '/',
    '/fur-bewerber',
    '/fur-kunden',
    '/job-finden',
    '/coaching',
    '/kontakt',
    '/impressum',
    '/datenschutz',
  ]
  return (
    <AdminListPage
      title="Seiten (CMS)"
      description="Öffentliche Routen — Abschnittseditor und Draft/Publish folgen."
      columns={[
        { key: 'path', label: 'Pfad' },
        {
          key: 'status',
          label: 'Status',
          render: () => <Badge variant="success">published</Badge>,
        },
      ]}
      rows={pages.map((path) => ({ id: path, path }))}
    />
  )
}

export function MediaAdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold text-navy">Medienbibliothek</h1>
      <p className="text-sm text-muted">
        Brand-Assets aus dem Website-Crawl. Upload in Supabase Storage folgt nach
        Projektverknüpfung.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          '/brand/logo.svg',
          '/brand/logo-black.png',
          '/brand/logo-white.png',
          '/brand/hero.webp',
          '/brand/coaching.jpg',
          '/brand/business.jpg',
        ].map((src) => (
          <div key={src} className="overflow-hidden rounded-xl border border-border bg-white">
            <img src={src} alt="" className="h-36 w-full object-cover" />
            <p className="truncate px-3 py-2 text-xs text-muted">{src}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SettingsAdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-navy">Einstellungen</h1>
        <p className="mt-1 text-sm text-muted">
          Verifizierte Stammdaten und CMS-Defaults. Integrationen bleiben deaktiviert, bis
          Secrets konfiguriert sind.
        </p>
      </div>
      <section className="rounded-xl border border-border bg-white p-5">
        <h2 className="font-bold text-navy">Unternehmen</h2>
        <p className="mt-2 text-sm text-muted">Branchen: {industries.join(', ')}</p>
        <p className="mt-2 text-sm text-muted">
          Coachingmodule:{' '}
          {coachingModules
            .map((m) => `${m.title} (${formatCurrency(m.priceCents)})`)
            .join(' · ')}
        </p>
      </section>
      <section className="rounded-xl border border-border bg-white p-5">
        <h2 className="font-bold text-navy">Integrationen</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>Supabase Auth/DB — {import.meta.env.VITE_SUPABASE_URL ? 'verbunden' : 'nicht konfiguriert'}</li>
          <li>Transaktionale E-Mail — nicht konfiguriert</li>
          <li>Google Calendar — nicht konfiguriert</li>
        </ul>
      </section>
    </div>
  )
}
