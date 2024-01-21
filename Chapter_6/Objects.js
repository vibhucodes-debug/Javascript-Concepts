
// JAVASCRIPT OBJECTS



// Objects can be declared using object literal {} or via the syntax 'new Object()'

var javascriptObject = {};
var testArray = [1,2,3,4,5];

javascriptObject.array = testArray;
console.log("Example 1.1",javascriptObject);  // Example 1.1 { array: [ 1, 2, 3, 4, 5 ] }

javascriptObject.title = 'Algorithms';
console.log("Example 1.2",javascriptObject); // Example 1.2 { array: [ 1, 2, 3, 4, 5 ], title: 'Algorithms' }

// Above properties 'title' and 'array' are dynamically added to the object

// Simillarly we can add functions dynamically


// PROTOTYPAL INHERITANCE

/*
    Instrongly type languages such as Java, methods are defined at the same time as the class.
    However, in Javascript the function has to be added as a JavascriptObject property of that class.
*/

function ExampleClass(){
    this.name = 'Javascript';  // Property
    this.sayName = function(name){  // Function as property
        this.name = name;
        console.log(this.name);
    }
}

// new object
var example1 = new ExampleClass();
example1.sayName('Vaibhav'); 

// This class dynamically adds the sayname function in the constructor. This 
// Pattern is known as Prototypal Inheritance

// Prototypal method is the only method of inhertance in Javascript

function ExampleClass2(){
    this.array = [1,2,3,4,5];
    this.name = "Example Class 2"
}

// new Object

var example2 = new ExampleClass2();
ExampleClass2.prototype.sayName = function(){
    console.log(this.name);
}

example2.sayName();  




// CONSTRUCTOR AND VARIABLES

function ExampleClass3(name,size){
    this.name = name;
    this.size = size;
}
var example = new ExampleClass3('PUBLIC',5);
console.log(example);  // ExampleClass3 { name: 'PUBLIC', size: 5 }ExampleClass3 { name: 'PUBLIC', size: 5 }

// Accessing public variables
console.log(example.name);  // PUBLIC
console.log(example.size);  // 5

/*
    To mimic a private variable, instead of using this.propertyName, you can declare 
    a local variable and have getter/setters that allow access to that variable. 
    This way, the variable is available only to the constructor’s scope.
*/

/*
    NOTE :
    Private variables are now accessible only through the defined interfacing functions 
    (getter getName and setter setName). These getters and setters cannot be added outside 
    of the constructor.
*/

function ExampleClass4(name,size){
    var privateName = name;
    var privateSize = size;

    this.getName = function(){return privateName;}
    this.setName = function(name){privateName = name;}

    this.getSize = function(){return privateSize;}
    this.setSize = function(size){privateSize = size;}
}

var example = new ExampleClass("Sammie",10);
example.setSize(12);
console.log(example.privateName); // undefined
console.log(example.getName()); // "Samie"
console.log(example.size); // undefined
console.log(example.getSize()); // 3


// SUMMARY 

/*
In JavaScript, unlike other object-oriented programming languages, prototypical 
inheritance is the preferred method of inheritance. Prototypical inheritance works by 
adding new functions to a JavaScript class via .prototype. Private variables are explicitly 
declared in Java and C++. However, a private variable is not supported in JavaScript, 
and to mimic the functionality of a private variable, you need to create a variable that 
is scoped to the constructor function. Declaring a variable as part of that object in the 
constructor via this.variableName automatically makes that property public
*/


