/**
 *  CONTROL FLOW
 *      the order in which individual statements, instructions or function calls of an imperative program are executed or evaluated
 *      basically, its if statements and stuff
 */

// 1. If //
    let x = 1;
    if (x === 1) {
        console.log("True"); //would be logged because x === 1 resolves to true
    }

// 2. Else-If
// 3. Else
    let y = 3;
    if (y === 1) { //resolves to false
        console.log("Y is 1"); //doesnt get run
    } else if (y === 2) { //previous if statment is false, so now it checks this
        console.log("Y is 2"); //doesnt get run
    } else { //previous if statement is false, so proceeds into the else statment
        console.log("Y isnt 1 or 2"); //runs
    }

//4.
    let z = 3;
    switch (z) {
        case 1: //z != 1, so checks next case
            console.log("a");
            break;
        case 2: //z != 2, so checks next case
            console.log("b");
            break;
        case 3: //z == 3, so goes inside
            console.log("c"); //gets logged
            break;
        default: // if none of the cases resolved, would run inside default statment
            console.log("none");
            break;
    }