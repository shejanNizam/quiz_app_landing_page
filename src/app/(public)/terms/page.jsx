import PolicyPage from "@/components/PolicyPage";

export const metadata = {
  title: "Terms and Condition | NAILEDit!",
};

export default function Terms() {
  return (
    <PolicyPage
      contentKey="terms_and_conditions"
      fallbackTitle="Terms and condition"
    />
  );
}
