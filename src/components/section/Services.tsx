import React from "react";
import { services } from "@/data/services";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-14 flex-wrap gap-5">
          <div>
            <div className="flex items-center gap-2 text-sm font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              What We Do
            </div>
            <h2
              className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]"
              style={{ color: "var(--text-primary)" }}
            >
              Full-stack web services
              <br />
              <span className="font-serif italic font-normal text-acid">
                under one roof
              </span>
            </h2>
          </div>
          <p
            className="max-w-[340px] text-base font-body leading-[1.8]"
            style={{ color: "var(--muted)" }}
          >
            From first wireframe to fully deployed, SEO-indexed website — we
            handle every layer of the stack so you don&apos;t have to.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden"
          style={{ borderColor: "var(--border-color)" }}
        >
          {services.map((s, i) => (
            <div
              key={s.num}
              className="group p-10 transition-colors duration-200 cursor-default border-b border-r"
              style={{
                background: "var(--bg-2)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="font-display text-[10px] font-bold tracking-[0.15em] uppercase mb-6 group-hover:text-acid transition-colors duration-200"
                style={{ color: "var(--muted)" }}
              >
                {s.num}
              </div>
              <div className="w-full rounded-xl bg-acid-dim flex items-center justify-center text-xl mb-5">
                <Image src={s.icon} alt={s.title} width={400} height={300} />
              </div>
              <h3
                className="font-display font-bold text-[20px] tracking-[-0.01em] mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {s.title}
              </h3>
              <p
                className="text-base leading-[1.7] font-body mb-6"
                style={{ color: "var(--muted)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
