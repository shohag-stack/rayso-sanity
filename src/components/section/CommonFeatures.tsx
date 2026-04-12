import React from "react";

export default function CommonFeatures() {

    const features = [
            "Clean code and folder structure",
            "Compatible with all modern browsers",
            "Free Icons + Google font",
            "Free future themes update",
            "Free customers support",
            "Responsive design",
            "Highly customizable",
            "Component-based design",
            "90+ Google PageSpeed score",
            "Pre-configured Cloudflare, Vercel & Netlify deploy setting",
            "Tailwind CSS for Styling",
            "SEO Optimized",
            "Pre-configured Sitepins CMS (Optional)"
    ]


  return (
    <>
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-[10px] font-body tracking-[0.18em] uppercase text-acid mb-5">
              <span className="w-5 h-px bg-acid" />
              Common Features
            </div>
            <h2 className="font-display font-bold text-4xl tracking-[-0.02em] mb-12">
              All of our NextJS themes come with the following{" "}
              <span className="font-serif italic font-normal text-acid">
                features:
              </span>
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="p-2 flex items-center gap-3">
                
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 text-acid"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg> <span className="text-base text-muted">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
