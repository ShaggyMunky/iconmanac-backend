import { readMindGeekFilmsFile } from "../helpers/studioHelper";
import { StudioIdTypes } from "../types/enums/studioIdTypes";

const queriesDir = "../db/sql/queries/";

export async function readFilmFile(studioId: string, filePath: string) {
  switch (studioId) {
    case StudioIdTypes.bzz:
      const data = readMindGeekFilmsFile(filePath);
      break;
    default:
      break;
  }
}
