import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { num: "01 — RESULTS FIRST", title: "We measure success in leads, not likes", desc: "Beautiful design that doesn't convert is just expensive decoration. Every decision — from headline copy to button placement to page speed — is evaluated against one question: does this help the visitor become a customer?" },
  { num: "02 — NICHE EXPERTISE", title: "Generic agencies build generic websites", desc: "We go deep on your industry. We know mortgage borrowers need to see NMLS numbers. We know emergency plumbing calls happen at 2am. That domain knowledge is baked into every project." },
  { num: "03 — RADICAL TRANSPARENCY", title: "You'll never wonder what's happening", desc: "We share Figma prototypes, Loom walkthroughs, and weekly updates. No black-box agency processes. You know exactly what's being built, why, and when — before we write a single line of code." },
  { num: "04 — LONG-TERM THINKING", title: "We build it like it's ours", desc: "We document everything. We train your team. We hand you the keys so you're never dependent on us for a simple copy edit. Our goal is to make you self-sufficient — because that's what earns referrals." },
];

const team = [
  { name: "Ray S.", role: "Founder & Lead Developer", emoji: "🧑‍💻", bio: "Full-stack developer with 7+ years building web products. Specialized in Next.js, Sanity CMS, and conversion-focused development for service businesses.", bg: "linear-gradient(135deg,#0a1628,#142240)" },
  { name: "Design Lead", role: "UI/UX & Brand Design", emoji: "🎨", bio: "Former agency designer who left big agency life to focus on meaningful projects. Expertise in Figma, Framer, and conversion-focused UI systems.", bg: "linear-gradient(135deg,#0f1923,#1a2535)" },
  { name: "Growth Strategist", role: "SEO & CRO Specialist", emoji: "📈", bio: "5+ years in local SEO and conversion rate optimization. Helped 30+ local businesses rank on page 1 and increase conversion rates by 200–400%.", bg: "linear-gradient(135deg,#0d1117,#1c2128)" },
];

