import { DATABASE_ID, MEMBERS_ID } from "@/config";
import { Query, type Databases } from "node-appwrite";

interface GetMemberProps {
  databases: Databases;
  workspaceId: string;
  userId: string;
}

// export const getMember = async ({
//   databases,
//   workspaceId,
//   userId,
// }: GetMemberProps) => {
//   const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
//     Query.equal("workspaceId", workspaceId),
//     Query.equal("userId", userId),
//   ]);
//   return members.documents[0];
// };

export const getMember = async ({
  databases,
  workspaceId,
  userId,
}: GetMemberProps) => {
  try {
    // console.log("Attempting to get member with:", {
    //   DATABASE_ID,
    //   MEMBERS_ID,
    //   workspaceId,
    //   userId,
    // });

    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      Query.equal("workspaceId", workspaceId),
      Query.equal("userId", userId),
    ]);

    // console.log("Members query successful:", members.documents.length);
    return members.documents[0];
  } catch (error) {
    console.error("Error in getMember:", {
      error,
      DATABASE_ID,
      MEMBERS_ID,
      workspaceId,
      userId,
    });
    throw error;
  }
};
