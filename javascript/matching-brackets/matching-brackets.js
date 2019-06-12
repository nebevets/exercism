export const matchingBrackets = string => {
  const closingBracketStack = [];
  return string
    .split('')
    .every(bracket => {
      switch (bracket) {
        case "(": return closingBracketStack.push(")");
        case "[": return closingBracketStack.push("]");
        case "{": return closingBracketStack.push("}");
        case ")":
        case "]":
        case "}":
          return closingBracketStack.pop() === bracket;
      }
    }) && !closingBracketStack.length;
};
