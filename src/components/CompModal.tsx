import React from 'react'

export default function CompModal({setModal, modal, copyCode, copied}: {setModal: (m: {id: string, name: string, code: string, highlighted: string} | null) => void, modal: {id: string, name: string, code: string, highlighted: string}, copyCode: () => void, copied: boolean}) {
  return (
   <div
            className="fixed inset-0 z-[2000] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.88)" }}
            onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
          >
            <div
              className="w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.08)",
                maxHeight: "85vh",
                boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center justify-between px-5 py-3.5 flex-shrink-0 text-primary"
                style={{ background: "var(--bg-2)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModal(null)}
                    className="w-3 h-3 rounded-full hover:opacity-80 transition-opacity"
                    style={{ background: "#ff5f57" }}
                    title="Close"
                  />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>

                {/* Filename pill */}
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full font-body text-[11px]"
                  style={{
                    background: "var(--bg-2)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                  </svg>
                  <span className="font-medium text-base" style={{ color: "var(--text-primary)" }}>{modal.name}.tsx</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-1 rounded font-body text-[10px] tracking-wider"
                    style={{
                      background: "rgba(96,165,250,0.1)",
                      border: "1px solid rgba(96,165,250,0.2)",
                      color: "#60a5fa",
                    }}
                  >
                    TSX
                  </span>
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-lg font-display font-black text-[11px] tracking-wider uppercase transition-all duration-200"
                    style={{
                      background: copied ? "rgba(123,255,0,0.15)" : "#7BFF00",
                      color: copied ? "#7BFF00" : "#000",
                      border: copied ? "1px solid rgba(123,255,0,0.3)" : "1px solid transparent",
                    }}
                  >
                    {copied ? (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        Copy JSX
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Tab bar */}
              <div
                className="flex items-center px-5 flex-shrink-0 bg-bg-2"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="flex items-center gap-2 px-4 py-2.5 font-body text-[11px] border-b-2"
                  style={{ borderColor: "#7BFF00", color: "var(--text-primary)" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                  </svg>
                  {modal.name}.tsx
                </div>
              </div>

              {/* ── Shiki highlighted code ── */}
              {/*
                Shiki outputs: <pre style="background:#..."><code>...</code></pre>
                We override sizing via Tailwind's [&>pre] selector,
                and let Shiki's inline styles handle all the token colors.
              */}
              <div
                className="flex-1 overflow-auto p-7
                bg-bg
                  [&>pre]:min-h-full
                  [&>pre]:m-0
                  [&>pre]:rounded-none
                  [&>pre]:!bg-bg
                  [&>pre]:p-0   // ❗ remove padding (important)
                  [&>pre>code]:p-6
                  [&>pre>code]:text-[13px]
                  [&>pre>code]:leading-[1.9]
                  [&>pre>code]:font-mono
                  [&_.line:hover]:bg-white/5
                "
                dangerouslySetInnerHTML={{ __html: modal.highlighted }}
              />

              {/* Status bar */}
              <div
                className="flex items-center justify-between px-5 py-1.5 flex-shrink-0"
                style={{ background: "var(--bg)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-body text-[10px]" style={{ color: "var(--muted)" }}>
                    {modal.code.split("\n").length} lines
                  </span>
                  <span className="font-body text-[10px]" style={{ color: "#4b5563" }}>UTF-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10px] flex items-center gap-1.5" style={{ color: "#7BFF00" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7BFF00] inline-block" />
                    Tailwind CSS
                  </span>
                  <span className="font-body text-[10px]" style={{ color: "#4b5563" }}>TypeScript</span>
                </div>
              </div>
            </div>
          </div>
  )
}
