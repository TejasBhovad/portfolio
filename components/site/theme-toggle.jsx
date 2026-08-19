"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Switch theme"}
      className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-toggleHover hover:text-baseColor"
    >
      {/* Both icons stay mounted so the button never reflows on hydration. */}
      <Sun
        className={`col-start-1 row-start-1 h-[18px] w-[18px] transition-opacity ${
          mounted && !isDark ? "opacity-100" : "opacity-0"
        }`}
        strokeWidth={1.75}
      />
      <Moon
        className={`col-start-1 row-start-1 h-[18px] w-[18px] transition-opacity ${
          mounted && isDark ? "opacity-100" : "opacity-0"
        }`}
        strokeWidth={1.75}
      />
    </button>
  );
};

export default ThemeToggle;
