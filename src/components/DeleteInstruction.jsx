"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MdMailOutline, MdWarningAmber } from "react-icons/md";
import stepOne from "../assets/images/delete-instruction/delete_instruction_one.jpeg";
import stepTwo from "../assets/images/delete-instruction/delete_instruction_two.jpeg";
import stepThree from "../assets/images/delete-instruction/delete_instruction_three.jpeg";
import stepFour from "../assets/images/delete-instruction/delete_instruction_four.jpeg";

const steps = [
  {
    title: "Open your Profile",
    description:
      "Open the NAILEDit! app and tap Profile from the bottom navigation bar.",
    image: stepOne,
    alt: "Profile tab highlighted in the bottom navigation bar",
  },
  {
    title: "Go to Settings",
    description: "On the Profile screen, tap Settings.",
    image: stepTwo,
    alt: "Settings option highlighted on the Profile screen",
  },
  {
    title: "Tap Delete Account",
    description:
      "Scroll to the bottom of the Settings page and tap the Delete Account button.",
    image: stepThree,
    alt: "Delete Account button at the bottom of the Settings page",
  },
  {
    title: "Review the warning",
    description:
      "A confirmation dialog will appear. Review the warning that deleting your account is permanent and cannot be undone.",
    image: stepFour,
    alt: "Delete Account confirmation dialog with a permanent-action warning",
  },
  {
    title: "Confirm or cancel",
    description:
      "Tap Delete to permanently delete your account, or tap Cancel to keep your account and return to the Settings screen.",
    image: null,
    alt: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function DeleteInstruction() {
  return (
    <div className="min-h-screen bg-dark">
      {/* header */}
      <section className="relative mx-4 mt-6 overflow-hidden rounded-3xl bg-[#3d3230] px-6 py-16 text-center sm:mx-6">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative"
        >
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Account management
          </span>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Delete your account
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Follow the steps below to permanently delete your NAILEDit! account
            and all associated data directly from within the app.
          </p>
        </motion.div>
      </section>

      {/* warning callout */}
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex items-start gap-4 rounded-2xl border border-red-500/30 bg-red-500/5 p-5"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
            <MdWarningAmber size={22} />
          </span>
          <div>
            <h2 className="mb-1 font-semibold text-white">
              This action is permanent
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Deleting your account removes your profile, quiz history, progress,
              and any purchases. This cannot be undone, and the data cannot be
              recovered afterwards.
            </p>
          </div>
        </motion.div>
      </section>

      {/* steps */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className={`flex flex-col gap-6 rounded-3xl border border-gray-800 bg-card p-6 sm:p-8 ${
                step.image
                  ? i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                  : ""
              } md:items-center`}
            >
              {/* text */}
              <div className={step.image ? "md:flex-1" : "w-full"}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>

              {/* screenshot */}
              {step.image && (
                <div className="flex shrink-0 justify-center md:w-64">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    className="w-52 max-w-full rounded-2xl border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:w-56"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* support */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="rounded-3xl border border-gray-800 bg-[#141414] p-6 text-center sm:p-8"
        >
          <h2 className="text-xl font-semibold text-white">
            Need help deleting your account?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-400">
            If you are unable to access the app or need us to remove your account
            and associated data on your behalf, contact our support team and we
            will process your request.
          </p>
          <a
            href="mailto:info@naileditexamprep.com?subject=Account%20deletion%20request"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-dark transition-transform duration-200 hover:scale-105"
          >
            <MdMailOutline size={18} />
            info@naileditexamprep.com
          </a>
        </motion.div>
      </section>
    </div>
  );
}
