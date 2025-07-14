import { Pool } from "pg";

const pool = () => {
  const pool_config = new Pool({
    host: process.env.PGHOST ?? "localhost",
    database: process.env.PGDATABASE ?? "default_db",
    user: process.env.PGUSER ?? "postgres",
    password: process.env.PGPASSWORD ?? "",
    ssl: true,
  });

  return pool_config;
};

if (
  !process.env.PGHOST ||
  !process.env.PGDATABASE ||
  !process.env.PGUSER ||
  !process.env.PGPASSWORD
) {
  console.warn("Missing some database environment variables!");
}

export default pool;
