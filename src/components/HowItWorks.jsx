"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import phone from "../assets/images/single_phone_image.png";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in minutes using your email address. Create your learner profile, track progress, save achievements, access courses, and manage certifications from one place.",
  },
  {
    title: "Choose a Learning Path",
    description:
      "Explore construction-focused courses covering safety, project management, estimating, site supervision, and skilled trades. Select the learning path that aligns with your goals.",
  },
  {
    title: "Learn with Expert Content",
    description:
      "Access video lessons, study materials, practical examples, and industry insights. Learn at your own pace while building knowledge and real-world construction skills.",
  },
  {
    title: "Practice with Quizzes",
    description:
      "Reinforce your learning through topic-based quizzes. Receive instant feedback, identify weak areas, improve understanding, and build confidence before taking exams.",
  },
  {
    title: "Take Online Exams",
    description:
      "Complete realistic online exams designed to test your knowledge. Experience timed assessments, monitor performance, review results, and prepare for certifications.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HowItWorks() {
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
          How it works
        </motion.h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <motion.div
            className="flex w-full justify-center lg:w-2/5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="animate-float">
              <Image
                src={phone}
                alt="NAILEDit app screen"
                className="w-64 max-w-full drop-shadow-[0_20px_56px_rgba(179,241,53,0.15)] sm:w-72"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full space-y-4 text-left lg:w-3/5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={stepVariant}
                whileHover={{ borderColor: "#b3f135", x: 4 }}
                className="flex gap-4 rounded-2xl border border-gray-700 px-6 py-4 transition-colors duration-300 cursor-default"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-1.5 font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
