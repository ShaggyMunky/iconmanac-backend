import { StarProfileRow } from "../../types/row/starProfileRow";
import { StarProfileResponse } from "../../dto/star/starProfileResponse";

export function mapStarProfileData(
  rows: StarProfileRow[]
): StarProfileResponse {
  const star = rows[0] || null;
  const response = {
    id: star?.TalentId,
    firstName: star?.FirstName,
    lastName: star?.LastName,
    image: star?.Image,
    filmography: star?.Filmography,
  };

  return response;
}
