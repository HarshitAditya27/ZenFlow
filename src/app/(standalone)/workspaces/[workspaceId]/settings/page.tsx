import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";
import { WorkspaceIdSettingsClient } from "./client";

// interface WorkspaceIdSettingsPageProps {
//   params: {
//     workspaceId: string;
//   };
// }

async function WorkspaceIdSettingsPage() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  //const initialValues = await getWorkspace({ workspaceId: params.workspaceId });
  // if (!initialValues) {
  //   redirect(`/workspaces/${params.workspaceId}`);
  // }
  return <WorkspaceIdSettingsClient />;
}

export default WorkspaceIdSettingsPage;
