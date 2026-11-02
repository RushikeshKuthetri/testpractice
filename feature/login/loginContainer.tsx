
"use client";

import { useState } from "react";
import Input from "@/components/common/textInput";
import Button from "@/components/common/button";
import Title from "@/components/common/heading";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Replace with your login API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log({ email, password });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10">

      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-lg">
            A
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <Title as={1} size="3xl" align="center">
            Welcome Back
          </Title>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to access your account.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            fullWidth
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            fullWidth
          />

          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            fullWidth
            size="lg"
            loading={loading}
            disabled={!email || !password}
          >
            Sign In
          </Button>

        </form>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-500">
            {"Don't have an account?"}
            <a
              href="/register"
              className="font-semibold text-blue-600 hover:underline"
            >
              Create account
            </a>
          </p>
        </div>

      </div>
    </main>
  );
}
