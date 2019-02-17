export const steps = (number) => {
  let result = 0;
  let calcNumber = number;
  if (number <= 0) throw new Error('Only positive numbers are allowed');
  while (calcNumber > 1) {
    result += 1;
    if (calcNumber % 2 === 0) {
      calcNumber /= 2;
    } else {
      calcNumber = (3 * calcNumber) + 1;
    }
  }
  return result;
};
