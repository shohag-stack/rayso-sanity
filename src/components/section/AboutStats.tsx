import React from "react";

export default function AboutStats() {
  return (
    <section
      className="py-16 px-8 md:px-12 border-b"
      style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 border rounded-xl overflow-hidden"
          style={{ borderColor: "var(--border-color)" }}
        >
          {[
            ["40+", "Websites Delivered"],
            ["6", "Industries Served"],
            ["3.2×", "Avg. Lead Increase"],
            ["97%", "Client Satisfaction"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="px-9 py-9 border-r border-b"
              style={{
                background: "var(--bg-3)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="font-display font-bold text-[clamp(36px,4vw,56px)] leading-none tracking-[-0.03em] text-acid mb-1">
                {n}
              </div>
              <div
                className="text-[11px] font-body"
                style={{ color: "var(--muted)" }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
