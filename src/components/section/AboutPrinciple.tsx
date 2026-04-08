import React from "react";

export default function AboutPrinciple() {
  const values = [
    {
      num: "01 — RESULTS FIRST",
      title: "We measure success in leads, not likes",
      desc: "Beautiful design that doesn't convert is just expensive decoration. Every decision — from headline copy to button placement to page speed — is evaluated against one question: does this help the visitor become a customer?",
    },
    {
      num: "02 — NICHE EXPERTISE",
      title: "Generic agencies build generic websites",
      desc: "We go deep on your industry. We know mortgage borrowers need to see NMLS numbers. We know emergency plumbing calls happen at 2am. That domain knowledge is baked into every project.",
    },
    {
      num: "03 — RADICAL TRANSPARENCY",
      title: "You'll never wonder what's happening",
      desc: "We share Figma prototypes, Loom walkthroughs, and weekly updates. No black-box agency processes. You know exactly what's being built, why, and when — before we write a single line of code.",
    },
    {
      num: "04 — LONG-TERM THINKING",
      title: "We build it like it's ours",
      desc: "We document everything. We train your team. We hand you the keys so you're never dependent on us for a simple copy edit. Our goal is to make you self-sufficient — because that's what earns referrals.",
    },
  ];

  return (
    <section className="py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
            <span className="w-5 h-px bg-acid" />
            What We Stand For
          </div>
          <h2
            className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]"
            style={{ color: "var(--text-primary)" }}
          >
            Our principles{" "}
            <span className="font-serif italic font-normal text-acid">
              aren&apos;t optional
            </span>
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 border rounded-xl overflow-hidden"
          style={{ borderColor: "var(--border-color)" }}
        >
          {values.map((v) => (
            <div
              key={v.num}
              className="p-11 border-r border-b"
              style={{
                background: "var(--bg-2)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="text-[10px] font-display font-bold tracking-[0.15em] uppercase text-acid mb-4">
                {v.num}
              </div>
              <h3
                className="font-display font-bold text-[22px] tracking-[-0.01em] mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {v.title}
              </h3>
              <p
                className="text-[13px] font-body leading-[1.8]"
                style={{ color: "var(--muted)" }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
