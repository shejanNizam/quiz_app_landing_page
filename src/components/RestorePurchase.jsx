import Image from "next/image";
import Link from "next/link";
import image from "../assets/restore/restore.png";
import CHeading from "./CHeading";
import CParagraph from "./CParagraph";
import CSubHeading from "./CSubHeading";

export default function RestorePurchase() {
  return (
    <div className="shadow-sm p-4 md:p-8 lg:p-12 rounded-lg max-w-5xl mx-auto text-center">
      <div className="w-full max-w-sm mx-auto">
        <Image
          src={image}
          alt="restore_image"
          className="object-contain w-full h-auto"
        />
      </div>
      <div className="my-2">
        <CHeading text="30-Day Money-Back" />
        <CSubHeading text="Guarantee Without Questions" />
      </div>
      <div className="md:w-[80%] mx-auto">
        <CParagraph
          text={[
            "We're confident that our Kegel Plan will work for you and that you can achieve noticeable improvements in a few weeks! We're so confident that we're even ready to return your money without any questions if you don't see noticeable improvements. All you need is to send an email to ",
            <span className="font-semibold text-lg">
              contact@kegel-plan.com
            </span>,
            " within 30 days and ask for a refund. But we're sure that the Kegel Plan will show it's efficacy and there will be no need for a refund. You can find more about the refund process in our ",
            <Link
              href={`/privacy`}
              className="font-bold text-blue-800 cursor-pointer underline"
            >
              Privacy Policy.
            </Link>,
          ]}
        />
      </div>
    </div>
  );
}
