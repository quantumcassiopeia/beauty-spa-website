import FeaturesCard from "@/components/Cards";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  const featuresCardsCards = t.raw("FeaturesCards") as {
    tag: string;
    title: string;
    description: string;
  }[];

  return (
    <main className="flex flex-col gap-20">
      {/* hero */}

      <section>hero section</section>

      {/* Services */}

      <section className="flex flex-col gap-12 items-center max-w-7xl mx-auto px-2">
        <div className="flex flex-col items-center gap-4 w-full justify-between md:flex-row">
          <h1 className="text-4xl text-center md:text-left max-w-92">
            {t("title")}{" "}
            <span className="text-[var(--darker-base-color)]">{t("span")}</span>
          </h1>
          <p className="text-center max-w-80  md:text-right">{t("subtitle")}</p>
        </div>
        <div className="flex justify-center flex-wrap gap-20">
          {featuresCardsCards.map((card, index) => (
            <FeaturesCard
              key={index}
              src={`/images/feature${index + 1}.webp`}
              title={card.title}
              tag={card.tag}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
