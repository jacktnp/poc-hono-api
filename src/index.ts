// import { Hono } from "hono";

// const app = new Hono();

// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });

// export default {
//   port: 4000,
//   fetch: app.fetch,
// };

import { Hono } from "hono";
import { logger } from "hono/logger";
import api from "./api"; // Imports the aggregated API router from /api/index.ts

// Initialize the main Hono application
const app = new Hono();

// --- Middleware ---
// Apply the logger middleware to all routes for request logging
app.use("*", logger());

// --- Routes ---
// 1. A simple root endpoint for a welcome message
app.get("/", (c) => {
  return c.text("🎉 Welcome to the Hono API! 🎉");
});

// 2. Mount all the API routes under the /api path
// This means routes from 'user.routes.ts' will be accessible at '/api/users'
app.route("/api", api);

// --- Error Handling ---
// A custom 404 Not Found handler
app.notFound((c) => {
  return c.json({ message: "Not Found", ok: false }, 404);
});

// A general error handler
app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ message: "An internal error occurred", ok: false }, 500);
});

// The default export is what platforms like Cloudflare Workers, Deno, or Bun use to run the app.
export default app;
