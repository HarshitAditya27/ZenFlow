import { getCurrent } from "@/features/auth/actions";
import SignUpCard from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";
import React from "react";

async function SignUnPage() {
  const user = await getCurrent();
  if (user) redirect("/");

  return <SignUpCard />;
}

export default SignUnPage;
