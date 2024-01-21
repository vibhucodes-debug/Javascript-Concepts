
// ADDING A PROPERTY TO AN OBJECT

/*
    A property to a javascript object can be added in two ways.
    There is no performance advantabe or disadvantage of one over the other.
*/

var emptyObject = {};
emptyObject.exampleKey = "example key";
emptyObject['exampleKey2'] = "example key";

console.log(emptyObject);