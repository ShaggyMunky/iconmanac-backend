export function formatFileText(value: string, joiner: string): string {
  return value
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

export function generateFileName(
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
