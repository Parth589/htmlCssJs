// premitive (built-in) data types
{
  let nam = "void"; //string
  console.log(typeof nam);

  let marks = 56.66; //number(int and float are treated same in js)
  console.log(typeof marks);

  let b = true; //boolean
  console.log(typeof b);

  let n = null; //null means no value type is object [special case];
  console.log(typeof n);

  let u = undefined; //default value of all unassigned variables
  console.log(typeof u);
}
// reference data types
{
  let a = [
    1,
    5,
    "noob",
    ["another array", 872],
    { name: "nothing", grade: "a+ from last" },
  ]; //arrays {not necessary to have all data have same data-type} type: object
  console.table(a, typeof a);

  let b = { name: 90, objective: "destroy the earth and remake it" }; //objects
  console.table(b, typeof b);

}
