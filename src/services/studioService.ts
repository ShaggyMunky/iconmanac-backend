import * as fs from "fs";
import * as path from "path";

import sql from "../db/db";

const queriesDir = "../db/sql/queries/";

export async function readMindGeekFilms() {
  // const path = "//BitKnox/Documents/Media/_Scripts/BZZ_all_vid_info/2024.json";
  const path = "//BitKnox/Documents/Media/_Scripts/archives/met_scenes.json";
  //   const path = "D:/Desktop/sample.json"
  try {
    const data = await fs.promises.readFile(path, "utf8");
    const parsed = JSON.parse(data);
    const result = parsed[parsed.length - 1];

    // for (let i = 0; i < 1; i++) {
    //   const b = parsed[i];
    //   const value = {
    //     filmId: b.id,
    //     title: b.title,
    //     fileName: generateFileName(b.dateReleased, b.title),
    //     poster: b.images.card_main_rect["0"].md.urls.webp,
    //     squirt: hasTag(b.tags, "squirt"),
    //     cream: hasTag(b.tags, "cream"),
    //     anal: hasTag(b.tags, "anal"),
    //     releaseDate: b.dateReleased,
    //     maleCount: getGenderCount(b.actors, "male"),
    //     femaleCount: getGenderCount(b.actors, "female"),
    //   };
    //   result.push(value);
    // }
    return result;
  } catch (err) {
    console.error("Error reading or parsing JSON:", err);
    return [];
  }
}

function hasTag(tags: any[], value: string): boolean {
  const pattern = new RegExp(value, "i");
  for (let i = 0; i < tags.length; i++) {
    if (pattern.test(tags[i].name)) return true;
  }
  return false;
}

function getGenderCount(actors: any[], type: string): number {
  let count = 0;
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].gender === type) {
      count += 1;
    }
  }
  return count;
}

function generateFileName(
  releaseDate: string,
  title: string,
  site?: string
): string {
  const date = new Date(releaseDate);
  const month = (1 + date.getMonth()).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedTitle = formatFileText(title, "_");

  return `${"" + date.getFullYear() + month + day}-${formattedTitle}${
    site ? "-" + formatFileText(site, "_") : ""
  }`;
}

function formatFileText(title: string, joiner: string): string {
  return title
    .trim()
    .replace(/\s*&\s*/g, " and ") // Replace '&' with 'and'
    .replace(/\bw\//gi, "with ") // Replace 'w/' with 'with' when it's a standalone word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove non-alphanumeric characters
    .trim()
    .replace(/\s+/g, joiner) // Replace spaces with joiner
    .toLowerCase();
}
