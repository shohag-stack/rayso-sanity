import React from 'react'
import {steps} from "@/data/steps"
export default function Process() {


  return (
    <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
                <span className="w-5 h-px bg-acid" />How It Works
              </div>
              <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]" style={{ color: "var(--text-primary)" }}>
                From brief to live site<br />
                <span className="font-serif italic font-normal text-acid">in as little as 14 days</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
              {steps.map((s) => (
                <div key={s.num} className="p-12 border-r border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  <div className="font-display font-black text-[72px] leading-none tracking-[-0.04em] mb-6" style={{ color: "var(--bg-4)" }}>{s.num}</div>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                  <p className="text-base font-body leading-[1.7]" style={{ color: "var(--muted)" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
