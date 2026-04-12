import React from "react";

export default function Sidebar({search, setSearch, categories, activeCategory, setActiveCategory}: {search: string, setSearch: (s: string) => void, categories: {id: string, label: string, count: number}[], activeCategory: string, setActiveCategory: (s: string) => void}) {
  return (
    <aside
      className="hidden lg:flex flex-col w-64 border-r sticky top-16 h-[calc(100vh-64px)] overflow-y-auto py-8 flex-shrink-0"
      style={{ borderColor: "var(--border-color)", background: "var(--bg-2)" }}
    >
      <div
        className="px-5 pb-5 border-b mb-4"
        style={{ borderColor: "var(--border-color)" }}
      >
        <input
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg px-4 py-2.5 font-body text-[12px] focus:outline-none transition-colors"
          style={{
            background: "var(--bg-3)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
          }}
        />
      </div>

      {[
        { section: "Layout", cats: categories.slice(0, 3) },
        { section: "Content", cats: categories.slice(3, 7) },
        { section: "Conversion", cats: categories.slice(7, 10) },
        { section: "Niche", cats: categories.slice(10) },
      ].map(({ section, cats }) => (
        <div key={section} className="px-4 mb-2">
          <div
            className="text-[9px] font-display font-bold tracking-[0.15em] uppercase px-2 py-3"
            style={{ color: "var(--muted)" }}
          >
            {section}
          </div>
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCategory(c.id);
                setSearch("");
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[12px] font-body transition-all duration-200"
              style={
                activeCategory === c.id && !search
                  ? {
                      background: "var(--acid-dim)",
                      color: "var(--acid)",
                      border: "1px solid var(--acid-border)",
                    }
                  : { color: "var(--muted)" }
              }
            >
              {c.label}
              <span
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={{ background: "var(--bg-4)", color: "var(--muted)" }}
              >
                {c.count}
              </span>
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
