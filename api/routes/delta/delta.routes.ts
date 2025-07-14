import { Hono } from "hono";
import { deltaController } from "./delta.controller";

const deltaRoutes = new Hono();

deltaRoutes.get("/", deltaController.getAllDeltas);

export default deltaRoutes;
