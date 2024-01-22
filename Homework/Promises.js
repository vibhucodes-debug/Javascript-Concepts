
/*
    Promises are important building blocks for asynchronous operations in JavaScript. 
*/

// 

// Promises with then and catch

const promise1 = new Promise(function(resolve,reject){
    let num = 9;
    if(num>=10){
        resolve("Number is greater than or equal to 10.")
    }else{
        reject("Number is smaller than 10.")
    }
})

promise1.then(
    (response)=>{
        console.log("Promise1 Response : ",response)
    }
).catch(
    (error)=>{
        console.log("Promise1 Error : ",error)
    }
)

// Promises with multiple then and catch

const promise2 = new Promise(function(resolve,reject){
    let num = 100
    if(num>=20){
        resolve("Number is greater than 20")
    }else{
        reject("Number is smaller than 20")
    }
})

promise2.then((response)=>{
    console.log("Promise2 Response1 : ",response)
    return "Yet another value."
}).then((string)=>{
    console.log("Promise2 Response2 : ",string)
}).catch((error)=>{
    console.log("Promise2 Error : ",error)
})

// Promises with Async and Await