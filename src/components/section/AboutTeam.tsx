import { team } from "@/data/Team";
import Image from "next/image";
import React from "react";

export default function AboutTeam() {



  return (
    <section
      className="py-24 px-8 md:px-12 border-t border-b"
      style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
            <span className="w-5 h-px bg-acid" />
            The Team
          </div>
          <h2
            className="font-display font-black text-[clamp(36px,4vw,60px)] leading-[1.05] tracking-[-0.025em]"
            style={{ color: "var(--text-primary)" }}
          >
            Small team.{" "}
            <span className="font-serif italic font-normal text-acid">
              Huge output.
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div
              key={m.name}
              className="border rounded-xl overflow-hidden hover:border-acid-border transition-all duration-200"
              style={{
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="h-[350px] text-6xl border-b overflow-hidden"
                style={{ background: m.bg, borderColor: "var(--border-color)" }}
              >
                <Image src={m.emoji} alt={m.name} width={800} height={400} className="object-cover" />
              </div>
              <div className="p-6">
                <div
                  className="font-display font-bold text-[18px] mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {m.name}
                </div>
                <div className="text-base text-acid font-body tracking-wider mb-3">
                  {m.role}
                </div>
                <p
                  className="text-sm font-body leading-[1.7]"
                  style={{ color: "var(--muted)" }}
                >
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
