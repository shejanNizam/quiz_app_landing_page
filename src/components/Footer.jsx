"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdMailOutline, MdPhone } from "react-icons/md";
import logo from "../assets/images/main_logo_image.png";

const unityPages = [
  { label: "About Us", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaXTwitter, href: "#", label: "X / Twitter" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* top glow bar */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      {/* background radial glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-8">
        {/* main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* brand column */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-start gap-5"
          >
            <Image
              src={logo}
              alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
              width={160}
              height={80}
              className="h-20 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Seamless design integration with user-friendly questionnaires,
              secure payments, and efficient earning systems — built for a
              flawless experience.
            </p>
            {/* social icons */}
            <div className="flex gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* quick links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {unityPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-4 bg-primary/50 transition-all duration-200 group-hover:w-6 group-hover:bg-primary" />
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* contact */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:abc@gmail.com"
                  className="group flex items-center gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary transition-colors duration-200 group-hover:border-primary/50 group-hover:bg-primary/10">
                    <MdMailOutline size={16} />
                  </span>
                  abc@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+00956567890"
                  className="group flex items-center gap-3 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary transition-colors duration-200 group-hover:border-primary/50 group-hover:bg-primary/10">
                    <MdPhone size={16} />
                  </span>
                  (009) 565-67890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* bottom bar */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row"
        >
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-400">NAILEDit!</span> All rights
            reserved.
          </p>
          <div className="flex gap-5">
            {unityPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="transition-colors duration-200 hover:text-primary"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
