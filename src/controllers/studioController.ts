import { Request, Response } from "express";

import { readFilmFile } from "../services/studioService";

export async function importFilmFileDataHandler(req: Request, res: Response) {
  const { studioId, filePath } = req.body;
  const result = await readFilmFile(studioId, filePath);

  res.json(result);
}
