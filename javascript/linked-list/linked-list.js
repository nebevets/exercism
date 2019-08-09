'use strict';

class Node {
  constructor(value=null, prev=null, next=null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    this.length++;
    if(!this.head){
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }
    this.tail.next = new Node(value, this.tail);
    this.tail = this.tail.next;
  }

  pop() {
    if(!this.head){
      return null;
    }
    const pointer = this.tail;
    const {value} = this.tail;
    if(pointer.prev){
        this.tail = pointer.prev;
        pointer.prev.next = null;
    }else{
        this.head = null;
        this.tail = null;
    }
    this.length--;
    return value;
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
      this.tail = null;
    }
    this.length--;
    return value;
  }

  unshift(value) {
    this.length++;
    if(!this.head){
      this.head = new Node(value);
      this.tail = this.head;
      return;
    }
    const node = new Node(value, null, this.head);
    this.head.prev = node;
    this.head = node;
  }

  delete(value) {
  /* only works for deletion of primitive data types */
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
          this.tail = newPrev;
          return;
        }
        this.head = null;
        this.tail = null;
      }
    }
  }

  count() {
    return this.length;
  }
}
