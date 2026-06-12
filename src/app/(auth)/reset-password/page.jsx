"use client";

import AuthButton from "@/components/auth/AuthButton";
import AuthInput from "@/components/auth/AuthInput";
import AuthShell from "@/components/auth/AuthShell";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiLock } from "react-icons/fi";

export default function ResetPassword() {
  const router = useRouter();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8 || form.password.length > 10) {
      setError("Your password must be 8-10 characters long.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    // TODO: wire up to the auth API
    router.push("/signin");
  };

  return (
    <AuthShell>
      <h1 className="mb-3 flex items-center justify-center gap-2 text-2xl font-bold text-white">
        <Link href="/verify-email" aria-label="Back">
          <FiArrowLeft className="text-xl" />
        </Link>
        Reset Password
      </h1>
      <p className="mb-8 text-center text-sm text-gray-400">
        Your password must be 8-10 characters long.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          icon={FiLock}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />
        <AuthInput
          icon={FiLock}
          type="password"
          name="confirmPassword"
          placeholder="Re-enter Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-center text-sm text-red-500">{error}</p>}

        <AuthButton>Continue</AuthButton>
      </form>
    </AuthShell>
  );
}
