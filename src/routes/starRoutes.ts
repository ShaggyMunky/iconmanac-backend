import express from "express";

import { getStarProfileHandler } from "../controllers/starController";

const router = express.Router();

router.get("/:id", getStarProfileHandler);

export default router;
