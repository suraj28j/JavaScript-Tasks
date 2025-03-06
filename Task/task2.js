// [1] Write a JavaScript program to find the maximum number in an array.

function maxNumber(num) {
    return Math.max(...num);
}
// console.log(maxNumber([5,9,3,6,2,7]));


// [2] Write a JavaScript program to reverse a given string. 

function revString(str) {
    return str.split("").reverse().join("");
}
// console.log(revString("Suraj"));


// [3] Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function evenNumber(ary) {
    // let even = ary.filter((num)=>{
    //     return num%2===0;
    // })
    // return even;

    return ary.filter(num => num % 2 === 0)
}
// console.log(evenNumber([3,6,8,5,16,18]));


// [4] Write a JavaScript program to find the largest element in a nested array. 

function largeNumNestedArray(ary) {
    let simAry = ary.flat(Infinity);
    let sortAry = simAry.sort((a, b) => a - b)
    return sortAry[sortAry.length - 1]
}

// console.log(largeNumNestedArray([3,5,[1,6,[4,8],2]]));


// [5] Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

function toTitleCase(str) {
    let ary = str.split(" ");
    let temp = []
    for (let i = 0; i < ary.length; i++) {
        temp.push(ary[i].replace(/^[a-z]/g, (x) => x.toUpperCase()))
    }
    return temp.join(" ");
}

// function toTitleCase(str) {
//     let pattern = /\b\w/g;
//     return str.replace(pattern, l => l.toUpperCase());
// }

// console.log(toTitleCase("my name is suraj"));


// [6] Find longest word in string and return first longest word in reverse order

function largeWord(str) {
    let ary = str.split(" ")
    let temp = ary[0];
    for (let i = 0; i < ary.length; i++) {
        if (temp.length < ary[i].length) {
            temp = ary[i]
        }
    }
    return temp.split("").reverse().join("");
}
// console.log(largeWord("My name is suraj kumar"));


// [7] function take two string as argument if one string all letter is includ in second string return true otherwise return false
// Example :-  love,lvetyo => true | lion,ionrt => false

function letterMatch(str1, str2) {
    if (str1.length > str2.length) {
        let t = str1;
        str1 = str2;
        str2 = t;
    }
    let ary1 = str1.split("");
    let ary2 = str2.split("");
    let temp = []
    for (let i = 0; i < ary1.length; i++) {
        for (let j = 0; j < ary2.length; j++) {
            if (ary1[i] === ary2[j]) {
                temp.push(ary1[i]);
            }
        }
    }
    if (str1 === temp.join("")) {
        return true
    } else {
        return false
    }
}
// console.log(letterMatch("ovler", "love"));


// [8] //
//  Write a function that prints the numbers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz ", i);
        } else {
            if (i % 3 === 0)
                console.log("Fizz ", i);
            else {
                if (i % 5 === 0)
                    console.log("Buzz ", i);
            }
        }
    }
}

// fizzBuzz()

// [9] Write a function that takes an array of objects and a key, and ...
// returns a new array sorted based on the values of that key in ascending order.


// [10] Count Occurrences of Words in an Array
function countWords(arr) {
    let modifyAry = arr.filter((val, ind) => arr.indexOf(val) === ind);
    let fruits = [];
    let obj = {}
    for (let i = 0; i < modifyAry.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (modifyAry[i] === arr[j + i]) {
                fruits.push(modifyAry[i]);
            }
        }
        obj[`${modifyAry[i]}`] = fruits.length;
        fruits = [];
    }
    return obj
}
// console.log(countWords(["apple", "banana", "apple", "orange", "banana", "banana"])); // { apple: 2, banana: 3, orange: 1 }


// [11] in object, find common properties who's key and value are same

let obj1 = { a: 1, b: 2, c: 3, d: 10, e: 12 }
let obj2 = { a: 2, e: 12, f: 6, d: 10 }

let key1 = Object.keys(obj1)
let key2 = Object.keys(obj2)
let keys = []

for (let i = 0; i < key1.length; i++) {
    for (let j = 0; j < key2.length; j++) {
        if (key1[i] === key2[j])
            keys.push(key1[i]);
    }
}
// console.log(keys);

let res = {}
for (let i = 0; i < keys.length; i++) {
    if (obj1[`${keys[i]}`] === obj2[`${keys[i]}`]) {
        res[`${keys[i]}`] = obj1[`${keys[i]}`]
    }
}

// console.log(res);


// [12] remove duplicates in given array

const removeDuplicate = (ary) => {
    let isDuplicate = false;
    let res = [];
    res.push(ary[0]);
    for (let i = 0; i < ary.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if (ary[i] === res[j])
                isDuplicate = true;
        }
        if (!isDuplicate)
            res.push(ary[i]);

        isDuplicate = false;
    }
    console.log(res);
}
// removeDuplicate([1, 3, 5, 3, 8, 5])


// [13] write a function to check if two given strings are anagrams of each other
// example :- a = 'listen'; b = 'silent'

const isAnagrams = (str1, str2) => {
    let ary1 = str1.toLowerCase().split("").sort();
    let ary2 = str2.toLowerCase().split("").sort();
    for (let i = 0; i < str1.length; i++) {
        if (ary1[i] !== ary2[i])
            return false;
    }
    return true;
}
console.log(isAnagrams("listen","silent"));


// [14] how many vowels in given string 

const str = "Hey JS! You R AMAZING";
const vowels = ['a', 'e', 'i', 'o', 'u'];

const countVolwels = (data) => {
    let count = 0;
    data.toLowerCase().split("").forEach((ch) => {

        // if (vowels.includes(ch))
        //     count++;

        vowels.includes(ch) && count++;
    })
    return count;
}
// console.log(countVolwels(str));
