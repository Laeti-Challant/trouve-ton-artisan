import { useContext } from "react";
import { ArtisanContext } from "./ArtisanContext";

export const useArtisanContext = () => {
  const context = useContext(ArtisanContext);
  if (!context) {
    throw new Error("useArtisanContext must be used within an ArtisanProvider");
  }
  return context;
};
