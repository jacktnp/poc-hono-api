import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import api from "./api";

export const config = {
  runtime: "edge",
};

const app = new Hono();
// const app = new Hono().basePath("/api");

app.use("*", logger());

app.get("/", (c) => {
  return c.text("🎉 Welcome to the Hono API! 🎉");
});

app.route("/api", api);

app.notFound((c) => {
  return c.json({ message: "Not Found", ok: false }, 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ message: "An internal error occurred", ok: false }, 500);
});

export const GET = handle(app);
export const POST = handle(app);

export default app;
