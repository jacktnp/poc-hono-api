// connect neon
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DATABASE_URL!);
export const db = drizzle({ client: sql });

// connect pg
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";

// const pool = new Pool({
//   connectionString: process.env.NEON_DATABASE_URL ?? "",
// });
// export const db = drizzle(pool);
