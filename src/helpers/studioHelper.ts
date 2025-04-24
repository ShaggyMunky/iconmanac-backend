import * as fs from "fs";

import * as sanitizer from "../utils/dataSanitizer";
import * as textFormatter from "../utils/textFormatter";
import { StudioFilmRow } from "../types/rows/studioFilmRow";

export async function readMindGeekFilmsFile(
  filePath: string
): Promise<StudioFilmRow[]> {
  const path = `${process.env.NETWORK_PATH}_Scripts/${filePath}.json`;

  try {
    const data = await fs.promises.readFile(path, "utf8");
    const parsed = JSON.parse(data);
    const result: StudioFilmRow[] = [];

    for (let i = 0; i < 10; i++) {
      const b = parsed[i];
      const slug = textFormatter.formatFileText(b.title, "-");
      const value: StudioFilmRow = {
        StudioFilmId: "",
        Title: b.title,
        FilmSourceId: b.id,
        ReleaseDate: b.dateReleased,
        TrueDate: b.dateReleased,
        Poster: b.images.card_main_rect["0"].md.urls.webp,
        PosterVersion: b.images.card_main_rect.imageVersion,
        Preview: b.videos.mediabook.files["320p"].urls.view,
        WebPath: `${b.id}/${slug}`,
        FileName: textFormatter.generateFileName(b.dateReleased, b.title),
        FilePath: null,
        StudioId: 0,
        FemaleCount: sanitizer.getGenderCount(b.actors, "female"),
        MaleCount: sanitizer.getGenderCount(b.actors, "male"),
        VideoLength: null,
        IsVR: b.isVR,
        IsHidden: null,
        IsPublic: true,
        IsMissing: null,
        DateMissing: null,
        LinkedStudioFilmId: null,

        // squirt: sanitizer.hasTag(b.tags, "squirt"),
        // cream: sanitizer.hasTag(b.tags, "cream"),
        // anal: sanitizer.hasTag(b.tags, "anal"),
      };
      result.push(value);
    }
    return result;
  } catch (err) {
    console.error("Error reading or parsing JSON:", err);
    return [];
  }
}
