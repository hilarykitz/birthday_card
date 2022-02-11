const CUISINES = [
  "Brazilian",
  "Portuguese",
  "Fish & Chips",
  "Thai",
  "Tex-Mex",
  "Modern British",
  "French",
  "Lebanese",
  "Spanish",
  "Poke",
  "Korean",
  "Indian",
  "Pizza",
  "Greek",
  "Chicken Shop",
  "Persian",
  "Peruvian",
  "Pub roast",
  "Mexican",
  "Israeli",
  "Szechuan",
  "Burgers",
  "Vietnamese",
  "Jamaican",
  "Cantonese",
  "Vegetarian Indian",
  "Doner",
  "Italian",
  "Uyghur",
  "Polish",
  "Caribbean",
  "Tapas",
  "Turkish",
  "Cajun",
  "Japanese",
  "Ethiopian",
  "Nepalese",
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
