import Image from "next/image";
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

export default function HowItWorks() {
  return (
    <section className="bg-dark px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-3xl font-bold text-white sm:text-4xl">
          How it works
        </h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex w-full justify-center lg:w-2/5">
            <Image
              src={phone}
              alt="NAILEDit app screen"
              className="w-64 max-w-full sm:w-72"
            />
          </div>

          <div className="w-full space-y-4 text-left lg:w-3/5">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-gray-600 px-6 py-4 transition hover:border-primary"
              >
                <h3 className="mb-1.5 font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
