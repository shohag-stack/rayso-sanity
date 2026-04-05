"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", businessType: "", service: "", website: "", message: "", budget: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inputClass = "w-full border rounded-xl px-5 py-3.5 font-body text-[13px] focus:border-acid-border focus:outline-none transition-colors duration-200";
  const inputStyle = { background: "var(--bg-3)", borderColor: "var(--border-color)", color: "var(--text-primary)" } as React.CSSProperties;

  const expectItems = [
    "We audit your current site — speed, SEO, and conversion issues",
    "We discuss your target clients and what they need to see before contacting you",
    "We outline a realistic roadmap — timelines, deliverables, and costs",
    "No pressure to sign anything. You leave with clarity regardless of what you decide",
  ];

  return (
    <>
      <main>
        <section className="pt-36 pb-20 px-8 md:px-12 border-b" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />Get in Touch
            </div>
            <h1 className="font-display font-black text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.04em] mb-5" style={{ color: "var(--text-primary)" }}>
              Let&apos;s talk about<br />
              <span className="font-serif italic font-normal text-acid">your business</span>
            </h1>
            <p className="text-[15px] font-body leading-[1.8] max-w-[500px]" style={{ color: "var(--muted)" }}>
              Book a free 30-minute strategy call. No pitch, no pressure — just an honest look at what&apos;s holding your web presence back.
            </p>
          </div>
        </section>

        <section className="py-20 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form card */}
              <div className="border rounded-xl p-10" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                {!sent ? (
                  <>
                    <h2 className="font-display font-bold text-[18px] mb-2" style={{ color: "var(--text-primary)" }}>Book a Free Strategy Call</h2>
                    <p className="text-[12px] font-body mb-8" style={{ color: "var(--muted)" }}>We&apos;ll get back to you within 4 hours on business days.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>First Name *</label>
                          <input required placeholder="John" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} className={inputClass} style={inputStyle} />
                        </div>
                        <div>
                          <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Last Name *</label>
                          <input required placeholder="Smith" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} className={inputClass} style={inputStyle} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Email *</label>
                        <input required type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Phone</label>
                        <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Business Type *</label>
                        <select required value={form.businessType} onChange={e => setForm({...form, businessType: e.target.value})} className={`${inputClass} appearance-none cursor-pointer`} style={inputStyle}>
                          <option value="" disabled>Select your industry</option>
                          {["Real Estate Agent / Team","Mortgage Broker / Lender","Plumbing / HVAC","Cleaning Service","Landscaping / Lawn Care","General Contractor","Roofing / Siding","Electrician","Other Home Service","Other"].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>What are you looking for? *</label>
                        <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})} className={`${inputClass} appearance-none cursor-pointer`} style={inputStyle}>
                          <option value="" disabled>Select a service</option>
                          {["New Website (Framer)","New Website (Webflow)","New Website (Custom / Next.js)","Website Redesign","Sanity CMS Setup","SEO & CRO Audit","Not sure — I need advice"].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Current Website URL</label>
                        <input type="url" placeholder="https://yoursite.com" value={form.website} onChange={e => setForm({...form, website: e.target.value})} className={inputClass} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Tell us about your project *</label>
                        <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="What's the #1 problem your current website has?" className={`${inputClass} resize-none`} style={inputStyle} />
                      </div>
                      <div>
                        <label className="block text-[10px] font-body tracking-[0.1em] uppercase mb-2" style={{ color: "var(--muted)" }}>Budget Range</label>
                        <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} className={`${inputClass} appearance-none cursor-pointer`} style={inputStyle}>
                          <option value="">Approximate budget</option>
                          {["Under $2,000","$2,000 – $5,000","$5,000 – $10,000","$10,000 – $20,000","$20,000+","Not sure yet"].map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <button type="submit" className="w-full py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200 mt-2">
                        Book My Free Strategy Call →
                      </button>
                      <p className="text-center text-[11px] font-body" style={{ color: "var(--muted)" }}>No commitment required. We&apos;ll reach out within 4 hours.</p>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="text-6xl mb-5">🎉</div>
                    <h3 className="font-display font-bold text-[28px] tracking-[-0.02em] mb-3" style={{ color: "var(--text-primary)" }}>You&apos;re booked!</h3>
                    <p className="text-[14px] font-body leading-[1.8] max-w-[320px] mb-8" style={{ color: "var(--muted)" }}>We&apos;ve received your message and will reach out within 4 hours to confirm your strategy call time.</p>
                    <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-acid-border text-acid font-display font-semibold text-[12px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200">View Our Work →</Link>
                  </div>
                )}
              </div>

              {/* Info side */}
              <div className="flex flex-col gap-5">
                <div className="rounded-xl p-8 border border-acid-border" style={{ background: "linear-gradient(135deg, var(--acid-dim), transparent)" }}>
                  <h3 className="font-display font-bold text-[16px] mb-5" style={{ color: "var(--text-primary)" }}>What happens on the call?</h3>
                  <ul className="flex flex-col gap-4">
                    {expectItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[13px] font-body leading-[1.65]" style={{ color: "var(--muted)" }}>
                        <span className="w-5 h-5 rounded-full bg-acid-dim border border-acid-border flex items-center justify-center text-[10px] text-acid flex-shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border rounded-xl overflow-hidden" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  {[
                    { icon: "📧", title: "Email", value: "hello@rayso.studio" },
                    { icon: "⏱️", title: "Response Time", value: "Within 4 hours on business days" },
                    { icon: "🌍", title: "Location", value: "Remote-first. US, UK, Canada & Australia." },
                    { icon: "🗓️", title: "Availability", value: "Accepting 3 new projects/month." },
                  ].map((item, i, arr) => (
                    <div key={item.title} className={`flex items-start gap-4 px-7 py-5 ${i !== arr.length - 1 ? "border-b" : ""}`} style={{ borderColor: "var(--border-color)" }}>
                      <div className="w-11 h-11 rounded-xl bg-acid-dim border border-acid-border flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="font-display font-bold text-[14px] mb-1" style={{ color: "var(--text-primary)" }}>{item.title}</div>
                        <div className="text-[13px] font-body leading-[1.6]" style={{ color: "var(--muted)" }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border rounded-xl p-7" style={{ background: "var(--bg-2)", borderColor: "var(--border-color)" }}>
                  <div className="font-display text-[10px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--muted)" }}>Not ready for a call?</div>
                  <p className="text-[13px] font-body leading-[1.7] mb-5" style={{ color: "var(--muted)" }}>Browse our free component library and Sanity templates — great way to see our quality before committing.</p>
                  <div className="flex gap-3 flex-wrap">
                    {[{ label: "Free Components", href: "/components-page" }, { label: "Templates", href: "/templates" }].map(l => (
                      <Link key={l.href} href={l.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-display font-semibold text-[11px] tracking-[0.05em] uppercase hover:text-acid transition-all duration-200" style={{ borderColor: "var(--border-color)", color: "var(--muted)" }}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
