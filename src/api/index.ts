// src/api/index.ts

import { Hono } from "hono";
import userRoutes from "./users/user.routes";
// import postRoutes from './posts/post.routes'; // You would add other routes here

const api = new Hono();

// Mount the user routes under the /users path
api.route("/users", userRoutes);
// api.route('/posts', postRoutes); // Other routes would be mounted similarly

export default api;
