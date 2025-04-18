import { Request, Response } from "express";

import { readMindGeekFilms } from "../services/studioService";

export async function readJsonDataHandler(req: Request, res: Response) {
  const studioId = req.params.id;
  let result = {};
  switch (studioId) {
    case "bzz":
      result = await readMindGeekFilms();
      break;
    default:
      break;
  }
  res.json(result);
}
