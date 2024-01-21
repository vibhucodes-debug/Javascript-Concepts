
// IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH

// The slice functions takes a beginning index and an ending index. Then, it returns a part 
// of the specified array without modifying its values.


function arraySlice(array,beginIndex,endIndex){
    b = beginIndex;
    e = endIndex;

    // If no parameters passed, return the array
    if(!b&&!e){
        return [...array];
    }else if(!e){
        e=array.length;
    }
    const newArray = [];
    for(let i=b;i<e;i++){
        newArray.push(array[i]);
    } 
    return newArray;  
}
console.log(arraySlice([1,2,3,4,5]));  // Prints [1,2,3,4,5]  
console.log(arraySlice([1,2,3,4,5],1));  // Prints [2,3,4,5]
console.log(arraySlice([1,2,3,4,5],2,4));  // Prints [3,4]

// Time Complexity = O(n)
// Space Complexity = O(n);



