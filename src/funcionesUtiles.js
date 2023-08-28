export const firstLetterCapital = (text) => {
  if (text.length < 5) {
    return text.toUpperCase();
  } else {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
};
