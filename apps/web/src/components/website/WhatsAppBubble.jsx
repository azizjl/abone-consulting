import { company } from '@/data/site'
import { useUiStore } from '@/store/ui-store'
import { cn } from '@/lib/utils'

export function WhatsAppBubble() {
  const consent = useUiStore((s) => s.cookieConsent)
  const href = `https://wa.me/${company.whatsappDigits}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${company.whatsapp}`}
      title={`WhatsApp ${company.whatsapp}`}
      className={cn(
        'group fixed right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-soft transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2',
        consent ? 'bottom-5' : 'bottom-36 md:bottom-28',
      )}
    >
      <img
        src="/whatsapp-white-icon.webp"
        alt=""
        aria-hidden="true"
        className="relative h-7 w-7 object-contain"
      />
      <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-1 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition group-hover:translate-x-0 group-hover:opacity-100 md:inline-flex">
        WhatsApp schreiben
      </span>
    </a>
  )
}
