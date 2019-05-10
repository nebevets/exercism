export const hey = (message) => {
  const words = message
    .replace(/\d/g, '')
    .split(/\s/)
    .filter(onlyChars => onlyChars);
  if(!words.length) return 'Fine. Be that way!';
  const lastWord = words[words.length - 1];
  const isQuestion = lastWord[lastWord.length - 1] === '?';
  const numUpperCaseWords = words
    .filter(word => /\b[A-Z]+\b/.test(word))
    .length;
  const numOtherWords = words
    .filter(word => /[a-z]+/.test(word))
    .length;
  const isMostlyUpperCase = numUpperCaseWords > numOtherWords;
  if(isQuestion && isMostlyUpperCase) return 'Calm down, I know what I\'m doing!';
  else if(isMostlyUpperCase) return 'Whoa, chill out!';
  else if(isQuestion) return 'Sure.';
  return 'Whatever.';
};
