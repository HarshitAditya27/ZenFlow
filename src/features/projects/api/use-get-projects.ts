// import { client } from "@/lib/rpc";
// import { useQuery } from "@tanstack/react-query";

// interface UseGetProjectsProps {
//   workspaceId: string;
// }

// export const useGetProjects = ({ workspaceId }: UseGetProjectsProps) => {
//   const query = useQuery({
//     queryKey: ["projects", workspaceId],
//     queryFn: async () => {
//       const response = await client.api.projects.$get({
//         query: { workspaceId },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch projects");
//       }
//       const { data } = await response.json();
//       return data;
//     },
//   });
//   return query;
// };

import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";

interface UseGetProjectsProps {
  workspaceId: string;
}

interface Project {
  $id: string;
  $collectionId: string;
  $databaseId: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  name: string;
  imageUrl: string;
  userId: string;
}

interface ProjectsResponse {
  total: number;
  documents: Project[];
}

interface ErrorResponse {
  error: string;
}

export const useGetProjects = ({ workspaceId }: UseGetProjectsProps) => {
  const query = useQuery({
    queryKey: ["projects", workspaceId],
    queryFn: async () => {
      const response = await client.api.projects.$get({
        query: { workspaceId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const result = (await response.json()) as
        | { data: ProjectsResponse }
        | ErrorResponse;

      if ("error" in result) {
        throw new Error(result.error);
      }

      return result.data;
    },
  });
  return query;
};
