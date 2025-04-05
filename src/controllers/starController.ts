import { Request, Response } from "express";

import { getStarProfile } from "../services/starService";

export async function getStarProfileHandler(req: Request, res: Response) {
  const starId = req.params.id;
  const result = await getStarProfile(starId);
  res.json(result);
}
