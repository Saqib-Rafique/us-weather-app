import type { StateCatalog, StateCatalogEntry } from "@domain/StateCatalog";
import { ValidationError } from "@utils/errors";
import { normalizeStateInput, toTitleCase } from "@utils/strings";

export class StateCityResolver {
  constructor(private readonly catalog: StateCatalog) {}

  resolve(input: string): StateCatalogEntry {
    const cleaned = toTitleCase(normalizeStateInput(input));
    if (!cleaned) throw new ValidationError("Please enter a US state name.");

    const byName = this.catalog.find((s) => s.name === cleaned);
    if (byName) return byName;

    const byCode = this.catalog.find(
      (s) => s.code.toUpperCase() === cleaned.toUpperCase()
    );
    if (byCode) return byCode;

    const soft = this.catalog.find((s) =>
      s.name.toLowerCase().startsWith(cleaned.toLowerCase())
    );
    if (soft) return soft;

    throw new ValidationError(
      `State not found: "${input}". Try full name like "California".`
    );
  }
}
