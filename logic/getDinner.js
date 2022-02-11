const CUISINES = [
  "Indian",
  "Jamaican",
  "Italian",
  "Korean",
  "Cantonese",
  "Sichuan",
  "French",
  "Posh Vegan",
  "Mexican",
  "Fish and Chips",
  "Chicken Shop",
  "Steak",
];

export const getDinner = (random) => {
  if (random) {
    return CUISINES[Math.floor(Math.random() * CUISINES.length)];
  }
  const today = new Date();
  const day = today.getUTCMonth() + today.getUTCDate();
  let dateIndex = day;
  if (day > CUISINES.length) {
    dateIndex = -1 * (CUISINES.length - day);
  }
  return CUISINES[dateIndex - 1];
};
