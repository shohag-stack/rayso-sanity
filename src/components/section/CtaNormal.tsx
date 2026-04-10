import Link from "next/link";
import React from "react";

export default function CtaNormal() {
  return (
    <section className="py-20 px-8 md:px-12 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-base font-body tracking-[0.18em] uppercase text-acid mb-5">
          <span className="w-5 h-px bg-acid" />
          Custom Template?
        </div>
        <h2 className="font-display font-bold text-5xl tracking-[-0.02em] mb-4">
          Need a template for your specific niche?
        </h2>
        <p className="text-muted text-base font-body max-w-[500px] mx-auto mb-8 leading-[1.8]">
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
  );
}
