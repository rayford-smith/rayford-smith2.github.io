// #!/usr/bin/env node

'use strict';

const { filter } = require('lodash');
var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rayford-smith2.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let maleTest = function(obj) {
        return obj.gender === "male";
    }
    return _.filter(array,maleTest).length;
};

var femaleCount = function(array) {
    let femCount = function(count, obj, index) {
        if (obj.gender === "female") return count += 1;
        return count;
    }
    return _.reduce(array, femCount, 0);
};



var oldestCustomer = function(array) {
    var old;
    let findOld = function(oldest, obj, index) {
        if (obj.age > oldest) {
            old = obj.name;
            return obj.age;
        }
        return oldest;
    }
    _.reduce(array,findOld,0)
    return old;
};

var youngestCustomer = function(array) {
    var young;
    let findYoung = function(youngest, obj, index) {
        if (obj.age < youngest) {
            young = obj.name;
            return obj.age;
        }
        return youngest;
    }
    _.reduce(array,findYoung,900)
    return young;
};

var averageBalance = function(array) {
    let addBal = function(total, obj, ind) {
        return total + parseFloat(obj.balance.slice(1).replace(",",""));
    }
    let sum = _.reduce(array,addBal,0);
    console.log(sum);
    return (sum/array.length);

};

var firstLetterCount = function(array, char) {
    let checkChar = function(total, obj, ind) {
        if (obj.name[0].toLowerCase() == char.toLowerCase()) return total+1;
        return total;
    }
    return _.reduce(array,checkChar,0);
};

var friendFirstLetterCount = function(array, obj, char) {

    for (let i = 0; i < array.length; i++) {
        if (array[i].name == obj) {
            return firstLetterCount(array[i].friends,char);
        }
    }
    return undefined;
};

var friendsCount = function(array, name){
    let retArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) retArr.push(array[i].name)
        }
    }
    return retArr;

};

var topThreeTags = function(array){
    let tags = {};
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            let tag = array[i].tags[j];
            if (!(tag in tags)) tags[tag] = 0;
            tags[tag]++;
        }
    }
    tags["one"] = 0;
    tags["two"] = 0;
    tags["three"] = 0
    let top = ["one","two","three"];
    for (let key in tags) {
        let num = tags[key];
        if (num >= tags[top[0]]) {
            top[2] = top[1];
            top[1] = top[0];
            top[0] = key;
        } else if (num >= tags[top[1]]) {
            top[2] = top[1];
            top[1] = key;
        } else if (num > tags[top[2]]) {
            top[2] = key;
        }
    }

    return top;

};

var genderCount = function(array) {
    let tallyGender = function(gendArr,obj,ind) {
        let gend = obj.gender;
        switch(gend) {
            case "male":
                gendArr[0]++;
                break;
            case "female":
                gendArr[1]++;
                break;
            default:
                gendArr[2]++;
                break;
        }
        return gendArr;
    }
    let genderArray = _.reduce(array,tallyGender,[0,0,0]);
    return {
        "male": genderArray[0],
        "female": genderArray[1],
        "non-binary": genderArray[2]
    }
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
