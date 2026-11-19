import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { isDemoMode } from '@/lib/supabase'

export function AdminListPage({
  title,
  description,
  columns,
  rows,
  search,
  onSearchChange,
  actions,
  emptyLabel = 'Keine Einträge',
}) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-navy">{title}</h1>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {isDemoMode ? <Badge variant="warning">Demo-Daten</Badge> : null}
          {actions}
        </div>
      </div>

      {onSearchChange ? (
        <Input
          placeholder="Filtern…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="max-w-sm bg-white"
        />
      ) : null}

      <div className="overflow-hidden rounded-xl border border-border bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-ivory text-muted">
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 font-semibold">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td className="px-4 py-8 text-muted" colSpan={columns.length}>
                    {emptyLabel}
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className="border-t border-border">
                    {columns.map((col) => (
                      <td key={col.key} className="px-4 py-3 text-ink">
                        {col.render ? col.render(row) : row[col.key]}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function CreateButton({ label = 'Neu anlegen', onClick }) {
  return (
    <Button onClick={onClick} type="button">
      {label}
    </Button>
  )
}
