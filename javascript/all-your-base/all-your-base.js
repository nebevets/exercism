export const convert = (array, fromBase, toBase) => {
  if (fromBase <= 1 || toBase <= 1) {
    throw new Error(`Wrong ${fromBase <= 1 ? 'input' : 'output'} base`);
  }
  if (parseInt(fromBase, 10) !== fromBase || parseInt(toBase, 10) !== toBase) {
    throw new Error(`Wrong ${parseInt(fromBase, 10) !== fromBase ? 'input' : 'output'} base`);
  }
  if (!fromBase || !toBase) {
    throw new Error(`Wrong ${!fromBase ? 'input' : 'output'} base`);
  }
  if (fromBase === toBase) {
    return array;
  }
  if (array.length === 0) {
    throw new Error('Input has wrong format');
  }
  if (array.length > 1 && array[0] === 0) {
    throw new Error('Input has wrong format');
  }
  let lastArrayIndex = array.length - 1;
  let number = null;
  const result = [];
  for (let index = 0; index < array.length; index += 1, lastArrayIndex -= 1) {
    if (array[index] < 0 || array[index] >= fromBase) {
      throw new Error('Input has wrong format');
    }
    number += array[index] * (fromBase ** lastArrayIndex);
  }
  let power = 0;
  let calc = null;
  do {
    calc = Math.floor(number / (toBase ** power));
    power += 1;
  } while (calc >= toBase);
  while (power > 0) {
    power -= 1;
    const quotient = Math.floor(number / (toBase ** power));
    const remainder = number % (toBase ** power);
    result.push(quotient);
    number = remainder;
  }
  return result;
};
