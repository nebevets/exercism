export const hey = (message) => {
  const messageString = message.trim();
  if(!messageString.length) return 'Fine. Be that way!';
  const isQuestion = messageString.endsWith('?');
  const isShouting = messageString === messageString.toUpperCase();
  const hasLetters = messageString.match(/[A-Z]/gi);
  if(hasLetters && isShouting && isQuestion) return 'Calm down, I know what I\'m doing!';
  else if(hasLetters && isShouting) return 'Whoa, chill out!';
  else if(isQuestion) return 'Sure.';
  return 'Whatever.';
};
