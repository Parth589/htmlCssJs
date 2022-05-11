// normal object literals
let normalObj = {
  name: 'something',
  type: 'human',
  age: 67,
};
// ***********object made with constructor**********
// constructor -> Def: any function which have this keyword included is considered as constructor
function class_name(parameterGivenToConstructor) {
  this.value = parameterGivenToConstructor; //Data member of class
  this.memberFunction = function () {
    console.log('This is member function of class');
  }; //member function of class
}
// defination/declaration of object literal by constructor
let obj = new class_name(56);

