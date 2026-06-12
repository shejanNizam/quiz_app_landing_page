import Link from "next/link";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const plans = [
  {
    name: "Basic Plan",
    price: 14,
    includedCount: 5,
    features: Array(9).fill("Add quote"),
  },
  {
    name: "Standard Plan",
    price: 29,
    includedCount: 6,
    features: Array(9).fill("Add quote"),
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: 30,
    includedCount: 7,
    features: Array(9).fill("Add quote"),
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-dark px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
          Choose your plan
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-gray-400">
          Unlock exclusive content and premium features with our subscription!
          Enjoy ad-free experiences, early access, and special perks designed
          to enhance your journey. Subscribe now for full benefits and seamless
          access.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl bg-white p-7 text-gray-900 ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
            >
              <h3 className="mb-4 text-center text-xl font-semibold">
                {plan.name}
              </h3>
              <p className="mb-6 text-center">
                <span className="text-4xl font-bold">$ {plan.price}</span>
                <span className="text-sm text-gray-500"> /month</span>
              </p>

              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, index) => {
                  const included = index < plan.includedCount;
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      {included ? (
                        <FiCheckCircle className="shrink-0 text-green-500" />
                      ) : (
                        <FiXCircle className="shrink-0 text-red-400" />
                      )}
                      {feature}
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/signup"
                className="mt-auto block rounded-full bg-primary py-3 text-center text-sm font-semibold text-black transition hover:brightness-110"
              >
                Purchase now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
