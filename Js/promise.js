console.log("This is Promise.js");
// promises run asynchronously.
function init(func) {
    return new Promise(func);
}
let fun = (resolve, reject) => {
    const error = false;
    setTimeout(() => {
        if (!error) {
            resolve();
        }
        else {
            reject();
        }
    }, 4000);
};
let fun2 = (resolve, reject) => {
    const error = true;
    setTimeout(() => {
        if (!error) {
            resolve();
        }
        else {
            reject();
        }
    }, 1000);
};
resolve = () => { console.log("I am resolve function"); };
reject = () => { console.log('I am reject function'); };
init(fun).then(resolve).catch(reject);
init(fun2).then(resolve).catch(reject);
console.log("After All this headache.");// will get printed after log of line @1