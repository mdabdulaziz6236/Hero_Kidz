"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react"; // We will use this soon!
import Swal from "sweetalert2";
import SocialButton from "@/components/auth/SocialButton";
import { useRouter, useSearchParams } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  let callback = searchParams.get("callbackUrl");
  if (!callback || callback === "null") {
    callback = "/";
  }
  // 1. Set up the state for email and password
  const [form, setForm] = useState({
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
    // const result = await signIn("credentials", {
    //   email: form.email,
    //   password: form.password,
    //   redirect: false,
    // });
    const result = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
      callbackUrl: searchParams.get("callbackUrl") || "/",
    });
    if (result?.error) {
      Swal.fire({
        title: "Error, Email Password Not matched",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    } else {
      router.push(callback);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] bg-base-100 p-4">
      <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-200">
        {/* 4. Connect handleSubmit to the form */}
        <form onSubmit={handleSubmit} className="card-body p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-neutral">
            Login to Hero Kidz
          </h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-neutral">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email" // Must match the state key
              value={form.email} // Connect to state
              onChange={handleChange} // Update state on typing
              placeholder="email@example.com"
              className="input input-bordered w-full focus:border-primary focus:outline-none"
              required
              autoComplete="username"
            />
          </div>

          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text font-medium text-neutral">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="input input-bordered w-full focus:border-primary focus:outline-none"
              required
              autoComplete="current-password" // <-- Add this line here
            />
            <label className="label mt-1">
              <a
                href="#"
                className="label-text-alt link link-hover text-neutral/70"
              >
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary text-white w-full text-lg"
            >
              Login
            </button>
          </div>

          <div className="divider text-sm text-neutral/50 my-4">OR</div>

          {/* We will add NextAuth Google login to this button later */}
          <SocialButton></SocialButton>

          <p className="text-center mt-6 text-sm text-neutral">
            Don't have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callback}`}
              className="text-primary font-bold hover:underline"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
