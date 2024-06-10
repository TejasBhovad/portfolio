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
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        base: withOpacity("--color-text-base"),
        muted: withOpacity("--color-text-muted"),
      },
      backgroundColor: {
        base: withOpacity("--color-background-base"),
        foreground: withOpacity("--color-background-foreground"),
      },
      colors: {
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
      },
    },
  },
  plugins: [],
};
