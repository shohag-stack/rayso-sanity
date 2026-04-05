const items = [
  "Web Design", "UI/UX Design", "Framer Development", "Webflow Development",
  "Custom Development", "Sanity CMS", "Real Estate Websites", "Mortgage Brokers",
  "Plumbing & HVAC", "Home Services", "Local SEO", "CRO Optimization",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-t border-b py-3.5 bg-acid" style={{ borderColor: "var(--border-color)" }}>
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-8 font-display text-lg font-semibold tracking-[0.15em] uppercase whitespace-nowrap text-black" >
            <span className="w-2 h-2 rounded-full bg-black flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
