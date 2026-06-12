import PolicyPage from "@/components/PolicyPage";

export const metadata = {
  title: "About Us | NAILEDit!",
};

export default function About() {
  return <PolicyPage contentKey="about_us" fallbackTitle="About us" />;
}
