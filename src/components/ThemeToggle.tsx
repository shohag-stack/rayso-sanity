"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative flex items-center w-[52px] h-[28px] rounded-full border
        transition-all duration-300 flex-shrink-0 cursor-pointer
        ${isDark
          ? "bg-bg-4 border-white/[0.12] hover:border-white/20"
          : "bg-[#e0e0e0] border-black/10 hover:border-black/20"
        }
      `}
    >
      {/* Track icons */}
      <span
        className={`
          absolute left-1.5 text-[11px] transition-opacity duration-200
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
      >
        🌙
      </span>
      <span
        className={`
          absolute right-1.5 text-[11px] transition-opacity duration-200
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
      >
        ☀️
      </span>

      {/* Sliding knob */}
      <span
        className={`
          absolute top-[3px] w-[22px] h-[22px] rounded-full shadow-md
          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${isDark
            ? "left-[3px] bg-[#2a2a2a] border border-white/10"
            : "left-[27px] bg-white border border-black/10"
          }
        `}
      />
    </button>
  );
}
