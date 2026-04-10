import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  { client: "Real Estate", name: "Coastal Realty Group", desc: "Complete redesign of a mid-size real estate team's website. Rebuilt in Next.js + Sanity with IDX integration, neighborhood guides, and conversion-focused lead funnels.", tags: ["Next.js", "Sanity CMS", "IDX Integration", "SEO"], results: [{ num: "4.1×", label: "More Leads / Month" }, { num: "+840%", label: "Organic Traffic" }, { num: "100", label: "Lighthouse Score" }], bg: "#0a1628", accent: "#60a5fa", featured: true },
  { client: "Plumbing & HVAC", name: "Metro Plumbing Co.", desc: "Emergency-first design with 24/7 CTA header, service area pages for 8 cities, Google Reviews integration, and instant quote form. Went from page 3 to #1 in 4 months.", tags: ["Webflow", "Local SEO"], results: [{ num: "2.8×", label: "More Calls" }, { num: "Page 1", label: "Google Rank" }], bg: "#0f1923", accent: "#f97316", featured: false },
  { client: "Cleaning Service", name: "Sparkle Cleaning Co.", desc: "Online booking integration, 3 service tier pricing tables, recurring customer portal preview, and neighborhood-specific landing pages. 60% of new clients now book online.", tags: ["Framer", "Booking API"], results: [{ num: "60%", label: "Online Bookings" }, { num: "3.3×", label: "Monthly Revenue" }], bg: "#faf5ff", accent: "#7c3aed", featured: false },
  { client: "Mortgage Brokerage", name: "Summit Lending Group", desc: "Full mortgage broker site with embedded payment calculator, rate comparison pages, NMLS compliance, and loan program pages. Went from 2 leads/month to 28.", tags: ["Next.js", "Sanity", "Calculator"], results: [{ num: "14×", label: "More Leads" }, { num: "+320%", label: "Organic Search" }], bg: "#0d1117", accent: "#3b82f6", featured: false },
  { client: "Landscaping", name: "GreenEdge Landscaping", desc: "Seasonal service pages, before/after gallery CMS, quote calculator, and 12 city-specific landing pages. Now ranks #1 for 'landscaping [city]' in every target market.", tags: ["Astro", "Sanity", "Local SEO"], results: [{ num: "#1", label: "Local Rankings" }, { num: "5×", label: "Quote Requests" }], bg: "#f0fdf4", accent: "#16a34a", featured: false },
];

