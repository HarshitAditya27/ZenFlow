"use client";

import { UserButton } from "@/features/auth/components/user-button";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";

const pathnameMap = {
  tasks: {
    title: "My Tasks",
    description: "View all your tasks in one place.",
  },
  projects: {
    title: "My Project",
    description: "View and manage tasks for your projects.",
  },
};

const defaultMap = {
  title: "Welcome to Zenflow 🎊",
  description:
    "ZenFlow is a comprehensive project management application designed to help you effectively track and manage your project's progress. With ZenFlow, you can create workspaces tailored to your needs, organize projects within them, and assign tasks to streamline workflows. Track progress seamlessly and ensure every milestone is achieved efficiently.",
};

function Navbar() {
  const pathname = usePathname();

  const pathnameParts = pathname.split("/");
  const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;
  const { title, description } = pathnameMap[pathnameKey] || defaultMap;

  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
}

export default Navbar;
