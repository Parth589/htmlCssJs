console.log('hri is the god');
// creating an element
let cElement = document.createElement('div'); //cerating an element but not placing it in DOM
// creating Text content for it
let txtContent = document.createTextNode(
  'This is  the text which will be placed inside red div::'
);

// adding content to it
cElement.appendChild(txtContent);
cElement.style.backgroundColor = 'red';
cElement.style.color = 'white';

// placing it into the DOM
let parent = document.querySelector('.myclass');
parent.appendChild(cElement);

//Setting attributes
let anchor = document.getElementById('anchor-tag');
anchor.setAttribute('href', '//www.facebook.com'); //returns an undefined value. If the attribute already exists on the element, the value is updated.
let value = anchor.getAttribute('style'); //return the value of style attribute in form of string
console.log(value, typeof value);
if (anchor.hasAttribute('target')) {
  //return boolean value
  console.log('has target');
} else {
  console.log('has not target');
}

//removing attributes
anchor.removeAttribute('style');
anchor.removeAttribute('href');

//replacing an element with another
let element = document.getElementById('replace_ul');
let w = document.createElement('div');
let content = document.createTextNode('this is created text for replace ul');
w.appendChild(content);
// element.replaceWith(w);
let e2 = document.getElementById('heading');
/* element.replaceWith(e2);*/ //the ul gets removed form DOM and heading {{moves-> the original heading will be removed from it's place}} itself in ul's place

//replacing a child with another node
element = document.getElementById('replace_ul');
let newChild = document.createElement('li');

let newContent = document.createTextNode('this is a new child ');
newChild.appendChild(newContent);
let oldChild = element.children[1];
element.replaceChild(newChild, oldChild);

//removing a child node
if (element.hasChildNodes) {
  element.removeChild(element.children[1]);
}
