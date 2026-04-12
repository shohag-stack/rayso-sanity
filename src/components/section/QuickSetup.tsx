import Link from 'next/link'

export default function QuickSetup() {
  return (
    <section className="py-24 px-8 md:px-12 bg-bg-2">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-body tracking-[0.18em] uppercase text-acid mb-5">
                  <span className="w-5 h-px bg-acid" />
                  Quick Setup
                </div>
                <h2 className="font-display font-bold text-5xl tracking-[-0.02em] mb-4">
                  Live in under{" "}
                  <span className="font-serif italic font-normal text-acid">
                    30 minutes
                  </span>
                </h2>
                <p className="text-muted text-xl font-body leading-[1.8] mb-8">
                  Full documentation included. Step-by-step setup guide from
                  clone to deployed.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-acid-border text-acid font-display font-semibold text-[12px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200"
                >
                  Need Help ?
                </Link>
              </div>
              <div className="border border-white/[0.07] rounded-xl overflow-hidden">
                {[
                  {
                    step: "Download the code",
                    code: "Open it in your terminal",
                    accent: true,
                  },
                  {
                    step: "2. Install dependencies",
                    code: "npm install",
                    accent: false,
                  },
                  {
                    step: "3. Configure environment",
                    code: "cp .env.example .env.local",
                    accent: false,
                  },
                  { step: "4. Run locally", code: "Run npm run build and deploy to your preferred platform", accent: true },
                ].map(({ step, code, accent }, i) => (
                  <div
                    key={i}
                    className="px-6 py-5 bg-bg-2 border-b border-border last:border-0"
                  >
                    <div className="text-sm text-muted font-body mb-2 uppercase tracking-wider">
                      {step}
                    </div>
                    <code
                      className={`font-body text-base ${accent ? "text-acid" : "text-primary"}`}
                    >
                      {code}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}
