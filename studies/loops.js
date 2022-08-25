/**
 * LOOPS
 *      for looping blocks of code multiple times
 */


// 1. While, For, and For In //
// 2. Looping Back and Forth //
    // 1a. While //
        let count = 0;
        while (count < 10) { // While (count < 10) is true, repeat the code inside the block.
            console.log(count) // will log 0 1 2 ... 9
            count++; //increases count every loop

        }
    
    // 1b. For //
        for (let i = 10; i > 0; i--) { //Initializes i at 10 and repeats the code block while i < 0, decreasing i by 1 for each iteration.
            console.log(count); // will log 10 9 8 ... 1
        }

    // 1c. For In //
    // 4. Looping Over Object //
        let obj = {
            key1 : 1,
            key2 : 2
        }

        for (let k in obj) { //Iterates through each key in obj, setting k equal to the next key in obj every iteration.
            console.log(k) // will log key1 key2
        }


// 3. Looping Through Arrays //
let arr = [1,2,3];
    //3a. Looping Forwards //
    for (let i = 0; i < arr.length; i++) { //Initializes i at 0 and repeats the code block while i is less than the length of the array, increasing i by 1 for each iteration.
        console.log(arr[i]); // will log 1 2 3
    }

    //3b. Looping Backwards //
    for (let i = arr.length-1; i >= 0; i--) { //Initializes i at the end of the array and repeats the code block while i is > 0, decreasing by 1 for each iteration.
        console.log(arr[i]); // will log 3 2 1
    }

