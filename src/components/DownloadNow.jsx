import Image from "next/image";
import phone from "../assets/images/single_phone_image.png";
import StoreBadges from "./StoreBadges";

export default function DownloadNow() {
  return (
    <section className="bg-dark px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 text-center text-3xl font-bold text-white sm:text-4xl">
          Download Now
        </h2>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex w-full justify-center lg:w-1/2">
            <Image
              src={phone}
              alt="NAILEDit app screen"
              className="w-64 max-w-full sm:w-80"
            />
          </div>

          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://play.google.com/store"
              alt="QR code to download the app"
              className="mb-8 h-32 w-32 rounded-lg bg-white p-2"
            />

            <h3 className="mb-3 max-w-sm text-xl font-bold text-white sm:text-2xl">
              Download the App and Find Your Perfect learning partner.
            </h3>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-400">
              Available on iOS and Android. Start your journey towards a
              fulfilling your learning
            </p>

            <StoreBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
