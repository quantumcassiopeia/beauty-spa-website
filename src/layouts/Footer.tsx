import Navbar from "@/components/Navbar";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="width-full w-full bg-[var(--base-color)]">
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:max-w-7xl mx-auto px-4 py-10 bg-green-400">
          <h1 className="max-w-80">Stay Radiant with Beauva</h1>
          <div className="w-80 h-10 bg-red-500">subscribe</div>
        </div>
      </div>
      <div className="w-full md:max-w-7xl p-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <section className="flex flex-col gap-2">
            <div className="mb-10 w-25 h-10 bg-red-500"></div>
            <h3>Working hours</h3>
            <p>
              <span className="font-bold text-[var(--darker-base-color)]">
                Monday - Saturday:
              </span>{" "}
              9:00am - 8:00pm
            </p>
            <p>
              <span className="font-bold text-[var(--darker-base-color)]">
                Sunday:
              </span>{" "}
              Closed
            </p>
          </section>
          <section className="flex gap-12 mt-10">
            <div>
              <h3 className="mb-4">Menu</h3>
              <Navbar className="flex flex-col gap-3" />
            </div>
            <div>
              <h3 className="mb-4">Contact us</h3>
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
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
