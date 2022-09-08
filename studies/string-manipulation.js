/**
 * STRING MANIPULATIONS
 *      manipulating strings broh
 */

// 1. With Operators //
str1 = "str" // assignment
str2 = "ing" // assignment

str1 += str2 // concatonation | str1 = "string"

str1 *= 3    // repetion | str1 = "stringstringstring"

str1 = str1[0] // slicing | str1 = s


// 2. With Methods //
 
let str = "string";

console.log(str.concat(" concat")) // logs => "string concat"

console.log(str.replace("ri", " replaced ")) // logs => "st replaced ng"

console.log(str.split("")) // logs => ["s","t","r","i","n","g"]

console.log(str.substring(1,4)) // logs => "trin", slice does the same thing basically

console.log(str.repeat(3)) // logs => "stringstringstring"

console.log(str.toUpperCase()) // logs => "STRING", toLowerCase does the opposite