import React from "react";
import { useQueryState, parseAsBoolean } from "nuqs";

function useCreateProjectModal() {
  const [isOpen, setIsOpen] = useQueryState(
    "create-project",

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

export default useCreateProjectModal;