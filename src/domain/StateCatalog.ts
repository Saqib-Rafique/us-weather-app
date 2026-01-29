export type StateCode = string;

export interface StateCatalogEntry {
  name: string;
  code: StateCode;
  cities: readonly string[];
}

export type StateCatalog = readonly StateCatalogEntry[];
