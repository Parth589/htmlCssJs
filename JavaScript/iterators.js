const arr = [45, "is", "my", "roll", "number"];
console.log(arr);

function iterator(array) {
    let index = 0;
    return {
        next: function () {
            if (index < array.length) {
                return {
                    done: false,
                    value: array[index++],
                };
            }
            else {
                return {
                    done: true,
                };
            }
        }
    };
}
let itr = iterator(arr);
let v = itr.next();
while (v.done != true) {
    console.log(v.value);
    v = itr.next();
}
fetch("main.js").then(Response => {
    let a = Response.text();
    a.then((data) => {
        console.log(data);
    });
});