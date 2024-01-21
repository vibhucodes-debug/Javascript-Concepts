

// Prototypes in Javascript


/*

Prototypes are a powerful and very flexible feature of JavaScript,
making it possible to reuse code and combine objects. 
In particular they support a version of inheritance.

*/

// All JavaScript objects inherit properties and methods from a prototype.

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");


// We also learned that you can not add a new property to an existing object constructor

Person.nationality = "English";

console.log(Person)


