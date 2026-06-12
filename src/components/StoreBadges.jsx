import Link from "next/link";

export default function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="https://play.google.com/store"
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
  );
}
