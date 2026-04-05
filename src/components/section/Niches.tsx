import React from 'react'
import {niches} from "@/data/niches.js"

export default function Niches() {
  return (
    <section className="py-24 px-8 md:px-12 border-t border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
                <span className="w-5 h-px bg-acid" />Industries We Serve
              </div>
              <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em] mb-5" style={{ color: "var(--text-primary)" }}>
                We speak your industry&apos;s<br />
                <span className="font-serif italic font-normal text-acid">language</span>
              </h2>
              <p className="text-lg font-body leading-[1.8] max-w-[600px] mx-auto" style={{ color: "var(--muted)" }}>
                Generic agencies build generic websites. We go deep on your niche — understanding what your customers search for, fear, and need to see before they book.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {niches.map((n) => (
                <div key={n.name} className="group border rounded-xl p-4 sm:p-8 transition-all duration-200 cursor-default hover:border-acid-border" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  <div className="text-[32px] mb-4">{n.emoji}</div>
                  <h3 className="font-display font-bold text-xl mb-2.5" style={{ color: "var(--text-primary)" }}>{n.name}</h3>
                  <p className="text-base font-body leading-[1.7] mb-4" style={{ color: "var(--muted)" }}>{n.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {n.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-sm font-body border bg-acid-dim text-acid" style={{borderColor: "var(--border-color)" }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
