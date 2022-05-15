// @Parth589
// @ts-check
// defination: callback function is a function which is passed to another function as parameter(s).
/*
    callback function can be synchronous as well as asynchronous.
    synchronous callback function: it will execute after the parent function finishes it's work
    asynchronous callback function: it will execute simultaneously to the the parent function 
*/
/**
 * @param {number} someParams
 * @param {Function} callbackFunction
 */
function p(someParams, callbackFunction) {
    console.log(someParams, typeof someParams);
    setTimeout(() => {
        console.log('parent function ended and callback function is going to start');
        callbackFunction(5);
    }, 3000);
}
/**
 * @param {string} v
 */
function callback(v) {
    setTimeout(() => {
        console.log('callback function executing...', v, typeof v);
    }, 1000);
}
p(6, callback);