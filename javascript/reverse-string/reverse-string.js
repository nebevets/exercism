export const reverseString = (string) => {
  let result = '';
  for (let char = string.length - 1; char >= 0; char -= 1) {
    result += string[char];
  }
  return result;
};
