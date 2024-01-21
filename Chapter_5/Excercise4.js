


// FIND COMMON ELEMENTS IN K-SORTED ARRAYS

var arr1 = [1,5,5,10];
var arr2 = [3,4,5,5,10];
var arr3 = [5,5,10,20];
var output = [5,10];
 
// Here k = 3

function commonElements(kArray){
    const hashmap = {};
    for(let i=0;i<kArray.length;i++){
        let currentArray = kArray[i];
        let last = null;
        for(let j=0;j<currentArray.length;j++){
            var currentElement = currentArray[j];
            if(last!=currentElement){
                if(!hashmap[currentElement]){
                    hashmap[currentElement] = 1;
                }else{
                    hashmap[currentElement]++;
                }
            }
            last = currentElement;
        }
    }
    let answer = [];
    for(let prop in hashmap){
        if(hashmap[prop]==kArray.length){
            answer.push(parseInt(prop));
        } 
    }
    return answer;
}

console.log(commonElements([arr1,arr2,arr3]));
console.log(commonElements([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]))