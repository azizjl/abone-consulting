import {
  demoCandidates,
  demoCompanies,
  demoInquiries,
  demoJobs,
  demoLeads,
  demoTasks,
} from '@/data/demo'

const KEY = 'abone-crm-demo-v1'

function defaults() {
  return {
    candidates: demoCandidates,
    companies: demoCompanies,
    leads: demoLeads,
    jobs: demoJobs,
    inquiries: demoInquiries,
    tasks: demoTasks,
    applications: [
      {
        id: 'app-1',
        candidateId: 'cand-1',
        jobId: 'demo-job-1',
        stage: 'screening',
        source: 'website',
      },
      {
        id: 'app-2',
        candidateId: 'cand-2',
        jobId: 'demo-job-2',
        stage: 'qualified',
        source: 'inbound',
      },
    ],
  }
}

export function loadCrm() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) {
      const data = defaults()
      localStorage.setItem(KEY, JSON.stringify(data))
      return data
    }
    return { ...defaults(), ...JSON.parse(raw) }
  } catch {
    return defaults()
  }
}

export function saveCrm(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
  return data
}

export function upsertRecord(collection, record) {
  const data = loadCrm()
  const list = data[collection] || []
  const idx = list.findIndex((item) => item.id === record.id)
  if (idx >= 0) list[idx] = { ...list[idx], ...record }
  else list.unshift(record)
  data[collection] = list
  return saveCrm(data)
}

export function createRecord(collection, partial) {
  const record = { id: crypto.randomUUID(), ...partial, isDemo: true }
  return upsertRecord(collection, record)
}
