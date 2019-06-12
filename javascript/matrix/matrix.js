export class Matrix {
  constructor(string){
    this.stringArray = string.split('\n');
    this.matrix = this.stringArray.map(item => item.split(' '));
    this.rows = [];
    this.columns = [];
    this.makeRows();
    this.makeCols();
  }
  makeRows(){
    for(let row = 0; row < this.matrix.length; row++){
      this.rows.push(this.matrix[row].map(item => Number(item)));
    }
  }
  makeCols(){
    for(let row = 0; row < this.rows.length; row++){
      this.columns.push(this.rows.map(item => item[row]));
    } 
  }
}