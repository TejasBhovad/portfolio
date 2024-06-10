import Link from "next/link";

import SwitchModes from "@/app/components/SwitchModes";
function Navbar() {
  return (
    <nav className="absolute w-full h-14 flex bg-foreground px-6 py-2 items-center">
      <ul className="w-full flex gap-2 justify-between">
        <li>
          <Link href="/">home</Link>
        </li>
        <div className="flex gap-4">
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <SwitchModes />
        </div>
      </ul>
    </nav>
  );
}
const NavbarWrapper = ({ children }) => {
  return (
    <div suppressHydrationWarning className="w-ful h-full">
      <Navbar />
      <main className="w-full h-full pt-14"> {children}</main>
    </div>
  );
};

export default NavbarWrapper;
