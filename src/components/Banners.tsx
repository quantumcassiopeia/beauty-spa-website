import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "./Button";

export function BookBanner({ classname }: { classname?: string }) {
  const t = useTranslations("BookBanner");
  const button = useTranslations("Button");

  return (
    <div
      className={`bg-white relative h-60 max-w-7xl w-full rounded-3xl overflow-clip ${classname} `}
    >
      <Image
        src="/images/bookNow.jpg"
        alt="Book you experience"
        fill
        className="object-cover mask-r-from-5 opacity-35 md:opacity-100 "
      />
      <div className="absolute top-8 right-6 flex flex-col items-end w-92">
        <p className="text-end text-4xl md:text-5xl">{t("title")}</p>
        <p className="text-end text-4xl md:text-5x text-[var(--darker-base-color)] l">
          {t("span")}
        </p>
        <p className="pt- pb-8 ">{t("subtitle")}</p>
        <Button className="bg-[var(--base-color)] text-[var(--lighter-base-color)]">
          {button("bookExperience")}
        </Button>
      </div>
    </div>
  );
}
