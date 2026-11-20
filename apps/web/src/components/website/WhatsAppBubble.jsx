import { company } from '@/data/site'
import { useUiStore } from '@/store/ui-store'
import { cn } from '@/lib/utils'

export function WhatsAppBubble() {
  const consent = useUiStore((s) => s.cookieConsent)
  const href = `https://wa.me/${company.whatsappDigits}?text=${encodeURIComponent(
    'Hallo Aboné Consulting, ich habe eine Anfrage.',
  )}`

  return (
    <div
      className={cn(
        'fixed right-4 z-[70] md:right-6',
        consent ? 'bottom-4 md:bottom-6' : 'bottom-36 md:bottom-28',
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${company.whatsapp}`}
        className="group relative flex items-center"
      >
        {/* Soft expanding pulse rings */}
        <span
          aria-hidden="true"
          className="whatsapp-ring pointer-events-none absolute right-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-[#25D366]/35 md:h-16 md:w-16"
        />
        <span
          aria-hidden="true"
          className="whatsapp-ring pointer-events-none absolute right-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-[#25D366]/25 [animation-delay:900ms] md:h-16 md:w-16"
        />

        {/* Expandable label (desktop) */}
        <span className="pointer-events-none absolute right-[4.25rem] hidden w-56 origin-right scale-95 items-center gap-2 rounded-lg border border-white/10 bg-ink/95 px-5 py-3 text-left opacity-0 shadow-soft backdrop-blur-md transition duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 md:flex">
          <span className="block w-full">
            <span className="block font-display text-sm font-semibold tracking-tight text-white">
              WhatsApp schreiben
            </span>
            <span className="mt-1 block text-xs text-white/55">
              {company.whatsapp}
            </span>
          </span>
        </span>

        {/* Main button */}
        <span
          className={cn(
            'whatsapp-glow relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full md:h-16 md:w-16',
            'bg-[linear-gradient(145deg,#2FE574_0%,#25D366_45%,#1DA851_100%)]',
            'ring-2 ring-white/30 transition duration-300',
            'group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:ring-white/50',
            'group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-lime group-focus-visible:ring-offset-2',
          )}
        >
          {/* Inner highlight */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.28)_0%,rgba(255,255,255,0)_42%)]"
          />

<img
            src="/whatsapp-white-icon.webp"
            alt=""
            aria-hidden="true"
            className="relative z-[1] h-7 w-7 object-contain mix-blend-screen drop-shadow-sm md:h-8 md:w-8"
          />
        </span>
      </a>
    </div>
  )
}
