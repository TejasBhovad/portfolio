/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  // next-themes writes data-theme, so `dark:` has to key off that too.
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      textColor: {
        baseColor: withOpacity("--color-text-base"),
        muted: withOpacity("--color-text-muted"),
        faint: withOpacity("--color-text-faint"),
        accent: withOpacity("--color-primary"),
        inverted: withOpacity("--color-background-base"),
      },
      colors: {
        primary: withOpacity("--color-primary"),
        inverted: withOpacity("--color-text-base"),
        bg: withOpacity("--color-background-base"),
        line: withOpacity("--color-line"),
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: withOpacity("--color-text-muted"),
        faint: withOpacity("--color-text-faint"),
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundColor: {
        base: withOpacity("--color-background-base"),
        surface: withOpacity("--color-background-foreground"),
        foreground: withOpacity("--color-background-foreground"),
        soft: withOpacity("--color-accent-soft"),
        toggle: withOpacity("--color-toggle-base"),
        toggleHover: withOpacity("--color-toggle-hover"),
        toggleMuted: withOpacity("--color-toggle-muted"),
      },
      borderColor: {
        line: withOpacity("--color-line"),
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      // Section rhythm: one scale, used everywhere.
      spacing: {
        section: "clamp(4.5rem, 3rem + 6vw, 8rem)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
