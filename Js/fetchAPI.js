/**
 * fetch API: it is used as modern world alternative for XHR object
 * Mug up that it needs 2 .then() to work: 1st is to define the type of data and 2nd is to get the actual data.
 */
// *get request using fetch API
let url = "https://jsonplaceholder.typicode.com/posts/1/comments";
fetch(url)
    .then(response => response.json())
    .then(data => { console.log(data); });

url = "https://reqres.in/api/users";
let data = {
    "name": "morpheus",
    "job": "leaderX"
};
options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
};
fetch(url, options)
    .then(response => response.json())
    .then(data => { console.log(data); });
/*
     *all blocks of syntax teared apart
let fetchResult = fetch(url);// a promise which contains the url of file which contans the data we want to access
let then1Result = fetchResult.then(
    (response) => {
        // response is an object which have methods like .text() and .json to
        return response.text(); // then1Result will be evaluated to this (type: promise)
    }
);
let then2Result = then1Result.then(
    data => {
        *the data is given to this function. use it as you want
        console.log(data);
    }
);

*/
// // *post request using fetch API
// let data = { name: "someone", age: 35 };
// let options = {
//     method: 'POST',//* type of request
//     headers: {
//         'Content-Type': 'application/text' //*the type in which the data will sent to the server 
//     },
//     body: JSON.stringify(data) //* The pre-processing on data before sending it to server
// };

// fetch(url, options).then((response) => response.text()).then(data => { console.log(data); });