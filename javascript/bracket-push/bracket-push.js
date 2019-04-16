export const bracketPush = (string) => {
  var charArray = string.split('');
  var pairsArrays = [
      ['(', ')'],
      ['{', '}'],
      ['[', ']']
  ]
  for(var index = 0; index < pairsArrays.length; index++){
      var test1 = charArray.indexOf(pairsArrays[index][0]);
      var test2 = charArray.indexOf(pairsArrays[index][1]);
      if (test1 !== -1 && test2 !== -1){
          if (test1 < test2){
              charArray.splice(test2, 1);
              charArray.splice(test1, 1);
              index = 0;
          }else{
              return false;
          }
      }else if(test1 === -1 && test2 !== -1){
          return false;
      }else if(test2 === -1 && test1 !== -1){
          return false;
      }
  }
  return true;
}