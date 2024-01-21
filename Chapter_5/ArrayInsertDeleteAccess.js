
// The most commonly used data structure in Javascript
// ARRAYS

const arr1 = [1,2,3,4];

// Access, Insertion, Deletion, and Search


// INSERTION 

// Inserts element at the end of the array

arr1.push(5); // [1,2,3,4,5] 
arr1.unshift(6); // [6,1,2,3,4,5]

/*
 The time complexity of the push operation is O(1) in theory, but practically this depends on 
 the javascript engine.
*/

// DELETION 

// Deletes the last element from the array

arr1.pop(); // Returns '6' and array becomes [1,2,3,4,5]
arr1.pop(); // Returns '5' and array becomes [1,2,3,4,5,6]

// The time complexity of pop is O(1) simillar to push method.


// Deleting the first element of the array

arr1.shift() // Returns '1' and array becomes [2,3,4]

// ACCESS

console.log("Example 1.1 ",arr1[0])
console.log("Example 1.2 ",arr1[arr1.length-1])

// Time Complexity is O(1) because elements are accessible using indexes.








