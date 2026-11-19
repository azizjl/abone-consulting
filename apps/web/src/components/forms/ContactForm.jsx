import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitInquiry } from '@/services/inquiries'

const empty = {
  firstName: '',
  lastName: '',
  company: '',
  position: '',
  phone: '',
  email: '',
  message: '',
}

export function ContactForm({
  type = 'general',
  sourcePage = '/kontakt',
  showCompany = true,
  ctaLabel = 'Nachricht senden',
}) {
  const [values, setValues] = useState(empty)
  const [consent, setConsent] = useState(false)
  const [file, setFile] = useState(null)
  const [honeypot, setHoneypot] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  function update(field, value) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (honeypot) return
    if (!values.firstName || !values.lastName || !values.email || !values.message) {
      toast.error('Bitte füllen Sie die Pflichtfelder aus.')
      return
    }
    if (!consent) {
      toast.error('Bitte bestätigen Sie die Datenschutzerklärung.')
      return
    }

    setSubmitting(true)
    try {
      await submitInquiry({
        type,
        sourcePage,
        payload: values,
        consent,
        file,
      })
      setDone(true)
      setValues(empty)
      setFile(null)
      setConsent(false)
      toast.success('Vielen Dank — Ihre Nachricht wurde übermittelt.')
    } catch (error) {
      toast.error(error.message || 'Übermittlung fehlgeschlagen.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-[2rem] border border-border bg-white p-8 shadow-card">
        <h3 className="font-display text-2xl font-bold text-ink">Nachricht erhalten</h3>
        <p className="mt-3 text-muted">
          Wir melden uns in Kürze bei Ihnen. Bei dringenden Anfragen erreichen Sie uns
          auch telefonisch.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setDone(false)}>
          Weitere Nachricht senden
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-border bg-white p-6 shadow-card md:p-8"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="firstName">Vorname *</Label>
          <Input
            id="firstName"
            className="mt-1.5"
            value={values.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">Nachname *</Label>
          <Input
            id="lastName"
            className="mt-1.5"
            value={values.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            required
          />
        </div>
        {showCompany ? (
          <div>
            <Label htmlFor="company">Firma</Label>
            <Input
              id="company"
              className="mt-1.5"
              value={values.company}
              onChange={(e) => update('company', e.target.value)}
            />
          </div>
        ) : null}
        <div>
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            className="mt-1.5"
            value={values.position}
            onChange={(e) => update('position', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            className="mt-1.5"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="email">E-Mail *</Label>
          <Input
            id="email"
            type="email"
            className="mt-1.5"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <Label htmlFor="message">Ihre Nachricht *</Label>
        <Textarea
          id="message"
          className="mt-1.5"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          required
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="cv">CV (optional, PDF/DOC, max. 5 MB)</Label>
        <Input
          id="cv"
          type="file"
          className="mt-1.5"
          accept=".pdf,.doc,.docx,application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </div>

      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label className="mt-5 flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          className="mt-1"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          Ich habe die{' '}
          <Link to="/datenschutz" className="text-navy underline underline-offset-2">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und willige in die Verarbeitung meiner Angaben zur Bearbeitung der
          Anfrage ein. *
        </span>
      </label>

      <Button type="submit" className="mt-6" disabled={submitting}>
        {submitting ? 'Wird gesendet…' : ctaLabel}
      </Button>
    </form>
  )
}
