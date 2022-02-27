// type convertion function
let s = String(56); //coverts 56 in string and returns "56";
console.log(s);
let d = String(new Date()); //converts date in string
console.log(d);
// convert array to string
let arr=[1,2,3];
let strarr=String(arr);
console.log(strarr);

// to convert a valid string in number if not will return NAN -> not a number.
let n = Number("123");
console.log(n);

let number=parseInt("25.83");//convert string to int without any rounding
number=parseFloat("35.28");
console.log(number);
console.log(number.toFixed(1));//return a float with only 1 digit after decimal (with rounding);
