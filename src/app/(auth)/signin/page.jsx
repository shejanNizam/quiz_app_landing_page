"use client";

import AuthButton from "@/components/auth/AuthButton";
import AuthInput from "@/components/auth/AuthInput";
import AuthShell from "@/components/auth/AuthShell";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";

export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to the auth API
    router.push("/");
  };

  return (
    <AuthShell>
      <h1 className="mb-8 text-center text-2xl font-bold text-white">
        Sign in
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          icon={FiMail}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
        />
        <AuthInput
          icon={FiLock}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-red-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <AuthButton>Sign In</AuthButton>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-red-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </AuthShell>
  );
}
