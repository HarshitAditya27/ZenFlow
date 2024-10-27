import { UserButton } from "@/features/auth/components/user-button";
import React from "react";
import MobileSidebar from "./MobileSidebar";

function Navbar() {
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Home</h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          fuga rem doloremque voluptatum odio inventore tempora quibusdam
          accusamus magnam dolor iure, iusto repellat cumque possimus doloribus
          rerum, dignissimos atque eos?
        </p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
}

export default Navbar;
