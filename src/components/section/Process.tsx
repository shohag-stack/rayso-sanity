import React from "react";
import { steps } from "@/data/steps";
export default function Process() {
  return (
    <section className="py-24 px-8 md:px-12 bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/process.png')" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-2 font-body tracking-[0.18em] uppercase text-black mb-5">
            <span className="w-5 h-px bg-black text-base" />
            How It Works
          </div>
          <h2
            className="font-display font-bold text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em] text-black"
            
          >
            From brief to live site
            <br />
            <span className="font-serif italic font-normal text-black">
              in as little as 14 days
            </span>
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden"
          style={{ borderColor: "var(--border-color)" }}
        >
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-4 sm:p-8 border-r border-b bg-white"
              style={{
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="font-display font-bold text-[72px] leading-none tracking-[-0.04em] mb-6 text-black/15"
              >
                {s.num}
              </div>
              <h3
                className="font-display font-bold text-xl mb-3 text-black"
              >
                {s.title}
              </h3>
              <p
                className="text-base font-body leading-[1.7]"
                style={{ color: "var(--muted)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
