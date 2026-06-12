"use client";

import AuthButton from "@/components/auth/AuthButton";
import AuthShell from "@/components/auth/AuthShell";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

const OTP_LENGTH = 6;

export default function VerifyEmail() {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const digits = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH)
      .split("");
    if (!digits.length) return;

    const next = Array(OTP_LENGTH).fill("");
    digits.forEach((digit, i) => (next[i] = digit));
    setOtp(next);
    inputRefs.current[Math.min(digits.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to the auth API
    router.push("/reset-password");
  };

  return (
    <AuthShell>
      <h1 className="mb-8 flex items-center justify-center gap-2 text-2xl font-bold text-white">
        <Link href="/forgot-password" aria-label="Back">
          <FiArrowLeft className="text-xl" />
        </Link>
        Verify Email
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="h-11 w-11 rounded-full bg-white text-center text-lg font-bold text-black outline-none focus:ring-2 focus:ring-primary sm:h-12 sm:w-12"
            />
          ))}
        </div>

        <AuthButton>Verify</AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Please enter the OTP we sent to your email.{" "}
        <button type="button" className="font-semibold text-primary hover:underline">
          Resend
        </button>
      </p>
    </AuthShell>
  );
}
