import Image from "next/image";
import Link from "next/link";
import image from "../assets/download_now/phone.png";
import CHeading from "./CHeading";
import CParagraph from "./CParagraph";
import CSubHeading from "./CSubHeading";

export default function DownloadNow() {
  return (
    <div className="flex flex-col items-center py-16 bg-white font-sans text-gray-800">
      <CHeading text="Download Now" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl px-4">
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 min-h-[500px] sm:min-h-[550px] lg:min-h-[560px]">
          <Image src={image} alt="double_phone_image" />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-md lg:max-w-none px-4 lg:px-0">
          <div className="mb-6 flex flex-col items-center">
            {/* modify later */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store/games?hl=en"
              alt="QR Code to download app"
              className="w-32 h-32 mb-2 bg-gray-200"
            />
            <CParagraph text="Scan me for download" />
          </div>

          <div className="w-[70%]">
            <CSubHeading text="Download the App and Find Your Perfect Job Today" />
          </div>
          <div className="my-4">
            <CParagraph
              text="Available on iOS and Android. Start your journey towards a
            fulfilling career in just a few taps!"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </Link>

            <Link
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the Apple App Store"
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
