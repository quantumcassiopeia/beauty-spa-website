import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Navbar({ className }: { className?: string }) {
  const t = useTranslations("Navbar");
  return (
    <nav>
      <ul className={`${className}`}>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li>
          <Link href="/services">{t("services")}</Link>
        </li>
        <li>
          <Link href="/contact">{t("contact")}</Link>
        </li>
      </ul>
    </nav>
  );
}
