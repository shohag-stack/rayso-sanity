import Image from "next/image";

const SHOTS: { src: string; type: "image" | "video"; alt: string }[] = [
  {
    src: "/assets/img/1.jpg",
    type: "image",
    alt: "Real estate website design",
  },
  {
    src: "/assets/img/2.mp4",
    type: "video",
    alt: "Mortgage broker landing page",
  },
  {
    src: "/assets/img/3.jpg",
    type: "image",
    alt: "Plumbing service animation",
  },
  {
    src: "/assets/img/4.mp4",
    type: "video",
    alt: "Cleaning service hero section",
  },
  { src: "/assets/img/5.jpg", type: "image", alt: "Landscaping portfolio" },
  { src: "/assets/img/6.mp4", type: "video", alt: "Component library preview" },
  { src: "/assets/img/7.jpg", type: "image", alt: "Component library preview" },
  { src: "/assets/img/8.mp4", type: "video", alt: "Component library preview" },
];

const FALLBACK_CARDS = [
  { bg: "linear-gradient(135deg,#0a0a0a,#7BFF00 180%)", label: "Real Estate" },
  { bg: "linear-gradient(135deg,#0d0d1a,#3b82f6 180%)", label: "Mortgage" },
  { bg: "linear-gradient(135deg,#1a0a0a,#f97316 180%)", label: "Plumbing" },
  { bg: "linear-gradient(135deg,#0a1a0a,#16a34a 180%)", label: "Cleaning" },
  { bg: "linear-gradient(135deg,#1a0a1a,#a855f7 180%)", label: "Landscaping" },
  { bg: "linear-gradient(135deg,#0a0a1a,#06b6d4 180%)", label: "Webflow" },
  { bg: "linear-gradient(135deg,#1a1a0a,#eab308 180%)", label: "Framer" },
  { bg: "linear-gradient(135deg,#1a0a0a,#ec4899 180%)", label: "Sanity CMS" },
  { bg: "linear-gradient(135deg,#0a1a1a,#14b8a6 180%)", label: "Custom Dev" },
  { bg: "linear-gradient(135deg,#0f0a1a,#8b5cf6 180%)", label: "UI/UX" },
  { bg: "linear-gradient(135deg,#1a0f0a,#dc2626 180%)", label: "SEO" },
  { bg: "linear-gradient(135deg,#0a0f1a,#2563eb 180%)", label: "CRO" },
];

export default function DribbbleCard({ index }: { index: number }) {
  const fallback = FALLBACK_CARDS[index % FALLBACK_CARDS.length];
  const shot = SHOTS[index % SHOTS.length];
  const isVideo = shot?.type === "video";

  // Try to use real shot; fall back to gradient placeholder
  const useReal = true; // flip to true once you add real images to /public/shots/

  return (
    <div
      className="relative flex-shrink-0 rounded-md overflow-hidden group"
      style={{
        width: 200,
        height: 150, // Dribbble 4:3 ratio
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {useReal && isVideo ? (
        <video
          src={shot.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      ) : useReal ? (
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover"
          sizes="200px"
        />
      ) : (
        // ── Placeholder: swap this div for <Image> when you have real shots ──
        <div
          className="w-full h-full relative overflow-hidden"
          style={{ background: fallback.bg }}
        >
          {/* Simulated browser chrome / mockup content */}
          <div className="absolute inset-0 flex flex-col">
            <div
              className="h-6 flex items-center px-3 gap-1.5 flex-shrink-0"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
              <div className="w-2 h-2 rounded-full bg-green-400/70" />
              <div
                className="flex-1 ml-2 h-3 rounded-sm"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
            </div>
            <div className="flex-1 p-3 flex flex-col gap-1.5">
              <div
                className="h-2 rounded-full w-3/5"
                style={{ background: "rgba(255,255,255,0.18)" }}
              />
              <div
                className="h-1.5 rounded-full w-4/5"
                style={{ background: "rgba(255,255,255,0.09)" }}
              />
              <div
                className="h-1.5 rounded-full w-2/3"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <div className="flex gap-1.5 mt-1">
                <div
                  className="h-5 w-16 rounded-full"
                  style={{ background: "rgba(123,255,0,0.7)" }}
                />
                <div
                  className="h-5 w-14 rounded-full"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                />
              </div>
              <div
                className="mt-auto h-10 rounded-lg"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
            </div>
          </div>
          {/* Shine overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
            }}
          />
          {/* Label */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span
              className="text-[9px] font-display font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              {fallback.label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
