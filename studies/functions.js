/**
 * FUNCTIONS
 *      blocks of code declared earlier to be called later
 */

// 1. Declaring And Executing Functions //
// 2. Parameters vs Arguments //
// 3. Named Functions //

//Function is declared by naming it with the function keyword and giving it a parameter to take.
function func(parameter) {
    console.log(parameter);
}
//Function is executed by referencing its name and passing in the needed arguments.
func("argument"); //will log "argument"


// 4. Function to variable //
let plusOne = function(num) {
    return num+1;
}
plusOne(3); //will return 4


// 5. Optional arguments + Optional returns
//You can give a function a variable amount of parameters by using ...
function varParam(...param) {
    //Param is an array containing all the arguments passed into the function.
    console.log(param.length);
}

varParam(1, "hi", true, 15) // will log 1 "hi" true 15


// 6. Scope
// variables defined in functions, regardless of the constructor, are scoped to the function
function scope() {
    var val = 1;
}
scope();
console.log(val) // will log undefined

