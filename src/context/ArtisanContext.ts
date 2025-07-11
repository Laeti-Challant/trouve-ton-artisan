import { createContext } from "react";
import type { IArtisan } from "../@types";

type TArtisanContext = {
  artisans: IArtisan[];

  topArtisans: IArtisan[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export const ArtisanContext = createContext<TArtisanContext | undefined>(
  undefined
);
