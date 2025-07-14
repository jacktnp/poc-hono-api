// server.ts
import { Hono } from "hono";
import routes from "./routes";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.route("/", routes);

const server = Bun.serve({
  port: 4000,
  fetch: app.fetch,
});

console.log(`🚀 Server is running at http://localhost:${server.port}`);
