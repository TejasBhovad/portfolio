import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";

import NavbarWrapper from "@/app/components/NavbarWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <NavbarWrapper>{children}</NavbarWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
