

// JAVASCRIPT FUNCTIONAL ARRAY METHODS

// Someparts of javascript can be written just like a functional programming language.
// Unlike imperative programming, JavaScript does not focus on the state of the program.
// It does not use loops only functional method calls


// Examples of Functional array methods are map, filter, and reduce.



// MAP 

var goo = [1,2,3,4,5,6,7].map(function (value){
    return value*10;
})
console.log("Map",goo);

// [10,20,30.40,50,60,70]


// FILTER 
var array1 = [1,2,34909,29932,20,2838]
var array2 = array1.filter(function (value){
    return value > 100;
});
console.log("Filter",array2);

// [200,800]

// REDUCE

var sum = [0,1,2,3,4,5].reduce(function (prevVal, currentVal, index, array){
    return prevVal+currentVal;
})
console.log("Reduce1",sum); // Prints 15

// This function take an initial value as its second argument
sum = [1,2,3,4,5].reduce(function (prev,curr,idx,array){
    return prev+curr;
},2);
console.log("Reduce2",sum); // Prints 17




