export const gigasecond = (utcDate) => {
  const GIGASECOND = 10 ** 9;
  const MILLISECOND = 10 ** 3;
  const past = Date.parse(utcDate);
  const future = (past / MILLISECOND) + GIGASECOND;
  return new Date(future * MILLISECOND);
};
