import { StarRow } from "../types/rows/starRow";
import { StarProfileResponse } from "../dto/star/starProfileResponse";

import { feetToInches } from "../utils/lengthConverter";

export function mapStarProfileData(rows: StarRow[]): StarProfileResponse {
  const star = rows[0] || null;
  const response: StarProfileResponse = {
    id: star?.StarId,
    firstName: star?.FirstName,
    lastName: star?.LastName,
    dob: star?.Dob ? new Date(star.Dob) : null,
    height: star?.Height ?? 0,
    image: star?.Image,
    filmography: star?.Filmography,
    linkedTalentId: star?.StudioTalentGroupId,
    firstScene: star?.FirstScene,
    latestScene: star?.LatestScene,
  };

  return response;
}
