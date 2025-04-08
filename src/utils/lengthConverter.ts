const cmRatio = 2.54;

export function imperialToCentimeter(
  feet: number | null,
  inches: number | null
): number {
  if (!feet && !inches) return 0;
  const feetConvert = feet ? Math.round(feet * 12 * cmRatio) : 0;
  const inchConvert = inches ? Math.round(inches * cmRatio) : 0;

  return feetConvert + inchConvert;
}

export function feetToInches(feet: number, inches: number | null) {
  if (!feet && !inches) return 0;
  return feet * 12 + (inches ?? 0);
}
