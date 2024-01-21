

// ITERATION

var arr1 = [1,2,3,4,5];

// FOR LOOP

// for(Variables;Condition;Modification)

for(var i=0,len = arr1.length;i<len;i++){
    console.log("Example 1.1",arr1[i]);
}
console.log()

// WHILE

breakCondition = true;

var counter = 0;
while(counter<arr1.length){
    // Insert code here
    counter++;
}

while(true){     // Infinite loop
    if(breakCondition){
        break;
    }
}

for(;;){
    if(breakCondition){
        break;
    }
}



// FOR IN

var arr2 = ['all','buffaloes','are','black'];

for(var index in arr2){
    console.log("Example 1.2",item);   // This prints indexes of items in arr2 (0 1 2 3)
}

for(var item in arr2){
    console.log("Example 1.3",arr2[item]);  // This prints item values ('all', 'buffaloes','are', 'black')
}


// FOR OF

for(var item of arr2){
    console.log("Example 2.1 ",item);  // Prints item values (all, buffaloes, are, black)
}

// FOR EACH

/*
    The key difference between forEach and other methods of iteration is that forEach cannot 
    break out of iteration or skip certain elements in the array. forEach is more expressive
    and explicit by going through each element.
*/

arr2.forEach(function (element,index){
    console.log("Example 3.1",element);  // This prints item values ('all', 'buffaloes','are', 'black')
})

arr2.forEach(function (element,index){
    console.log("Example 3.2",arr1[index]); // This prints item values ('all', 'buffaloes','are', 'black')
})

arr2.forEach(function (element,index){
    console.log("Example 3.3",element[index]);  // This prints only one character from each item if its a string
})






