/*
The scope is what defines the access to JavaScript variables. In JavaScript, variables 
can belong to the global scope or to the local scope. Global variables are variables that 
belong in the global scope and are accessible from anywhere in the program
*/


// In javascript variables can be declared without using operators.
test = 1;
console.log(test);

/*
    However, this creates a global variable, and this is one of the worst practices in 
    JavaScript. Avoid doing this at all costs. Always use var or let to declare variables. 
    Finally, when declaring variables that won’t be modified, use const.
*/
