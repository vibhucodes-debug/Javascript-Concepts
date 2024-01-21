
// Declaration with let : BLOCK SCOPE

/*
    Any variables declared with let are in the closest block scope. 
    Meaning within the {} they were declared in.
*/

function scope3(print){
    if(print){
        let insideIf = '12';
    }
    console.log(insideIf);
}
scope3(true);  // Prints insideIf is not defined

/*  
    In this example, nothing is logged to the console because the insideIf variable is 
    available only inside the if statement block
*/




