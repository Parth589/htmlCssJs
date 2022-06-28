let r = /pettern/;//regular expression 
let g = /pettern/g;//regular expression with global flag
let i = /pettern/i;//regular expression with case insensitivity flag
let s = "this is a string which includes the 'pettern' word : 'pettern' multiple times. ";
let t = "this is a string which do not includes that word ";

// *regEx.exec() without global flag
console.clear();
console.log(r.exec(s));//returns an array like object which holds result and other info about the first match f regular expression
console.log(r.exec(s).index);
console.log(r.exec(t));// returns null if no match is found

// *regEx.exec() with global flag
console.clear();
console.log(g.exec(s).index);//first occurance
console.log(g.exec(s).index);//next occurance
console.log(g.exec(s));//next occurance if not found, null

// *regEx.test()
console.clear();
console.log(r.test(s));// true or false depending on pettern exists in the string or not.

// *string.match() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
console.clear();
console.log(s.match(r));//returns first match and some extra properties
console.log(s.match(g));//returns array of all matches only petterns
console.log(t.match(r));//or null if not found any

// *string.search() 
console.clear();
console.log(s.search(r));//returns the index of first occurance without considering global flag
console.log(t.search(r));//if not found returns -1

// *string.replace() 
console.clear();
console.log(s.replace(r, "SOMERaNDOMtEXt"));//replace first match
console.log(s.replace(g, "SOMERaNDOMtEXt"));//replace all match

/* * meta-characters used in regular expression * */
/**
 *  . -> allows zero or any one character
 *  + -> allows atleast one character
 *  * -> /o*p/ will accept multiple,one or zero "o" in place of "*"
  https://www.w3schools.com/jsref/jsref_regexp_zeromore.asp
 *  ? -> character followed by this symbol is optional character
 *  ^ -> specifies start of string 
 *  $ -> specifies end of string 
 *  \ -> escape sequance
 */