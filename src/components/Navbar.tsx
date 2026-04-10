"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/components-page", label: "Components" },
  { href: "/about", label: "About" },
  {href: '/contact', label: 'Contact'}
];

export default function Navbar() {
  const pathname = usePathname();
  const { isDark } = useTheme();

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 w-full max-w-7xl
    z-[1000] flex items-center justify-between px-8 h-16
    backdrop-blur-3xl
    transition-colors duration-200
        ${
          isDark
            ? "bg-bg border-white/[0.07]"
            : "bg-bg border-black/[0.07]"
        }
      `}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-display font-bold text-lg tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        rayso<span className="text-acid">.</span>studio
      </Link>

      {/* Center links */}
      <ul className="hidden md:flex items-center gap-9">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`
                text-md tracking-[0.08em] font-body font-medium
                transition-colors duration-200
                ${
                  pathname === l.href
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--muted)] hover:text-[var(--text-primary)]"
                }
              `}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side: theme toggle + CTAs */}
      <div className="flex items-center gap-3">
      
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-acid text-black text-[11px] font-display font-bold tracking-[0.05em] uppercase hover:bg-white hover:text-black transition-colors duration-200"
        >
          Book a Call →
        </Link>
      </div>
    </nav>
  );
}
