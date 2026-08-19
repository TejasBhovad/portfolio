import Link from "next/link";
import { profile } from "@/lib/content";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-meta text-faint">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-meta">
        <Link href={profile.github} className="text-muted link-underline hover:text-baseColor">
          GitHub
        </Link>
        <Link href={profile.linkedin} className="text-muted link-underline hover:text-baseColor">
          LinkedIn
        </Link>
        <Link href={profile.youtube} className="text-muted link-underline hover:text-baseColor">
          YouTube
        </Link>
        <Link
          href="https://github.com/TejasBhovad/portfolio"
          className="text-muted link-underline hover:text-baseColor"
        >
          Source
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
