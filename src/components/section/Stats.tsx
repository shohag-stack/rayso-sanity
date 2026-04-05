import React from 'react'
import { stats } from '@/data/Stats'

export default function Stats() {
  return (
    <section className="py-20 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-color)", "--tw-divide-opacity": 1 } as React.CSSProperties}>
              {stats.map((s) => (
                <div key={s.num} className="px-9 py-10" style={{ background: "var(--bg-2)" }}>
                  <div className="font-display font-black text-[clamp(36px,4vw,56px)] leading-none tracking-[-0.03em] text-acid mb-1">{s.num}</div>
                  <div className="text-[12px] font-body" style={{ color: "var(--muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
