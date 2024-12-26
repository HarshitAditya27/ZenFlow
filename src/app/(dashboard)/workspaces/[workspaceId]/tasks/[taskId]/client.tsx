"use client";

import { DottedSeperator } from "@/components/dotted-seperator";
import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";
import { useGetTask } from "@/features/tasks/api/use-get-task";
import { TaskBreadcrumbs } from "@/features/tasks/components/TaskBreadcrumps";
import { TaskDescription } from "@/features/tasks/components/TaskDescription";
import { TaskOverview } from "@/features/tasks/components/TaskOverview";
import { useTaskId } from "@/features/tasks/hooks/useTaskId";

export const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data, isLoading } = useGetTask({ taskId });
  if (isLoading) {
    return <PageLoader />;
  }
  if (!data) {
    return <PageError message="Task not found" />;
  }
  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={data.project} task={data} />
      <DottedSeperator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
        <TaskDescription task={data} />
      </div>
    </div>
  );
};
