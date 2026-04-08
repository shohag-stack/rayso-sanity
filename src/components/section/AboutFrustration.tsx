import React from "react";

export default function AboutFrustration() {
  const timeline = [
    {
      year: "2021",
      title: "First client — a local real estate agent",
      desc: "Rebuilt a real estate agent's WordPress site in Next.js + Sanity. Organic leads tripled in 90 days. Word spread.",
    },
    {
      year: "2022",
      title: "Expanded into home services",
      desc: "Started taking on plumbing, HVAC, and cleaning clients. Built niche expertise in emergency-service UX and local SEO.",
    },
    {
      year: "2023",
      title: "Launched the Sanity Template Library",
      desc: "Released our first 3 free templates. 5,000+ downloads in year one. Templates became our lead generation engine.",
    },
    {
      year: "2024",
      title: "Component library & agency partnerships",
      desc: "Launched 80+ free JSX components. Started working with smaller agencies as a white-label development partner.",
    },
    {
      year: "2025",
      title: "Now — focused and growing",
      desc: "40+ delivered projects. 3 active team members. Still taking on 3 new projects per month — by referral only.",
    },
  ];

  return (
    <section className="py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Our Story
            </div>
            <h2
              className="font-display font-bold text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.025em] mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Built out of{" "}
              <span className="font-serif italic font-normal text-acid">
                frustration
              </span>
            </h2>
            <p
              className="text-[14px] font-body leading-[1.8] mb-6"
              style={{ color: "var(--muted)" }}
            >
              rayso.studio started after watching too many local business owners
              get burned by generic agencies — $5,000 for a WordPress site that
              ranked nowhere, loaded in 8 seconds, and generated zero inquiries.
              We knew it didn&apos;t have to be that way.
            </p>
            <p
              className="text-[14px] font-body leading-[1.8]"
              style={{ color: "var(--muted)" }}
            >
              Every tool, template, and component we release comes from a real
              problem we solved for a real client. We build in public, share our
              learnings for free, and earn our reputation through results — not
              pitch decks.
            </p>
          </div>
          <div
            className="relative pl-7 border-l"
            style={{ borderColor: "var(--border-color)" }}
          >
            {timeline.map((t) => (
              <div key={t.year} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[32px] top-1.5 w-2 h-2 rounded-full bg-acid" />
                <div className="text-[11px] font-display font-bold tracking-[0.1em] text-acid mb-2">
                  {t.year}
                </div>
                <div
                  className="font-display font-bold text-[17px] mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t.title}
                </div>
                <p
                  className="text-[13px] font-body leading-[1.7]"
                  style={{ color: "var(--muted)" }}
                >
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
