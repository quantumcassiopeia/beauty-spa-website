import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@/components/Button";

export default function Subscribe({ className }: { className?: string }) {
  const t = useTranslations("Subscribe");

  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="absolute z-10 flex flex-col items-center gap-8 justify-center h-full w-full max-w-7xl text-center text-[var(--lighter-base-color)] md:flex-row md:justify-between px-4">
        <h3 className="text-4xl max-w-80 ">
          {t("title")} <span className="opacity-60">{t("span")}</span>
        </h3>
        <div className="flex flex-col items-center gap-8 max-w-80 ">
          <p>{t("description")}</p>
          <div className="relative text-[var(--darker-base-color)]">
            <input
              type="email"
              placeholder={t("enterEmail")}
              className="bg-[var(--lighter-base-color)]/70 rounded-3xl w-80 py-1.5 px-4"
            />
            <Button className="absolute -right-2 bg-[var(--lighter-base-color)]">
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-92 bg-[var(--darker-base-color)] ">
        <Image
          src="/images/leavesBG.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>
    </div>
  );
}
