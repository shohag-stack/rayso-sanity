import React from "react";

export default function AboutHero() {
  return (
    <section
      className="relative pt-36 pb-24 px-8 md:px-12 border-b overflow-hidden"
      style={{ borderColor: "var(--border-color)" }}
    >
      <div className="absolute -top-48 -right-24 w-[500px] h-[500px] rounded-full bg-acid opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
          <span className="w-5 h-px bg-acid" />
          About rayso.studio
        </div>
        <p
          className="font-serif italic text-[clamp(28px,4vw,52px)] leading-[1.3] max-w-4xl mb-10"
          style={{ color: "var(--text-primary)" }}
        >
          We believe that every local business deserves a website that actually{" "}
          <span className="text-acid not-italic font-display font-black">
            works
          </span>{" "}
          — not just one that looks pretty in a portfolio.
        </p>
        <p
          className="text-[15px] font-body leading-[1.8] max-w-[560px]"
          style={{ color: "var(--muted)" }}
        >
          rayso.studio was built on a simple observation: local service
          businesses get handed generic, overpriced websites by agencies that
          don&apos;t understand their market. We decided to do something about
          that.
        </p>
      </div>
    </section>
  );
}
