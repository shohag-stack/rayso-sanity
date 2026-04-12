import Template from "@/typed/Template";
import Image from "next/image";
import Link from "next/link";



export default async function RecentTemplates({templates}: { templates: Template[] }) {

    
    console.log("Received templates in RecentTemplates component:", templates);


  return (
    <section className="py-20 px-8 md:px-12 border-t border-white/[0.07] bg-bg-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-display font-bold text-[clamp(24px,2.5vw,36px)] tracking-[-0.02em]">
            More Templates
          </h2>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-acid-border text-acid font-display font-semibold text-[13px] tracking-[0.05em] uppercase hover:bg-acid hover:text-black transition-all duration-200"
          >
            Browse All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {templates.map((m) => (
            <Link
              href={`/templates/${m.slug.current}`}
              key={m.name}
              className="group border border-border rounded-xl overflow-hidden hover:border-acid-border transition-all duration-200"
            >
              <div className="h-64 relative">
                {m.featuredImage?.asset?.url && (
                  <Image
                    src={m.featuredImage.asset.url}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-5 bg-bg-2">
                <div className="font-display font-bold text-xl text-text-primary mb-1">
                  {m.name}
                </div>
                <div className="text-sm text-muted font-body mb-3">
                  Sanity Template
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-body uppercase tracking-wider border ${m.price === "Free" ? "bg-acid-dim text-acid border-acid-border" : "bg-bg-2 text-mid border-border"}`}
                >
                  {m.price}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
