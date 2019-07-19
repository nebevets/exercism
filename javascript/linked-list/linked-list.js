'use strict';

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  createNode(value=null, prev=null, next=null) {
    return {
      next,
      prev,
      value
    };
  }

  push(value) {
    this.length++;
    if(!this.head){
      this.head = this.createNode(value);
      return;
    }
    let pointer = this.head;
    while(pointer.next){
        pointer = pointer.next;
    }
    pointer.next = this.createNode(value, pointer);
  }

  pop() {
    if(!this.head){
      return null;
    }
    let pointer = this.head;
    while(pointer.next){
      pointer = pointer.next;
    }
    if(pointer.prev){
        pointer.prev.next = null;
    }else{
        this.head = null;
    }
    this.length--;
    return pointer.value;
  }

  shift() {
    if(!this.head){
      return null;
    }
    const {value} = this.head;
    if(this.head.next){
      this.head.next.prev = null;
      this.head = this.head.next;
    }else{
      this.head = null;
    }
    this.length--;
    return value;
  }

  unshift(value) {
    this.length++;
    if(!this.head){
      this.head = this.createNode(value);
      return;
    }
    const node = this.createNode(value, null, this.head);
    this.head.prev = node;
    this.head = node;
  }

  delete(value) {
    if(this.head){
      let pointer = this.head;
      while(pointer.value !== value && pointer.next !== null){
        pointer = pointer.next;
      }
      if(pointer.value === value){
        this.length--;
        const newPrev = pointer.prev;
        const newNext = pointer.next;
        if(newPrev && newNext){
          newPrev.next = newNext;
          newNext.prev = newPrev;
          return;
        }
        if(!newPrev && newNext){
          this.head = newNext;
          this.head.prev = null;
          return;
        }
        if(newPrev && !newNext){
          newPrev.next = null;
          return;
        }
        this.head = null;
      }
    }
  }

  count() {
    return this.length;
  }
}
