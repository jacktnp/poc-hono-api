import { Context } from "hono";
import { deltaService } from "./delta.service";

export const deltaController = {
  getAllDeltas: async (c: Context) => {
    try {
      const deltas = await deltaService.findAll();
      return c.json(deltas);
    } catch (error: any) {
      return c.json(
        { message: "Error fetching deltas", error: error.message },
        500
      );
    }
  },
};
