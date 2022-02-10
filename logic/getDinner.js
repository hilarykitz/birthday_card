const CUISINES = [
  "Indian",
  "Jamaican",
  "Italian",
  "Korean",
  "Cantonese",
  "Sichuan",
  "French",
  "Vegan",
  "Chicken Shop",
];

export const getDinner = () =>
  CUISINES[Math.floor(Math.random() * CUISINES.length)];
