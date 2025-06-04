"use client";

import Navbar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useEffect, useRef, useState } from "react";

export default function Header() {
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
        <div className="w-25 h-10 bg-red-500"></div>
        <Navbar className="hidden md:flex gap-4 bg-white/40 px-3 py-1 rounded-full " />
        <HamburgerMenu className="md:hidden bg-[var(--base-color)]/40 rounded-sm " />
        <button className="hidden md:block ">Login</button>
      </div>
    </header>
  );
}
