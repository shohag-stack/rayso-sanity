import Link from 'next/link'
import React from 'react'

export default function CTABanner() {
  return (
    <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-acid rounded-xl p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
              <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 font-display font-bold text-[200px] text-black/[0.06] leading-none tracking-[-0.05em] pointer-events-none select-none whitespace-nowrap">rayso</div>
              <div className="max-w-xl relative z-10">
                <h2 className="font-display font-bold text-[clamp(32px,4vw,52px)] text-black leading-[1.05] tracking-[-0.03em] mb-4">
                  Ready to turn your website into your best salesperson?
                </h2>
                <p className="text-black/60 text-lg font-body leading-[1.7]">
                  Book a free 30-minute strategy call. No pressure, no pitch — just an honest assessment of what&apos;s holding your site back.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 relative z-10 flex-shrink-0">
                <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-5 rounded-full bg-black text-white font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap">
                  Book Free Call →
                </Link>
                <span className="text-[11px] text-black/50 font-body">No commitment required</span>
              </div>
            </div>
          </div>
        </section>
  )
}
