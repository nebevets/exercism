export const convert = (number) => {
  const factors = {
    Pling: 3, Plang: 5, Plong: 7,
  };
  const drops = Object.keys(factors)
    .filter(key => number % factors[key] === 0)
    .join('');
  return drops || number.toString();
};
