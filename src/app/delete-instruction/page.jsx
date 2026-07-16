import DeleteInstruction from "@/components/DeleteInstruction";

export const metadata = {
  title: "Delete Account | NAILEDit!",
  description:
    "Step-by-step instructions to permanently delete your NAILEDit! account and associated data.",
  robots: { index: false, follow: false },
};

export default function DeleteInstructionPage() {
  return <DeleteInstruction />;
}
