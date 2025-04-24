import express from "express";

import { importFilmFileDataHandler } from "../controllers/studioController";

const router = express.Router();

router.post("/file/import", importFilmFileDataHandler);

export default router;
