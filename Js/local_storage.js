//add key-value pair in local storage
// every key and value stored in local/session storage in type of String{after user leaves browser/site the local storage will remain on client's system}
localStorage.setItem('name', 'void is  my name');
//clear the local storage
localStorage.clear();

//to put objects in local/session storage typecast it to JSON string
let abc = {
  name: 'myname',
  class: 90,
};
let array = [1, 5, 7, 3, true, 'nirma'];
localStorage.setItem('abcd', JSON.stringify(abc));
localStorage.setItem('abc', JSON.stringify(array));
//any more than 1 values can't get the same key.

/* Local storage vs session storage */
// local storage is permenent untill u clear it manually

// session storage is temporary it gets cleared after closing tab/ closing browser
let impArray = [1, 2, 3, 3, true, false, { name: 'void ', house: '2bhk' }];
sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
