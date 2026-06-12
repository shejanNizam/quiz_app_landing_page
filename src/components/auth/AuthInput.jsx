"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthInput({
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = true,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex items-center gap-3 rounded-full border border-gray-400 px-5 py-3">
      {Icon && <Icon className="shrink-0 text-gray-300" />}
      <input
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="shrink-0 text-gray-300"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
}
