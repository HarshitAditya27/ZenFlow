// import "server-only";

// import { AUTH_COOKIE } from "@/features/auth/constants";
// import { getCookie } from "hono/cookie";
// import {
//   Account,
//   Client,
//   Databases,
//   Models,
//   Storage,
//   type Account as AccountType,
//   type Databases as DatabasesType,
//   type Storage as StorageType,
//   type Users as UsersType,
// } from "node-appwrite";

// import { createMiddleware } from "hono/factory";

// type AdditionalContext = {
//   Variables: {
//     account: AccountType;
//     databases: DatabasesType;
//     storage: StorageType;
//     users: UsersType;
//     user: Models.User<Models.Preferences>;
//   };
// };

// export const sessionMiddleware = createMiddleware<AdditionalContext>(
//   async (c, next) => {
//     const client = new Client()
//       .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//       .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

//     const session = getCookie(c, AUTH_COOKIE);

//     if (!session) {
//       return c.json({ error: "Unauthorized" }, 401);
//     }
//     client.setSession(session);
//     const account = new Account(client);
//     const databases = new Databases(client);
//     const storage = new Storage(client);

//     const user = await account.get();

//     c.set("account", account);
//     c.set("databases", databases);
//     c.set("storage", storage);
//     c.set("user", user);

//     await next();
//   }
// );
import "server-only";
import { AUTH_COOKIE } from "@/features/auth/constants";
import { getCookie } from "hono/cookie";
import {
  Account,
  Client,
  Databases,
  Models,
  Storage,
  AppwriteException,
  type Account as AccountType,
  type Databases as DatabasesType,
  type Storage as StorageType,
  type Users as UsersType,
} from "node-appwrite";
import { createMiddleware } from "hono/factory";

type AdditionalContext = {
  Variables: {
    account: AccountType;
    databases: DatabasesType;
    storage: StorageType;
    users: UsersType;
    user: Models.User<Models.Preferences>;
  };
};

export const sessionMiddleware = createMiddleware<AdditionalContext>(
  async (c, next) => {
    try {
      console.log("Environment check:", {
        hasEndpoint: !!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
        hasProject: !!process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
        hasDatabase: !!process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      });

      const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

      const session = getCookie(c, AUTH_COOKIE);
      console.log("Session check:", { hasSession: !!session });

      if (!session) {
        return c.json({ error: "Unauthorized" }, 401);
      }

      client.setSession(session);

      console.log("Initializing Appwrite services...");
      const account = new Account(client);
      const databases = new Databases(client);
      const storage = new Storage(client);

      console.log("Fetching user account...");
      const user = await account.get();
      console.log("User fetched successfully:", { userId: user.$id });

      c.set("account", account);
      c.set("databases", databases);
      c.set("storage", storage);
      c.set("user", user);

      console.log("Middleware setup complete");
      await next();
    } catch (error) {
      const appwriteError = error as AppwriteException;
      console.error("Session middleware error:", {
        message: appwriteError.message,
        code: appwriteError.code,
        type: appwriteError.type,
        stack: appwriteError.stack,
      });

      return c.json(
        {
          error: "Authentication failed",
          details: appwriteError.message,
        },
        401
      );
    }
  }
);
