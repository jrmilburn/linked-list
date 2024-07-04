import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList;

linkedList.prepend('1');
linkedList.append('2');
linkedList.append('3');

console.log(linkedList.toString());

console.log(linkedList.size());

console.log(linkedList.head());

console.log(linkedList.tail());

console.log(linkedList.at(2));

linkedList.pop();

console.log(linkedList.toString());

console.log(linkedList.contains('1'));
console.log(linkedList.contains('5'));

console.log(linkedList.find('2'));

linkedList.insertAt(5, 1);

console.log(linkedList.toString());

linkedList.removeAt(2);

console.log(linkedList.toString());