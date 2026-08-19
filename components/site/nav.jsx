"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { profile } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="container flex h-14 items-center justify-between gap-2 sm:gap-4"
      >
        <Link
          href="/"
          className="whitespace-nowrap text-[15px] font-medium tracking-tight text-baseColor transition-colors hover:text-accent"
        >
          {/* The surname is the first thing to go when the row runs out of
              room — otherwise the whole bar pushes the page sideways at 320px. */}
          {profile.name.split(" ")[0]}
          <span className="hidden min-[360px]:inline">
            {" " + profile.name.split(" ").slice(1).join(" ")}
          </span>
        </Link>

        <div className="flex items-center gap-0.5 min-[380px]:gap-1">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-2 py-1.5 text-sm transition-colors min-[380px]:px-3 ${
                  active
                    ? "bg-toggleHover text-baseColor"
                    : "text-muted hover:text-baseColor"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href={profile.resume}
            target="_blank"
            className="ml-1 hidden items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-baseColor transition-colors hover:bg-toggleHover sm:inline-flex"
          >
            Résumé
            <ArrowUpRight className="h-3.5 w-3.5 text-faint" strokeWidth={2} aria-hidden="true" />
          </Link>

          <span
            className="mx-1 hidden h-4 w-px bg-line min-[380px]:block"
            aria-hidden="true"
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
