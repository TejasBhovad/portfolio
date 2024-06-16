export default function manifest() {
  return {
    name: "Tejas Bhovad Portfolio",
    short_name: "Tejas Portfolio",
    description: "Portfolio of Tejas Bhovad using Next.js and Three.js",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
