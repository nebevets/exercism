export class Triangle{
  constructor(rows){
    this.rows = this._pascalsTriangle(rows);
    this.lastRow = this.rows[this.rows.length - 1];
  }
  _pascalsTriangle(rows){
    const result=[];
    do{
      let index = 0, resultIndex = result.length-1;
      const row = [1];
      while(index < result.length){
        if(result[resultIndex][index + 1]){
            row.push(result[resultIndex][index] + result[resultIndex][index + 1]);
        }else{
            row.push(1);
        }
        index++;
      }
      result.push(row);
    } while(--rows > 0);
    return result;
  } 
}
