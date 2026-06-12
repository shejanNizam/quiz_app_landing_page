import PolicyPage from "@/components/PolicyPage";

export const metadata = {
  title: "Privacy Policy | NAILEDit!",
};

export default function Privacy() {
  return (
    <PolicyPage contentKey="privacy_policy" fallbackTitle="Privacy policy." />
  );
}
