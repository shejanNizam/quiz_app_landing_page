import Image from "next/image";
import image from "../assets/rating_review/ratings.png";
import CHeading from "./CHeading";
import CParagraph from "./CParagraph";
import CSubHeading from "./CSubHeading";

const testimonialsData = [
  {
    _id: "t1",
    name: "Few weeks in",
    rating: 5,
    review:
      "I was very skeptical at first. Seems like yeah yeah yeah but nothing works. I started having problems about 1 yr ago. I bought supplements, but never worked. So I came across this ad on my feed. What the heck let me try it. Even though it would cost some money. I’ve wasted money before. So I decided to try it. I will say I noticed a difference in about 2 weeks. So I was excited about the results in the future. I’ve now doing the exercises for 72 days straight. WOW I wake up like I’m in my twenties. Standing at attention, bigger, stronger than in years. I definitely would recommend this plan to everyone. Just remember be committed to doing the exercise as I am. I guarantee you’ll see results and you’ll be tremendously happy.",
  },
  {
    _id: "t2",
    name: "Excellent",
    rating: 5,
    review: "Literally changed my life!",
  },
  {
    _id: "t3",
    name: "Few weeks in",
    rating: 5,
    review:
      "I’m a few weeks in and I can already tell there’s better blood flow and less temptation to ejaculate early.",
  },
];

const StarIcon = () => (
  <svg
    data-v-08248647=""
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="16" fill="#1DB87F"></rect>
    <path
      d="M7.99779 2.17969L9.30404 6.19995H13.5311L10.1113 8.68461L11.4176 12.7049L7.99779 10.2202L4.578 12.7049L5.88424 8.68461L2.46445 6.19995H6.69155L7.99779 2.17969Z"
      fill="white"
    ></path>
  </svg>
);

const RatingStars = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} fill={i < rating} />
    ))}
  </div>
);

export default function RatingWithSuccess() {
  return (
    <div className="bg-gray-50 py-12 sm:py-20 ">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center">
          <Image
            src={image}
            alt="rating_image"
            className="w-[80%] h-[80%] mx-auto mb-4"
          />
        </div>
        <CHeading text="Hear Success Stories From Our Customers" />

        <div className="flex flex-col gap-2">
          {testimonialsData?.map((testimonial) => (
            <div
              key={testimonial._id}
              className="
                bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-2
              "
            >
              <RatingStars rating={testimonial.rating} />
              <CSubHeading text={testimonial.name} />
              <CParagraph text={testimonial.review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
