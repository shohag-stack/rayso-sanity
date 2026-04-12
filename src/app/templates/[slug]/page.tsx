import { client } from "@/sanity/client";
import { ShoppingBag } from "lucide-react";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import Template from "@/typed/Template";
import CommonFeatures from "@/components/section/CommonFeatures";
import RecentTemplates from "@/components/section/RecentTemplates";
import CTABanner from "@/components/section/CTABanner";
import HowToStarted from "@/components/section/HowToStarted";
import QuickSetup from "@/components/section/QuickSetup";

const coreFeatures = [
  {
    icon: "/assets/img/nextjs.png",
    value: "Next.js App Router",
  },

  {
    icon: "/assets/img/sanity.png",
    value: "Sanity CMS",
  },
  {
    icon: "/assets/img/tailwind.png",
    value: "Tailwind CSS",
  },
  {
    icon: "/assets/img/typscript.png",
    value: "TypeScript",
  },
];

const POSTS_QUERY = `*[_type == "template" && slug.current == $slug][0]{
    ...,
  featuredImage {
    asset->{
      url
     }
  },
    gallery[]{
      asset->{
      url
    }
}}`;


const RECENT_TEMPLATES_QUERY = `
*[_type == "template" && slug.current != $slug] 
| order(_createdAt desc)[0...3] {
  _id,
  name,
  slug,
  price,
  badge,
  featuredImage{
    asset->{
      url
    }
  }
}
`;

const options = { next: { revalidate: 30 } };

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "template"]{ "slug": slug.current }
  `);

  return slugs.map((s: any) => ({
    slug: s.slug,
  }));
}

export default async function TemplateSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const t = await client.fetch<Template>(
    POSTS_QUERY,
    { slug: (await params).slug },
    options,
  );



  const recent = await client.fetch(
      RECENT_TEMPLATES_QUERY,
      { slug: (await params).slug },
      options
    );

  console.log("Fetched template:", t);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-0 px-8 md:px-12 border-b border-white/[0.07]">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[12px] text-muted font-body mb-6">
              <Link
                href="/templates"
                className="hover:text-acid transition-colors"
              >
                Templates
              </Link>
              <span>→</span>
              <span className="text-primary">{t.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
              {/* Left */}
              <div className="pb-16">
                <div className="flex gap-2.5 mb-5 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-wider border ${t.badge === "free" ? "bg-acid-dim text-acid border-acid-dim" : "bg-white/[0.05] text-acid border-acid-border"}`}
                  >
                    {t.badge === "free" ? "Free" : "Premium"}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-body uppercase tracking-wider border border-acid-dim text-mid bg-white/[0.05]">
                    Updated{" "}
                    {new Date(t._updatedAt).toLocaleDateString(undefined, {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h1 className="font-display font-bold text-6xl leading-none tracking-[-0.03em] mb-5">
                  {t.name}
                </h1>

                <p className="text-muted text-xl font-medium font-body leading-[1.8] mb-8">
                  {t.desc}
                </p>

                <div className="flex gap-3 flex-wrap mb-10">
                  <Link
                    href={t.purchaseLink || "#"}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-acid text-black font-display font-bold text-[13px] tracking-[0.05em] uppercase hover:bg-text-primary hover:text-bg transition-colors duration-200"
                  >
                    {t.badge === "free" ? (
                      "Download Free →"
                    ) : (
                      <>
                        <ShoppingBag className={"w-4 h-4"} /> Purchase Now
                      </>
                    )}
                  </Link>
                  <Link
                    href={t.liveLink || "#"}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200"
                  >
                    Live Preview ↗
                  </Link>
                </div>

                <div className="flex items-center gap-6 pt-8 border-t border-border flex-wrap">
                  {t.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2 text-muted font-body"
                    >
                      <strong className="text-text-primary font-body">
                        {s.num}
                      </strong>{" "}
                      {s.label}
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-[12px] text-muted font-body">
                    📄 MIT License
                  </div>
                </div>
                {/* Gallery placeholder */}
                <div className="gallery grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                  {t.gallery?.map((g, i) => (
                    <div
                      key={i}
                      className="w-full h-64 relative rounded-lg overflow-hidden border border-white/[0.07]"
                    >
                      <Image
                        src={g.asset?.url || ""}
                        alt={`${t.name} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="sticky top-20 pb-8">
                <div className="border border-border rounded-xl overflow-hidden bg-bg-2">
                  {/* Preview */}
                  <div
                    className="h-52 flex items-center justify-center border-b border-white/[0.07]"
                    style={{ background: t.bg }}
                  >
                    {t.featuredImage ? (
                      <Image
                        className="object-cover"
                        src={t.featuredImage?.asset?.url || ""}
                        alt={t.name}
                        width={800}
                        height={400}
                      />
                    ) : (
                      <div className="text-6xl">{t.accent}</div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div
                      className={`font-display font-bold text-[32px] mb-1 ${t.badge === "free" ? "text-acid" : "text-primary"}`}
                    >
                      ${t.price}
                    </div>
                    <p className="text-sm text-muted font-body mb-5">
                      {t.badge === "free"
                        ? "MIT License — use in any project"
                        : "Single project license"}
                    </p>

                    <Link
                      href="#"
                      className="flex justify-center items-center gap-2 w-full px-5 py-3.5 rounded-full bg-acid text-black font-display font-bold text-[12px] tracking-[0.05em] uppercase hover:bg-text-primary hover:text-bg transition-colors duration-200 mb-3"
                    >
                      {t.badge === "free"
                        ? "Download Template →"
                        : `Buy for ${t.price} →`}
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200"
                    >
                      Live Preview ↗
                    </Link>

                    <div className="my-5 h-px bg-white/[0.07]" />

                    <div className="flex flex-col gap-2.5 mb-5">
                      {[
                        "Mobile-first & responsive",
                        "Core Web Vitals 100",
                        "SEO meta management",
                        "Sanity Studio included",
                        "TypeScript support",
                        "Full documentation",
                      ].map((f) => (
                        <div
                          key={f}
                          className="flex items-center gap-2.5 text-base text-mid font-body"
                        >
                          <span className="text-acid font-bold">✓</span> {f}
                        </div>
                      ))}
                    </div>

                    <div className="my-5 h-px bg-white/[0.07]" />

                    <div className="flex flex-col gap-2.5">
                      {coreFeatures.map((s,i) => (
                        <div
                          key={i+1}
                          className="flex items-center gap-3 text-sm text-muted font-body"
                        >
                          <Image className="w-7 h-7 rounded-lg bg-bg-4 border border-white/[0.07] flex items-center justify-center text-xs" src={s.icon} alt={s.value} width={24} height={24}/>
                          {s.value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-8 md:px-12 bg-bg-2 border-b border-white/[0.07]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              What&apos;s Included
            </div>
            <h2 className="font-display font-bold text-[clamp(24px,2.5vw,36px)] tracking-[-0.02em] mb-12">
              Everything you need to{" "}
              <span className="font-serif italic font-normal text-acid">
                rank and convert
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {t.features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-6 bg-bg border border-white/[0.07] rounded-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-acid-dim border border-acid-border flex items-center justify-center text-lg flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="font-display font-medium text-2xl text-text-primary mb-2">
                      {f.title}
                    </div>
                    <p className="text-base text-muted font-body leading-[1.65]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CommonFeatures />
        <QuickSetup />

        {/* More templates */}
        {
          recent && recent.length > 0 && <RecentTemplates templates={recent} />
        }
        <CTABanner />
      </main>
    </>
  );
}
