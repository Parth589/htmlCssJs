// log methods:
console.log("hello world");
console.log([1, 2, 3]); //log any object or array
console.log({ name: "me", value: 0 });
// give error/ warning
console.error("this is a message for usr as error");
console.warn("this is a message as warning");
// log object as table
console.table({ name: "noob", value: 500 });
// generate execution time of a particular block
console.time("time");//lable in time and timeEnd must be same;
for (let index = 0; index < 5; index++) {
    console.log("hello console");
}
console.timeEnd("time");
