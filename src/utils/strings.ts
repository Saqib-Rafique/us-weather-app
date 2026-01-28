export function normalizeStateInput(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

export function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase() + w.slice(1))
    .join(" ");
}
