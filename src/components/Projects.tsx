// "use client";
// import { useGetProjects } from "@/features/projects/api/use-get-projects";
// import ProjectAvatar from "@/features/projects/components/project-avatar";
// import useCreateProjectModal from "@/features/projects/hooks/useCreateProjectModal";
// import useWorkspaceId from "@/features/workspaces/hooks/useWorkspaceId";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import { RiAddCircleFill } from "react-icons/ri";

// function Projects() {
//   //const projectId = null;
//   const pathname = usePathname();
//   const { open } = useCreateProjectModal();
//   const workspaceId = useWorkspaceId();
//   const { data } = useGetProjects({
//     workspaceId,
//   });
//   return (
//     <div className="flex flex-col gap-y-2">
//       <div className="flex items-center justify-between">
//         <p className="text-xs uppercase text-neutral-500">Projects</p>
//         <RiAddCircleFill
//           onClick={open}
//           className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
//         />
//       </div>
//       {data?.documents.map((project) => {
//         const href = `/workspaces/${workspaceId}/projects/${project.$id}`;
//         const isActive = pathname === href;
//         return (
//           <Link key={project.$id} href={href}>
//             <div
//               className={cn(
//                 "flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
//                 isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
//               )}
//             >
//               <ProjectAvatar image={project.imageUrl} name={project.name} />
//               <span className="truncate">{project.name}</span>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

// export default Projects;

"use client";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import ProjectAvatar from "@/features/projects/components/project-avatar";
import useCreateProjectModal from "@/features/projects/hooks/useCreateProjectModal";
import useWorkspaceId from "@/features/workspaces/hooks/useWorkspaceId";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiAddCircleFill } from "react-icons/ri";

// Define the Project interface
interface Project {
  $id: string;
  name: string;
  imageUrl?: string;
}

// Define the API response structure
interface ProjectsResponse {
  documents: Project[];
}

function Projects() {
  const pathname = usePathname();
  const { open } = useCreateProjectModal();
  const workspaceId = useWorkspaceId();

  // Type the useGetProjects response
  const { data } = useGetProjects({
    workspaceId,
  }) as { data: ProjectsResponse | undefined };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-neutral-500">Projects</p>
        <RiAddCircleFill
          onClick={open}
          className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition"
        />
      </div>
      {data?.documents.map((project: Project) => {
        const href = `/workspaces/${workspaceId}/projects/${project.$id}`;
        const isActive = pathname === href;
        return (
          <Link key={project.$id} href={href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition cursor-pointer text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <ProjectAvatar image={project.imageUrl} name={project.name} />
              <span className="truncate">{project.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Projects;
