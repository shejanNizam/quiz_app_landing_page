"use client";

import AuthButton from "@/components/auth/AuthButton";
import AuthInput from "@/components/auth/AuthInput";
import AuthShell from "@/components/auth/AuthShell";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiMail } from "react-icons/fi";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to the auth API
    router.push("/verify-email");
  };

  return (
    <AuthShell>
      <h1 className="mb-3 flex items-center justify-center gap-2 text-2xl font-bold text-white">
        <Link href="/signin" aria-label="Back to sign in">
          <FiArrowLeft className="text-xl" />
        </Link>
        Forgot Password
      </h1>
      <p className="mb-8 text-center text-sm text-gray-400">
        Please enter your email address to reset your password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          icon={FiMail}
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthButton>Send OTP</AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/signin" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
