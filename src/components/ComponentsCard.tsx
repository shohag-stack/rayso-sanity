import ComponentTyped from "@/typed/Component";
import Image from "next/image";
import React, { Component } from "react";

export default function ComponentsCard({
  isLoading,
  openModal,
  comp,
}: {
  isLoading: boolean;
  openModal: (id: string, name: string, code: string) => void;
  comp: ComponentTyped;
}) {
  return (
    <div
      key={comp._id}
      className="group border rounded-xl overflow-hidden transition-all duration-200 hover:border-acid-border"
      style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}
    >
      {/* Preview area */}
      <div
        className="h-48 border-b flex items-center justify-center relative p-5"
        style={{
          background: "var(--bg-3)",
          borderColor: "var(--border-color)",
        }}
      >
        <span
          className="absolute top-2.5 left-3 text-[9px] font-body uppercase tracking-wider"
          style={{ color: "var(--muted)" }}
        >
          Preview
        </span>

        {/* Copy button — appears on hover */}
        <button
          onClick={() => openModal(comp._id, comp.name, comp.code)}
          disabled={isLoading}
          className="absolute top-2 right-2 px-3 py-1.5 rounded-full text-black text-[10px] font-display font-black tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5"
          style={{ background: isLoading ? "rgba(123,255,0,0.5)" : "#7BFF00" }}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Loading...
            </>
          ) : (
            "Copy JSX"
          )}
        </button>
        <Image src={comp.preview} alt={comp.name} width={300} height={200} />
      </div>
      <div className="p-3">
        <h5>{comp.name}</h5>
      </div>
    </div>
  );
}
