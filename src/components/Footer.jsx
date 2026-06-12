import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/main_logo_image.png";

const unityPages = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-dark px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-left md:grid-cols-3">
        <div>
          <Image
            src={logo}
            alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
            className="mb-4 h-24 w-auto"
          />
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            &quot;Enhance your app with seamless design integration, including
            user-friendly questionnaires, secure payment processing, Meta ads
            creation, and efficient earning systems, all built to your
            specifications for a flawless user experience.&quot;
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Unity Pages</h4>
          <ul className="space-y-3">
            {unityPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-gray-400 transition hover:text-primary"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="mailto:abc@gmail.com" className="transition hover:text-primary">
                abc@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+00956567890" className="transition hover:text-primary">
                (009)56567890
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
