import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav>
      <ul className={`${className}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
