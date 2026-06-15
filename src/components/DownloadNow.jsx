"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import phone from "../assets/images/single_phone_image.png";
import StoreBadges from "./StoreBadges";

export default function DownloadNow() {
  return (
    <section className="bg-dark px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="mb-14 text-center text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Download Now
        </motion.h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            className="flex w-full justify-center lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="animate-float">
              <Image
                src={phone}
                alt="NAILEDit app screen"
                className="w-64 max-w-full drop-shadow-[0_20px_56px_rgba(179,241,53,0.15)] sm:w-80"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="animate-glow-pulse mb-8 rounded-xl bg-white p-2"
            >
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store"
                alt="QR code to download the app"
                className="h-28 w-28 rounded-lg"
              />
            </motion.div>

            <h3 className="mb-3 max-w-sm text-xl font-bold text-white sm:text-2xl">
              Download the App and Find Your Perfect Learning Partner.
            </h3>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-400">
              Available on iOS and Android. Start your journey towards a
              fulfilling learning experience.
            </p>

            <StoreBadges />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
