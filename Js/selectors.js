// Element selectors in js,
// single element selectors
//select by id
let e = document.getElementById("heading");
e = document.querySelector("#heading");
e = document.querySelector(".myclass");
console.log(e);

// properties of element object
e.style;// give access to css of element
e.innerHTML;// give access to HTML of element
e.innerText;// give access to HTML(text only) of element

// MULTI-Element selector
e = Array.from(document.querySelectorAll(".myclass"));// select by class (if multiple element exists will be the first one)

let elms = document.getElementsByClassName("myclass");//returns a html collection consisting of elements with specified class

elms = document.getElementsByTagName("div");//returns a html collection of all div


console.log(elms);