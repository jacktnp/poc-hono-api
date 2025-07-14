import pool from "../../../utils/db";

export const deltaService = {
  findAll: async (): Promise<any[]> => {
    const client = await pool().connect();

    try {
      const result = await client.query(`
        SELECT
          id,
          name
        FROM
          delta
        ORDER BY
          id
    `);

      return result.rows;
    } catch (error) {
      return [];
    }
  },
};
