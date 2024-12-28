"use client";

import { UserButton } from "@/features/auth/components/user-button";
import React from "react";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";

const pathnameMap = {
  tasks: {
    title: "My Tasks",
    description: "View all of your tasks here",
  },
  projects: {
    title: "My Project",
    description: "View tasks of your project",
  },
};

const defaultMap = {
  title: "Home",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam fuga rem doloremque voluptatum odio inventore tempora quibusdam accusamus magnam dolor iure, iusto repellat cumque possimus doloribus rerum, dignissimos atque eos?",
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
