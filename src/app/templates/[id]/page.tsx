import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const templates: Record<string, {
  name: string; price: string; badge: string; desc: string;
  stack: string[]; bg: string; accent: string;
  stats: { num: string; label: string }[];
  features: { icon: string; title: string; desc: string }[];
}> = {
  "realestate-pro": {
    name: "RealEstate Pro",
    price: "Free",
    badge: "free",
    desc: "A fully-featured real estate website template built on Next.js 14 and Sanity v3. IDX-ready architecture, property listing CMS, neighborhood guides, agent profiles, and lead capture — everything a real estate agent or team needs to dominate local search.",
    stack: ["Next.js 14 (App Router)", "Sanity v3 Studio", "Tailwind CSS", "TypeScript"],
    bg: "#0a0a0a",
    accent: "#7BFF00",
    stats: [{ num: "4.9", label: "Rating" }, { num: "2,400+", label: "Downloads" }, { num: "v2.1.0", label: "Version" }],
    features: [
      { icon: "🏠", title: "Property Listings CMS", desc: "Full Sanity schema for listings with beds, baths, price, photos, status, and custom fields. Update without touching code." },
      { icon: "🔍", title: "IDX-Ready Architecture", desc: "API-first structure ready to connect to any IDX provider. Swap in your feed and go live the same day." },
      { icon: "📍", title: "Neighborhood Guide Pages", desc: "Pre-built area pages with Sanity CMS. Rank for hyper-local keywords like 'homes for sale in [neighborhood]'." },
      { icon: "👤", title: "Agent Profile Pages", desc: "Individual agent profiles with bio, listings, reviews, and contact info. Perfect for teams with multiple agents." },
      { icon: "📋", title: "Lead Capture Forms", desc: "Separate seller and buyer funnels with multi-step forms and direct email notification via any SMTP provider." },
      { icon: "⚡", title: "Core Web Vitals 100", desc: "Perfect Lighthouse scores out of the box. Optimized images, font loading, lazy loading, and zero layout shift." },
    ],
  },
  "mortgageflow": {
    name: "MortgageFlow",
    price: "$79",
    badge: "premium",
    desc: "Complete mortgage broker website with embedded payment calculator, rate comparison pages, NMLS compliance, and loan program detail pages built for maximum lead generation.",
    stack: ["Next.js 14 (App Router)", "Sanity v3 Studio", "Tailwind CSS", "TypeScript"],
    bg: "#0d1117",
    accent: "#3b82f6",
    stats: [{ num: "4.8", label: "Rating" }, { num: "800+", label: "Downloads" }, { num: "v1.3.0", label: "Version" }],
    features: [
      { icon: "🧮", title: "Mortgage Calculator", desc: "Embedded interactive payment calculator with down payment, interest rate, and term adjustments." },
      { icon: "📊", title: "Rate Comparison Pages", desc: "Structured rate tables with Sanity CMS — update rates without a developer." },
      { icon: "⚖️", title: "NMLS Compliance Ready", desc: "Footer disclaimers, license number display, and compliant layout patterns built in from day one." },
      { icon: "📋", title: "Loan Program Pages", desc: "FHA, VA, Conventional, Jumbo — each with its own optimized landing page and lead form." },
      { icon: "🎯", title: "Lead Capture Funnels", desc: "Multi-step intake forms that pre-qualify borrowers before they reach your inbox." },
      { icon: "⚡", title: "Fast & SEO Optimized", desc: "Next.js App Router with streaming SSR. Perfect Core Web Vitals scores for competitive mortgage keywords." },
    ],
  },
};

// Fallback template data
const defaultTemplate = templates["realestate-pro"];

export function generateStaticParams() {
  return Object.keys(templates).map((id) => ({ id }));
}

