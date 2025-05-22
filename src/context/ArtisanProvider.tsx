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
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setArtisans(datas);
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setArtisans(datas);
      setLoading(false);
    }, 2000); // 2 secondes pour simuler un chargement

    return () => clearTimeout(timer); // nettoyage au démontage
  }, []);

  const topArtisans = artisans.filter((artisan) => artisan.top);

  return (
    <ArtisanContext.Provider
      value={{
        artisans,
        topArtisans,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        loading,
        setLoading,
      }}
    >
      {children}
    </ArtisanContext.Provider>
  );
};
