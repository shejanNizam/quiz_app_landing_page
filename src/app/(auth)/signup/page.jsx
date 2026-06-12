"use client";

import AuthButton from "@/components/auth/AuthButton";
import AuthInput from "@/components/auth/AuthInput";
import AuthShell from "@/components/auth/AuthShell";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiArrowLeft, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError(null);
    // TODO: wire up to the auth API
    router.push("/verify-email");
  };

  return (
    <AuthShell>
      <h1 className="mb-8 flex items-center justify-center gap-2 text-2xl font-bold text-white">
        <Link href="/signin" aria-label="Back to sign in">
          <FiArrowLeft className="text-xl" />
        </Link>
        Sign Up
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          icon={FiUser}
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <AuthInput
          icon={FiMail}
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <AuthInput
          icon={FiPhone}
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
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
        <AuthInput
          icon={FiLock}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-center text-sm text-red-500">{error}</p>}

        <AuthButton>Sign Up</AuthButton>
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
