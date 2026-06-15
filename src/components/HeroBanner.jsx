"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import bannerBg from "../assets/images/banner_bg_image.png";
import bannerPhones from "../assets/images/banner_phone_image.png";
import StoreBadges from "./StoreBadges";

const avatars = [
  "https://i.pravatar.cc/48?img=12",
  "https://i.pravatar.cc/48?img=32",
  "https://i.pravatar.cc/48?img=45",
  "https://i.pravatar.cc/48?img=56",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HeroBanner() {
  return (
    <section className="bg-black px-4 py-6 sm:px-6">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <Image src={bannerBg} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col items-center gap-10 px-6 py-14 text-left lg:flex-row lg:px-14 lg:py-20">
          <motion.div
            className="w-full lg:w-1/2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="mb-5 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl"
              variants={fadeUp}
            >
              Build Your Construction Career with Industry-Led Training
            </motion.h1>

            <motion.p
              className="mb-8 max-w-md text-sm leading-relaxed text-gray-300 sm:text-base"
              variants={fadeUp}
            >
              Learn construction management, site safety, project planning,
              estimating, and skilled trades through expert-led courses designed
              for today&apos;s construction professionals.
            </motion.p>

            <motion.div
              className="mb-8 flex flex-wrap items-center gap-4"
              variants={fadeUp}
            >
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
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
                className="group flex items-center gap-3 rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-black hover:shadow-[0_0_28px_rgba(179,241,53,0.5)]"
              >
                Let&apos;s get started
                <FiArrowRight className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <StoreBadges />
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-full justify-center lg:w-1/2 lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          >
            <div className="animate-float">
              <Image
                src={bannerPhones}
                alt="NAILEDit app preview"
                className="w-72 max-w-full drop-shadow-[0_24px_64px_rgba(179,241,53,0.18)] sm:w-96"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
