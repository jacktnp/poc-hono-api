import { Hono } from "hono";
import userRoutes from "./users/user.routes";
import deltaRoutes from "./delta/delta.routes";

const api = new Hono();

api.route("/users", userRoutes);
api.route("/deltas", deltaRoutes);

export default api;
