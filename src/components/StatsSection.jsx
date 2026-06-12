import Image from "next/image";
import logo from "../assets/images/main_logo_image.png";

const stats = [
  {
    value: "10k + Students",
    description:
      "Seamlessly integrate your app design with secure payment systems, Meta Ads management",
  },
  {
    value: "10 + Courses",
    description:
      "Seamlessly integrate your app design with secure payment systems, Meta Ads management",
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
    <section className="bg-dark px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 text-left md:grid-cols-3">
        <div className="flex justify-center md:justify-start">
          <Image
            src={logo}
            alt="NAILEDit! The Ultimate Exam Prep Course for Builders"
            className="h-40 w-auto sm:h-48"
          />
        </div>

        <div className="space-y-10">
          {stats.map((stat) => (
            <div key={stat.value}>
              <h3 className="mb-2 text-xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div>
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`py-5 ${index > 0 ? "border-t border-gray-700" : ""}`}
            >
              <h4 className="mb-2 font-semibold text-white">{benefit.title}</h4>
              <p className="text-sm leading-relaxed text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
