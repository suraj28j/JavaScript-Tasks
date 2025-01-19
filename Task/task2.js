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
    let pattern = /\b\w/g;
    return str.replace(pattern, l => l.toUpperCase());
}
console.log(toTitleCase("my name is suraj"));



