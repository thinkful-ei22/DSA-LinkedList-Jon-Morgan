'use strict';

class _Node {
  constructor(value, prev, next){
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}




class doubleLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insertFirst(value){
    if(this.head === null){
      const newNode = new _Node(value, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new _Node(value, null, this.head);
      this.head.prev = newNode;
      this.head = newNode;
    }

  }


  // A -> B -> C -> D -> E -> null
  insertLast(value){
    if(this.head === null){
      const newNode = new _Node(value, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new _Node(value, this.tail, null);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
};


function mainDLL(){
  const DLL = new doubleLinkedList();
  
  DLL.insertLast('hello');
  DLL.insertLast('goodbye');
  console.log(DLL);
}

mainDLL();