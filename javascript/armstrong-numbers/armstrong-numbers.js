export const validate = (number) => {
  const strNumber = number.toString();
  let numberTotals = 0;
  for (let index = 0; index < strNumber.length; index += 1) {
    numberTotals += Number(strNumber[index]) ** strNumber.length;
  }
  return numberTotals === number;
};
