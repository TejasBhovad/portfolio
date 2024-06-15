import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

import NavbarWrapper from "@/app/components/NavbarWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tejas Bhovad's Portfolio",
  description: "Tejas Bhovad's Portfolio using Next.js and Three.js",
};

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <NavbarWrapper>{children}</NavbarWrapper> <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
