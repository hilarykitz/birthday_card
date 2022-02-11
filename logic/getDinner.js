const CUISINES = [
  "Polish",
  "Brazilian",
  "Portuguese",
  "Spanish",
  "Fish & Chips",
  "Doner",
  "Thai",
  "Tex-Mex",
  "Mexican",
  "Steak",
  "Modern English",
  "French",
  "Lebanese",
  "Korean",
  "Greek",
  "Chicken Shop",
  "Persian",
  "Peruvian",
  "Israeli",
  "Szechuan",
  "Burgers",
  "Vietnamese",
  "Jamaican",
  "Cantonese",
  "Italian",
  "Uyghur",
  "Caribbean",
  "Turkish",
  "Cajun",
  "Japanese",
  "Ethiopian",
  "Nepalese",
  "Indian",
  "Italian-American",
];

export const getDinner = (pickAgain) => {
  if (pickAgain) {
    // they hated it 8{
    const newIndex = Math.floor(Math.random() * CUISINES.length);
    const newDinner = CUISINES[newIndex];
    CUISINES.splice(newIndex, 1); // remove this option so it doesnt repeat
    return newDinner;
  }
  const today = new Date();
  const day = today.getUTCMonth() + today.getUTCDate();
  let dateIndex = day;
  if (day > CUISINES.length) {
    dateIndex = -1 * (CUISINES.length - day);
  }
  return CUISINES[dateIndex - 1];
};
