// import { client } from "@/lib/rpc";
// import { useQuery } from "@tanstack/react-query";

// interface UseGetTaskProps {
//   taskId: string;
// }

// export const useGetTask = ({ taskId }: UseGetTaskProps) => {
//   const query = useQuery({
//     queryKey: ["tasks", taskId],
//     queryFn: async () => {
//       const response = await client.api.tasks[":taskId"].$get({
//         param: {
//           taskId,
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

import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

interface UseGetTaskProps {
  taskId: string;
}

export const useGetTask = ({ taskId }: UseGetTaskProps) => {
  const query = useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      try {
        // console.log(`Fetching task with ID: ${taskId}`);
        const response = await client.api.tasks[":taskId"].$get({
          param: {
            taskId,
          },
        });

        if (!response.ok) {
          console.error(`Failed to fetch task ${taskId}:`, response.status);
          throw new Error("Failed to fetch task");
        }

        const { data } = await response.json();
        // console.log(`Successfully fetched task ${taskId}:`, data);
        return data;
      } catch (error) {
        console.error(`Error fetching task ${taskId}:`, error);
        toast.error("Failed to load task");
        throw error;
      }
    },
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
  return query;
};
