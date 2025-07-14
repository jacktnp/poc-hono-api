import { Hono } from "hono";
import { handle } from "hono/vercel";
import routes from "./routes";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.route("/api", routes);

export default handle(app);
