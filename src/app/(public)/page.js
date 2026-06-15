import AmazingFeatures from "@/components/AmazingFeatures";
import DownloadNow from "@/components/DownloadNow";
import HeroBanner from "@/components/HeroBanner";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <StatsSection />
      <AmazingFeatures />
      <HowItWorks />
      {/* <PricingPlans /> */}
      <DownloadNow />
    </>
  );
}
