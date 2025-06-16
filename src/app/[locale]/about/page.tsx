import { useTranslations } from "next-intl";
import { StaffCard } from "@/components/Cards";
import Logo from "@/components/Logo";
export default function AboutPage() {
  const t = useTranslations("About");
  const experience = useTranslations("Homepage");

  const staffCards = t.raw("staffCard") as {
    name: string;
    expertise: string;
  }[];

  const experienceItems = experience.raw("experienceCard") as {
    title: string;
    description: string;
    icon: string;
  }[];

  return (
    <main className="flex flex-col gap-20 mt-25">
      {/* hero */}

      <section className="flex flex-col gap-12 max-w-7xl w-full mx-auto px-1 md:px-4">
        <div className="flex flex-col items-center gap-4 justify-between md:flex-row">
          <h1 className="text-4xl text-center md:text-left max-w-92">
            {t("hero.title")}{" "}
            <span className="text-[var(--darker-base-color)]">
              {t("hero.span")}
            </span>
          </h1>
          <p className="text-center max-w-80  md:text-right">
            {t("hero.subtitle")}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center items-center lg:justify-between">
          <div className="bg-[var(--base-color)] rounded-2xl w-40 h-40 md:w-92 md:h-72"></div>
          <div className="bg-[var(--base-color)] rounded-2xl w-40 h-40 md:w-92 md:h-72"></div>
          <div className="bg-[var(--base-color)] rounded-2xl w-82 h-40 md:w-92 md:h-72"></div>
        </div>
        <p className="text-xl text-justify px-2 md:text-3xl md:text-center">
          <span className="text-[var(--darker-base-color)]">
            {t("hero.strong")}
          </span>{" "}
          {t("hero.description")}
        </p>
      </section>

      {/* intersection */}

      <section className="flex items-center justify-center  mx-10 ">
        <div className="w-full h-px bg-[var(--base-color)] opacity-50"></div>
        <Logo color="dark" className="mx-4" />
        <div className="w-full h-px bg-[var(--base-color)] opacity-50"></div>
      </section>

      {/* our values  */}

      <section className="bg-[var(--base-color)] w-full">
        <div className="flex flex-col items-center justify-between max-w-7xl mx-auto md:flex-row text-[var(--lighter-base-color)] py-16 px-1 md:px-4 ">
          <div className="max-w-2xs">
            <h1 className="text-5xl text-center md:text-left md:text-6xl">
              {experience("experience.title")}{" "}
              <span className="opacity-60">
                {experience("experience.span")}
              </span>
            </h1>
            <p className="py-8">{experience("experience.subtitle")}</p>
          </div>
          <ul className="flex flex-col gap-4">
            {experienceItems.map((item, index) => (
              <li
                key={index}
                className="max-w-92 border border-[var(--lighter-base-color)]/20 rounded-2xl p-3 font-light "
              >
                <div className="flex items-center gap-x-2 ">
                  <div
                    className="w-10 h-10 bg-[var(--lighter-base-color)]"
                    style={{
                      WebkitMaskImage: `url(/icons/${item.icon}.svg)`,
                      maskImage: `url(/icons/${item.icon}.svg)`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <h3 className="text-xl">{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* step inside */}

      <section className="flex flex-col items-center px-1">
        <h1 className="text-4xl text-center">
          <span className="text-[var(--darker-base-color)]">
            {t("stepInside.span")}
          </span>{" "}
          {t("stepInside.title")}
        </h1>
        <p className="text-center pt-4 pb-8">{t("stepInside.subtitle")}</p>
        <video
          src="/images/spademo.mp4"
          controls
          className="max-w-5xl w-full rounded-2xl bg-[var(--base-color)]"
        />
      </section>

      {/* timeline */}

      {/* contact us */}

      {/* our team */}

      <section className="flex flex-col gap-12 max-w-7xl w-full mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <h1 className="text-4xl text-center md:text-left max-w-92">
            {t("staff.title")}{" "}
            <span className="text-[var(--darker-base-color)]">
              {t("staff.span")}
            </span>
          </h1>
          <p className="text-justify max-w-[32rem] md:text-right">
            {t("staff.subtitle")}
          </p>
        </div>
        <div className="flex justify-evenly flex-wrap gap-4 lg:justify-between ">
          {staffCards.map((card, index) => (
            <StaffCard
              key={card.name}
              image={`/images/staff${index + 1}.webp`}
              name={card.name}
              expertise={card.expertise}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
