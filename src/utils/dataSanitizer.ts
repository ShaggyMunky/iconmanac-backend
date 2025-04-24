export function hasTag(tags: any[], value: string): boolean {
  const pattern = new RegExp(value, "i");
  for (let i = 0; i < tags.length; i++) {
    if (pattern.test(tags[i].name)) return true;
  }
  return false;
}

export function getGenderCount(
  actors: any[],
  type: string,
  isManual: boolean = false
): number | null {
  let count: number | null = 0;
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].gender === type) {
      count += 1;
    }
  }

  if (!isManual && !count) {
    count = null;
  }

  return count;
}
