import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { db } from "../../../utils/db";

export const delta = pgTable("delta", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
});

export const deltaService = {
  findAll: async (): Promise<any[]> => {
    try {
      const result = await db.select().from(delta);

      return result;
    } catch (error) {
      return [];
    }
  },
};
