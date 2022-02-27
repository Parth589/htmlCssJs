console.log('hello world');
let elem = document.getElementById('heading');

// elem.addEventListener('click', function (event) {
//   console.log(
//     'clicked | type: ',
//     event.type,
//     'pagex',
//     event.pageX,
//     '|pagey: ',
//     event.pageY,
//     '|clientx',
//     event.clientX
//   );
// });
function myfunc(e) {
  console.log(e.type + ' at ' + e.currentTarget);
}
//evnt function as parameter
elem.addEventListener('dblclick', myfunc);
elem.click();
let bdy = document.querySelector('body');
bdy.addEventListener('mousemove', function (e) {
  bdy.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},${
    (e.offsetX + e.offsetY) / 2
  })`;
});
