"use clinet";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";


const SocialButton = () => {
  const searchParams = useSearchParams();

  const handleSignIn = () => {
    // 1. Safely grab the callback URL (fixing the 'null' bug)
    let callback = searchParams.get("callbackUrl");
    if (!callback || callback === "null") {
      callback = "/";
    }

    // 2. Call Google Sign In
    // Note: We do not 'await' or use 'redirect: false' for Google.
    // NextAuth will automatically redirect the user to Google's website.
    signIn("google", { callbackUrl: callback });
  };
  return (
    <button
      onClick={handleSignIn}
      type="button"
      className="btn btn-outline hover:bg-base-200 text-neutral w-full"
    >
      <FcGoogle className="text-2xl" />
      Continue with Google
    </button>
  );
};

export default SocialButton;
