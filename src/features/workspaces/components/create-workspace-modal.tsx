"use client";
import ResponsiveModal from "@/components/responsive-modal";
import React from "react";
import { CreateWorkspaceForm } from "./create-workspace-form";
import useCreateWorkspaceModal from "../hooks/useCreateWorkspaceModal";

function CreateWorkspaceModal() {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
}

export default CreateWorkspaceModal;
