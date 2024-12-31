import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
// import { TaskStatus } from "../types";

// interface UseGetTasksProps {
//   workspaceId: string;
//   projectId?: string | null;
//   status?: TaskStatus | null;
//   assigneeId?: string | null;
//   dueDate?: string | null;
//   search?: string | null;
// }

// export const useGetTasks = ({
//   workspaceId,
//   projectId,
//   status,
//   search,
//   dueDate,
//   assigneeId,
// }: UseGetTasksProps) => {
//   const query = useQuery({
//     queryKey: [
//       "tasks",
//       workspaceId,
//       projectId,
//       status,
//       search,
//       assigneeId,
//       dueDate,
//     ],
//     queryFn: async () => {
//       const response = await client.api.tasks.$get({
//         query: {
//           workspaceId,
//           projectId: projectId ?? undefined,
//           status: status ?? undefined,
//           assigneeId: assigneeId ?? undefined,
//           search: search ?? undefined,
//           dueDate: dueDate ?? undefined,
//         },
//       });
//       if (!response.ok) {
//         throw new Error("Failed to fetch tasks");
//       }
//       const { data } = await response.json();
//       return data;
//     },
//   });
//   return query;
// };

import { TaskStatus } from "../types";

interface UseGetTasksProps {
  workspaceId: string;
  projectId?: string | null;
  status?: TaskStatus | null;
  assigneeId?: string | null;
  dueDate?: string | null;
  search?: string | null;
}

export const useGetTasks = ({
  workspaceId,
  projectId,
  status,
  search,
  dueDate,
  assigneeId,
}: UseGetTasksProps) => {
  const query = useQuery({
    queryKey: [
      "tasks",
      workspaceId,
      projectId,
      status,
      search,
      assigneeId,
      dueDate,
    ],
    queryFn: async () => {
      try {
        // console.log("Fetching tasks with params:", {
        //   workspaceId,
        //   projectId,
        //   status,
        //   search,
        //   assigneeId,
        //   dueDate,
        // });

        const response = await client.api.tasks.$get({
          query: {
            workspaceId,
            projectId: projectId ?? undefined,
            status: status ?? undefined,
            assigneeId: assigneeId ?? undefined,
            search: search ?? undefined,
            dueDate: dueDate ?? undefined,
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch tasks:", response.status);
          throw new Error("Failed to fetch tasks");
        }

        const { data } = await response.json();
        // console.log("Successfully fetched tasks:", data);
        return data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }
    },
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
  return query;
};
