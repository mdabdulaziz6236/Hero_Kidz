"use clinet";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialButton = () => {
  const searchParams = useSearchParams();

  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: "false",
      callbackUrl: searchParams.get("callbackUrl") || "/",
    });
    if (result.ok) {
      Swal.fire("success", "Welcome", "success");
    } else {
      Swal.fire("error", "Please Try Again", "error");
    }
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
