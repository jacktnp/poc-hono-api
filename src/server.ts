import app from "./index";

const server = Bun.serve({
  port: 4000,
  fetch: app.fetch,
});

console.log(`🚀 Server is running at http://localhost:${server.port}`);
