/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */



// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined


// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john


// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 4. var //
//used to initialize variables in a global scope 
let bool = true;
if (bool) {
    var str = "true";
}
console.log(str) // prints => true


// 5. let //
//used to initialize variables in a local scope
let bool2 = true;
if (bool2) {
    let str = "true";
    //str: "true";
}
//str: undefined
console.log(str) // prints => undefined


// 6. const //
//used to initialize constants (also local
const pi = 3.14;
//constants cannot be redeclared
//pi = 700; <= would give error
//constants must be declared when initialized
/**
 * const pie;
 * pie = "yummy"; <= would also error;
 */


// 7. hoisting //
//variable initializations are "hoisted" to the top of code by the compiler to prevent errors from calling variables before they are initialized
//declarations are not hoisted
console.log(hoistVar); // prints => undefined
var hoistVar = 10;

/** Compile View:
 * var hoistVar;
 * console.log(hoistVar);
 * hoistVar = 10;
 */