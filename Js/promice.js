// @ts-check
/*
    Promise is an object in Javascript used as alternative of callback function.
    -> it helps us to define synchronous code which resists from bugs and unpredicted errors

    Overall conclusion:
    -> promise is an object in js
    -> it takes a function call it A
    -> A takes two more functions as arguments call them as resolve and reject.
    -> A takes some time to execute (e.g. server requests ) in that case the request can be either responded or rejected.
    -> if it is responded, it is responsibility of developer to run the resolve function
    -> if not, dev. have to run the reject function

    -> an promise object can be used only once.it is used as it is initialized
    ->the fnction passed in constructor of Promise is execued at the time when the object is intitiallized
*/

//defining Promise
let pr = new Promise(func);
/**
 * @param {Function} resolve
 * @param {Function} reject
 */
function func(resolve, reject) {
    // make some lengthy work which take a long time.
    setTimeout(() => {
        console.log("Server responded....");
        const error = true;//this is an message sent by server to us.
        if (!error) {
            resolve();
        } else {
            reject();
        }
    }, 5000);
}
// when the promise is resolved the function passed to then is executed 
function resolve() {
    console.log('The request has been accepted');
}
// when the promise is rejected the function passed to catch is executed 
function reject() {
    console.log('The request has been rejected');
}
//using the promise
pr.then(resolve).catch(reject);