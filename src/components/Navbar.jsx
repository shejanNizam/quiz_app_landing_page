import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/main_logo_image.png";

export default function Navbar() {
  return (
    <header className="bg-dark px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-primary/60 px-5 py-2 sm:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <Link
          href="/signup"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 sm:px-8"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
