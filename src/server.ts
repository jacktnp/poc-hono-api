import app from "./index"; // Import Hono app จากไฟล์หลัก

const server = Bun.serve({
  port: 4000, // กำหนด port ที่ต้องการ
  fetch: app.fetch, // ส่ง handler ของ Hono ให้ Bun โดยตรง
});

console.log(`🚀 Server is running at http://localhost:${server.port}`);
