import * as fs from "fs";
import * as path from "path";

import sql from "../db/db";
import { StarRow } from "../types/rows/starRow";

const queriesDir = "../db/sql/queries/";

export async function findstarProfile(userId: string): Promise<StarRow[]> {
  try {
    const query = fs.readFileSync(
      path.join(__dirname, queriesDir + "getStarById.sql"),
      "utf8"
    );

    const result = await new sql.Request()
      .input("Id", sql.UniqueIdentifier, userId)
      .query(query);
    return result.recordset;
  } catch (err) {
    console.error("Error in findstarProfile:", err);
    throw err;
  }
}
