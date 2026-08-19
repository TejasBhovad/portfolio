export default function manifest() {
  return {
    name: "Tejas Bhovad — Portfolio",
    short_name: "Tejas Bhovad",
    description:
      "Real-time systems and the interfaces on top of them. Portfolio of Tejas Bhovad.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
