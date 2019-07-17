export class LinkedList {
  constructor(){
    this.list = {
        value: null,
        next: null,
        prev: null
    }
  }
  push(value) {
    if(!this.list.value){
      this.list.value = value;
      return;
    }
    let pointer = this.list;
    while(pointer.next){
        pointer = pointer.next;
    }
    pointer.next = {
        value,
        next: null,
        prev: pointer
    };
  }

  pop() {
    if(!this.list.next){
      if(this.list.value){
        const result = this.list.value;
        this.list.value = null;
        return result;
      }
      return null;
    }
    let pointer = this.list;
    while(pointer.next){
      pointer = pointer.next;
    }
    pointer.prev.next = null;
    return pointer.value;
  }

  shift() {
    const {value, next} = this.list;
    this.list = {...next};
    return value;
  }

  unshift(value) {
    if(!this.list.value){
      this.list.value = value;
      return;
    }
    if(!this.list.next){
      const node = {
        prev: null,
        next: this.list,
        value
      };
      this.list = node;
      return;
    }
    const {...next} = this.list;
    const newList = {
      prev: null,
      next,
      value
    };
    this.list = newList;
  }

  delete() {
    throw new Error("Remove this statement and implement this function");
  }

  count() {
    if(!this.list.value){
      return 0;
    }
    let count = 1;
    let pointer = this.list;
    while(pointer.next){
      pointer = pointer.next;
      count++;
    }
    return count;
  }
}
