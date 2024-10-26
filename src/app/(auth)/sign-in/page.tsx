import { getCurrent } from "@/features/auth/actions";
import SignInCard from "@/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";
import React from "react";

async function SignInPage() {
  const user = await getCurrent();
  if (user) redirect("/");

  return (
    <div>
      <SignInCard />
    </div>
  );
}

export default SignInPage;
