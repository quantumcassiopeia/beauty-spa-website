import Image from "next/image";
import { useTranslations } from "next-intl";
import SplitView from "@/components/SplitView";
import {
  ServiceCard,
  ExperienceCard,
  JourneyFlow,
  PricingCard,
  OurJourneyCard,
} from "@/components/Cards";

import { BookBanner } from "@/components/Banners";
import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default function Home() {
  const t = useTranslations("Homepage");
  const buttons = useTranslations("Button");

  const serviceCards = t.raw("serviceCards") as {
    tag: string;
    title: string;
  }[];

  const experienceCards = t.raw("experienceCard") as {
    title: string;
    description: string;
    icon: string;
  }[];

  const ourJourneyCards = t.raw("ourJourneyCard") as {
    number: string;
    span?: string;
    description: string;
  }[];

  const journeyFlows = t.raw("journeyFlow") as {
    title: string;
    description: string;
  }[];

  const pricingCards = t.raw("pricingCard") as {
    title: string;
    description: string;
    price: string;
    features: string[];
  }[];

  return (
    <main className="flex flex-col gap-y-36 items-center h-full w-full">
      {/* Hero */}

      <section className="relative h-[30rem] md:h-[48rem] w-full bg-[var(--darker-base-color)] ">
        <Image
          src="/images/hero.avif"
          fill
          alt="Beauva Spa"
          className="object-cover opacity-80 z-10"
        />
        <div className="absolute z-10 flex flex-col w-full text-center items-center px-4 top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-[var(--lighter-base-color)]">
          <h1 className="text-4xl md:text-5xl">
            <span className="text-[var(--lighter-base-color)]/80">
              {t("hero.span")}
            </span>{" "}
            {t("hero.title")}
          </h1>
          <p>{t("hero.subtitle")}</p>
          <div className="flex flex-col gap-4 mt-8 md:flex-row">
            <Button className="bg-[var(--lighter-base-color)]  text-[var(--base-color)]">
              {buttons("bookExperience")}
            </Button>
            <Button className=" backdrop-blur-sm bg-[var(--base-color)]/50 ">
              {buttons("explore")}
            </Button>
          </div>
        </div>
      </section>

      {/* Split View */}

      <section className="flex w-full max-w-7xl relative bottom-52 z-10 px-4 mx-auto ">
        <SplitView
          href="/images/towelAndCandles.avif"
          title="Towel and candles"
        >
          <div className="flex flex-col items-center p-8 md:py-16 md:p-16  md:items-start bg-[var(--off-white)] text-center md:text-left h-full">
            <Logo color="dark" />
            <h1 className="text-4xl text-[var(--darker-base-color)] my-6 md:text-5xl">
              {t("splitView.title")}{" "}
              <span className="text-[var(--base-color)]">
                {t("splitView.span")}
              </span>
            </h1>
            <p>{t("splitView.subtitle")}</p>
            <Button className="bg-[var(--base-color)] text-[var(--lighter-base-color)] mt-3 ">
              {buttons("getToKnow")}
            </Button>
          </div>
        </SplitView>
      </section>

      {/* Services */}

      <section className="flex flex-col items-center w-full max-w-7xl pt-6 px-2">
        <span className="border-2 border-[var(--base-color)]/20 px-5 py-1 rounded-3xl ">
          {t("services.tag")}
        </span>
        <h1 className="text-center text-4xl text-[var(--darker-base-color)] my-6 md:text-5xl">
          {t("services.title")}{" "}
          <span className="text-[var(--base-color)]">{t("services.span")}</span>
        </h1>
        <p className="text-center">{t("services.subtitle")}</p>
        <div className="flex flex-wrap flex-col items-center w-full pt-8 gap-5 justify-between md:gap-2 md:flex-row md:pt-14">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              image={`/images/service${index + 1}.jpg`}
              title={card.title}
              tag={card.tag}
            />
          ))}
        </div>
      </section>

      {/* Experience */}

      <section className="flex flex-col items-center w-full px-2">
        <h1 className="text-center text-4xl pb-4 md:text-5xl">
          {t("experience.title")}{" "}
          <span className="text-[var(--darker-base-color)]">
            {t("experience.span")}
          </span>
        </h1>
        <p className="text-center">{t("experience.subtitle")}</p>
        <div className="flex gap-3 lg:w-[58rem] lg:h-80 mt-10">
          <div className="flex flex-col gap-4">
            {experienceCards.slice(0, 3).map((card, index) => (
              <ExperienceCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4 flex-wrap">
            <div className="relative rounded-2xl h-24 w-44 lg:w-64 lg:h-80 overflow-clip bg-[var(--base-color)]">
              <Image
                src="/images/flower.jpg"
                fill
                alt="Our values"
                className="object-cover bg-[var(--base-color)] "
              />
            </div>
            {experienceCards.slice(3, 6).map((card, index) => (
              <ExperienceCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                iconPosition="right"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our numbers */}
      <section className="flex flex-col gap-8 items-center w-full md:flex-row justify-between px-2 mx-auto max-w-7xl">
        <div className="md:w-1/2">
          <h1 className="text-4xl  text-center pb-4 md:text-5xl md:text-left">
            {t("ourJourney.title")}{" "}
            <span className="text-[var(--darker-base-color)]">
              {t("ourJourney.span")}
            </span>
          </h1>
          <p className="text-[var(--darker-base-color)] text-center md:text-left">
            {t("ourJourney.story")}{" "}
            <span className="text-[var(--base-color)]">
              {t("ourJourney.description")}
            </span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
          {ourJourneyCards.map((card, index) => (
            <OurJourneyCard
              key={index}
              number={card.number}
              span={card.span}
              description={card.description}
            />
          ))}
        </div>
      </section>

      {/* Testimonial */}

      <section className="relative flex flex-col items-center justify-center w-full h-[40rem] bg-[var(--base-color)] py-10 px-2">
        <Image
          src="/images/leavesBG.jpg"
          fill
          alt="Testimonial"
          className="object-cover opacity-60"
        />
        <div className="relative flex flex-col max-w-3xl items-center text-center text-[var(--lighter-base-color)]">
          <Logo color="light" />
          <h1 className="text-4xl py-7 md:text-5xl ">
            {t("testimonial.title")}{" "}
            <span className="text-[var(--darker-base-color)]">
              {t("testimonial.span")}
            </span>
          </h1>
          <p className="font-light md:text-2xl ">{t("testimonial.quote")}</p>
          <p className="text-sm text-[var(--lighter-base-color)] pt-7">
            {t("testimonial.author")}
          </p>
        </div>
      </section>

      {/* How it works */}

      <section className="flex flex-col items-center w-full">
        <span className="border-2 border-[var(--base-color)]/20 px-5 py-1 rounded-3xl ">
          {t("howItWorks.tag")}
        </span>
        <h1 className="text-center text-4xl py-12 md:text-5xl">
          {t("howItWorks.title")}{" "}
          <span className="text-[var(--darker-base-color)]">
            {t("howItWorks.span")}
          </span>
        </h1>
        <div className="flex flex-wrap flex-col gap-8 items-center w-full md:justify-center md:flex-row">
          {journeyFlows.map((flow, index) => (
            <JourneyFlow
              key={index}
              title={flow.title}
              description={flow.description}
            >
              <div>{index + 1}</div>
            </JourneyFlow>
          ))}
        </div>
      </section>

      {/* Pricing */}

      <section className="flex flex-col items-center w-full px-2">
        <h1 className="text-center text-4xl md:text-5xl">
          <span className="text-[var(--darker-base-color)]">
            {t("pricing.span")}
          </span>{" "}
          {t("pricing.title")}
        </h1>
        <p className="text-center py-8 ">{t("pricing.subtitle")}</p>
        <div className="flex py-10 gap-x-2 w-full overflow-x-scroll lg:justify-center md:gap-x-10 scroll-smooth no-scrollbar">
          {pricingCards.map((card, index) => (
            <PricingCard
              key={index}
              title={card.title}
              description={card.description}
              price={card.price}
              features={card.features}
              variant={index === 1 ? "dark" : "light"}
            />
          ))}
        </div>
      </section>

      <BookBanner />
    </main>
  );
}
