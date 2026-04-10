"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function Hero() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // 🔥 Replace with your real dribbble shots later
  const items = [
    { type: "image", src: "/assets/img/1.jpg" },
    { type: "image", src: "/assets/img/2.jpg" },
    { type: "image", src: "/assets/img/3.jpg" },
    { type: "video", src: "/assets/img/3.mp4" },
    { type: "image", src: "/assets/img/4.jpg" },
  ];

  const cellCount = items.length;
  const angle = 360 / cellCount;

  // ✅ dynamic radius (IMPORTANT)
  const cellWidth = 420;
  const radius = Math.round(cellWidth / 2 / Math.tan(Math.PI / cellCount));

  useEffect(() => {
  let angleAcc = 0;
  let raf: number;

  const animate = () => {
    angleAcc += 0.2; // speed (lower = slower)

    if (carouselRef.current) {
      carouselRef.current.style.transform =
        `translateZ(-${radius}px) rotateX(-${angleAcc}deg)`;
    }

    raf = requestAnimationFrame(animate);
  };

  animate();

  return () => cancelAnimationFrame(raf);
}, [radius]);


  return (
    <section className="min-h-screen flex justify-center md:px-12 pt-28 pb-20 overflow-hidden">
      <div className="w-1/2">
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-acid-dim border border-acid-border text-[10px] font-body tracking-[0.1em] uppercase text-acid animate-pulse-border">
              <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
              Now accepting new clients
            </span>
          </div>

          <h1
            className="font-display font-bold text-6xl leading-[0.96] tracking-[-0.04em] max-w-[1100px] mb-8"
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

          <p
            className="text-base leading-[1.8] font-body mb-11"
            style={{ color: "var(--mid)" }}
          >
            We build premium, SEO-optimized websites for real estate agents,
            mortgage brokers, plumbers, and local service businesses — designed
            to rank, load fast, and turn strangers into booked appointments.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-20">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-white transition-colors duration-200"
            >
              Book a Free Strategy Call →
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200"
            >
              Free Templates ↗
            </Link>
          </div>

          <div
            className="flex items-center gap-5 pt-8 border-t"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="flex">
              {["🏠", "🔧", "💰", "🧹"].map((e, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm -ml-2 first:ml-0"
                  style={{
                    borderColor: "var(--bg)",
                    background: "var(--bg-4)",
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
            <p
              className="text-[12px] font-body"
              style={{ color: "var(--muted)" }}
            >
              <strong style={{ color: "var(--text-primary)" }}>
                40+ local businesses
              </strong>{" "}
              trust us to handle their web presence
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-10 right-12 flex flex-col items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-body"
          style={{ color: "var(--muted)" }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-acid to-transparent animate-scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="scene">
          <div className="carousel" ref={carouselRef}>
            {items.map((item, i) => {
              const rotate = angle * i;

              return (
                <div
                  key={i}
                  className="carousel__cell"
                  style={{
                    transform: `translate(-50%, -50%) rotateX(${rotate}deg) translateZ(${radius}px)`,
                  }}
                >
                  {item.type === "video" ? (
                    <video src={item.src} autoPlay loop muted playsInline />
                  ) : (
                    <Image src={item.src} alt="" width={800} height={400} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
