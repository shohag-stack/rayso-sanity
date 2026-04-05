import Link from "next/link";

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/" },
      { label: "UI/UX Design", href: "/" },
      { label: "Framer Dev", href: "/" },
      { label: "Webflow Dev", href: "/" },
      { label: "Custom Dev", href: "/" },
      { label: "Sanity CMS", href: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Templates", href: "/templates" },
      { label: "Components", href: "/components-page" },
      { label: "Case Studies", href: "/work" },
      { label: "Blog", href: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/" },
      { label: "Terms", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t pt-16 pb-10 px-8 md:px-12 transition-colors duration-200"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div>
            <div
              className="font-display font-black text-xl tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              rayso<span className="text-acid">.</span>studio
            </div>
            <p
              className="text-sm leading-relaxed max-w-[280px] mb-7 font-body"
              style={{ color: "var(--muted)" }}
            >
              We build high-converting websites for local service businesses —
              real estate, mortgage, plumbing, cleaning, and more.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-acid text-black text-[11px] font-display font-bold tracking-[0.05em] uppercase hover:bg-white hover:text-black transition-colors duration-200"
            >
              Book a Free Call →
            </Link>
          </div>

          {/* Link cols */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <div
                className="font-display text-[10px] font-bold tracking-[0.14em] uppercase mb-5"
                style={{ color: "var(--muted)" }}
              >
                {col.title}
              </div>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] font-body hover:text-acid transition-colors duration-200"
                      style={{ color: "var(--mid)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <span
            className="text-[11px] font-body"
            style={{ color: "var(--muted)" }}
          >
            © 2025 rayso.studio — All rights reserved
          </span>
          <span
            className="text-[11px] font-body"
            style={{ color: "var(--muted)" }}
          >
            Designed &amp; built in-house ✦ Remote-first agency
          </span>
        </div>
      </div>
    </footer>
  );
}
