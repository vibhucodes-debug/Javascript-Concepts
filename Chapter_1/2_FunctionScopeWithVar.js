
// Declaring with Var : FUNCTION SCOPE

/*
    These variable declarations 
    “float” all the way to the top. This is known as variable hoisting. Variables declared at the 
    bottom of the script will not be the last thing executed in a JavaScript program during 
    runtime.
 */

var  a = 10;
console.log(a);
var a;

function scope1(){

    var top = "top"
    bottom = "bottom"
    console.log(bottom)
    var bottom;
}

scope1();  // Prints "bottom" - no error

/*
    The bottom variable declaration, which was at the last line in the function, is floated 
    to the top, and logging the variable works
*/

function scope2(print){
    if(print){
        var insideIf = '12'
    }
    console.log(insideIf);
}
scope2(true); // Prints '12' - no error

/*
    ** NOTE **
        The key thing to note about the var keyword is that the scope of the variable is the 
        closest function scope. 
*/

// The previous function scope2 is simillar to the following function : 

function reScope2(print){
    var insideIf;
    if(print){
        insideIf = '12';
    }
    console.log(insideIf);
}
reScope2(true);

/*
In Java, this syntax would have thrown an error because the insideIf variable is 
generally available only in that if statement block and not outside it.
*/

var a = 1;
function four(){
    if(true){
        var a = 4;
    }
    console.log(a); // Prints '4'
}

// '4' was printed not the global value of 1, because it was redeclared and available in that scope.








