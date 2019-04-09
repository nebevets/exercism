function validateDigits(array, base) {
  if (array.length === 0) {
    throw new Error('Input has wrong format');
  }
  if (array.length > 1 && array[0] === 0) {
    throw new Error('Input has wrong format');
  }
  array.map((number) => {
    if (number < 0 || number >= base) {
      throw new Error('Input has wrong format');
    }
    return true;
  });
}

function validateBase(base, baseType) {
  if (base <= 1) {
    throw new Error(`Wrong ${baseType} base`);
  }
  if (parseInt(base, 10) !== base) {
    throw new Error(`Wrong ${baseType} base`);
  }
  if (!base) {
    throw new Error(`Wrong ${baseType} base`);
  }
}

export const convert = (array, fromBase, toBase) => {
  validateBase(fromBase, 'input');
  validateBase(toBase, 'output');
  if (fromBase === toBase) {
    return array;
  }
  validateDigits(array, fromBase);
  let lastArrayIndex = array.length - 1;
  let number = null;
  const result = [];
  for (let index = 0; index < array.length; index += 1, lastArrayIndex -= 1) {
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

/*
  You would make three calls, one to validateDigits and
  two to validateBase, once for each base. This will remove
  all the duplication you currently have. You would also be
  able to remove the conditional on line 18-19.
*/
