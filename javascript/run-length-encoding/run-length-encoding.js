/* eslint-disable no-plusplus */
/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
export const encode = (string) => {
  let result = '';
  if (typeof string !== 'string') throw new Error('expected string parameter');
  for (let index = 0; index < string.length; index++) {
    let count = 1;
    const char = string[index];
    while (char === string[index + 1]) {
      index++;
      count++;
    }
    (count > 1)
      ? result += `${count}${char}`
      : result += char;
  }
  return result;
};

export const decode = (string) => {
  let result = '';
  if (typeof string !== 'string') throw new Error('expected string parameter');
  for (let index = 0; index < string.length; index++) {
    const num = parseInt(string.substr(index), 10);
    if (Number.isNaN(num) || string[index] === ' ') {
      result += string[index];
    } else {
      const numLength = num.toString().length;
      result += string[index + numLength].repeat(num);
      index += numLength;
    }
  }
  return result;
};
