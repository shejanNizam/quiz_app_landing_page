"use client";
import { motion } from "framer-motion";
import {
  FiBook,
  FiBarChart2,
  FiCheckSquare,
  FiAward,
  FiClock,
  FiStar,
} from "react-icons/fi";

const features = [
  {
    icon: FiBook,
    title: "Interactive Courses",
    description:
      "Learn construction fundamentals, safety regulations, project management, estimating, and building practices through engaging lessons.",
  },
  {
    icon: FiBarChart2,
    title: "Performance Analytics",
    description:
      "Track scores, strengths, weaknesses, and overall learning progress.",
  },
  {
    icon: FiCheckSquare,
    title: "Practice Quizzes",
    description:
      "Test your knowledge with thousands of construction-related quiz questions.",
  },
  {
    icon: FiAward,
    title: "Earn Certificates",
    description:
      "Receive digital certificates after successfully completing courses and exams.",
  },
  {
    icon: FiClock,
    title: "Online Exams",
    description:
      "Take realistic timed exams that simulate actual certification and qualification tests.",
  },
  {
    icon: FiStar,
    title: "Leaderboards & Achievements",
    description:
      "Stay motivated by competing with other learners and earning rewards.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function AmazingFeatures() {
  return (
    <section className="bg-white px-4 py-20 text-gray-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Amazing features.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-5 text-left md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={card}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 32px rgba(179,241,53,0.18)",
                  borderColor: "#b3f135",
                }}
                className="group rounded-xl border border-gray-200 p-6 transition-colors duration-300 cursor-default"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
