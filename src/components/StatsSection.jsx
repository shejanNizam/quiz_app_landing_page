"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../assets/images/main_logo_image.jpeg";

const stats = [
  {
    value: "10k+",
    label: "Students",
    description:
      "Learners across the country building their construction careers through expert-led training.",
  },
  {
    value: "10+",
    label: "Courses",
    description:
      "Industry-focused courses covering safety, project management, estimating, and skilled trades.",
  },
];

const benefits = [
  {
    title: "Unlimited leads",
    description:
      "Generate unlimited leads effortlessly, boosting your business growth with continuous, high-quality, potential customer connections.",
  },
  {
    title: "Get more clients",
    description:
      "Attract more clients effortlessly with targeted strategies, effective marketing, and enhanced visibility to grow your business.",
  },
  {
    title: "Grow your business",
    description:
      "Grow your business by expanding reach, boosting sales, enhancing visibility, and building strong customer relationships efficiently.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 text-left md:grid-cols-3">
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={logo}
            alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
            className="h-40 w-auto sm:h-48"
          />
        </motion.div>

        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {stats.map((stat) => (
            <div key={stat.value}>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-primary">
                  {stat.value}
                </span>
                <span className="text-lg font-semibold text-white">
                  {stat.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`py-5 ${index > 0 ? "border-t border-gray-800" : ""}`}
            >
              <h4 className="mb-2 font-semibold text-white">{benefit.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
