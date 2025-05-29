export function slugToCategory(slug: string | undefined): string | null {
  if (!slug) return null;
  const map: Record<string, string> = {
    food: "Alimentation",
    building: "Bâtiment",
    manufacturing: "Fabrication",
    services: "Services",
  };
  return map[slug.toLowerCase()] || null;
}
