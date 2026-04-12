import Template from "@/typed/Template";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ t }: { t: Template }) {
  const isComingSoon = t.status === "coming-soon";
  const stack = ["Nextjs", "Tailwind", "Sanity"];

  return (
    <div
      key={t._id}
      className="relative group border border-white/[0.07] rounded-xl overflow-hidden bg-bg-2 hover:-translate-y-1 transition-all duration-200 block"
    >
      {/* Preview */}
      <div className="relative overflow-hidden flex items-center justify-center">
        <Link href={`/templates/${t.slug.current}`} className="block">
          {t.featuredImage ? (
            <>
              <Image
                className="object-cover"
                src={t.featuredImage?.asset?.url || ""}
                alt={t.name}
                width={800}
                height={400}
              />
            </>
          ) : (
            <div
              className="h-52 flex items-center justify-center border-b border-white/[0.07]"
              style={{ background: t.bg }}
            >
              <div className="text-6xl">{t.accent}</div>
            </div>
          )}
        </Link>
        {/* Overlay */}
        <Link
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-20 transition-opacity duration-200 flex items-center justify-center gap-3"
          href={`/templates/${t.slug.current}`}
        >
          Preview ↗
        </Link>
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {/* <span
            className={`px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider border-acid-border ${
              t.badge === "free"
                ? "bg-acid-dim text-acid border-acid-border"
                : "bg-acid text-black"
            }`}
          >
            {t.badge === "free" ? "Free" : "Premium"}
          </span> */}

            {isComingSoon && (
            <span className="bg-acid text-black px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider border-acid-border">
              Coming Soon
            </span>
        )}


          {stack?.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 text-xs font-mediu border-acid-dim border rounded-full"
            >
              {s}
            </span>
          ))}
        </div>
        
        <h3 className="font-display font-bold text-xl text-primary mb-2">
          {t.name}
        </h3>
        <p className="text-base text-muted font-body leading-[1.65] mb-5">
          {t.desc}
        </p>
{ /* Coming Soon Badge */ }

        {
          !isComingSoon && (
            <div className="flex items-center justify-between gap-4">
          <Link
            href={`/templates/${t.liveLink}`}
            className="px-4 py-2 rounded-full border border-acid-border text-acid text-sm font-display font-semibold tracking-wider hover:bg-acid hover:text-black transition-all duration-200"
          >
            Preview ↗
          </Link>

          <Link
            href={`/templates/${t.slug.current}`}
            className="flex-grow justify-center items-center flex px-4 py-2 rounded-full border border-acid-border text-acid text-sm font-display font-semibold tracking-wider hover:bg-acid hover:text-black transition-all duration-200"
          >
            Download →
          </Link>
        </div>
          )

        }
      </div>

              {isComingSoon && (
        <div className="absolute inset-0 cursor-not-allowed" />
      )}  

    </div>
  );
}
