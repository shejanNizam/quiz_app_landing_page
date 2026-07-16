import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/main_logo_image.jpeg";

export default function AuthShell({ children }) {
  return (
    <div className="flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:justify-between md:gap-16">
      <Link href="/" className="flex w-full justify-center md:w-1/2">
        <Image
          src={logo}
          alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
          className="h-auto w-56 sm:w-72"
          priority
        />
      </Link>

      <div className="w-full max-w-sm md:w-1/2">{children}</div>
    </div>
  );
}
