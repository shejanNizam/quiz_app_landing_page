import Image from "next/image";
import image from "../assets/improvement/expect_improvement.png";
import CHeading from "./CHeading";
import CParagraph from "./CParagraph";

export default function ExpectImprove() {
  return (
    <>
      <CHeading text="When to expect improvements" />
      <div className="text-center">
        <CParagraph text="Based on your data you can reach noticeable improvements" />
      </div>
      <div className="text-center text-xl text-[#5773D6] font-bold mt-2">
        by November 27{" "}
        <span className="bg-green-500 rounded-full px-2 py-1 text-white text-xs inline-block shadow-sm animate-pulse transition-all duration-300">
          {" "}
          34% Faster{" "}
        </span>
      </div>
      <Image
        src={image}
        alt="expect_improvement"
        className="w-[60%] h-[60%] mx-auto my-8"
      />
      <p className="text-xs text-gray-400 text-center">
        *for illustration purposes only
      </p>
    </>
  );
}
