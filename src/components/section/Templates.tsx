import Link from 'next/link'
import React from 'react'

export default function Templates() {
  return (
    <section className="py-24 px-8 md:px-12 border-t border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12 flex-wrap gap-5">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
                  <span className="w-5 h-px bg-acid" />Sanity Templates
                </div>
                <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]" style={{ color: "var(--text-primary)" }}>
                  Launch faster with<br />
                  <span className="font-serif italic font-normal text-acid">our template library</span>
                </h2>
              </div>
              <Link href="/templates" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-acid-border text-acid font-display font-semibold text-[12px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200">
                Browse All Templates →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "RealEstate Pro", meta: "Sanity + Next.js", price: "Free", bg: "#0a0a0a", accent: "#7BFF00" },
                { name: "ServiceBiz Starter", meta: "Sanity + Astro", price: "Free", bg: "#f8f8f8", accent: "#1a1a1a" },
                { name: "MortgageFlow", meta: "Sanity + Next.js", price: "$79", bg: "#0d1117", accent: "#3b82f6" },
              ].map((t) => (
                <Link href="/templates" key={t.name} className="group border rounded-xl overflow-hidden hover:border-acid-border hover:-translate-y-1 transition-all duration-200" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  <div className="h-60 flex items-center justify-center p-5" style={{ background: t.bg }}>
                    <div className="w-full rounded border border-white/10 overflow-hidden">
                      <div className="h-5 flex items-center px-2 gap-1" style={{ background: `${t.bg}dd` }}>
                        {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />)}
                      </div>
                      <div className="p-3" style={{ background: t.bg }}>
                        <div className="h-1.5 rounded mb-1.5" style={{ background: t.accent, width: "40%", opacity: 0.8 }} />
                        <div className="h-1 rounded mb-1" style={{ background: `${t.accent}30`, width: "70%" }} />
                        <div className="h-1 rounded mb-3" style={{ background: `${t.accent}20`, width: "55%" }} />
                        <div className="h-4 rounded w-16" style={{ background: t.accent, opacity: 0.9 }} />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="font-display font-bold text-base mb-1" style={{ color: "var(--text-primary)" }}>{t.name}</div>
                    <div className="text-base font-body" style={{ color: "var(--muted)" }}>
                      {t.meta} • <span className="text-acid font-bold">{t.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
  )
}
