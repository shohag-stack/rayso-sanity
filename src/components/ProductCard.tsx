import Link from "next/link";
import React from "react";

export interface Template {
  id: string;
  name: string;
  desc: string;
  price: string;
  tags: string[];
  stack: string[];
  bg: string;
  accent: string;
  badge: string;
}

export default function ProductCard({ t }: { t: Template }) {
  return (
    <Link
      key={t.id}
      href={`/templates/${t.id}`}
      className="group border border-white/[0.07] rounded-xl overflow-hidden bg-bg-2 hover:-translate-y-1 transition-all duration-200 block"
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
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div
                key={c}
                className="w-2 h-2 rounded-full"
                style={{ background: c }}
              />
            ))}
          </div>
          <div className="p-4" style={{ background: t.bg }}>
            <div
              className="h-2 rounded mb-2"
              style={{ background: t.accent, width: "40%", opacity: 0.85 }}
            />
            <div
              className="h-1.5 rounded mb-1.5"
              style={{ background: `${t.accent}25`, width: "78%" }}
            />
            <div
              className="h-1.5 rounded mb-4"
              style={{ background: `${t.accent}18`, width: "58%" }}
            />
            <div className="flex gap-2">
              <div
                className="h-6 w-20 rounded"
                style={{ background: t.accent, opacity: 0.9 }}
              />
              <div
                className="h-6 w-16 rounded border"
                style={{ borderColor: `${t.accent}40` }}
              />
            </div>
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-20 transition-opacity duration-200 flex items-center justify-center gap-3"/>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider border ${
              t.badge === "free"
                ? "bg-acid-dim text-acid border-acid-border"
                : "bg-acid text-black"
            }`}
          >
            {t.badge === "free" ? "Free" : "Premium"}
          </span>
          {t.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded text-xs font-body border-acid-dim border text-primary"
            >
              {s}
            </span>
          ))}
        </div>
        <h3 className="font-display font-bold text-lg text-primary mb-2">
          {t.name}
        </h3>
        <p className="text-[12px] text-muted font-body leading-[1.65] mb-5">
          {t.desc}
        </p>
        <div className="flex items-center justify-between">
          <span
            className={`font-display font-bold text-[18px] ${
              t.badge === "free" ? "text-acid" : "text-white"
            }`}
          >
            {t.price}
          </span>
          <span className="px-4 py-2 rounded-full border border-acid-border text-acid text-sm font-display font-semibold tracking-wider hover:bg-acid hover:text-black transition-all duration-200">
            Get Template →
          </span>
        </div>
      </div>
    </Link>
  );
}
