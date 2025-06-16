"use client";

import Navbar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
  const button = useTranslations("Button");

  const lastScrollY = useRef(0);
  const [isMobileHeaderHidden, setIsMobileHeaderHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (lastScrollY.current < currentScrollY && currentScrollY > 10) {
        setIsMobileHeaderHidden(true);
      } else {
        setIsMobileHeaderHidden(false);
      }

      setIsAtTop(currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed h-16 md:h-20 w-full z-50 transition-all duration-500 ease-in-out ${
        isAtTop ? "bg-transparent shadow-none" : "bg-white shadow-md"
      } ${isMobileHeaderHidden ? "-translate-y-full" : ""} md:-translate-y-0`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-7xl px-4 mx-auto ">
        <Logo color={isAtTop ? "light" : "dark"} name />
        <Navbar className="hidden md:flex gap-4 bg-white/75 px-3 py-1 rounded-full " />
        <HamburgerMenu className="md:hidden bg-[var(--base-color)]/40 rounded-sm " />
        <Button className="hidden md:block bg-[var(--lighter-base-color)] ">
          {button("signUp")}
        </Button>
      </div>
    </header>
  );
}
