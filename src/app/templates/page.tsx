"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const templates = [
  {
    id: "realestate-pro",
    name: "RealEstate Pro",
    desc: "Full-featured real estate website with property listings CMS, IDX-ready architecture, agent profiles, neighborhood guides, and seller/buyer lead capture.",
    price: "Free",
    tags: ["real-estate", "free", "nextjs"],
    stack: ["Next.js 14", "Sanity v3"],
    bg: "#0a0a0a",
    accent: "#7BFF00",
    badge: "free",
  },
  {
    id: "servicebiz-starter",
    name: "ServiceBiz Starter",
    desc: "5-page template for any local service business. Includes homepage, services, about, testimonials, and contact with booking form.",
    price: "Free",
    tags: ["home-services", "free", "astro"],
    stack: ["Astro", "Sanity v3"],
    bg: "#f8f8f8",
    accent: "#1a1a1a",
    badge: "free",
  },
  {
    id: "mortgageflow",
    name: "MortgageFlow",
    desc: "Complete mortgage broker website with embedded calculator, rate comparison tables, loan program pages, NMLS compliance footer, and lead capture forms.",
    price: "$79",
    tags: ["mortgage", "premium", "nextjs"],
    stack: ["Next.js 14", "Sanity v3"],
    bg: "#0d1117",
    accent: "#3b82f6",
    badge: "premium",
  },
  {
    id: "cleanbook",
    name: "CleanBook Pro",
    desc: "Cleaning service website with online booking integration, service package pages, recurring client dashboard preview, and trust-building social proof sections.",
    price: "$69",
    tags: ["home-services", "premium", "nextjs"],
    stack: ["Next.js 14", "Sanity v3"],
    bg: "#faf5ff",
    accent: "#7c3aed",
    badge: "premium",
  },
  {
    id: "plumbr",
    name: "Plumbr Emergency",
    desc: "Plumbing & HVAC template with emergency CTA header, service area pages, Google Reviews integration, before/after gallery, and job quote request form.",
    price: "Free",
    tags: ["home-services", "free", "nextjs"],
    stack: ["Next.js 14", "Sanity v3"],
    bg: "#0f1923",
    accent: "#f97316",
    badge: "free",
  },
  {
    id: "lawnpro",
    name: "LawnPro Seasonal",
    desc: "Landscaping & lawn care template with seasonal service pages, project portfolio gallery CMS, instant quote calculator, and local city landing pages.",
    price: "$59",
    tags: ["home-services", "premium", "astro"],
    stack: ["Astro", "Sanity v3"],
    bg: "#f0fdf4",
    accent: "#16a34a",
    badge: "premium",
  },
];

const filters = [
  { label: "All Templates", value: "all" },
  { label: "Free", value: "free" },
  { label: "Premium", value: "premium" },
  { label: "Real Estate", value: "real-estate" },
  { label: "Home Services", value: "home-services" },
  { label: "Mortgage", value: "mortgage" },
  { label: "Next.js", value: "nextjs" },
  { label: "Astro", value: "astro" },
];

export default function TemplatesPage() {
  const [active, setActive] = useState("all");

  const filtered = templates.filter(
    (t) => active === "all" || t.tags.includes(active)
  );

  return (
    <>
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 px-8 md:px-12 border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Template Library
            </div>
            <h1 className="font-display font-black text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.04em] mb-5">
              Sanity Templates for
              <br />
              <span className="font-serif italic font-normal text-acid">
                Local Service Businesses
              </span>
            </h1>
            <p className="text-muted text-[15px] font-body leading-[1.8] max-w-[540px]">
              Production-ready website templates built on Sanity CMS. Drop them
              into your stack, customize to your brand, and launch in hours —
              not weeks.
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="py-16 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Filter bar */}
            <div className="flex flex-wrap gap-2 pb-8 border-b border-white/[0.07] mb-12">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`px-5 py-2 rounded-full text-[11px] font-display font-semibold tracking-[0.05em] uppercase border transition-all duration-200 ${
                    active === f.value
                      ? "bg-acid text-black border-acid"
                      : "border-white/[0.07] text-muted hover:border-white/[0.13] hover:text-white bg-transparent"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t) => (
                <Link
                  key={t.id}
                  href={`/templates/${t.id}`}
                  className="group border border-white/[0.07] rounded-xl overflow-hidden bg-bg-2 hover:border-acid-border hover:-translate-y-1 transition-all duration-200 block"
                >
                  {/* Preview */}
                  <div
                    className="h-64 relative overflow-hidden flex items-center justify-center p-6"
                    style={{ background: t.bg }}
                  >
                    <div className="w-[88%] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                      <div
                        className="h-7 flex items-center px-3 gap-1.5"
                        style={{ background: `${t.bg}cc` }}
                      >
                        {["#ff5f57","#febc2e","#28c840"].map(c => (
                          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
                        ))}
                      </div>
                      <div className="p-4" style={{ background: t.bg }}>
                        <div className="h-2 rounded mb-2" style={{ background: t.accent, width: "40%", opacity: 0.85 }} />
                        <div className="h-1.5 rounded mb-1.5" style={{ background: `${t.accent}25`, width: "78%" }} />
                        <div className="h-1.5 rounded mb-4" style={{ background: `${t.accent}18`, width: "58%" }} />
                        <div className="flex gap-2">
                          <div className="h-6 w-20 rounded" style={{ background: t.accent, opacity: 0.9 }} />
                          <div className="h-6 w-16 rounded border" style={{ borderColor: `${t.accent}40` }} />
                        </div>
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                      <span className="px-4 py-2 rounded-full bg-acid text-black text-[11px] font-display font-bold">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-wider border ${t.badge === "free" ? "bg-acid-dim text-acid border-acid-border" : "bg-white/[0.05] text-mid border-white/[0.07]"}`}>
                        {t.badge === "free" ? "Free" : "Premium"}
                      </span>
                      {t.stack.map(s => (
                        <span key={s} className="px-2.5 py-1 rounded text-[10px] font-body bg-bg-4 text-muted border border-white/[0.07]">{s}</span>
                      ))}
                    </div>
                    <h3 className="font-display font-bold text-[17px] text-white mb-2">{t.name}</h3>
                    <p className="text-[12px] text-muted font-body leading-[1.65] mb-5">{t.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className={`font-display font-black text-[18px] ${t.badge === "free" ? "text-acid" : "text-white"}`}>
                        {t.price}
                      </span>
                      <span className="px-4 py-2 rounded-full border border-acid-border text-acid text-[11px] font-display font-semibold tracking-wider hover:bg-acid hover:text-black transition-all duration-200">
                        Get Template →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-8 md:px-12 border-t border-white/[0.07]">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Custom Template?
            </div>
            <h2 className="font-display font-bold text-[clamp(24px,2.5vw,36px)] tracking-[-0.02em] mb-4">
              Need a template for your specific niche?
            </h2>
            <p className="text-muted text-[13px] font-body max-w-[400px] mx-auto mb-8 leading-[1.8]">
              We build custom Sanity templates for agencies and businesses with
              specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200"
            >
              Request a Custom Template →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
