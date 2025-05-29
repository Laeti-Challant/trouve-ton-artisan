import type { IArtisan } from "../@types";
import rawDatas from "../data/datas.json";

export function parseArtisans(raw: typeof rawDatas): IArtisan[] {
  return raw.map((item) => ({
    ...item,
    id: Number(item.id),
    note: Number(item.note),
  }));
}
