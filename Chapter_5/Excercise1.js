
// FIND TWO ARRAY ELEMENTS IN AN ARRAY THAT ADD UP TO A NUMBER

// Problem: Given the array arr, find and return two indices of the array that add up to weight 
// or return -1 if there is no combination that adds up to weight


// 1st method - T = O(n^2)  S = O(1)

var array = [2,5,4,3,1];
function findDuet1(array,weight){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
             if(array[i]+array[j]===weight){
                return [i,j];
             }                                             
        }
    }
    return -1;
}
console.log("1st approach",array,findDuet1(array,9));


// 2nd Method 

// Firstly Sort Array

array.sort();
console.log(array);

function findDuet2(array,weight){
    let i=0,j=array.length-1;
    while(i<j){
        let sum = array[i]+array[j];
        if(sum>weight){
            j--;
        }
        else if(sum<weight){
            i++;
        }
        else{
            return [i,j];
        }
    }
    return -1;
}
console.log("2nd approach",array,findDuet2(array,9));


// 3rd Method - T=O(n), S=O(n)

/*
    If the current value is 5 and the required sum is 9, then the second term should be (9-5=4)
    Now, use hashtable to store elements.
*/ 
var array = [1,2,3,4,5];
function findDuet3(array,weight){
    const hashtable = {};
    for(let i=0;i<array.length;i++){
        let currentElement = array[i],difference = weight-currentElement;

        // Check if the current element has been the difference in previous operations
        if(hashtable[currentElement]!= undefined){
            return [hashtable[currentElement],i];
        }else{
            // Store the difference required for element at current index
            hashtable[difference] = i;
        }
    }
    return -1;
}
console.log("3rd Approach",array,findDuet3(array,9));



