console.log('hello world');
let element = document.querySelector('div'); //select the first element
element = document.querySelectorAll('div'); //nodelist of all divs
console.log(element);

//childNodes Vs children
let e = document.querySelector('body');
console.log(e.childNodes); //nodelist of all nodes as childern of e -> including text node,comments,etc.
console.log(e.children); //html collection of only those {{elements ->not comments,textNodes,etc.}} which are childern of e
console.log(e.childElementCount); // Count of child elements

// selectors for children of an element
let elem = document.querySelector('body');
console.log(e.firstChild); //select the first childnode
console.log(e.lastChild);
console.log(e.firstElementChild); //first child which is an element
console.log(e.lastElementChild);

//childNode discription
let nodeList = elem.childNodes;
console.clear();
console.log(nodeList);

// properties of nodes
console.log(nodeList[0].nodeName);
console.log(nodeList[0].nodeType); //integer that shows the type a node by refering a list
/*
1  -> An Element node like <h1> or <p>.
2  -> An Attribute of an Element.
3  -> The actual Text inside an Element
8  -> A Comment node
9  -> A Document node.
10 -> A DocumentType(<!DOCTYPE html>) node
11 -> A DocumentFragment node.
*/
// console.log(nodeList[0].firstElementChild.parentNode);
// console.log(nodeList[0].firstElementChild.nextSibling);
// console.log(nodeList[0].firstElementChild.nextElementSibling);
// console.log(
//   nodeList[0].firstElementChild.nextElementSibling.nextElementSibling
// );
