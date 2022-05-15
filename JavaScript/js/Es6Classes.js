console.log("Hello world");
// classes and Inheritance
// 1. Classes and it's members
class employee {
    a;
    constructor(Name, Location) {
        // to give a data member to a class initialize it by anything in constructor or outside constructor and to add new prpert(y)(ies) on runtime, put them in any member function
        this.Name = Name;
        this.location = Location;
    }
    slogan(age) {
        this.age = age;
        console.log(`I am ${this.Name} and this company is best`);
    }
    // a data member which stores a function
    main = function (something) {
        console.log("Thi s is something", something);
    };
}

let emp1 = new employee("Rohan", "Delhi");


// Inheritance
class base {
    data1;
    data2;
    constructor(d1, d2) {
        this.data1 = d1;
        this.data2 = d2;
    }
    func() {
        console.log("This is a function");
    }
}
class derived extends base {
    derivedData;
    constructor(d1, d2, d3) {
        super(d1, d2);//call the base class constructor
        this.derivedData = d3;
    }
}
let d = new derived(4, 5, 6);