import { useParams } from "next/navigation";

function useWorkspaceId() {
  const params = useParams();
  return params.workspaceId as string;
}

export default useWorkspaceId;
