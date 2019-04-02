const bandColors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export const colorCode = (string) => {
  return bandColors[string.toLowerCase()];
};

export const COLORS = Object.keys(bandColors);
