import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";
import { WorkspaceIdJoinClient } from "./client";

// interface WorkspaceIdJoinPageProps {
//   params: {
//     workspaceId: string;
//   };
// }

async function WorkspaceIdJoinPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  // const initialValues = await getWorkspaceInfo({
  //   workspaceId: params.workspaceId,
  // });

  // if (!initialValues) {
  //   redirect("/");
  // }

  return (
    <WorkspaceIdJoinClient />
    // <div className="w-full lg:max-w-xl">
    //   <JoinWorkspaceForm initialValues={initialValues} />
    // </div>
  );
}

export default WorkspaceIdJoinPage;
