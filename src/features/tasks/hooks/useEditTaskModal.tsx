import { useQueryState, parseAsString } from "nuqs";

function useEditTaskModal() {
  const [taskId, setTaskId] = useQueryState("edit-task", parseAsString);

  const open = (id: string) => setTaskId(id);
  const close = () => setTaskId(null);

  return {
    taskId,
    open,
    close,
    setTaskId,
  };
}

export default useEditTaskModal;
