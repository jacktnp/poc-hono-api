import { Hono } from "hono";
import userRoutes from "./users/user.routes";

const api = new Hono();

api.route("/users", userRoutes);

export default api;
