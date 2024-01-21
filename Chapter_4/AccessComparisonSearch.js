

// STRINGS 

/*
This chapter will focus on working with strings, the JavaScript String object, and the 
String object’s built-in functions.
*/

/*

Key Learnings :

1. Access
2. Compare
3. Decompose
4. Search strings for commonly used real life purposes

*/

// STRING ACCESS

// Single character access
'god'.charAt(1)   // Returns 'o'

// Multiple character access

var string = 'This_is_a_string';
var startingIndex = 0;
var endingIndex = 7; // Enging index is exclusive
console.log("Example 1.1",string.substring(startingIndex,endingIndex)); // Prints 'This_is'

// If we don't specify ending index the whole string from the specified value, till the end will be printed

console.log("Example 1.2",string.substring(1));  // Prints - 'his_is_a_string'


// STRING COMPARISION

var a = 'a';
var b = 'b';
console.log("Example 2.1",a<b); // Prints 'true'

// ** However, if you are comparing two strings of different lengths, it starts comparing 
// from the start of the string until the length of the smaller string.
var a = 'add';
var b = 'b';
console.log("Example 2.2",a<b); // Prints 'true'

// In the example 2.2 firstly 'a' & 'b' are compared since 'a' is smaller than 'b' it returns true
// After that, 'd' & 'b' are compared and thats it, comparison ends after that.

var a = 'add';
var b = 'ab';
console.log("Example 2.2",a<b);  // Prints 'false' | It is same as comparing 'ab' and 'ad'


console.log("Example 2.3",'add'<'ab'=='ad'<'ab');   // Prints 'true'


// STRING SEARCH

// This method takes 2 parameters : 1. A string 2. (Optional) Number for starting index of search
// This method is case sensitive.

console.log("Example 3.1",'Red Dragon'.indexOf('Red')); // Prints '0'
console.log("Example 3.2",'Red Dragon'.indexOf('RedScale')); //  Prints '-1'
console.log("Example 3.3",'Red Dragon'.indexOf('Dragon', 0)); // Prints '4'
console.log("Example 3.4",'Red Dragon'.indexOf('Dragon', 4)) // Prints '4'
console.log("Example 3.5",'Red Dragon'.indexOf('Dragon', 6)) // Prints '-1' because dragon is not present after index 6
console.log("Example 3.6",'Red Dragon'.indexOf('',8)); // Prints '8'

// 

function existsInString(stringValue, search){
    return stringValue.indexOf(search)!==-1;
}
console.log("Example 3.7",existsInString('red','r')) // Prints 'true'
console.log("Example 3.8",existsInString('red','g')) // Prints 'false'

// Couting all occurences of 'a' in a given string

var str = "He's my king from this day until his last day";
var count = 0;
var pos = str.indexOf('a');

while(pos!=-1){
    count++;
    pos = str.indexOf('a',pos+1);
}
console.log("Example 3.9",count+" occurences");

// startsWith
'Red Dragon'.startsWith('Red'); // returns true
// endsWith
'Red Dragon'.endsWith('Dragon'); // Returns true

'Red Dragon'.startsWith('Dragon') // Returns false
'Red Dragon'.endsWith('Red') // Returns false