export default function WorkPage() {
  const featured = caseStudies[0];
  const rest = caseStudies.slice(1);
  return (
    <>
      <main>
        <section className="pt-36 pb-20 px-8 md:px-12 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5"><span className="w-5 h-px bg-acid" />Portfolio</div>
            <h1 className="font-display font-bold text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.04em] mb-5" style={{ color: "var(--text-primary)" }}>
              Work that <span className="font-serif italic font-normal text-acid">converts</span>
            </h1>
            <p className="text-[15px] font-body leading-[1.8] max-w-[500px]" style={{ color: "var(--muted)" }}>Real projects. Real results. Every case study includes traffic, leads, and revenue metrics — because beautiful design that doesn&apos;t perform isn&apos;t design, it&apos;s decoration.</p>
          </div>
        </section>

        <section className="py-16 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Featured */}
            <div className="border rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-6" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
              <div className="min-h-[360px] flex items-center justify-center p-10 border-b lg:border-b-0 lg:border-r" style={{ background: featured.bg, borderColor: "var(--border-color)" }}>
                <div className="w-full border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                  <div className="h-7 flex items-center px-3 gap-1.5" style={{ background: `${featured.bg}cc` }}>
                    {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />)}
                  </div>
                  <div className="p-5" style={{ background: featured.bg }}>
                    <div className="h-28 rounded-lg mb-4 p-4" style={{ background: `linear-gradient(135deg, ${featured.bg}ee, ${featured.accent}22)`, border: `1px solid ${featured.accent}22` }}>
                      <div className="h-2 rounded mb-2" style={{ background: featured.accent, width: "45%", opacity: 0.7 }} />
                      <div className="h-1.5 rounded mb-1.5" style={{ background: `${featured.accent}30`, width: "75%" }} />
                      <div className="flex gap-2 mt-3">
                        <div className="h-6 w-20 rounded" style={{ background: featured.accent, opacity: 0.8 }} />
                        <div className="h-6 w-16 rounded" style={{ border: `1px solid ${featured.accent}40` }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[1,2,3].map(i => <div key={i} className="h-16 rounded-lg" style={{ background: `${featured.accent}0a`, border: `1px solid ${featured.accent}18` }} />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="text-[10px] font-body tracking-[0.12em] uppercase text-acid mb-3">Featured Case Study · {featured.client}</div>
                <h2 className="font-display font-bold text-[clamp(28px,3vw,44px)] tracking-[-0.02em] mb-4" style={{ color: "var(--text-primary)" }}>{featured.name}</h2>
                <p className="text-[14px] font-body leading-[1.8] mb-6" style={{ color: "var(--muted)" }}>{featured.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map(t => <span key={t} className="px-2.5 py-1 rounded text-[10px] font-body border" style={{ background: "var(--bg-4)", color: "var(--muted)", borderColor: "var(--border-color)" }}>{t}</span>)}
                </div>
                <div className="flex gap-6 pt-6 border-t" style={{ borderColor: "var(--border-color)" }}>
                  {featured.results.map(r => (
                    <div key={r.label}>
                      <div className="font-display font-bold text-[28px] leading-none tracking-[-0.03em] text-acid">{r.num}</div>
                      <div className="text-[10px] font-body mt-1" style={{ color: "var(--muted)" }}>{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((c) => (
                <div key={c.name} className="group border rounded-xl overflow-hidden hover:border-acid-border transition-all duration-200" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  <div className="h-64 flex items-center justify-center p-8 relative overflow-hidden" style={{ background: c.bg }}>
                    <div className="w-[88%] border border-white/10 rounded-lg overflow-hidden">
                      <div className="h-6 flex items-center px-2 gap-1" style={{ background: `${c.bg}cc` }}>
                        {["#ff5f57","#febc2e","#28c840"].map(col => <div key={col} className="w-1.5 h-1.5 rounded-full" style={{ background: col }} />)}
                      </div>
                      <div className="p-3" style={{ background: c.bg }}>
                        <div className="h-1.5 rounded mb-1.5" style={{ background: c.accent, width: "40%", opacity: 0.8 }} />
                        <div className="h-1 rounded mb-1" style={{ background: `${c.accent}25`, width: "75%" }} />
                        <div className="h-4 rounded mt-2 w-24" style={{ background: c.accent, opacity: 0.85 }} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="px-5 py-2.5 rounded-full bg-acid text-black font-display font-bold text-[11px] uppercase tracking-wider">View Case Study</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="text-[10px] font-body tracking-[0.12em] uppercase text-acid mb-2">{c.client}</div>
                    <h3 className="font-display font-bold text-[20px] mb-3" style={{ color: "var(--text-primary)" }}>{c.name}</h3>
                    <p className="text-[13px] font-body leading-[1.7] mb-4" style={{ color: "var(--muted)" }}>{c.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {c.tags.map(t => <span key={t} className="px-2.5 py-1 rounded text-[10px] font-body border" style={{ background: "var(--bg-4)", color: "var(--muted)", borderColor: "var(--border-color)" }}>{t}</span>)}
                    </div>
                    <div className="flex gap-6 pt-5 border-t" style={{ borderColor: "var(--border-color)" }}>
                      {c.results.map(r => (
                        <div key={r.label}>
                          <div className="font-display font-bold text-[22px] leading-none tracking-[-0.03em] text-acid">{r.num}</div>
                          <div className="text-[10px] font-body mt-0.5" style={{ color: "var(--muted)" }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-12 border-t" style={{ borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-[clamp(24px,2.5vw,36px)] tracking-[-0.02em] mb-2" style={{ color: "var(--text-primary)" }}>Ready to be our next case study?</h2>
              <p className="text-[13px] font-body" style={{ color: "var(--muted)" }}>Let&apos;s talk about what results look like for your business.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200 flex-shrink-0">
              Book a Free Call →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
