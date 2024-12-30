import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DottedSeperator } from "./dotted-seperator";
import Navigation from "./Navigation";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import Projects from "./Projects";

function Sidebar() {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/l1.png" alt="logo" height={48} width={164} />
      </Link>
      <DottedSeperator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeperator className="my-4" />
      <Navigation />
      <DottedSeperator className="my-4" />
      <Projects />
    </aside>
  );
}

export default Sidebar;