const timeline = [
  { year: "2021", title: "First client — a local real estate agent", desc: "Rebuilt a real estate agent's WordPress site in Next.js + Sanity. Organic leads tripled in 90 days. Word spread." },
  { year: "2022", title: "Expanded into home services", desc: "Started taking on plumbing, HVAC, and cleaning clients. Built niche expertise in emergency-service UX and local SEO." },
  { year: "2023", title: "Launched the Sanity Template Library", desc: "Released our first 3 free templates. 5,000+ downloads in year one. Templates became our lead generation engine." },
  { year: "2024", title: "Component library & agency partnerships", desc: "Launched 80+ free JSX components. Started working with smaller agencies as a white-label development partner." },
  { year: "2025", title: "Now — focused and growing", desc: "40+ delivered projects. 3 active team members. Still taking on 3 new projects per month — by referral only." },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="relative pt-36 pb-24 px-8 md:px-12 border-b overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
          <div className="absolute -top-48 -right-24 w-[500px] h-[500px] rounded-full bg-acid opacity-[0.05] blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5"><span className="w-5 h-px bg-acid" />About rayso.studio</div>
            <p className="font-serif italic text-[clamp(28px,4vw,52px)] leading-[1.3] max-w-4xl mb-10" style={{ color: "var(--text-primary)" }}>
              We believe that every local business deserves a website that actually{" "}
              <span className="text-acid not-italic font-display font-black">works</span>{" "}
              — not just one that looks pretty in a portfolio.
            </p>
            <p className="text-[15px] font-body leading-[1.8] max-w-[560px]" style={{ color: "var(--muted)" }}>
              rayso.studio was built on a simple observation: local service businesses get handed generic, overpriced websites by agencies that don&apos;t understand their market. We decided to do something about that.
            </p>
          </div>
        </section>

        <section className="py-16 px-8 md:px-12 border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
              {[["40+","Websites Delivered"],["6","Industries Served"],["3.2×","Avg. Lead Increase"],["97%","Client Satisfaction"]].map(([n,l]) => (
                <div key={l} className="px-9 py-9 border-r border-b" style={{ background: "var(--bg-3)", borderColor: "var(--border-color)" }}>
                  <div className="font-display font-black text-[clamp(36px,4vw,56px)] leading-none tracking-[-0.03em] text-acid mb-1">{n}</div>
                  <div className="text-[11px] font-body" style={{ color: "var(--muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5"><span className="w-5 h-px bg-acid" />What We Stand For</div>
              <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]" style={{ color: "var(--text-primary)" }}>
                Our principles <span className="font-serif italic font-normal text-acid">aren&apos;t optional</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border rounded-xl overflow-hidden" style={{ borderColor: "var(--border-color)" }}>
              {values.map((v) => (
                <div key={v.num} className="p-11 border-r border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  <div className="text-[10px] font-display font-bold tracking-[0.15em] uppercase text-acid mb-4">{v.num}</div>
                  <h3 className="font-display font-bold text-[22px] tracking-[-0.01em] mb-3" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                  <p className="text-[13px] font-body leading-[1.8]" style={{ color: "var(--muted)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-12 border-t border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5"><span className="w-5 h-px bg-acid" />The Team</div>
              <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]" style={{ color: "var(--text-primary)" }}>
                Small team. <span className="font-serif italic font-normal text-acid">Huge output.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.name} className="border rounded-xl overflow-hidden hover:border-acid-border transition-all duration-200" style={{ background: "var(--bg)", borderColor: "var(--border-color)" }}>
                  <div className="h-48 flex items-center justify-center text-6xl border-b" style={{ background: m.bg, borderColor: "var(--border-color)" }}>{m.emoji}</div>
                  <div className="p-6">
                    <div className="font-display font-bold text-[18px] mb-1" style={{ color: "var(--text-primary)" }}>{m.name}</div>
                    <div className="text-[11px] text-acid font-body tracking-wider mb-3">{m.role}</div>
                    <p className="text-[12px] font-body leading-[1.7]" style={{ color: "var(--muted)" }}>{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5"><span className="w-5 h-px bg-acid" />Our Story</div>
                <h2 className="font-display font-bold text-[clamp(36px,4vw,56px)] leading-[1.05] tracking-[-0.025em] mb-5" style={{ color: "var(--text-primary)" }}>
                  Built out of <span className="font-serif italic font-normal text-acid">frustration</span>
                </h2>
                <p className="text-[14px] font-body leading-[1.8] mb-6" style={{ color: "var(--muted)" }}>rayso.studio started after watching too many local business owners get burned by generic agencies — $5,000 for a WordPress site that ranked nowhere, loaded in 8 seconds, and generated zero inquiries. We knew it didn&apos;t have to be that way.</p>
                <p className="text-[14px] font-body leading-[1.8]" style={{ color: "var(--muted)" }}>Every tool, template, and component we release comes from a real problem we solved for a real client. We build in public, share our learnings for free, and earn our reputation through results — not pitch decks.</p>
              </div>
              <div className="relative pl-7 border-l" style={{ borderColor: "var(--border-color)" }}>
                {timeline.map((t) => (
                  <div key={t.year} className="relative pb-10 last:pb-0">
                    <div className="absolute -left-[32px] top-1.5 w-2 h-2 rounded-full bg-acid" />
                    <div className="text-[11px] font-display font-bold tracking-[0.1em] text-acid mb-2">{t.year}</div>
                    <div className="font-display font-bold text-[17px] mb-2" style={{ color: "var(--text-primary)" }}>{t.title}</div>
                    <p className="text-[13px] font-body leading-[1.7]" style={{ color: "var(--muted)" }}>{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-acid rounded-xl p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
              <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 font-display font-black text-[200px] text-black/[0.06] leading-none tracking-[-0.05em] pointer-events-none select-none whitespace-nowrap">rayso</div>
              <div className="max-w-xl relative z-10">
                <h2 className="font-display font-black text-[clamp(28px,3.5vw,48px)] text-black leading-[1.05] tracking-[-0.03em] mb-3">Want results like these for your business?</h2>
                <p className="text-black/60 text-[14px] font-body leading-[1.7]">Book a free 30-minute call. Walk away with clarity on what your website needs — no commitment required.</p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <Link href="/contact" className="inline-flex items-center gap-2 px-9 py-5 rounded-full bg-black text-white font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white hover:text-black transition-colors duration-200 whitespace-nowrap">Book Free Call →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
