import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

async function WrokspaceId() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>WrokspaceId</div>;
}

export default WrokspaceId;
