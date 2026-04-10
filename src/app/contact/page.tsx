"use client";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  const expectItems = [
    "We audit your current site — speed, SEO, and conversion issues",
    "We discuss your target clients and what they need to see before contacting you",
    "We outline a realistic roadmap — timelines, deliverables, and costs",
    "No pressure to sign anything. You leave with clarity regardless of what you decide",
  ];

  return (
    <>
      <main>
        <section
          className="pt-36 pb-20 px-8 md:px-12 border-b"
          style={{
            background: "var(--bg-2)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Get in Touch
            </div>
            <h1
              className="font-display font-bold text-[clamp(48px,6vw,88px)] leading-[0.96] tracking-[-0.04em] mb-5"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s talk about
              <br />
              <span className="font-serif italic font-normal text-acid">
                your business
              </span>
            </h1>
            <p
              className="text-[15px] font-body leading-[1.8] max-w-[500px]"
              style={{ color: "var(--muted)" }}
            >
              Book a free 30-minute strategy call. No pitch, no pressure — just
              an honest look at what&apos;s holding your web presence back.
            </p>
          </div>
        </section>

        <section className="py-20 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form card */}
              <ContactForm />

              {/* Info side */}
              <div className="flex flex-col gap-5">
                <div
                  className="rounded-xl p-8 border border-acid-border"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--acid-dim), transparent)",
                  }}
                >
                  <div>
                    <video
                      src="/assets/video/intro.mp4"
                      autoPlay
                      loop
                      muted
                      controls
                      playsInline
                    />
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-5 mt-5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    What happens on the call?
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {expectItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base font-body leading-[1.65]"
                        style={{ color: "var(--muted)" }}
                      >
                        <span className="w-5 h-5 rounded-full bg-acid-dim border border-acid-border flex items-center justify-center text-base text-acid flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="border rounded-xl overflow-hidden"
                  style={{
                    background: "var(--bg-2)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  {[
                    { icon: "📧", title: "Email", value: "shohag4y@gmail.com" },
                    {
                      icon: "⏱️",
                      title: "Response Time",
                      value: "Within 1 hours",
                    },
                    {
                      icon: "🌍",
                      title: "Location",
                      value: "Remote-first. US, UK, Canada & Australia.",
                    },
                    {
                      icon: "🗓️",
                      title: "Availability",
                      value: "Accepting 3 new projects/month.",
                    },
                  ].map((item, i, arr) => (
                    <div
                      key={item.title}
                      className={`flex items-start gap-4 px-7 py-5 ${
                        i !== arr.length - 1 ? "border-b" : ""
                      }`}
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <div className="w-11 h-11 rounded-xl bg-acid-dim border border-acid-border flex items-center justify-center text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div
                          className="font-display font-medium text-xl mb-1"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.title}
                        </div>
                        <div
                          className="text-base font-body leading-[1.6]"
                          style={{ color: "var(--muted)" }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="border rounded-xl p-7"
                  style={{
                    background: "var(--bg-2)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div
                    className="font-display text-base font-bold tracking-[0.1em] uppercase mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Not ready for a call?
                  </div>
                  <p
                    className="text-base font-body leading-[1.7] mb-5"
                    style={{ color: "var(--muted)" }}
                  >
                    Browse our free component library and Sanity templates —
                    great way to see our quality before committing.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { label: "Free Components", href: "/components" },
                      { label: "Templates", href: "/templates" },
                    ].map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-display font-semibold text-sm tracking-[0.05em] uppercase hover:text-acid transition-all duration-200"
                        style={{
                          borderColor: "var(--border-color)",
                          color: "var(--muted)",
                        }}
                      >
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
