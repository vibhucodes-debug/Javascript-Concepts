/*

The constructor function takes a function as an argument. 
This function is called the executor function.

The executor function takes two arguments, resolve and reject. 
hese are the callbacks provided by the JavaScript language.


A promise object has the following internal properties:

state – This property can have the following values:
pending: Initially when the executor function starts the execution.
fulfilled: When the promise is resolved.
rejected: When the promise is rejected.

Note : A promise that is either resolved or rejected is called settled.

result – This property can have the following values:

undefined: Initially when the state value is pending.
value: When resolve(value) is called.
error: When reject(error) is calle

 https://www.freecodecamp.org/news/javascript-promises-async-await-and-promise-methods/
 https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/


*/

// PROMISE STATUS

var promise = new Promise(function(resolve, reject) {
    
});

console.log(promise) // Prints Promise { <pending> }

// -------------------------------------------------------------

var promise = new Promise(function(resolve,reject){
  resolve("Resolved")
})

console.log(promise) // Prints Promise { 'Resolved.' }

// --------------------------------------------------------------

var promise = new Promise(function(resolve,reject){
//   reject("Rejected.")
})
console.log(promise) // Promise { <rejected> 'Rejected.' } and gives error 



// ---------------------------------------------------------

// ONLY ONE FUNCTION OUT OF RESOLVED AND REJECTED WORKS
var promise = new Promise(function(resolve, reject) {
  resolve("I am surely going to get resolved!");

  reject(new Error('Will this be ignored?')); // ignored
  resolve("Ignored?"); // ignored
});

/*
In the example above, only the first one to resolve will be called and the rest will be ignored.
*/


// PROMISES WITH 'THEN' AND 'CATCH'

const promise1 = new Promise(function(resolve,reject){
  let num = 90;
  if(num>=10){
      resolve("Number is greater than or equal to 10.")
  }else{
      reject(new Error("Number is smaller than 10.")) // Throws error in the console.
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

// PROMISES CHAIN

const promise2 = new Promise(function(resolve,reject){
  let num = 100
  if(num>=20){
      resolve("Number is greater than 20")
  }else{
      reject("Number is smaller than 20")
  }
})

// multiple then functions
promise2.then((response)=>{
  console.log("Promise2 Response1 : ",response)
  return "Yet another value."
}).then((string)=>{
  console.log("Promise2 Response2 : ",string)
}).catch((error)=>{
  console.log("Promise2 Error : ",error)
})

// PROMISES WITH 'SET-TIMEOUT'

function createPromise(a,b){

  return new Promise(function(resolve,reject){
      setTimeout(()=>{
          const sum = 'a+b'
          if(isNaN(sum)){
              reject("Number not valid.")
          }else{
              resolve(sum)
          }
      },2000)
  })
  
}

createPromise(6,4).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})



// PROMISES WITH 'ASYNC' AND 'AWAIT'

async function async_await(){
    try{
        const result = await new Promise((resolved,rejected)=>{
            setTimeout(()=>{
                console.log('First result.')
                resolved(10+10)
            },2000)
        })

        console.log(result)

        const result2 = await new Promise((resolved,rejected)=>{
            setTimeout(()=>{
                console.log('Second result.')
                resolved(result*result)
            },2000)
        })

        console.log(result2)
        console.log("Code ran successfully!")

    }catch(error){
        console.log("Error thrown : ",error)
    }
}

async_await()


// PROMISES WITH ASYNC AND AWAIT -  EXPLICIT PROMISE FUNCTIONS

const sum_n_product = async()=>{
  try{  
        const sum = await getSum(10,8)
        console.log("Sum : ",sum)
        const squared = await getSquare(sum)
        console.log("Square : ",squared)
    }
 catch(error){
        console.log("Error thrown : ",error)
    }
}
sum_n_product()

// const getSum  = function(a,b){  // Can't use expression functin, because 'const' stops function from getting hoisted
function getSum(a,b){
    return new Promise((resolved,rejected)=>{
       setTimeout(()=>{ if(a>b){
            resolved(a+b)
        }else{
            rejected("I reject the sum parameters")
        }},5000)
    })
}

const getSquare =(sum)=>{    // Async functions can be used before initialisation - no effect on hoisting
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{resolved(sum*sum)},5000)
    })
}


// PROMISE ALL 

const prom1 = new Promise((resolved,rejected)=>{resolved('Promise1 Resolved.')})
const prom2 = new Promise((resolved,rejected)=>{resolved('Promise2 Resolved.')})
const prom3 = new Promise((resolved,rejected)=>{rejected('Promise3 Rejected.')})

Promise.all([prom1,prom2,prom3])
.then((result)=>{console.log("All promises resolved.",result)})
.catch((error)=>{console.log("All promises not resolved.",error)})


