import { sessionMiddleware } from "@/lib/session-middleware";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createTaskSchema } from "../schemas";
import { getMember } from "@/features/members/utils";
import { DATABASE_ID, MEMBERS_ID, PROJECTS_ID, TASKS_ID } from "@/config";
import { AppwriteException, ID, Query } from "node-appwrite";
import { z } from "zod";
import { Task, TaskStatus } from "../types";
import { createAdminClient } from "@/lib/appwrite";
import { Project } from "@/features/projects/types";

const app = new Hono()
  .delete("/:taskId", sessionMiddleware, async (c) => {
    const user = c.get("user");
    const databases = c.get("databases");
    const { taskId } = c.req.param();
    const task = await databases.getDocument<Task>(
      DATABASE_ID,
      TASKS_ID,
      taskId
    );

    const member = await getMember({
      databases,
      workspaceId: task.workspaceId,
      userId: user.$id,
    });
    if (!member) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    await databases.deleteDocument(DATABASE_ID, TASKS_ID, taskId);
    return c.json({ data: { $id: task.$id } });
  })
  // .get(
  //   "/",
  //   sessionMiddleware,
  //   zValidator(
  //     "query",
  //     z.object({
  //       workspaceId: z.string(),
  //       projectId: z.string().nullish(),
  //       assigneeId: z.string().nullish(),
  //       status: z.nativeEnum(TaskStatus).nullish(),
  //       search: z.string().nullish(),
  //       dueDate: z.string().nullish(),
  //     })
  //   ),
  //   async (c) => {
  //     const { users } = await createAdminClient();
  //     const databases = c.get("databases");
  //     const user = c.get("user");
  //     const { workspaceId, projectId, status, search, assigneeId, dueDate } =
  //       c.req.valid("query");
  //     const member = getMember({
  //       databases,
  //       workspaceId,
  //       userId: user.$id,
  //     });
  //     if (!member) {
  //       return c.json({ error: "Unauthorized" }, 401);
  //     }
  //     const query = [
  //       Query.equal("workspaceId", workspaceId),
  //       Query.orderDesc("$createdAt"),
  //     ];
  //     if (projectId) {
  //       // console.log("projectId", projectId);
  //       query.push(Query.equal("projectId", projectId));
  //     }
  //     if (status) {
  //       // console.log("status", status);
  //       query.push(Query.equal("status", status));
  //     }
  //     if (assigneeId) {
  //       // console.log("assigneeId", assigneeId);
  //       query.push(Query.equal("assigneeId", assigneeId));
  //     }
  //     if (dueDate) {
  //       // console.log("dueDate", dueDate);
  //       query.push(Query.equal("dueDate", dueDate));
  //     }
  //     if (search) {
  //       // console.log("search", search);
  //       query.push(Query.equal("search", search));
  //     }
  //     const tasks = await databases.listDocuments<Task>(
  //       DATABASE_ID,
  //       TASKS_ID,
  //       query
  //     );
  //     const projectIds = tasks.documents.map((task) => task.projectId);
  //     const assigneeIds = tasks.documents.map((task) => task.assigneeId);
  //     // console.log("projectIds:", projectIds);
  //     // console.log("assigneeIds:", assigneeIds);

  //     const projects = await databases.listDocuments<Project>(
  //       DATABASE_ID,
  //       PROJECTS_ID,
  //       projectIds.length > 0 ? [Query.contains("$id", projectIds)] : []
  //     );
  //     const members = await databases.listDocuments(
  //       DATABASE_ID,
  //       MEMBERS_ID,
  //       assigneeIds.length > 0 ? [Query.contains("$id", assigneeIds)] : []
  //     );

  //     // const assignees = await Promise.all(
  //     //   members.documents.map(async (member) => {
  //     //     console.log("Member data:", member); // Log the entire member object
  //     //     console.log("Member userId:", member.userId);
  //     //     const user = await users.get(member.userId);
  //     //     return {
  //     //       ...member,
  //     //       name: user.name,
  //     //       email: user.email,
  //     //     };
  //     //   })
  //     // );

  //     const assignees = await Promise.all(
  //       members.documents.map(async (member) => {
  //         if (!member.userId) {
  //           console.error(
  //             `Missing userId for member: ${JSON.stringify(member)}`
  //           );
  //           return { ...member, name: null, email: null };
  //         }
  //         try {
  //           const user = await users.get(member.userId);
  //           return {
  //             ...member,
  //             name: user.name,
  //             email: user.email,
  //           };
  //         } catch (error) {
  //           console.error(
  //             `Failed to fetch user for ID ${member.userId}:`,
  //             error
  //           );
  //           return { ...member, name: null, email: null };
  //         }
  //       })
  //     );

  //     const populatedTasks = tasks.documents.map((task) => {
  //       const project = projects.documents.find(
  //         (project) => project.$id === task.projectId
  //       );
  //       const assignee = assignees.find(
  //         (assignee) => assignee.$id === task.assigneeId
  //       );
  //       return {
  //         ...task,
  //         project,
  //         assignee,
  //       };
  //     });
  //     return c.json({
  //       data: {
  //         ...tasks,
  //         documents: populatedTasks,
  //       },
  //     });
  //   }
  // )
  .get(
    "/",
    sessionMiddleware,
    zValidator(
      "query",
      z.object({
        workspaceId: z.string(),
        projectId: z.string().nullish(),
        assigneeId: z.string().nullish(),
        status: z.nativeEnum(TaskStatus).nullish(),
        search: z.string().nullish(),
        dueDate: z.string().nullish(),
      })
    ),
    async (c) => {
      try {
        // Initial setup and checks
        const databases = c.get("databases");
        // console.log("Databases instance check:", {
        //   isDefined: !!databases,
        //   hasListDocuments: !!databases?.listDocuments,
        // });

        const { users } = await createAdminClient();
        const user = c.get("user");

        const { workspaceId, projectId, status, search, assigneeId, dueDate } =
          c.req.valid("query");

        // console.log("Query parameters:", {
        //   workspaceId,
        //   projectId,
        //   status,
        //   assigneeId,
        //   dueDate,
        //   search,
        // });

        const member = await getMember({
          databases,
          workspaceId,
          userId: user.$id,
        });

        if (!member) {
          console.log("Authorization failed:", {
            workspaceId,
            userId: user.$id,
          });
          return c.json({ error: "Unauthorized" }, 401);
        }

        const query = [
          Query.equal("workspaceId", workspaceId),
          Query.orderDesc("$createdAt"),
        ];

        if (projectId) {
          query.push(Query.equal("projectId", projectId));
        }
        if (status) {
          query.push(Query.equal("status", status));
        }
        if (assigneeId) {
          query.push(Query.equal("assigneeId", assigneeId));
        }
        if (dueDate) {
          query.push(Query.equal("dueDate", dueDate));
        }
        if (search) {
          query.push(Query.equal("search", search));
        }

        // console.log("Executing tasks query with:", {
        //   DATABASE_ID,
        //   TASKS_ID,
        //   queryLength: query.length,
        // });

        const tasks = await databases.listDocuments<Task>(
          DATABASE_ID,
          TASKS_ID,
          query
        );

        // console.log("Tasks fetched:", {
        //   count: tasks.documents.length,
        // });

        const projectIds = tasks.documents.map((task) => task.projectId);
        const assigneeIds = tasks.documents.map((task) => task.assigneeId);

        // console.log("Fetching related data:", {
        //   projectIdsCount: projectIds.length,
        //   assigneeIdsCount: assigneeIds.length,
        // });

        const projects = await databases.listDocuments<Project>(
          DATABASE_ID,
          PROJECTS_ID,
          projectIds.length > 0 ? [Query.contains("$id", projectIds)] : []
        );

        const members = await databases.listDocuments(
          DATABASE_ID,
          MEMBERS_ID,
          assigneeIds.length > 0 ? [Query.contains("$id", assigneeIds)] : []
        );

        const assignees = await Promise.all(
          members.documents.map(async (member) => {
            if (!member.userId) {
              console.error(
                `Missing userId for member: ${JSON.stringify(member)}`
              );
              return { ...member, name: null, email: null };
            }
            try {
              const user = await users.get(member.userId);
              return {
                ...member,
                name: user.name,
                email: user.email,
              };
            } catch (error) {
              const appwriteError = error as AppwriteException;
              console.error(
                `Failed to fetch user for ID ${member.userId}:`,
                appwriteError
              );
              return { ...member, name: null, email: null };
            }
          })
        );

        const populatedTasks = tasks.documents.map((task) => {
          const project = projects.documents.find(
            (project) => project.$id === task.projectId
          );
          const assignee = assignees.find(
            (assignee) => assignee.$id === task.assigneeId
          );
          return {
            ...task,
            project,
            assignee,
          };
        });

        // console.log("Response preparation complete:", {
        //   tasksCount: populatedTasks.length,
        // });

        return c.json({
          data: {
            ...tasks,
            documents: populatedTasks,
          },
        });
      } catch (error) {
        const appwriteError = error as AppwriteException;
        console.error("Route error:", {
          message: appwriteError.message,
          code: appwriteError.code,
          type: appwriteError.type,
          stack: appwriteError.stack,
        });

        return c.json(
          {
            error: "Internal Server Error",
            details: appwriteError.message,
            type: appwriteError.type,
            code: appwriteError.code,
          },
          500
        );
      }
    }
  )
  .post(
    "/",
    sessionMiddleware,
    zValidator("json", createTaskSchema),
    async (c) => {
      const user = c.get("user");
      const databases = c.get("databases");
      const { name, status, workspaceId, projectId, dueDate, assigneeId } =
        c.req.valid("json");
      const member = await getMember({
        databases,
        workspaceId,
        userId: user.$id,
      });
      if (!member) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      const highestPositionTask = await databases.listDocuments(
        DATABASE_ID,
        TASKS_ID,
        [
          Query.equal("status", status),
          Query.equal("workspaceId", workspaceId),
          Query.orderAsc("position"),
          Query.limit(1),
        ]
      );
      const newPosition =
        highestPositionTask.documents.length > 0
          ? highestPositionTask.documents[0].position
          : 1000;

      const task = await databases.createDocument(
        DATABASE_ID,
        TASKS_ID,
        ID.unique(),
        {
          name,
          status,
          workspaceId,
          projectId,
          dueDate,
          assigneeId,
          position: newPosition,
        }
      );
      return c.json({ data: task });
    }
  )
  .patch(
    "/:taskId",
    sessionMiddleware,
    zValidator("json", createTaskSchema.partial()),
    async (c) => {
      const user = c.get("user");
      const databases = c.get("databases");
      const { name, status, description, projectId, dueDate, assigneeId } =
        c.req.valid("json");
      const { taskId } = c.req.param();
      const existingTask = await databases.getDocument<Task>(
        DATABASE_ID,
        TASKS_ID,
        taskId
      );
      const member = await getMember({
        databases,
        workspaceId: existingTask.workspaceId,
        userId: user.$id,
      });
      if (!member) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      const task = await databases.updateDocument<Task>(
        DATABASE_ID,
        TASKS_ID,
        taskId,
        {
          name,
          status,
          projectId,
          dueDate,
          assigneeId,
          description,
        }
      );
      return c.json({ data: task });
    }
  )
  .get("/:taskId", sessionMiddleware, async (c) => {
    const currentUser = c.get("user");
    const databases = c.get("databases");
    const { users } = await createAdminClient();
    const { taskId } = c.req.param();

    const task = await databases.getDocument<Task>(
      DATABASE_ID,
      TASKS_ID,
      taskId
    );
    const currentMember = await getMember({
      databases,
      workspaceId: task.workspaceId,
      userId: currentUser.$id,
    });
    if (!currentMember) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    const project = await databases.getDocument<Project>(
      DATABASE_ID,
      PROJECTS_ID,
      task.projectId
    );
    const member = await databases.getDocument(
      DATABASE_ID,
      MEMBERS_ID,
      task.assigneeId
    );
    const user = await users.get(member.userId);
    const assignee = {
      ...member,
      name: user.name,
      email: user.email,
    };
    return c.json({
      data: { ...task, project, assignee },
    });
  })
  .post(
    "/bulk-update",
    sessionMiddleware,
    zValidator(
      "json",
      z.object({
        tasks: z.array(
          z.object({
            $id: z.string(),
            status: z.nativeEnum(TaskStatus),
            position: z.number().int().positive().min(1000).max(1_000_000),
          })
        ),
      })
    ),
    async (c) => {
      const databases = c.get("databases");
      const user = c.get("user");
      const { tasks } = await c.req.valid("json");

      const tasksToUpdate = await databases.listDocuments<Task>(
        DATABASE_ID,
        TASKS_ID,
        [
          Query.contains(
            "$id",
            tasks.map((task) => task.$id)
          ),
        ]
      );
      const workspaceIds = new Set(
        tasksToUpdate.documents.map((task) => task.workspaceId)
      );
      if (workspaceIds.size !== 1) {
        return c.json({ error: "All tasks must belong to same workspace" });
      }
      const workspaceId = workspaceIds.values().next().value;

      if (!workspaceId) {
        return c.json({ error: "workspaceId is required" }, 400);
      }

      const member = await getMember({
        databases,
        workspaceId,
        userId: user.$id,
      });
      if (!member) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      const updatedTasks = await Promise.all(
        tasks.map(async (task) => {
          const { $id, status, position } = task;
          return databases.updateDocument<Task>(DATABASE_ID, TASKS_ID, $id, {
            status,
            position,
          });
        })
      );
      return c.json({ data: updatedTasks });
    }
  );
export default app;
