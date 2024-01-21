
// HELPER FUNCTIONS

// Slice Method

// This method returns a portion of the array

// .slice(startIndex,endingIndex);

const arr1 = [1,2,3,4,5];

// Ending index is exclusive
console.log("Example 1.1", arr1.slice(0,arr1.length-1));  // Prints [ 1, 2, 3, 4 ] From 0 index till second last

console.log("Example 1.2", arr1.slice(2)); // Prints [ 3, 4, 5 ]

console.log("Example 1.3", arr1.slice(2,4)); // Prints [ 3, 4 ] 


// If nothing is passed this method just creates a copy of the array 

console.log("Example 1.4", arr1.slice()); // Prints arr1 [1,2,3,4,5]

console.log("Example 1.5", arr1.slice() === arr1); // Returns 'false'

/* **NOTE** : array1.slice() === array1 evaluates to false. This is because although the 
contents of the arrays are the same, the memory addresses at which those arrays reside 
are different
*/

// NOTE 

/*
    This is useful for copying an array in JavaScript. Remember that arrays in JavaScript 
    are reference-based, meaning that if you assign a new variable to an array, changes to 
    that variable apply to the original array
 */

var array1 = [1,2,3,4];
array2 = array1;

console.log("Example 1.6",array1===array2); // Returns "true"

array2[0] = 4;
console.log("Example 1.7",array1[0]);  // Prints 4
console.log("Example 1.8",array1,array2); 

// COPY OF AN ARRAY

var array3 = Array.from(array1);

console.log("Example 1.9",array3,array1); // [ 4, 2, 3, 4 ] [ 4, 2, 3, 4 ]
// Changing elements of array3 doesn't affect array1

array3[0] = 100;
console.log("Example 1.10",array3,array1); // [ 100, 2, 3, 4 ] [ 4, 2, 3, 4 ]



// SPLICE

// .splice(begin,size,element1,element2....)

/* 
    This helper function returns and changes the contents of an array by removing existing 
    elements and/or adding new elements
*/

/* It takes three parameters: the beginning index, the size of things to be removed, and add
    new elements to add. New elements are added at the position specified by the first parameter
    It returns the removed elements.
*/

var array1 = [1,2,3,4,5];
console.log("Example 2.1",array1.splice()); // returns [], array1 = [1,2,3,4,5]
console.log("Example 2.2",array1.splice(1,2)); // returns [2,3], array1 = [1,4,5]

var array1 = [1,2,3,4,5];
console.log(array1.splice(1,2,5,6,7)); // returns [2,3], array1 = [1,5,6,7,4,5];

var array1 = [1,2,3,4,5];
console.log("Example 2.3",array1.splice(1,2,[3,4,5])); // Returns [2,3] array1 = [1,[5,6,7],4,5]
array1 = [1,2,3,4];
array1.splice(1,2,{'ss':1}); // returns [2,3] array1 = [1,{'ss':1},4]

/*
    .splice() is, worst case, O(n). Similarly to copying, if the range specified is the 
    whole array, each n item has to be removed
*/




// CONCAT

var array1 = [1,2,3,4];
array1.concat(); //returns [1,2,3,4], array1 = [1,2,3,4]
array1.concat([2,3,4]); //returns [1,2,3,4,2,3,4],array1 = [1,2,3,4]



// LENGTH

console.log("Example 3.1",array1.length);
array1.length = 3; // array1 = [1,2,3]

// SPREAD OPERATOR

function addFourNums(a,b,c,d){
    console.log(a+b+c+d);
}
var nums = [1,2,3,4]
addFourNums(...nums);

// We can add unlimited elements to check in min and max functions
console.log(Math.min(...array1),Math.max(...array1));






