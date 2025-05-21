export const normalizeText = (text: string): string => {
  return text
    .normalize("NFD") // Décompose les caractères accentués
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .toLowerCase() // Convertit en minuscules
    .trim() // Supprime les espaces au début et à la fin
    .replace(/\s+/g, "-") // Remplace les espaces par des tirets
    .replace(/[^\w-]+/g, "") // Supprime les caractères spéciaux
    .replace(/-{2,}/g, "-"); // Remplace les tirets multiples par un seul
};
