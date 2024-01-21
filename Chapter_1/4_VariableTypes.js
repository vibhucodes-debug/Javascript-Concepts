
// VARIABLE TYPES

/* 
    In Javascript, there are seven primitive data types namely boolean,
    number, string, undefined, object, function, and symbol.

    One thing that stands out here is that undefined is a primitive value.
    'undefined' is assigned to a variable that has just been declared
*/

var is20 = false; // boolean
typeof is20; // boolean

console.log(typeof is20);



  var is20 = false; // boolean
  typeof is20; // boolean

  var  age = 19;
  typeof age; // number

  var  lastName = "Bae";
  typeof lastName; // string

  var fruits = ["Apple", "Banana", "Kiwi"];
  typeof fruits; // object

  var me = {firstName:"Sammie", lastName:"Bae"};
  typeof me; // object

  var nullVar = null;
  typeof nullVar; // object

  var function1 = function(){
    console.log(1);
  }
  typeof function1 // undefined

  var blank;
  typeof blank; // undefined

  