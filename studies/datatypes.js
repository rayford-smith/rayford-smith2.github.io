/**
 * DATATYPES:
 *      they're types.... of data
 */


// 1. Number //
// any kind of number (positive, negative, decimal, ...)
let num = 15;
let num2 = -0.5;


// 2. String //
// letters and sentences and stuff
let string = "hi";
let string2 = "today is my birthday!"
let string3 = "";


// 3. Boolean //
// true or false
let bool = true;
let bool2 = false;


// 4. Array //
// collection of different datatypes
let array = [1,2,3];
let array2 = ["matthew", "mark", "luke", "john"];
let array3 = ["big man", true, 13];


// 5. Object //
// container for a group of properties
let obj = {
    prop1: 1,
    prop2: 2,
    color: "blue"
}


// 6. Function //
// block of code that can be accessed by calling the function
function testFunc(val) {
    return val;
}
testFunc(3); // returns => 3


// 7. undefined //
// value of a variable/property that has been initialized but not declared
// also for indexes of arrays that dont exist
let val;
console.log(val) // prints => undefined;
let arr = [1,2];
console.log(arr[2]) // prints => undefined;


// 8. null //
// value for an object that doesnt exist
// dont worry too hard about this one


// 9. NaN //
// stands for Not a Number
// usually returned when trying to do math with somehting that isnt a number
let numVar = (7 * 'im not a number :D');
console.log(numVar) // prints => NaN


// 10. Infinity and -Infinity
// refers to an infinity large number or an infinity large negative number
// all mathematic operations involving these will return Infinity or -Infinity
let inf = Infinity;
console.log(inf * 3) // prints => Infinity
console.log(-Infinity + 100000000000) // prints => -Infinity; 


// 11. Primitive VS Complex
// Primitive data types have a set memory size on declaration and cannot change
let num5 = 7; //No matter what number or string or bool you set this to it will always take up the same amount of space
// Complex data types take up different amounts based on how many properties they have
let arr2 = [1,2,3] //You can make this take up more space by increasing the amount of indexes in the array


// 12. Copy vs Reference
// Primitive
let num6 = 7;
let copy = num6; // copy = 7
copy += 1; // copy = 8, but num6 = 7
//this is known as passing by copy

//Complex
let arr3 = [1,2,3];
let copy2 = arr3; // copy2 = [1,2,3]
copy2.push(4) // copy2 = [1,2,3,4] AND arr3 = [1,2,3,4] because they point to the same place in memory
//this is known as passing by reference