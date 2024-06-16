import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import NavbarWrapper from "@/app/components/NavbarWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tejas Bhovad's Portfolio",
  description: "Tejas Bhovad's Portfolio using Next.js and Three.js",
};

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <meta property="og:image" content="/image.png" />
        <meta property="og:image:alt" content="Portfolio | Tejas Bhovad" />
        <meta name="twitter:image" content="/image.png" />
        <meta property="twitter:image:alt" content="Portfolio | Tejas Bhovad" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NavbarWrapper>{children}</NavbarWrapper> <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
