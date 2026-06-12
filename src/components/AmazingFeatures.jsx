const features = [
  {
    title: "Interactive Courses",
    description:
      "Learn construction fundamentals, safety regulations, project management, estimating, and building practices through engaging lessons.",
  },
  {
    title: "Performance Analytics",
    description:
      "Track scores, strengths, weaknesses, and overall learning progress.",
  },
  {
    title: "Practice Quizzes",
    description:
      "Test your knowledge with thousands of construction-related quiz questions.",
  },
  {
    title: "Earn Certificates",
    description:
      "Receive digital certificates after successfully completing courses and exams.",
  },
  {
    title: "Online Exams",
    description:
      "Take realistic timed exams that simulate actual certification and qualification tests.",
  },
  {
    title: "Leaderboards & Achievements",
    description:
      "Stay motivated by competing with other learners and earning rewards.",
  },
];

export default function AmazingFeatures() {
  return (
    <section className="bg-white px-4 py-20 text-gray-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Amazing features.
        </h2>

        <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border border-gray-200 p-5 transition hover:border-primary hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
