// https://nodejs.dev/learn/the-nodejs-event-loop
//* function call stack
// let foo = () => {
//     console.log("foo");
//     console.trace();
//     too();
// };
// let too = () => {
//     console.log("too");
//     console.trace();
// };
// foo();
//* function call stack with settimeout
let foo = () => {
    console.log("foo");
    setTimeout(() => {
        console.trace();
        soo();
    }, 1000);
    console.trace();
    too();
    console.trace();
};
let too = () => {
    console.log("too");
    setTimeout(() => {
        console.trace();
        console.log("I am 0ms timeout");
    }, 0);
    console.trace();
};
let soo = () => {
    console.timeEnd("start");
    console.log("soo", "I am 1000ms timeout");
    console.trace();
};
let time = () => {
    setTimeout(() => {
        console.log("I am 500ms timeout");
    }, 500);
};
console.time("start");
foo();
console.trace();
time();
console.timeLog("start");
// info: every setTimeout and eventListeners goes to message Queue and when the function call stack becomes empty(all function finish their work) then they are going to execute.  