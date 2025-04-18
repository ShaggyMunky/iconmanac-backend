import { StarProfileRow } from "../types/rows/starProfileRow";
import { StarProfileResponse } from "../dto/star/starProfileResponse";

import { feetToInches } from "../utils/lengthConverter";

export function mapStarProfileData(
  rows: StarProfileRow[]
): StarProfileResponse {
  const star = rows[0] || null;
  const response: StarProfileResponse = {
    id: star?.TalentId,
    firstName: star?.FirstName,
    lastName: star?.LastName,
    dob: star?.Dob ? new Date(star.Dob) : null,
    height: feetToInches(star?.Feet ?? 0, star?.Inches),
    image: star?.Image,
    filmography: star?.Filmography,
    linkedTalentId: star?.StudioTalentGroupId,
    firstScene: star?.FirstScene,
    latestScene: star?.LatestScene,
  };

  return response;
}
