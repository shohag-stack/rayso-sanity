"use client";
import Link from "next/link";
import Image from "next/image";
import IsoColumn from "../IsoColumn";

// 6 columns, each with a staggered card order + independent scroll speed
const COLUMNS: { indices: number[]; speed: string; offset: number }[] = [
  { indices: [0, 1, 2, 3, 4, 5, 6, 7, 8], speed: "32s", offset: 0 },
  { indices: [8, 7, 6, 0, 1, 2, 3, 4, 5], speed: "26s", offset: -25 },
  { indices: [3, 4, 5, 6, 7, 8, 0, 1, 2], speed: "38s", offset: -12 },
  { indices: [0, 1, 2, 3, 4, 5, 6, 7, 8], speed: "22s", offset: -40 },
  { indices: [2, 3, 4, 5, 6, 0, 1, 8, 7], speed: "30s", offset: -8 },
  { indices: [7, 8, 0, 1, 2, 3, 4, 5, 6], speed: "34s", offset: -20 },
];

const avatar = [
  { src: "/assets/img/avatar-1.png" },
  { src: "/assets/img/avatar-2.png" },
  { src: "/assets/img/avatar-3.png" },
  { src: "/assets/img/avatar-4.png" },
];

export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen overflow-hidden bg-[var(--bg)]"
        style={{ background: "var(--bg)" }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/assets/video/hero-3.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `
            radial-gradient(circle at left, var(--bg), transparent 100%),
            linear-gradient(to right, var(--bg), transparent 100%)
          `,
                  }}
          />

        <div className="relative z-20">
  <div className="container mx-auto min-h-screen flex items-center">

    {/* LEFT CONTENT */}
    <div className="w-full lg:w-8/12 flex flex-col justify-center px-6 md:px-12 pt-32 pb-16">

      <div className="flex items-center gap-4 mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-acid-dim border border-acid-border text-sm font-bold font-body tracking-[0.1em] uppercase text-acid">
          <span className="w-1.5 h-1.5 rounded-full bg-acid-border animate-pulse" />
          Now accepting new clients
        </span>
      </div>

      <h1 className="font-display text-7xl font-bold leading-[0.96] tracking-[-0.04em] mb-8"
        style={{ color: "var(--text-primary)" }}
      >
        Websites that
        <br />
        <span className="font-serif italic font-normal text-acid">
          convert visitors
        </span>
        <br />
        into customers
      </h1>

      <p className="text-lg leading-[1.8] font-body mb-11 max-w-[500px]"
        style={{ color: "var(--mid)" }}
      >
        We build premium, SEO-optimized websites for real estate agents,
        mortgage brokers, plumbers, and local service businesses — designed
        to rank, load fast, and turn strangers into booked appointments.
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-16">
        <Link href="/contact"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] uppercase"
        >
          Book a Free Strategy Call →
        </Link>

        <Link href="/templates"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-acid-border text-acid font-semibold uppercase"
        >
          Free Templates ↗
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 pt-8 border-t"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="flex">
          {avatar.map((item, i) => (
            <div key={i} className="w-9 h-9 -ml-2 first:ml-0 rounded-full overflow-hidden border-2"
              style={{ borderColor: "var(--bg)" }}
            >
              <Image src={item.src} width={40} height={40} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div>
          <p className="text-base font-body">
            <strong style={{ color: "var(--text-primary)" }}>
              40+ local businesses
            </strong>
          </p>
          <p>trust us to handle their web presence</p>
        </div>
      </div>

    </div>

  </div>
        </div>

        {/* <div className="relative lg:absolute right-0 top-0 bottom-0 w-full lg:w-1/2 overflow-hidden mt-10 lg:mt-0">
          <div
            style={{
              position: "absolute",
              top: "-40%",
              left: "-5%",
              right: "-15%",
              bottom: "-40%",
              transform: "rotateX(45deg) rotateZ(28deg)",
              transformOrigin: "center center",
              transformStyle: "preserve-3d",
              perspective: "1400px",
              display: "flex",
              flexDirection: "row",
              gap: "14px",
              alignItems: "flex-start",
              scale: "2",
            }}
          >
            {COLUMNS.map((col, i) => (
              <IsoColumn
                key={i}
                indices={col.indices}
                speed={col.speed}
                offset={col.offset}
              />
            ))}
          </div>
        </div>

        <div
          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none z-10 hidden lg:block"
          style={{
            background: `linear-gradient(to right, var(--bg) 0%, var(--bg) 4%, transparent 22%)`,
          }}
        />

        <div
          className="absolute inset-x-0 top-0 h-48 pointer-events-none z-10 hidden lg:block"
          style={{
            background: `linear-gradient(to bottom, var(--bg) 0%, transparent 100%)`,
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-10 hidden lg:block"
          style={{
            background: `linear-gradient(to top, var(--bg) 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10 hidden lg:block"
          style={{
            background: `linear-gradient(to left, var(--bg) 0%, transparent 100%)`,
          }}
        /> */}
      </section>
    </>
  );
}