export default function TemplateSingle({ params }: { params: { id: string } }) {
  const t = templates[params.id] || defaultTemplate;

  return (
    <>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-0 px-8 md:px-12 border-b border-white/[0.07]">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-muted font-body mb-6">
              <Link href="/templates" className="hover:text-acid transition-colors">Templates</Link>
              <span>→</span>
              <span className="text-primary">{t.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
              {/* Left */}
              <div className="pb-16">
                <div className="flex gap-2.5 mb-5 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-wider border ${t.badge === "free" ? "bg-acid-dim text-acid border-acid-border" : "bg-white/[0.05] text-mid border-white/[0.07]"}`}>
                    {t.badge === "free" ? "Free" : "Premium"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider border border-acid-dim text-mid bg-white/[0.05]">
                    Updated Jan 2025
                  </span>
                </div>

                <h1 className="font-display font-bold text-[clamp(40px,5vw,64px)] leading-none tracking-[-0.03em] mb-5">
                  {t.name}
                  <br />
                  <span className="font-serif italic font-normal text-acid">Template</span>
                </h1>

                <p className="text-muted text-[15px] font-body leading-[1.8] max-w-[520px] mb-8">{t.desc}</p>

                <div className="flex gap-3 flex-wrap mb-10">
                  <Link href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200">
                    {t.badge === "free" ? "Download Free →" : `Buy for ${t.price} →`}
                  </Link>
                  <Link href="#" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200">
                    Live Preview ↗
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-8 border-t border-border flex-wrap">
                  {t.stats.map(s => (
                    <div key={s.label} className="flex items-center gap-2 text-muted font-body">
                      <strong className="text-text-primary font-body">{s.num}</strong> {s.label}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-[12px] text-muted font-body">
                    📄 MIT License
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="sticky top-20 pb-8">
                <div className="border border-border rounded-xl overflow-hidden bg-bg-2">
                  {/* Preview */}
                  <div
                    className="h-52 flex items-center justify-center p-6 border-b border-white/[0.07]"
                    style={{ background: t.bg }}
                  >
                    <div className="w-full rounded border border-white/10 overflow-hidden">
                      <div className="h-6 flex items-center px-2 gap-1.5" style={{ background: `${t.bg}cc` }}>
                        {["#ff5f57","#febc2e","#28c840"].map(c => (
                          <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
                        ))}
                      </div>
                      <div className="p-4" style={{ background: t.bg }}>
                        <div className="h-2 rounded mb-2" style={{ background: t.accent, width: "40%", opacity: 0.85 }} />
                        <div className="h-1.5 rounded mb-1.5" style={{ background: `${t.accent}22`, width: "75%" }} />
                        <div className="h-1.5 rounded mb-4" style={{ background: `${t.accent}15`, width: "55%" }} />
                        <div className="flex gap-2">
                          <div className="h-5 w-16 rounded" style={{ background: t.accent, opacity: 0.9 }} />
                          <div className="h-5 w-12 rounded border" style={{ borderColor: `${t.accent}40` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className={`font-display font-bold text-[32px] mb-1 ${t.badge === "free" ? "text-acid" : "text-white"}`}>
                      {t.price}
                    </div>
                    <p className="text-sm text-muted font-body mb-5">
                      {t.badge === "free" ? "MIT License — use in any project" : "Single project license"}
                    </p>

                    <Link href="#" className="flex justify-center items-center gap-2 w-full px-5 py-3.5 rounded-full bg-acid text-black font-display font-bold text-[12px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200 mb-3">
                      {t.badge === "free" ? "Download Template →" : `Buy for ${t.price} →`}
                    </Link>
                    <Link href="#" className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200">
                      Live Preview ↗
                    </Link>

                    <div className="my-5 h-px bg-white/[0.07]" />

                    <div className="flex flex-col gap-2.5 mb-5">
                      {["Mobile-first & responsive","Core Web Vitals 100","SEO meta management","Sanity Studio included","TypeScript support","Full documentation"].map(f => (
                        <div key={f} className="flex items-center gap-2.5 text-base text-mid font-body">
                          <span className="text-acid font-bold">✓</span> {f}
                        </div>
                      ))}
                    </div>

                    <div className="my-5 h-px bg-white/[0.07]" />

                    <div className="flex flex-col gap-2.5">
                      {t.stack.map(s => (
                        <div key={s} className="flex items-center gap-3 text-sm text-muted font-body">
                          <div className="w-7 h-7 rounded-lg bg-bg-4 border border-white/[0.07] flex items-center justify-center text-xs">▲</div>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-8 md:px-12 bg-bg-2 border-b border-white/[0.07]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              What&apos;s Included
            </div>
            <h2 className="font-display font-bold text-[clamp(24px,2.5vw,36px)] tracking-[-0.02em] mb-12">
              Everything you need to{" "}
              <span className="font-serif italic font-normal text-acid">rank and convert</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.features.map((f) => (
                <div key={f.title} className="flex gap-4 p-6 bg-bg border border-white/[0.07] rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-acid-dim border border-acid-border flex items-center justify-center text-lg flex-shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-display font-medium text-2xl text-text-primary mb-2">{f.title}</div>
                    <p className="text-base text-muted font-body leading-[1.65]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick setup */}
        <section className="py-24 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-body tracking-[0.18em] uppercase text-acid mb-5">
                  <span className="w-5 h-px bg-acid" />
                  Quick Setup
                </div>
                <h2 className="font-display font-bold text-5xl tracking-[-0.02em] mb-4">
                  Live in under <span className="font-serif italic font-normal text-acid">30 minutes</span>
                </h2>
                <p className="text-muted tex-base font-body leading-[1.8] mb-8">Full documentation included. Step-by-step setup guide from clone to deployed.</p>
                <Link href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-acid-border text-acid font-display font-semibold text-[12px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200">
                  Read Documentation →
                </Link>
              </div>
              <div className="border border-white/[0.07] rounded-xl overflow-hidden">
                {[
                  { step: "1. Clone the repo", code: "git clone rayso.studio/template", accent: true },
                  { step: "2. Install dependencies", code: "npm install", accent: false },
                  { step: "3. Configure environment", code: "cp .env.example .env.local", accent: false },
                  { step: "4. Run locally", code: "npm run dev", accent: true },
                ].map(({ step, code, accent }, i) => (
                  <div key={i} className="px-6 py-5 bg-bg-2 border-b border-border last:border-0">
                    <div className="text-sm text-muted font-body mb-2 uppercase tracking-wider">{step}</div>
                    <code className={`font-body text-[13px] ${accent ? "text-acid" : "text-mid"}`}>{code}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* More templates */}
        <section className="py-20 px-8 md:px-12 border-t border-white/[0.07] bg-bg-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-display font-bold text-[clamp(24px,2.5vw,36px)] tracking-[-0.02em]">More Templates</h2>
              <Link href="/templates" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200">
                Browse All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: "Plumbr Emergency", emoji: "🔧", price: "Free", bg: "#0f1923" },
                { name: "MortgageFlow", emoji: "💰", price: "$79", bg: "#0d1117" },
                { name: "CleanBook Pro", emoji: "🧹", price: "$69", bg: "#faf5ff" },
              ].map((m) => (
                <Link href="/templates" key={m.name} className="group border border-border rounded-xl overflow-hidden hover:border-acid-border transition-all duration-200">
                  <div className="h-64 flex items-center justify-center text-4xl" style={{ background: m.bg }}>{m.emoji}</div>
                  <div className="p-5 bg-bg-2">
                    <div className="font-display font-bold text-xl text-text-primary mb-1">{m.name}</div>
                    <div className="text-sm text-muted font-body mb-3">Sanity Template</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-body uppercase tracking-wider border ${m.price === "Free" ? "bg-acid-dim text-acid border-acid-border" : "bg-bg-2 text-mid border-border"}`}>
                      {m.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
