"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaNormal from "@/components/section/CtaNormal";
import ProductCard from "@/components/ProductCard";

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
    (t) => active === "all" || t.tags.includes(active),
  );

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

          <div className="relative max-w-7xl mx-auto z-10">
            <div className="flex items-center gap-2 text-base font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Template Library
            </div>
            <h1 className="font-display font-bold text-6xl leading-[0.96] tracking-[-0.04em] mb-5">
              Sanity Templates for
              <br />
              <span className="font-serif italic font-normal text-acid">
                Local Service Businesses
              </span>
            </h1>
            <p className="text-muted text-base font-body leading-[1.8] max-w-[540px]">
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
                  className={`px-5 py-2 rounded-full text-xs font-display font-semibold tracking-[0.05em] uppercase border transition-all duration-200 ${
                    active === f.value
                      ? "bg-acid text-black border-acid"
                      : "border-white/[0.07] text-muted hover:border-white/[0.13] hover:text-text-primary bg-transparent"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t) => (
                <ProductCard key={t.id} t={t} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CtaNormal />
      </main>
    </>
  );
}
