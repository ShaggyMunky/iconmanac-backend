import express from "express";

import { readJsonDataHandler } from "../controllers/studioController";

const router = express.Router();

router.get("/:id", readJsonDataHandler);

export default router;
