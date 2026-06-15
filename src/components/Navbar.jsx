"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../assets/images/main_logo_image.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 px-4 py-4 sm:px-6 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-primary/60 px-5 py-2 sm:px-8 transition-all duration-300 hover:border-primary/90">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>
      </nav>
    </motion.header>
  );
}
