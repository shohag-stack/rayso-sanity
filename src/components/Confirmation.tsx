import Link from 'next/link'
import React from 'react'

export default function Confirmation() {
  return (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-5">🎉</div>
            <h3
              className="font-display font-bold text-[28px] tracking-[-0.02em] mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              You&apos;re booked!
            </h3>
            <p
              className="text-[14px] font-body leading-[1.8] max-w-[320px] mb-8"
              style={{ color: "var(--muted)" }}
            >
              We&apos;ve received your message and will reach out within 1 hours
              to confirm your strategy call time.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-acid-border text-acid font-display font-semibold text-[12px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200"
            >
              View Templates →
            </Link>
          </div>
        )
}
