console.log("HEllo");
let v = document.links;
console.log(v);
let key = "google";
// for (let i = 0; i < v.length; i++) {
//   let hrf = String(v[i].href);
//   if (hrf.includes(key)) {
//     console.log(hrf);
//   }
// }
Array.from(v).forEach(function (element) {
  let hrf = String(element.href);
  if (hrf.includes(key)) {
    console.log(hrf);
  }
});
