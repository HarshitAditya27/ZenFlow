import { useQueryState, parseAsBoolean } from "nuqs";

function useCreateWorkspaceModal() {
  const [isOpen, setIsOpen] = useQueryState(
    "create-workspace",

    parseAsBoolean.withDefault(false).withOptions({ clearOnDefault: true })
  );

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
    setIsOpen,
  };
}

export default useCreateWorkspaceModal;
