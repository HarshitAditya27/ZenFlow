import { useParams } from "next/navigation";

function useInviteCode() {
  const params = useParams();
  return params.inviteCode as string;
}

export default useInviteCode;
