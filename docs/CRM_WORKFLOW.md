# CRM Workflows

## Inquiry intake

1. Public form submit → `inquiries` (+ attachment in private bucket)
2. Automation: notify admins, optional follow-up task
3. Inbox shows unread item with conversion actions

## Business conversion

Inquiry → Company (dedupe by name/domain) → Contact → Lead → Opportunity / Job project

## Candidate intake

1. Job application or general Bewerber form
2. Create/link candidate (email unique)
3. Create application if job selected
4. Store CV privately; record consent
5. Notify assigned recruiter

## Recruitment pipeline stages

New → Contact pending → Contacted → Screening → Qualified → Interview → Presented → Offer → Hired / Rejected / Archived

Stage changes write `application_stage_history` and activity log.

## Lead pipeline stages

New → Attempted contact → Contacted → Interested → Meeting → Proposal → Negotiation → Won / Lost

## Placement

On Hired: optional placement record with company, job, recruiter, date, notes, optional fee.
