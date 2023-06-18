class Node {
  constructor(data) {
    this.head = null;
    this.data = data;
    this.next = null;
  }
}

function arrayToList(array) {
  if (array.length === 0) {
    return null;
  }

  let head = new Node(array[0]);
  let currNode = head; 

  for (let i = 1; i < array.length; i++) { //creating new node after every iteration over the inpued array and then linked them togetehr
    currNode.next = new Node(array[i]);
    currNode = currNode.next;
  }

  return head;
}

let array = [1, 2, 3];
console.log(arrayToList(array));

function listToArray(head){
    let array = [];
    let currentNode = head;

    while(currentNode != null){
        array.push(currentNode.data);
        currentNode = currentNode.next;
    }

    return array;
}

let nodeA = new Node(1);
let nodeB = new Node(11);
let nodeC = new Node(901);

nodeA.next = nodeB; // A -> B
nodeB.next = nodeC; // B -> C

let head = nodeA;

console.log(listToArray(head));

// append - creating new node and adding to the end of list and make it the tail...
// prepend - creating a new node and make it the next head...

function prepend(head, data){ 
    let newNode = new Node(data);
    newNode.next = head;
    return newNode; 
}

let node1 = new Node(3);
let node2 = new Node(4);

node1.next = node2; // 1 -> 2

let currHead = node1;
let newData = 1;

console.log(prepend(currHead, newData));


function nth(array, number){
    for(let i = 0; i < array.length; i++){
        if(array[i] == number){
            return 'Value found in: ' + i;
        }
    }
        return 'Value is not present brother...';
}

console.log(nth(listToArray(head), 8)); 

function nth(array, number, index = 0) {
  if (index >= array.length) {
    return 'Value is not present brother...';
  }

  if (array[index] === number) {
    return 'Value found in: ' + index;
  }

  return nth(array, number, index + 1);
}

console.log(nth(listToArray(head), 1, index = 0));