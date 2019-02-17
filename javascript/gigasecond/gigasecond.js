export const gigasecond = (utcDate) => {
  const past = Date.parse(utcDate);
  const future = (past / 1000) + 1000000000;
  return new Date(future * 1000);
};
