

// Create a function
function arrayObj(...numbers){
    this.array = [...numbers]
    this.length = numbers.length
}

// Create a function (to print the array) with prototypal inheritance.
arrayObj.prototype.printArray = function(){
    console.log(this.array)
}

arrayObj.prototype.findMax = function(){
    let max = Number.MIN_SAFE_INTEGER
    for(let i=0;i<this.length;i++){
        if(max<this.array[i]){
            max = this.array[i]
        }
    }
    return max
}

arrayObj.prototype.findMin = function(){
    let min = Number.MAX_SAFE_INTEGER
    for(let i=0;i<this.length;i++){
        if(min>this.array[i]){
            min = this.array[i]
        }
    }
    return min
}

arrayObj.prototype.sort = function(){
    
    for(let i=0;i<this.length-1;i++){
        for(let j=1;j<this.length-i;j++){
            if(this.array[j-1]>this.array[j]){
                var temp = this.array[j-1]
                this.array[j-1] = this.array[j]
                this.array[j] = temp
            }
        }
    }  
    return this.array 
}

arrayObj.prototype.reverseSort = function(){
    this.array.sort()
    for(let i=0;i<Math.floor(this.length/2);i++){
        let temp = this.array[i]
        this.array[i] = this.array[this.length-i-1]
        this.array[this.length-i-1] = temp
    }
    return this.array
}

arrayObj.prototype.findAvg = function(){
    let sum = 0
    for(let i=0;i<array.length;i++){
        sum = sum + this.array[i]
    }
    let avg = sum/this.length
    return avg
}

console.log(arrayObj.prototype)

const array = new arrayObj(1,3,4,2,5)
array.printArray()
console.log("Maximum number in the array : ",array.findMax())
console.log("Minimum number in the array : ",array.findMin())
console.log("Sorted array : ",array.sort())
console.log("Average of the array elements : ",array.findAvg())
console.log("Reverse sort array : ",array.reverseSort())
console.log(array.__proto__)






