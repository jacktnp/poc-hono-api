// src/api/users/user.routes.ts

import { Hono } from "hono";
import { userController } from "./user.controller";

const userRoutes = new Hono();

// Define the routes for the /users endpoint
userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);

export default userRoutes;
