"use client";

import { postUser } from "@/actions/server/auth";
import SocialButton from "@/components/auth/SocialButton";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  let callback = searchParams.get("callbackUrl") || "/";
  if (!callback || callback === "null") {
    callback = "/";
  }

  // 1. Set up the state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await postUser(form);
    if (result.acknowledged) {
      // router.push("/login");
      const signInResult = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callback,
      });
      if (signInResult.ok) {
        router.push(callback);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-base-100 p-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200">
        {/* 4. Connect handleSubmit to the form */}
        <form onSubmit={handleSubmit} className="card-body p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-neutral">
            Create an Account
          </h2>

          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-neutral">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="name" // Matches the state key
              value={form.name} // Connected to state
              onChange={handleChange} // Calls the function
              placeholder="Your Name"
              className="input input-bordered w-full focus:border-primary focus:outline-none"
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-medium text-neutral">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email" // Matches the state key
              value={form.email} // Connected to state
              onChange={handleChange} // Calls the function
              placeholder="email@example.com"
              className="input input-bordered w-full focus:border-primary focus:outline-none"
              required
              autoComplete="username" // <-- Add this line here
            />
          </div>

          {/* Password Input */}
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-medium text-neutral">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password" // Matches the state key
              value={form.password} // Connected to state
              onChange={handleChange} // Calls the function
              placeholder="********"
              className="input input-bordered w-full focus:border-primary focus:outline-none"
              required
              autoComplete="current-password" // <-- Add this line here
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white w-full text-lg"
            >
              Register
            </button>
          </div>

          <div className="divider text-sm text-neutral/50 my-4">OR</div>

          <SocialButton></SocialButton>

          <p className="text-center mt-6 text-sm text-neutral">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:underline"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
