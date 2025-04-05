import { StarProfileResponse } from "../dto/star/starProfileResponse";
import { findstarProfile } from "../repositories/starRepository";
import { mapStarProfileData } from "../utils/mappers/mapStarProfile";

export async function getStarProfile(
  starId: string
): Promise<StarProfileResponse> {
  const rows = await findstarProfile(starId);
  return mapStarProfileData(rows);
}
