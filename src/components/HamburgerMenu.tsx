import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function HamburgerMenu({ className }: { className?: string }) {
  const button = useTranslations("Button");
  const pathname = usePathname();

  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsOpened(false);

    if (isOpened) {
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isOpened]);

  const hamburgerLines =
    "bg-white h-1 w-7 block rounded-full transition duration-500 ease-in-out";

  const hamburgerSpans = (
    <>
      <span
        className={`${
          isOpened ? "translate-x-8 opacity-0" : ""
        } ${hamburgerLines} top-2`}
      ></span>
      <span
        className={`${isOpened ? "-rotate-45" : ""} ${hamburgerLines} absolute`}
      ></span>
      <span
        className={`${isOpened ? "rotate-45" : ""} ${hamburgerLines} absolute`}
      ></span>
      <span
        className={`${
          isOpened ? "translate-x-8 opacity-0" : ""
        } ${hamburgerLines} -top-2`}
      ></span>
    </>
  );

  return (
    <div className={className}>
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className="relative z-50 w-12 h-12 cursor-pointer flex flex-col justify-center items-center gap-3"
      >
        {hamburgerSpans}
      </div>

      <div
        className={`
          fixed top-0 left-0 h-screen w-1/2 backdrop-blur-sm bg-white/30
          transition-all duration-500 ease-in-out
          ${
            isOpened
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 transform -translate-x-full pointer-events-none"
          }
        `}
      >
        <Navbar className="pt-10 pl-4 inline-flex flex-col gap-4 relative" />
        <Button className="block bg-[var(--lighter-base-color)] mt-6 ml-2">
          {button("signUp")}
        </Button>
      </div>
    </div>
  );
}
