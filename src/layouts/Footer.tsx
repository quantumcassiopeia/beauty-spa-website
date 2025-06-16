import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Logo from "@/components/Logo";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full mt-12">
      <div className="w-full md:max-w-7xl p-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <section className="flex flex-col gap-2">
            <Logo color="dark" name />
            <h3 className="mt-10">{t("openingHours")}</h3>
            <p>
              <span className="font-bold text-[var(--darker-base-color)]">
                {t("workingDays")}
              </span>{" "}
              9:00am - 8:00pm
            </p>
            <p>
              <span className="font-bold text-[var(--darker-base-color)]">
                {t("sunday.title")}
              </span>{" "}
              {t("sunday.description")}
            </p>
          </section>
          <section className="flex gap-12 mt-10">
            <div>
              <h3 className="mb-4">{t("quickLinks")}</h3>
              <Navbar className="flex flex-col gap-3" />
            </div>
            <div>
              <h3 className="mb-4">{t("contact")}</h3>
              <div className="flex flex-col gap-3">
                <p>(+1) 234 567 890</p>
                <p>123, Main Street, New York</p>
                <p>1Hs4o@example.com</p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex gap-2 flex-col items-center md:flex-row md:items-start justify-between mt-10 opacity-50">
          <div>Copyright @ {new Date().getFullYear()} Peterdraw</div>
          <ul className="flex gap-6">
            <li>
              <Link href="#">{t("privacyPolicy")}</Link>
            </li>
            <li>
              <Link href="#">{t("termsAndConditions")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
