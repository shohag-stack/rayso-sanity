import Link from 'next/link'
import React from 'react'

export default function Components() {
  return (
    <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
                  <span className="w-5 h-px bg-acid" />Free Component Library
                </div>
                <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em] mb-5" style={{ color: "var(--text-primary)" }}>
                  80+ production-ready<br />
                  <span className="font-serif italic font-normal text-acid">JSX components</span>
                </h2>
                <p className="text-lg font-body leading-[1.8] mb-8" style={{ color: "var(--muted)" }}>
                  Copy-paste components built for local service business websites. Hero sections, pricing tables, booking forms, review sliders — all free. No email, no login.
                </p>
                <div className="flex gap-7 mb-10 pb-8 border-b" style={{ borderColor: "var(--border-color)" }}>
                  {[["80+","Components"],["12","Categories"],["Free","Always"]].map(([n,l]) => (
                    <div key={l}>
                      <div className="font-display font-black text-[40px] leading-none tracking-[-0.03em] text-acid">{n}</div>
                      <div className="text-[11px] font-body mt-1" style={{ color: "var(--muted)" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <Link href="/components-page" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200">
                  Browse Components →
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { imp: "HeroSection", path: "@/components/HeroSection", hot: false },
                  { imp: "ServiceGrid", path: "@/components/ServiceGrid", hot: false },
                  { imp: "PricingTable", path: "@/components/PricingTable", hot: true },
                  { imp: "BookingForm", path: "@/components/BookingForm", hot: false },
                ].map(({ imp, path, hot }) => (
                  <div key={imp} className={`px-6 py-5 rounded-xl font-body text-[12px] flex items-center justify-between border ${hot ? "border-acid-border" : ""}`} style={{ background: "var(--bg-2)", borderColor: hot ? undefined : "var(--border-color)", color: "var(--muted)" }}>
                    <span>
                      <span className="text-purple-400">import </span>
                      <span className="text-pink-400">{imp}</span>
                      <span className="text-purple-400"> from </span>
                      <span className="text-green-400">&apos;{path}&apos;</span>
                    </span>
                    {hot && <span className="text-acid text-[10px] tracking-wider ml-3 flex-shrink-0">✦ Popular</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}
