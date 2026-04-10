"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import Image from "next/image";

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
        <h1 className="font-display font-bold text-[clamp(52px,7vw,104px)] leading-[0.96] tracking-[-0.04em] text-white mb-6">
          {title}
        </h1>
        <p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed font-body">
          {subtitle}
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href={href}
            className="px-8 py-4 bg-[#7BFF00] text-black font-display font-bold
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
      {/* Emergency Banner */}
      <div className="bg-orange-500 text-orange-950 font-bold text-sm
                      flex items-center gap-3 px-6 py-3">
        <span className="animate-pulse">🔴</span>
        <span>24/7 Emergency Service Available</span>
        <a
          href={\`tel:\${phone}\`}
          className="ml-auto underline hover:no-underline"
        >
          Call Now: {phone}
        </a>
      </div>

      {/* Main Hero */}
      <div className="flex-1 flex items-center px-6 py-20 max-w-5xl mx-auto w-full">
        <div>
          <p className="text-orange-400 text-xs font-bold uppercase
                        tracking-widest mb-4">
            {businessName}
          </p>
          <h1 className="font-display font-bold text-[clamp(48px,6vw,88px)]
                         text-white leading-none tracking-tight mb-6">
            {headline}
          </h1>
          <div className="flex flex-wrap gap-3 mb-10">
            {services.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-white/10 rounded-full text-white text-sm"
              >
                ✓ {s}
              </span>
            ))}
          </div>
          <a
            href={\`tel:\${phone}\`}
            className="inline-flex items-center gap-3 px-8 py-5
                       bg-orange-500 text-white font-display font-bold rounded-xl
                       hover:bg-orange-400 transition-colors text-lg"
          >
            📞 Call {phone}
          </a>
        </div>
      </div>
    </section>
  )
}`,
  },
  {
    id: "HeroWithForm",
    name: "HeroWithForm",
    meta: "Split layout • Inline lead capture",
    category: "heroes",
    code: `export default function HeroWithForm() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 bg-[#080808]">
      <div className="flex items-center px-12 py-24">
        <div>
          <h1 className="font-display font-bold text-5xl text-white
                         leading-tight mb-4 tracking-tight">
            Your Tagline <br />Goes Here
          </h1>
          <p className="text-neutral-400 mb-8 leading-relaxed font-body">
            Supporting copy about what makes your service great.
          </p>
        </div>
      </div>
      <div className="flex items-center px-12 py-24 bg-[#0a0a0a] border-l border-neutral-900">
        <QuoteRequestForm />
      </div>
    </section>
  )
}`,
  },
  {
    id: "PricingTable3Col",
    name: "PricingTable3Col",
    meta: "3-tier • Featured highlight • Toggle",
    category: "pricing",
    code: `const plans = [
  {
    name: 'Starter',
    price: 999,
    features: ['5 Pages', 'SEO Setup', 'Mobile Responsive', '1 Revision Round'],
    popular: false,
  },
  {
    name: 'Growth',
    price: 1999,
    features: ['10 Pages', 'SEO + CRO', 'CMS Integration', '3 Revision Rounds', 'Analytics Setup'],
    popular: true,
  },
  {
    name: 'Premium',
    price: 3499,
    features: ['Unlimited Pages', 'Full Stack Dev', 'Custom Integrations', 'Priority Support'],
    popular: false,
  },
]

export default function PricingTable3Col() {
  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={\`rounded-2xl border p-8 \${
              plan.popular
                ? 'bg-[#7BFF00] border-[#7BFF00]'
                : 'bg-[#0f0f0f] border-neutral-800'
            }\`}
          >
            {plan.popular && (
              <div className="text-[10px] font-bold uppercase tracking-widest text-black/60 mb-4">
                Most Popular
              </div>
            )}
            <div className={\`font-display text-lg font-bold mb-2 \${plan.popular ? 'text-black' : 'text-white'}\`}>
              {plan.name}
            </div>
            <div className={\`font-display text-4xl font-extrabold mb-6 \${plan.popular ? 'text-black' : 'text-white'}\`}>
              \${plan.price.toLocaleString()}
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className={\`text-sm flex items-center gap-2 \${
                    plan.popular ? 'text-black/80' : 'text-neutral-400'
                  }\`}
                >
                  <span className="text-current">✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={\`w-full py-3 rounded-full font-display font-semibold text-sm transition-colors \${
                plan.popular
                  ? 'bg-black text-white hover:bg-neutral-900'
                  : 'bg-[#7BFF00] text-black hover:bg-white'
              }\`}
            >
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
    id: "ServicePackages",
    name: "ServicePackages",
    meta: "Row layout • Best for service menus",
    category: "pricing",
    code: `const packages = [
  { name: 'Basic Clean', price: '$89', desc: '1BR / Studio', popular: false },
  { name: 'Standard Clean', price: '$149', desc: '2–3BR Home', popular: true },
  { name: 'Deep Clean', price: '$249', desc: 'Full home + extras', popular: false },
]

export default function ServicePackages() {
  return (
    <div className="space-y-3 max-w-xl">
      {packages.map((p) => (
        <div
          key={p.name}
          className={\`flex items-center justify-between p-5 rounded-xl border \${
            p.popular
              ? 'border-[#7BFF00] bg-[rgba(123,255,0,0.08)]'
              : 'border-neutral-800 bg-neutral-900'
          }\`}
        >
          <div>
            <div className={\`font-display font-bold \${p.popular ? 'text-[#7BFF00]' : 'text-white'}\`}>
              {p.name}
            </div>
            <div className="text-sm text-neutral-500 font-body">{p.desc}</div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-xl font-bold text-white">{p.price}</span>
            <button
              className={\`px-4 py-2 rounded-full text-sm font-display font-semibold \${
                p.popular
                  ? 'bg-[#7BFF00] text-black'
                  : 'bg-neutral-800 text-white hover:bg-neutral-700'
              }\`}
            >
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
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
  const [form, setForm] = useState({
    name: '', email: '', phone: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your API / form handler (e.g. Resend, Formspree)
    console.log('Form submitted:', form)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-xl font-bold text-white mb-2">
          Request received!
        </h3>
        <p className="text-neutral-400 font-body">
          We&apos;ll get back to you within 2 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-8 space-y-4"
    >
      <h2 className="font-display text-xl font-bold text-white mb-6">
        Get a Free Quote
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          required
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="col-span-1 bg-neutral-900 border border-neutral-800 text-white
                     px-4 py-3 rounded-xl text-sm placeholder:text-neutral-600
                     focus:border-[#7BFF00] focus:outline-none transition-colors font-body"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="bg-neutral-900 border border-neutral-800 text-white
                     px-4 py-3 rounded-xl text-sm placeholder:text-neutral-600
                     focus:border-[#7BFF00] focus:outline-none transition-colors font-body"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full bg-neutral-900 border border-neutral-800 text-white
                   px-4 py-3 rounded-xl text-sm placeholder:text-neutral-600
                   focus:border-[#7BFF00] focus:outline-none transition-colors font-body"
      />
      <textarea
        rows={4}
        placeholder="Tell us about your project..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full bg-neutral-900 border border-neutral-800 text-white
                   px-4 py-3 rounded-xl text-sm placeholder:text-neutral-600
                   focus:border-[#7BFF00] focus:outline-none transition-colors
                   resize-none font-body"
      />
      <button
        type="submit"
        className="w-full bg-[#7BFF00] text-black font-display font-bold py-4
                   rounded-xl hover:bg-white transition-colors tracking-wider uppercase text-sm"
      >
        Get My Free Quote →
      </button>
    </form>
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
      <h3 className="font-display font-bold text-white mb-5">Pick a Date</h3>
      <div className="grid grid-cols-7 gap-1.5 mb-6">
        {days.map((d) => (
          <button
            key={d}
            onClick={() => setSelectedDay(d)}
            className={\`aspect-square rounded-lg text-sm font-display font-medium
                        transition-colors \${
              selectedDay === d
                ? 'bg-[#7BFF00] text-black'
                : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
            }\`}
          >
            {d}
          </button>
        ))}
      </div>

      {selectedDay && (
        <div>
          <h4 className="text-sm text-neutral-400 font-body mb-3">Available Times</h4>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={\`py-2.5 px-3 rounded-xl font-body text-xs transition-colors \${
                  selectedTime === t
                    ? 'bg-[#7BFF00] text-black font-semibold'
                    : 'bg-neutral-800 text-neutral-400 hover:bg-[#7BFF00] hover:text-black'
                }\`}
              >
                {t}
              </button>
            ))}
          </div>
          {selectedTime && (
            <button className="w-full py-3.5 bg-[#7BFF00] text-black font-display
                               font-bold rounded-xl hover:bg-white transition-colors
                               text-sm tracking-wider uppercase">
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
  {
    name: 'Sarah M.',
    role: 'Real Estate Agent',
    text: 'rayso.studio completely transformed our web presence. Leads are up 4x in 3 months.',
    stars: 5,
  },
  {
    name: 'Mike T.',
    role: 'Plumbing Company Owner',
    text: 'We went from page 3 to #1 on Google in 4 months. The emergency CTA design alone doubled our call volume.',
    stars: 5,
  },
  {
    name: 'Jennifer K.',
    role: 'Mortgage Broker',
    text: 'The calculator and rate pages are exactly what my clients needed. Applications are up significantly.',
    stars: 5,
  },
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
          &ldquo;{reviews[active].text}&rdquo;
        </p>
        <div>
          <div className="font-display font-bold text-white">{reviews[active].name}</div>
          <div className="text-sm text-neutral-500 font-body">{reviews[active].role}</div>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={\`w-2 h-2 rounded-full transition-all \${
              i === active ? 'bg-[#7BFF00] w-6' : 'bg-neutral-700'
            }\`}
          />
        ))}
      </div>
    </div>
  )
}`,
  },
];

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("heroes");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ name: string; code: string } | null>(
    null,
  );
  const [copied, setCopied] = useState(false);

  const filtered = components.filter((c) => {
    const matchCat = c.category === activeCategory;
    const matchSearch =
      search === "" ||
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.meta.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const allSearched = search
    ? components.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.meta.toLowerCase().includes(search.toLowerCase()),
      )
    : filtered;

  const displayed = search ? allSearched : filtered;

  const copyCode = () => {
    if (!modal) return;
    navigator.clipboard.writeText(modal.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section
          className=" relative pt-36 pb-20 px-8 md:px-12 bg-cover"
          style={{
            backgroundImage: "url('assets/img/templates.png')",
            backgroundPosition: "right",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `
            radial-gradient(circle at left, var(--bg), transparent 150%),
            linear-gradient(to right, var(--bg), transparent 150%)
          `,
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex gap-16 items-center">
              <div className="w-full">
                <div className="flex items-center gap-2 text-base font-body tracking-[0.18em] uppercase text-acid mb-5">
                  <span className="w-5 h-px bg-acid" />
                  Free Component Library
                </div>
                <h1 className="font-display font-bold text-6xl leading-[0.96] tracking-[-0.04em] mb-4">
                  Copy. Paste. <span className="font-serif italic font-normal text-acid">
                    Ship faster.
                  </span>
                </h1>
                <p className="text-muted text-base font-body leading-[1.8] max-w-[440px]">
                  Production-ready JSX components designed for local service
                  business websites. No signup, no paywall, no BS.
                </p>
                <div className="flex gap-10 mt-9">
                  {[
                    ["80+", "Components"],
                    ["12", "Categories"],
                    ["∞", "Free Forever"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <div className="font-display font-bold text-[40px] leading-none tracking-[-0.03em] text-acid">
                        {n}
                      </div>
                      <div className="text-[11px] text-muted font-body mt-1">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Ticker />

        {/* Main layout */}
        <div className="flex min-h-[80vh]">
          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col w-64 border-r border-white/[0.07] sticky top-16 h-[calc(100vh-64px)] overflow-y-auto bg-bg-2 py-8 flex-shrink-0">
            <div className="px-5 pb-5 border-b border-white/[0.07] mb-4">
              <input
                type="text"
                placeholder="Search components..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-bg-3 border border-white/[0.07] rounded-lg px-4 py-2.5 font-body text-[12px] text-white placeholder:text-muted focus:border-acid-border focus:outline-none transition-colors"
              />
            </div>
            {[
              { section: "Layout", cats: categories.slice(0, 3) },
              { section: "Content", cats: categories.slice(3, 7) },
              { section: "Conversion", cats: categories.slice(7, 10) },
              { section: "Niche", cats: categories.slice(10) },
            ].map(({ section, cats }) => (
              <div key={section} className="px-4 mb-2">
                <div className="text-[9px] font-display font-bold tracking-[0.15em] uppercase text-muted px-2 py-3">
                  {section}
                </div>
                {cats.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCategory(c.id);
                      setSearch("");
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[12px] font-body transition-all duration-200 ${
                      activeCategory === c.id && !search
                        ? "bg-acid-dim text-acid border border-acid-border"
                        : "text-muted hover:bg-bg-3 hover:text-white"
                    }`}
                  >
                    {c.label}
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-bg-4 text-muted">
                      {c.count}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </aside>

          {/* Main */}
          <main className="flex-1 p-10">
            <div className="text-[10px] font-display font-bold tracking-[0.12em] uppercase text-muted pb-4 border-b border-white/[0.07] mb-7">
              {search
                ? `Search results for "${search}"`
                : `${categories.find((c) => c.id === activeCategory)
                    ?.label} — ${categories.find((c) => c.id === activeCategory)
                    ?.count} components`}
            </div>

            {displayed.length === 0 ? (
              <div className="text-center py-20 text-muted font-body">
                No components found. Try a different search.
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {displayed.map((comp) => (
                  <div
                    key={comp.id}
                    className="group border border-white/[0.07] rounded-xl overflow-hidden bg-bg-2 hover:border-acid-border transition-all duration-200"
                  >
                    {/* Preview */}
                    <div className="h-48 bg-bg-3 border-b border-white/[0.07] flex items-center justify-center relative p-5">
                      <span className="absolute top-2.5 left-3 text-[9px] text-muted font-body uppercase tracking-wider">
                        Preview
                      </span>
                      <button
                        onClick={() =>
                          setModal({ name: comp.name, code: comp.code })
                        }
                        className="absolute top-2 right-2 px-3 py-1.5 rounded-full bg-acid text-black text-[10px] font-display font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      >
                        Copy JSX
                      </button>
                      {/* Mock preview */}
                      <CompPreview id={comp.id} />
                    </div>
                    {/* Info */}
                    <div className="px-5 py-4 flex items-center justify-between">
                      <div>
                        <div className="font-display font-bold text-[13px] text-white">
                          {comp.name}
                        </div>
                        <div className="text-[10px] text-muted font-body mt-0.5">
                          {comp.meta}
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-body bg-acid-dim text-acid border border-acid-border">
                        Free
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Code Modal */}
        {modal && (
          <div
            className="fixed inset-0 z-[2000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModal(null);
            }}
          >
            <div className="bg-bg-2 border border-white/[0.07] rounded-xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
                <span className="font-display font-bold text-[14px] text-white">
                  {modal.name}.tsx
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={copyCode}
                    className="px-4 py-2 rounded-full bg-acid text-black font-display font-bold text-[11px] tracking-wider uppercase hover:bg-white transition-colors"
                  >
                    {copied ? "Copied! ✓" : "Copy Code"}
                  </button>
                  <button
                    onClick={() => setModal(null)}
                    className="px-4 py-2 rounded-full border border-white/[0.07] text-muted font-body text-[11px] hover:border-white/[0.13] hover:text-white transition-all"
                  >
                    ✕ Close
                  </button>
                </div>
              </div>
              <pre className="flex-1 overflow-y-auto p-6 font-body text-[12px] leading-[1.8] bg-[#0a0a0a] text-mid whitespace-pre-wrap">
                {modal.code}
              </pre>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

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
          <div className="h-1 rounded bg-[#1a1a1a] w-[60%] mb-2" />
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
          <div
            key={i}
            className={`p-2 rounded-lg border ${
              hot
                ? "bg-[#7BFF00] border-[#7BFF00]"
                : "bg-[#111] border-[#1a1a1a]"
            }`}
          >
            <div
              className={`h-1 rounded w-[60%] mb-1 ${
                hot ? "bg-black/20" : "bg-[#1a1a1a]"
              }`}
            />
            <div
              className={`h-2 rounded w-[40%] mb-1.5 ${
                hot ? "bg-black/20" : "bg-[#222]"
              }`}
            />
            <div
              className={`h-4 rounded ${hot ? "bg-black/30" : "bg-[#1a1a1a]"}`}
            />
          </div>
        ))}
      </div>
    ),
    ServicePackages: (
      <div className="w-full flex flex-col gap-1.5">
        {[false, true, false].map((hot, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-3 py-2 rounded-lg border ${
              hot
                ? "border-[#7BFF00] bg-acid-dim"
                : "border-[#1a1a1a] bg-[#111]"
            }`}
          >
            <div
              className={`h-1 rounded w-[40%] ${hot ? "bg-acid" : "bg-[#222]"}`}
            />
            <div
              className={`h-4 w-10 rounded-full ${
                hot ? "bg-acid" : "bg-[#1a1a1a]"
              }`}
            />
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
          {Array(21)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`h-4 rounded ${
                  i === 8 ? "bg-[#7BFF00]" : "bg-[#111]"
                }`}
              />
            ))}
        </div>
        <div className="h-5 rounded bg-[#7BFF00] opacity-90" />
      </div>
    ),
    ReviewSlider: (
      <div className="w-full p-3 bg-[#090909] border border-[#1a1a1a] rounded-lg">
        <div className="flex gap-0.5 mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-[#7BFF00] text-xs">
                ★
              </span>
            ))}
        </div>
        <div className="h-1 rounded bg-[#1a1a1a] w-full mb-1" />
        <div className="h-1 rounded bg-[#1a1a1a] w-[80%] mb-1" />
        <div className="h-1 rounded bg-[#1a1a1a] w-[60%] mb-3" />
        <div className="flex justify-center gap-1.5">
          {[true, false, false].map((a, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full bg-[#7BFF00] transition-all ${
                a ? "w-5" : "w-1.5 opacity-40"
              }`}
            />
          ))}
        </div>
      </div>
    ),
  };

  return (
    previews[id] || (
      <div className="w-full p-4 bg-bg-3 border border-white/[0.07] rounded-lg flex items-center justify-center text-muted text-[12px] font-body">
        Preview coming soon
      </div>
    )
  );
}
