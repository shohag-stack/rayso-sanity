"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import { highlightCode } from "@/app/actions/highlight";
import Sidebar from "@/components/section/Sidebar";
import ComponentsCard from "@/components/ComponentsCard";
import CompModal from "@/components/CompModal";
import { client } from "@/sanity/client";
import ComponentTyped from "@/typed/Component";

const baseCategories = [
  { id: "heroes", label: "Hero Sections" },
  { id: "navbars", label: "Navbars" },
  { id: "footers", label: "Footers" },
  { id: "pricing", label: "Pricing Tables" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faqs", label: "FAQs" },
  { id: "accordions", label: "Accordions" },
  { id: "features", label: "Features" },
];




const COMPONENTS_QUERY = `
*[_type == "component"]{
  _id,
  name,
  code,
  "slug": slug.current,
  "preview": preview.asset->url,
  categories
}
`;

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
  id: string;
  name: string;
  code: string;
  highlighted: string;
} | null;


const options = { next: { revalidate: 30 } };

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState("heroes");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<ModalState>(null);
  const [copied, setCopied] = useState(false);
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
  const [sanityCompo, setSanityCompo] = useState<ComponentTyped[]>([]);

useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(COMPONENTS_QUERY);
      setSanityCompo(data);
    };

    fetchData();
  }, []);


const categories = useMemo(() => {
  return baseCategories.map((cat) => ({
    ...cat,
    count: sanityCompo.filter((c) =>
      c.categories?.includes(cat.id)
    ).length,
  }));
}, [sanityCompo]);

  // ── Filter logic ───────────────────────────────────────────────────────────
  const displayed = search
    ? sanityCompo.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
      )
    : sanityCompo.filter((c) => c.categories?.includes(activeCategory));

  // ── Open modal: highlight server-side then show ────────────────────────────
  const openModal = useCallback(
    async (id: string, name: string, code: string) => {
      setLoadingSlug(id);
      try {
        const highlighted = await highlightCode(code);
        console.log("showing highlited code", highlighted);
        setModal({ id, name, code, highlighted });
      } catch (err) {
        console.error("Highlight error:", err);
        // Fallback: show plain code if Shiki fails
        setModal({
          id,
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
            <h1
              className="font-display font-black text-6xl leading-[0.96] tracking-[-0.04em] mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Copy. Paste.{" "}
              <span className="font-serif italic font-normal text-acid">
                Ship faster.
              </span>
            </h1>
            <p
              className="text-base font-body leading-[1.8] max-w-[440px]"
              style={{ color: "var(--muted)" }}
            >
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
                  <div className="font-display font-black text-[40px] leading-none tracking-[-0.03em] text-acid">
                    {n}
                  </div>
                  <div
                    className="text-[11px] font-body mt-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Ticker />

        {/* ── Main layout ── */}
        <div className="flex min-h-[80vh]">
          {/* Sidebar */}
          <Sidebar
            search={search}
            setSearch={setSearch}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          {/* Main content */}
          <main className="flex-1 p-10">
            <div
              className="text-[10px] font-display font-bold tracking-[0.12em] uppercase pb-4 border-b mb-7"
              style={{
                color: "var(--muted)",
                borderColor: "var(--border-color)",
              }}
            >
              {search
                ? `Search results for "${search}"`
                : `${categories.find((c) => c.id === activeCategory)?.label} — ${categories.find((c) => c.id === activeCategory)?.count} components`}
            </div>

            {displayed.length === 0 ? (
              <div
                className="text-center py-20 font-body"
                style={{ color: "var(--muted)" }}
              >
                No components found. Try a different search.
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                {displayed.map((comp) => {
                  const isLoading = loadingSlug === comp._id;
                  return (
                    <ComponentsCard
                      key={comp._id}
                      isLoading={isLoading}
                      openModal={openModal}
                      comp={comp}
                    />
                  );
                })}
              </div>
            )}
          </main>
        </div>

        {/* ── Shiki Code Modal ── */}
        {modal && (
          <CompModal
            setModal={setModal}
            copied={copied}
            modal={modal}
            copyCode={() => copyCode()}
          />
        )}
      </main>
    </>
  );
}
