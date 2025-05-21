import { useEffect, useState, type ReactNode } from "react";
import type { IArtisan } from "../@types";
import rawDatas from "../data/datas.json";
import { parseArtisans } from "../utils/parseArtisans";
import { ArtisanContext } from "./ArtisanContext";

const datas = parseArtisans(rawDatas);

export const ArtisanProvider = ({ children }: { children: ReactNode }) => {
  const [artisans, setArtisans] = useState<IArtisan[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setArtisans(datas);
  }, []);

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesCategory = artisan.category === selectedCategory;
    const matchesSearchTerm =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const topArtisans = artisans.filter((artisan) => artisan.top);

  return (
    <ArtisanContext.Provider
      value={{
        artisans,
        filteredArtisans,
        topArtisans,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ArtisanContext.Provider>
  );
};
