// src/api/users/user.controller.ts

import { Context } from "hono";
import { userService } from "./user.service";

export const userController = {
  getAllUsers: async (c: Context) => {
    try {
      const users = await userService.findAll();
      return c.json(users);
    } catch (error: any) {
      return c.json(
        { message: "Error fetching users", error: error.message },
        500
      );
    }
  },
  getUserById: async (c: Context) => {
    const id = c.req.param("id");
    try {
      const user = await userService.findById(id);
      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }
      return c.json(user);
    } catch (error: any) {
      return c.json(
        { message: "Error fetching user", error: error.message },
        500
      );
    }
  },
};
