export const isPangram = (sentence) => {
  if (typeof sentence !== 'string') throw new Error('please pass a sentence in string format');
  const sentenceCopy = sentence.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = false;

  for (let letter = 0; letter < alphabet.length; letter += 1) {
    if (sentenceCopy.indexOf(alphabet[letter]) === -1) {
      result = false;
      break;
    }
    result = true;
  }
  return result;
};
