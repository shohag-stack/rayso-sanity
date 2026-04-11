'use client'
import { useState } from "react";
import { SanityDocument } from "next-sanity";
import CtaNormal from "./section/CtaNormal";
import ProductCard from "./ProductCard";


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

export default function TemplatesClients({templates}: {templates: SanityDocument[]}) {
  const [active, setActive] = useState("all");

const filtered = templates.filter(
  (t) => active === "all" || t.tags?.includes(active)
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
              {
                filtered.length === 0 && (
                  <div className="col-span-full text-center text-muted">
                    No templates found for this category.
                  </div>
                )
              }
              {filtered.map((t) => (
                <ProductCard key={t._id} t={t} />
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
