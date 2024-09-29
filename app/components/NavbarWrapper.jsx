"use client";
import { Suspense } from "react";
import MenuLogo from "@/app/components/MenuLogo";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimate,
  stagger,
} from "framer-motion";
import SwitchModes from "@/app/components/SwitchModes";

function Navbar() {
  const [isMounted, setIsMounted] = useState(false);

  const clickScope = useRef(null);
  const menuButtonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = [
    <Link href="/">
      <Button className="w-full text-lg font-semibold bg-transparent hover:bg-toggle/5  text-baseColor">
        Home
      </Button>
    </Link>,
    <Link href="/projects" className="">
      <Button className="w-full text-lg font-semibold bg-transparent hover:bg-toggle/5  text-baseColor">
        Projects
      </Button>
    </Link>,
    <Link href="/blog">
      <Button className="w-full text-lg font-semibold bg-transparent hover:bg-toggle/5  text-baseColor">
        Blog
      </Button>
    </Link>,
  ];

  const staggerList = stagger(0.1, { startDelay: 0.25 });
  useEffect(() => {
    if (!open) {
      return;
    }
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 135 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    setHidden(latest > prev && latest > 150);
    setOpen(false);
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        scope.current &&
        !scope.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scope, menuButtonRef]); // added menuButtonRef to the dependency array

  return (
    <motion.nav
      className="fixed w-full h-14 flex px-6 py-2 items-center bg-base z-20"
      ref={clickScope}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ul className="w-full flex items-center gap-2 justify-between font-medium text-lg select-none">
        <li className="hidden sm:flex">
          <Link href="/">
            <Button className="text-lg font-semibold bg-transparent hover:bg-toggle/5  text-baseColor">
              Home
            </Button>
          </Link>
        </li>
        <li className="flex sm:hidden">
          <motion.button
            ref={menuButtonRef}
            className="rounded-full text-lg font-semibold bg-transparent hover:bg-toggle/5 aspect-square p-3 text-baseColor"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.95 }}
          >
            <MenuLogo />
          </motion.button>
          <div
            className="absolute top-12 rounded-md bg-foreground "
            ref={scope}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            animate={open ? "visible" : "hidden"}
          >
            {open && (
              <ul className={`${open ? "p-2" : ""}`}>
                {items.map((item, index) => (
                  <motion.li key={index}>{item}</motion.li>
                ))}
              </ul>
            )}
          </div>
        </li>

        <div className="flex gap-4 items-center">
          <li className="hidden sm:flex">
            <Link href="/projects">
              <Button className="text-lg font-semibold bg-transparent hover:bg-toggle/5  text-baseColor">
                Projects
              </Button>
            </Link>
          </li>
          <li className="hidden sm:flex">
            <Link href="/blog">
              <Button className="text-lg font-semibold bg-transparent hover:bg-toggle/5  text-baseColor">
                Blog
              </Button>
            </Link>
          </li>
          <li>
            <SwitchModes />
          </li>
        </div>
      </ul>
    </motion.nav>
  );
}

const NavbarWrapper = ({ children }) => {
  return (
    <div suppressHydrationWarning className="w-full h-full">
      <Navbar />
      <main className="w-full h-full pt-14">{children}</main>
    </div>
  );
};

export default NavbarWrapper;
