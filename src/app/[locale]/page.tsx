import Image from "next/image";
import { useTranslations } from "next-intl";
import SplitView from "@/components/SplitView";
import { FlatCard } from "@/components/Cards";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <main className="flex flex-col items-center h-full w-full max-w-7xl mx-auto">
      <section className="relative h-[30rem] md:h-[48rem] w-full bg-[var(--base-color)] ">
        <Image
          src="/images/hero.avif"
          fill
          alt="Beauva Spa"
          className="object-cover opacity-50 z-10"
        />
        <div className="absolute z-10 flex flex-col w-full text-center items-center px-4 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 text-white">
          <h1 className="text-4xl md:text-5xl">{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
          <button className="bh-white">BUTTON 1 BTTUNO 2</button>
        </div>
      </section>
      <section className="w-full relative -top-12 z-10 px-4 ">
        <SplitView
          href="/images/towelAndCandles.avif"
          title="Towel and candles"
        >
          <div className="flex flex-col items-center p-8 md:py-16 md:p-20  md:items-start bg-[var(--off-white)] text-center md:text-left h-full">
            <div className="bg-red-500 rounded-full h-10 w-10"></div>
            <h1 className="text-4xl text-[var(--darker-base-color)] my-6 md:text-5xl">
              {t("splitView.title")}{" "}
              <span className="text-[var(--base-color)]">
                {t("splitView.span")}
              </span>
            </h1>
            <p>{t("splitView.subtitle")}</p>
          </div>
        </SplitView>
      </section>
      <section className="flex flex-col items-center w-full px-4">
        <span className="border-2 border-[var(--base-color)]/20 px-5 py-1 mb-7 rounded-3xl ">
          {t("services.tag")}
        </span>
        <h1 className="text-center text-4xl text-[var(--darker-base-color)] mb-5 md:text-5xl">
          {t("services.title")}{" "}
          <span className="text-[var(--base-color)]">{t("services.span")}</span>
        </h1>
        <p className="text-center">{t("services.subtitle")}</p>
        <div className="flex flex-wrap flex-col items-center w-full mt-8 gap-5 md:justify-evenly md:flex-row md:mt-18">
          <FlatCard
            image="/images/towelAndCandles.avif"
            title="Towel and candles"
            description="Lorem"
          />
          <FlatCard
            image="/images/towelAndCandles.avif"
            title="Towel and candles"
            description="Lorem"
          />
          <FlatCard
            image="/images/towelAndCandles.avif"
            title="Towel and candles"
            description="Lorem"
          />
          <FlatCard
            image="/images/towelAndCandles.avif"
            title="Towel and candles"
            description="Lorem "
          />
        </div>
      </section>
    </main>
  );
}
