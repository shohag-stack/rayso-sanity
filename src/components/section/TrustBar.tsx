import React from 'react'
import { trustItems } from '@/data/trust'

export default function TrustBar() {
  return (
    <section className="py-16 px-8 md:px-12 border-t border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-8">
              {trustItems.map((t) => (
                <div key={t.label} className="flex items-center gap-3 text-[12px] font-body" style={{ color: "var(--muted)" }}>
                  <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-[15px]" style={{ background: "var(--bg-3)", borderColor: "var(--border-color)" }}>{t.icon}</div>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
