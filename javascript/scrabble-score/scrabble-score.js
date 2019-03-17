export const score = (word) => {
  if (typeof word !== 'string') throw new Error('expected scrabble word in string format');
  const scoreLetter = (letter) => {
    // switch is faster than a look-up object, at this time
    switch (letter) {
      case 'D':
      case 'G': return 2;
      case 'B':
      case 'C':
      case 'M':
      case 'P': return 3;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y': return 4;
      case 'K': return 5;
      case 'J':
      case 'X': return 8;
      case 'Q':
      case 'Z': return 10;
      default: return 1;
    }
  };
  const scores = [];
  // for is faster than converting the string to an array and using map, at this time
  for (let index = 0; index < word.length; index += 1) {
    const letter = word[index];
    let multiplier = 1;
    while (letter === word[index + 1]) {
      multiplier += 1;
      index += 1;
    }
    scores.push(scoreLetter(letter.toUpperCase()) * multiplier);
  }
  return scores.reduce((total, letterScore) => total + letterScore, 0);
};
