import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import bannerBg from "../assets/images/banner_bg_image.png";
import bannerPhones from "../assets/images/banner_phone_image.png";
import StoreBadges from "./StoreBadges";

const avatars = [
  "https://i.pravatar.cc/48?img=12",
  "https://i.pravatar.cc/48?img=32",
  "https://i.pravatar.cc/48?img=45",
  "https://i.pravatar.cc/48?img=56",
];

export default function HeroBanner() {
  return (
    <section className="bg-black px-4 py-6 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <Image src={bannerBg} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-12 text-left lg:flex-row lg:px-14 lg:py-16">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-5 text-3xl font-bold leading-snug text-white sm:text-4xl">
              Build Your Construction Career with Industry-Led Training
            </h1>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-200 sm:text-base">
              Learn construction management, site safety, project planning,
              estimating, and skilled trades through expert-led courses designed
              for today&apos;s construction professionals.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt=""
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-full border border-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary hover:text-black"
              >
                Lets get started
                <FiArrowRight className="text-primary" />
              </Link>
            </div>

            <StoreBadges />
          </div>

          <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
            <Image
              src={bannerPhones}
              alt="NAILEDit app preview"
              className="w-72 max-w-full sm:w-96"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
