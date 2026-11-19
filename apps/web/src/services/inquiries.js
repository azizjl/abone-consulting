import { isDemoMode, isSupabaseConfigured, supabase } from '@/lib/supabase'
import { loadCrm, saveCrm } from '@/services/crm-store'

const MEMORY_KEY = 'abone-demo-inquiries'

function readLocal() {
  try {
    return JSON.parse(localStorage.getItem(MEMORY_KEY) || '[]')
  } catch {
    return []
  }
}

function writeLocal(items) {
  localStorage.setItem(MEMORY_KEY, JSON.stringify(items))
}

export async function submitInquiry({
  type = 'general',
  sourcePage = '/',
  payload,
  consent = false,
  file = null,
}) {
  if (!consent) {
    throw new Error('Bitte bestätigen Sie die Datenschutzerklärung.')
  }

  const record = {
    id: crypto.randomUUID(),
    type,
    sourcePage,
    payload,
    consent,
    consentAt: new Date().toISOString(),
    privacyNoticeVersion: '2026-11-19',
    status: 'new',
    createdAt: new Date().toISOString(),
    hasAttachment: Boolean(file),
    attachmentName: file?.name || null,
  }

  if (isDemoMode || !isSupabaseConfigured) {
    const items = readLocal()
    items.unshift(record)
    writeLocal(items)
    const crm = loadCrm()
    crm.inquiries = [record, ...(crm.inquiries || [])]
    saveCrm(crm)
    return { ...record, mode: 'demo' }
  }

  const { data, error } = await supabase
    .from('inquiries')
    .insert({
      type,
      source_page: sourcePage,
      payload,
      consent,
      consent_at: record.consentAt,
      privacy_notice_version: record.privacyNoticeVersion,
      status: 'new',
    })
    .select()
    .single()

  if (error) throw error

  if (file) {
    const path = `${data.id}/${file.name}`
    const upload = await supabase.storage
      .from('inquiry-attachments')
      .upload(path, file, { upsert: false })
    if (upload.error) throw upload.error
    await supabase
      .from('inquiries')
      .update({ attachment_path: path })
      .eq('id', data.id)
  }

  return { ...data, mode: 'supabase' }
}

export async function listInquiries() {
  if (isDemoMode || !isSupabaseConfigured) {
    return readLocal()
  }
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}
