var a = 90;//global variable
const c = 78;//constant value in its local scope
{
    let s = 89;//local variable
    console.log(s);
}
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, _ or $
3. Are case sensitive
*/
// const array can be modified by methods but can't changed directly
const arr = [1, 2, 3];
arr.push(4);//valid 
// arr=[1,5,9];//not valid 
/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 

*/