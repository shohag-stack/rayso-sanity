"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import { highlightCode } from "@/app/actions/highlight";

const categories = [
  { id: "heroes", label: "Hero Sections", count: 12 },
  { id: "navbars", label: "Navbars", count: 8 },
  { id: "footers", label: "Footers", count: 6 },
  { id: "pricing", label: "Pricing Tables", count: 7 },
  { id: "services", label: "Service Grids", count: 9 },
  { id: "testimonials", label: "Testimonials", count: 6 },
  { id: "faqs", label: "FAQs", count: 4 },
  { id: "forms", label: "Booking Forms", count: 8 },
  { id: "ctas", label: "CTA Banners", count: 7 },
  { id: "leads", label: "Lead Captures", count: 5 },
  { id: "real-estate", label: "Real Estate", count: 6 },
  { id: "service-biz", label: "Service Business", count: 8 },
];

const components = [
  {
    id: "HeroMinimal",
    name: "HeroMinimal",
    meta: "Tailwind • TypeScript",
    category: "heroes",
    code: `import Link from 'next/link'

interface HeroMinimalProps {
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta?: string
  href?: string
}

export default function HeroMinimal({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  href = '/contact',
}: HeroMinimalProps) {
  return (
    <section className="min-h-screen flex items-center bg-[#080808] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display font-black text-[clamp(52px,7vw,104px)] leading-[0.96] tracking-[-0.04em] text-white mb-6">
          {title}
        </h1>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed font-body">
          {subtitle}
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href={href}
            className="px-8 py-4 bg-[#7BFF00] text-black font-display font-black
                       rounded-full hover:bg-white transition-colors text-sm
                       tracking-wider uppercase"
          >
            {primaryCta}
          </Link>
          {secondaryCta && (
            <button className="px-8 py-4 border border-neutral-800 text-neutral-400
                               rounded-full hover:text-white hover:border-neutral-600
                               transition-colors text-sm font-display tracking-wider uppercase">
              {secondaryCta}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    id: "EmergencyHero",
    name: "EmergencyHero",
    meta: "For plumbing & HVAC • Tailwind",
    category: "heroes",
    code: `interface EmergencyHeroProps {
  businessName: string
  headline: string
  phone: string
  services: string[]
}

export default function EmergencyHero({
  businessName,
  headline,
  phone,
  services,
}: EmergencyHeroProps) {
  return (
    <section className="bg-[#0f1923] min-h-screen flex flex-col">
      <div className="bg-orange-500 text-orange-950 font-bold text-sm
                      flex items-center gap-3 px-6 py-3">
        <span className="animate-pulse">🔴</span>
        <span>24/7 Emergency Service Available</span>
        <a href={\`tel:\${phone}\`} className="ml-auto underline hover:no-underline">
          Call Now: {phone}
        </a>
      </div>
      <div className="flex-1 flex items-center px-6 py-20 max-w-5xl mx-auto w-full">
        <div>
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
            {businessName}
          </p>
          <h1 className="font-display font-black text-[clamp(48px,6vw,88px)]
                         text-white leading-none tracking-tight mb-6">
            {headline}
          </h1>
          <div className="flex flex-wrap gap-3 mb-10">
            {services.map((s) => (
              <span key={s} className="px-4 py-2 bg-white/10 rounded-full text-white text-sm">
                ✓ {s}
              </span>
            ))}
          </div>
          <a href={\`tel:\${phone}\`}
             className="inline-flex items-center gap-3 px-8 py-5
                        bg-orange-500 text-white font-display font-black rounded-xl
                        hover:bg-orange-400 transition-colors text-lg">
            📞 Call {phone}
          </a>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    id: "QuoteRequestForm",
    name: "QuoteRequestForm",
    meta: "Multi-field • Email notification",
    category: "forms",
    code: `'use client'
import { useState } from 'react'

export default function QuoteRequestForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-xl font-black text-white mb-2">Request received!</h3>
        <p className="text-neutral-400 font-body">We'll get back to you within 2 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-8 space-y-4">
      <h2 className="font-display text-xl font-black text-white mb-6">Get a Free Quote</h2>
      <div className="grid grid-cols-2 gap-4">
        <input required placeholder="Your Name" value={form.name}
               onChange={(e) => setForm({ ...form, name: e.target.value })}
               className="bg-neutral-900 border border-neutral-800 text-white px-4 py-3
                          rounded-xl text-sm placeholder:text-neutral-600
                          focus:border-[#7BFF00] focus:outline-none font-body" />
        <input required type="tel" placeholder="Phone Number" value={form.phone}
               onChange={(e) => setForm({ ...form, phone: e.target.value })}
               className="bg-neutral-900 border border-neutral-800 text-white px-4 py-3
                          rounded-xl text-sm placeholder:text-neutral-600
                          focus:border-[#7BFF00] focus:outline-none font-body" />
      </div>
      <input required type="email" placeholder="Email Address" value={form.email}
             onChange={(e) => setForm({ ...form, email: e.target.value })}
             className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3
                        rounded-xl text-sm placeholder:text-neutral-600
                        focus:border-[#7BFF00] focus:outline-none font-body" />
      <textarea rows={4} placeholder="Tell us about your project..." value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3
                           rounded-xl text-sm placeholder:text-neutral-600
                           focus:border-[#7BFF00] focus:outline-none resize-none font-body" />
      <button type="submit"
              className="w-full bg-[#7BFF00] text-black font-display font-black py-4
                         rounded-xl hover:bg-white transition-colors tracking-wider uppercase text-sm">
        Get My Free Quote →
      </button>
    </form>
  )
}`,
  },
  {
    id: "PricingTable3Col",
    name: "PricingTable3Col",
    meta: "3-tier • Featured highlight",
    category: "pricing",
    code: `const plans = [
  { name: 'Starter', price: 999, popular: false,
    features: ['5 Pages', 'SEO Setup', 'Mobile Responsive', '1 Revision Round'] },
  { name: 'Growth', price: 1999, popular: true,
    features: ['10 Pages', 'SEO + CRO', 'CMS Integration', '3 Revision Rounds', 'Analytics'] },
  { name: 'Premium', price: 3499, popular: false,
    features: ['Unlimited Pages', 'Full Stack Dev', 'Custom Integrations', 'Priority Support'] },
]

export default function PricingTable3Col() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name}
               className={\`rounded-2xl border p-8 \${plan.popular
                 ? 'bg-[#7BFF00] border-[#7BFF00]'
                 : 'bg-[#0f0f0f] border-neutral-800'}\`}>
            {plan.popular && (
              <div className="text-[10px] font-black uppercase tracking-widest text-black/60 mb-4">
                Most Popular
              </div>
            )}
            <div className={\`font-display text-lg font-black mb-2 \${plan.popular ? 'text-black' : 'text-white'}\`}>
              {plan.name}
            </div>
            <div className={\`font-display text-4xl font-black mb-6 \${plan.popular ? 'text-black' : 'text-white'}\`}>
              \${plan.price.toLocaleString()}
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className={\`text-sm flex items-center gap-2 \${plan.popular ? 'text-black/80' : 'text-neutral-400'}\`}>
                  ✓ {f}
                </li>
              ))}
            </ul>
            <button className={\`w-full py-3 rounded-full font-display font-black text-sm transition-colors \${
              plan.popular ? 'bg-black text-white hover:bg-neutral-900' : 'bg-[#7BFF00] text-black hover:bg-white'
            }\`}>
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}`,
  },
  {
    id: "BookingCalendar",
    name: "BookingCalendar",
    meta: "Date picker • Time slots • Confirm",
    category: "forms",
    code: `'use client'
import { useState } from 'react'

const TIME_SLOTS = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']

export default function BookingCalendar() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const days = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 max-w-md">
      <h3 className="font-display font-black text-white mb-5">Pick a Date</h3>
      <div className="grid grid-cols-7 gap-1.5 mb-6">
        {days.map((d) => (
          <button key={d} onClick={() => setSelectedDay(d)}
                  className={\`aspect-square rounded-lg text-sm font-display font-black transition-colors \${
                    selectedDay === d
                      ? 'bg-[#7BFF00] text-black'
                      : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }\`}>
            {d}
          </button>
        ))}
      </div>
      {selectedDay && (
        <div>
          <h4 className="text-sm text-neutral-400 font-body mb-3">Available Times</h4>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {TIME_SLOTS.map((t) => (
              <button key={t} onClick={() => setSelectedTime(t)}
                      className={\`py-2.5 px-3 rounded-xl font-body text-xs transition-colors \${
                        selectedTime === t
                          ? 'bg-[#7BFF00] text-black font-semibold'
                          : 'bg-neutral-800 text-neutral-400 hover:bg-[#7BFF00] hover:text-black'
                      }\`}>
                {t}
              </button>
            ))}
          </div>
          {selectedTime && (
            <button className="w-full py-3.5 bg-[#7BFF00] text-black font-display font-black
                               rounded-xl hover:bg-white transition-colors text-sm tracking-wider uppercase">
              Confirm Booking →
            </button>
          )}
        </div>
      )}
    </div>
  )
}`,
  },
  {
    id: "ReviewSlider",
    name: "ReviewSlider",
    meta: "Google Reviews style • Auto-scroll",
    category: "testimonials",
    code: `'use client'
import { useState } from 'react'

const reviews = [
  { name: 'Sarah M.', role: 'Real Estate Agent', stars: 5,
    text: 'rayso.studio transformed our web presence. Leads are up 4x in 3 months.' },
  { name: 'Mike T.', role: 'Plumbing Company Owner', stars: 5,
    text: 'Went from page 3 to #1 on Google in 4 months. The emergency CTA doubled our call volume.' },
  { name: 'Jennifer K.', role: 'Mortgage Broker', stars: 5,
    text: 'The calculator and rate pages are exactly what my clients needed.' },
]

export default function ReviewSlider() {
  const [active, setActive] = useState(0)
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 mb-4">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: reviews[active].stars }).map((_, i) => (
            <span key={i} className="text-[#7BFF00] text-xl">★</span>
          ))}
        </div>
        <p className="text-white font-body text-lg leading-relaxed mb-6">
          "{reviews[active].text}"
        </p>
        <div className="font-display font-black text-white">{reviews[active].name}</div>
        <div className="text-sm text-neutral-500 font-body">{reviews[active].role}</div>
      </div>
      <div className="flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
                  className={\`h-2 rounded-full transition-all \${i === active ? 'bg-[#7BFF00] w-6' : 'bg-neutral-700 w-2'}\`} />
        ))}
      </div>
    </div>
  )
}`,
  },
];

// ── Types ────────────────────────────────────────────────────────────────────
type ModalState = {
  name: string;
  code: string;
  highlighted: string;
} | null;

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("heroes");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<ModalState>(null);
  const [copied, setCopied] = useState(false);
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);

  // ── Filter logic ───────────────────────────────────────────────────────────
  const displayed = search
    ? components.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.meta.toLowerCase().includes(search.toLowerCase()),
      )
    : components.filter((c) => c.category === activeCategory);

  // ── Open modal: highlight server-side then show ────────────────────────────
  const openModal = useCallback(
    async (id: string, name: string, code: string) => {
      setLoadingSlug(id);
      try {
        const highlighted = await highlightCode(code);
        console.log("showing highlited code", highlighted)
        setModal({ name, code, highlighted });
      } catch (err) {
        console.error("Highlight error:", err);
        // Fallback: show plain code if Shiki fails
        setModal({
          name,
          code,
          highlighted: `<pre style="background:#0d0d0d;padding:24px;margin:0;overflow:auto"><code style="color:#e2e8f0;font-size:12px;line-height:1.8">${code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</code></pre>`,
        });
      } finally {
        setLoadingSlug(null);
      }
    },
    [],
  );

  const copyCode = () => {
    if (!modal) return;
    navigator.clipboard.writeText(modal.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative pt-36 pb-20 px-8 md:px-12 bg-cover"
          style={{
            backgroundImage: "url('assets/img/templates.png')",
            backgroundPosition: "right",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at left, var(--bg), transparent 150%),
                           linear-gradient(to right, var(--bg), transparent 150%)`,
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center gap-2 text-base font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Free Component Library
            </div>
            <h1 className="font-display font-black text-6xl leading-[0.96] tracking-[-0.04em] mb-4" style={{ color: "var(--text-primary)" }}>
              Copy. Paste.{" "}
              <span className="font-serif italic font-normal text-acid">Ship faster.</span>
            </h1>
            <p className="text-base font-body leading-[1.8] max-w-[440px]" style={{ color: "var(--muted)" }}>
              Production-ready JSX components designed for local service business websites. No signup, no paywall, no BS.
            </p>
            <div className="flex gap-10 mt-9">
              {[["80+", "Components"], ["12", "Categories"], ["∞", "Free Forever"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display font-black text-[40px] leading-none tracking-[-0.03em] text-acid">{n}</div>
                  <div className="text-[11px] font-body mt-1" style={{ color: "var(--muted)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Ticker />

        {/* ── Main layout ── */}
        <div className="flex min-h-[80vh]">
          {/* Sidebar */}
          <aside
            className="hidden lg:flex flex-col w-64 border-r sticky top-16 h-[calc(100vh-64px)] overflow-y-auto py-8 flex-shrink-0"
            style={{ borderColor: "var(--border-color)", background: "var(--bg-2)" }}
          >
            <div className="px-5 pb-5 border-b mb-4" style={{ borderColor: "var(--border-color)" }}>
              <input
                type="text"
                placeholder="Search components..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg px-4 py-2.5 font-body text-[12px] focus:outline-none transition-colors"
                style={{
                  background: "var(--bg-3)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            {[
              { section: "Layout", cats: categories.slice(0, 3) },
              { section: "Content", cats: categories.slice(3, 7) },
              { section: "Conversion", cats: categories.slice(7, 10) },
              { section: "Niche", cats: categories.slice(10) },
            ].map(({ section, cats }) => (
              <div key={section} className="px-4 mb-2">
                <div className="text-[9px] font-display font-bold tracking-[0.15em] uppercase px-2 py-3" style={{ color: "var(--muted)" }}>
                  {section}
                </div>
                {cats.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { setActiveCategory(c.id); setSearch(""); }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[12px] font-body transition-all duration-200"
                    style={
                      activeCategory === c.id && !search
                        ? { background: "var(--acid-dim)", color: "var(--acid)", border: "1px solid var(--acid-border)" }
                        : { color: "var(--muted)" }
                    }
                  >
                    {c.label}
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background: "var(--bg-4)", color: "var(--muted)" }}
                    >
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <main className="flex-1 p-10">
            <div
              className="text-[10px] font-display font-bold tracking-[0.12em] uppercase pb-4 border-b mb-7"
              style={{ color: "var(--muted)", borderColor: "var(--border-color)" }}
            >
              {search
                ? `Search results for "${search}"`
                : `${categories.find((c) => c.id === activeCategory)?.label} — ${categories.find((c) => c.id === activeCategory)?.count} components`}
            </div>

            {displayed.length === 0 ? (
              <div className="text-center py-20 font-body" style={{ color: "var(--muted)" }}>
                No components found. Try a different search.
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {displayed.map((comp) => {
                  const isLoading = loadingSlug === comp.id;
                  return (
                    <div
                      key={comp.id}
                      className="group border rounded-xl overflow-hidden transition-all duration-200 hover:border-acid-border"
                      style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}
                    >
                      {/* Preview area */}
                      <div
                        className="h-48 border-b flex items-center justify-center relative p-5"
                        style={{ background: "var(--bg-3)", borderColor: "var(--border-color)" }}
                      >
                        <span
                          className="absolute top-2.5 left-3 text-[9px] font-body uppercase tracking-wider"
                          style={{ color: "var(--muted)" }}
                        >
                          Preview
                        </span>

                        {/* Copy button — appears on hover */}
                        <button
                          onClick={() => openModal(comp.id, comp.name, comp.code)}
                          disabled={isLoading}
                          className="absolute top-2 right-2 px-3 py-1.5 rounded-full text-black text-[10px] font-display font-black tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5"
                          style={{ background: isLoading ? "rgba(123,255,0,0.5)" : "#7BFF00" }}
                        >
                          {isLoading ? (
                            <>
                              <svg className="animate-spin" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                              </svg>
                              Loading...
                            </>
                          ) : (
                            "Copy JSX"
                          )}
                        </button>

                        <CompPreview id={comp.id} />
                      </div>

                      {/* Info bar */}
                      <div className="px-5 py-4 flex items-center justify-between">
                        <div>
                          <div className="font-display font-black text-[13px]" style={{ color: "var(--text-primary)" }}>
                            {comp.name}
                          </div>
                          <div className="text-[10px] font-body mt-0.5" style={{ color: "var(--muted)" }}>
                            {comp.meta}
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] font-body bg-acid-dim text-acid border border-acid-border">
                          Free
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>

        {/* ── Shiki Code Modal ── */}
        {modal && (
          <div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.88)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
          >
            <div
              className="w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
                maxHeight: "85vh",
                boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center justify-between px-5 py-3.5 flex-shrink-0 text-primary"
                style={{ background: "var(--bg-2)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModal(null)}
                    className="w-3 h-3 rounded-full hover:opacity-80 transition-opacity"
                    style={{ background: "#ff5f57" }}
                    title="Close"
                  />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>

                {/* Filename pill */}
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-[11px]"
                  style={{
                    background: "var(--bg-2)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                  </svg>
                  <span className="font-medium text-base" style={{ color: "var(--text-primary)" }}>{modal.name}.tsx</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-1 rounded font-body text-[10px] tracking-wider"
                    style={{
                      background: "rgba(96,165,250,0.1)",
                      border: "1px solid rgba(96,165,250,0.2)",
                      color: "#60a5fa",
                    }}
                  >
                    TSX
                  </span>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-lg font-display font-black text-[11px] tracking-wider uppercase transition-all duration-200"
                    style={{
                      background: copied ? "rgba(123,255,0,0.15)" : "#7BFF00",
                      color: copied ? "#7BFF00" : "#000",
                      border: copied ? "1px solid rgba(123,255,0,0.3)" : "1px solid transparent",
                    }}
                  >
                    {copied ? (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy JSX
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Tab bar */}
              <div
                className="flex items-center px-5 flex-shrink-0 bg-bg-2"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5 font-body text-[11px] border-b-2"
                  style={{ borderColor: "#7BFF00", color: "var(--text-primary)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                  </svg>
                  {modal.name}.tsx
                </div>
              </div>

              {/* ── Shiki highlighted code ── */}
              {/*
                Shiki outputs: <pre style="background:#..."><code>...</code></pre>
                We override sizing via Tailwind's [&>pre] selector,
                and let Shiki's inline styles handle all the token colors.
              */}
              <div
                className="flex-1 overflow-auto p-7
                bg-bg
                  [&>pre]:min-h-full
                  [&>pre]:m-0
                  [&>pre]:rounded-none
                  [&>pre]:!bg-bg
                  [&>pre]:p-0   // ❗ remove padding (important)
                  [&>pre>code]:p-6
                  [&>pre>code]:text-[13px]
                  [&>pre>code]:leading-[1.9]
                  [&>pre>code]:font-mono
                  [&_.line:hover]:bg-white/5
                "
                dangerouslySetInnerHTML={{ __html: modal.highlighted }}
              />

              {/* Status bar */}
              <div
                className="flex items-center justify-between px-5 py-1.5 flex-shrink-0"
                style={{ background: "var(--bg)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-body text-[10px]" style={{ color: "var(--muted)" }}>
                    {modal.code.split("\n").length} lines
                  </span>
                  <span className="font-body text-[10px]" style={{ color: "#4b5563" }}>UTF-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10px] flex items-center gap-1.5" style={{ color: "#7BFF00" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7BFF00] inline-block" />
                    Tailwind CSS
                  </span>
                  <span className="font-body text-[10px]" style={{ color: "#4b5563" }}>TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

// ── Preview thumbnails (unchanged) ──────────────────────────────────────────
function CompPreview({ id }: { id: string }) {
  const previews: Record<string, React.ReactNode> = {
    HeroMinimal: (
      <div className="w-full p-4 bg-[#060606] border border-[#1a1a1a] rounded-lg">
        <div className="h-1.5 rounded bg-[#7BFF00] w-[35%] mb-2 opacity-80" />
        <div className="h-1 rounded bg-[#1a1a1a] w-[70%] mb-1" />
        <div className="h-1 rounded bg-[#1a1a1a] w-[55%] mb-3" />
        <div className="flex gap-2">
          <div className="h-5 w-20 rounded-full bg-[#7BFF00]" />
          <div className="h-5 w-16 rounded-full bg-[#111] border border-[#222]" />
        </div>
      </div>
    ),
    EmergencyHero: (
      <div className="w-full bg-[#0f1923] border border-[#1e2d40] rounded-lg overflow-hidden">
        <div className="bg-orange-500 px-3 py-1.5 text-[9px] text-orange-950 font-bold flex items-center gap-1">
          🔴 24/7 Emergency — Call Now
        </div>
        <div className="p-3">
          <div className="h-1.5 rounded bg-orange-400 w-[40%] mb-1.5 opacity-80" />
          <div className="h-1 rounded bg-[#1e2d40] w-[75%] mb-1" />
          <div className="h-5 rounded bg-orange-500 w-28 mt-2 opacity-90" />
        </div>
      </div>
    ),
    HeroWithForm: (
      <div className="w-full grid grid-cols-2 gap-2 bg-[#070707] p-3 border border-[#1a1a1a] rounded-lg">
        <div>
          <div className="h-1.5 rounded bg-[#7BFF00] w-[70%] mb-1.5 opacity-80" />
          <div className="h-1 rounded bg-[#1a1a1a] w-full mb-1" />
          <div className="h-4 rounded bg-[#7BFF00] w-16" />
        </div>
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-2 flex flex-col gap-1.5">
          <div className="h-4 rounded bg-[#1a1a1a]" />
          <div className="h-4 rounded bg-[#1a1a1a]" />
          <div className="h-5 rounded bg-[#7BFF00] opacity-90" />
        </div>
      </div>
    ),
    PricingTable3Col: (
      <div className="w-full grid grid-cols-3 gap-1.5">
        {[false, true, false].map((hot, i) => (
          <div key={i} className={`p-2 rounded-lg border ${hot ? "bg-[#7BFF00] border-[#7BFF00]" : "bg-[#111] border-[#1a1a1a]"}`}>
            <div className={`h-1 rounded w-[60%] mb-1 ${hot ? "bg-black/20" : "bg-[#1a1a1a]"}`} />
            <div className={`h-2 rounded w-[40%] mb-1.5 ${hot ? "bg-black/20" : "bg-[#222]"}`} />
            <div className={`h-4 rounded ${hot ? "bg-black/30" : "bg-[#1a1a1a]"}`} />
          </div>
        ))}
      </div>
    ),
    QuoteRequestForm: (
      <div className="w-full p-3 bg-[#090909] border border-[#1a1a1a] rounded-lg flex flex-col gap-1.5">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-6 rounded-lg bg-[#111] border border-[#1e1e1e]" />
          <div className="h-6 rounded-lg bg-[#111] border border-[#1e1e1e]" />
        </div>
        <div className="h-6 rounded-lg bg-[#111] border border-[#1e1e1e]" />
        <div className="h-10 rounded-lg bg-[#111] border border-[#1e1e1e]" />
        <div className="h-6 rounded-lg bg-[#7BFF00]" />
      </div>
    ),
    BookingCalendar: (
      <div className="w-full p-3 bg-[#090909] border border-[#1a1a1a] rounded-lg">
        <div className="h-1 rounded bg-[#1a1a1a] w-[50%] mb-2" />
        <div className="grid grid-cols-7 gap-1 mb-2">
          {Array(21).fill(0).map((_, i) => (
            <div key={i} className={`h-4 rounded ${i === 8 ? "bg-[#7BFF00]" : "bg-[#111]"}`} />
          ))}
        </div>
        <div className="h-5 rounded bg-[#7BFF00] opacity-90" />
      </div>
    ),
    ReviewSlider: (
      <div className="w-full p-3 bg-[#090909] border border-[#1a1a1a] rounded-lg">
        <div className="flex gap-0.5 mb-2">
          {Array(5).fill(0).map((_, i) => <span key={i} className="text-[#7BFF00] text-xs">★</span>)}
        </div>
        <div className="h-1 rounded bg-[#1a1a1a] w-full mb-1" />
        <div className="h-1 rounded bg-[#1a1a1a] w-[80%] mb-1" />
        <div className="h-1 rounded bg-[#1a1a1a] w-[60%] mb-3" />
        <div className="flex justify-center gap-1.5">
          {[true, false, false].map((a, i) => (
            <div key={i} className={`h-1.5 rounded-full bg-[#7BFF00] ${a ? "w-5" : "w-1.5 opacity-40"}`} />
          ))}
        </div>
      </div>
    ),
  };

  return previews[id] || (
    <div className="w-full p-4 rounded-lg flex items-center justify-center text-[12px] font-body"
         style={{ background: "var(--bg-3)", border: "1px solid var(--border-color)", color: "var(--muted)" }}>
      Preview coming soon
    </div>
  );
}