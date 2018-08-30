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

  insertBefore(before, item){
    if(this.head === null){ //if the list is empty
      const newNode = new _Node(item, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else if (before === this.head.value){ //inserting before the first item
      const newNode = new _Node(item, null, this.head);
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      let currNode = this.head.next;
      while (currNode !== null){
        if(currNode.value === before){
          const newNode = new _Node(item, currNode.prev, currNode);
          currNode.prev = newNode;
          newNode.prev.next = newNode;
          break;
        }
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('could not find item');
        return;
      }
    }
  }

  insertAfter(after, item){
    if(this.head === null){ //if the list is empty
      const newNode = new _Node(item, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail.value === after){
      const newNode = new _Node(item, this.tail, null);
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currNode = this.tail;
      while(currNode !== null){  //counts down each node
        if(currNode.value === after){

          break;
        }
        currNode = currNode.prev;
      }
    }
  }
}


function mainDLL(){
  const DLL = new doubleLinkedList();
  DLL.insertFirst('C');
  DLL.insertLast('D');
  DLL.insertFirst('B');
  DLL.insertFirst('A');
  DLL.insertLast('E');
  //DLL.insertBefore('A', '?');
  //DLL.insertLast('hello');
  //DLL.insertLast('goodbye');
  //console.log(DLL);

  /* ---------------- CIRCULAR STRUCTURE? ------------- */
  //DLL LIST:   'A' <-> 'B' <-> 'C' <-> 'D' <-> 'E'
  console.log(JSON.stringify(DLL, null, 2));
  //circular because:  
  /*
  A.next: {
    B.prev: {
      A.next: {
        B.prev: {
          A.next: {
            B.prev.......
          }
        }
      }
    }
  }
  */
}

mainDLL();