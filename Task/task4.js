// [1]
// input = [2,7,11,4,-2]
// output = [20,15,11,18,24]

const elementSum = (nums) => {
    let ary = [];
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j)
                temp = temp + nums[j];
        }
        ary[i] = temp;
        temp = 0;
    }
    return ary;
}
// console.log(elementSum([2, 7, 11, 4, -2]));


// [2]
// let input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
// let input2 = { a: 2, e: 12, f: 6, d: 10 }
// output = { d: 10, e: 12 };

// function commmonElement(obj1, obj2) {
//     let res = {};

// for (let i in obj1) {
//     for (let j in obj2) {
//         if (i === j && obj1[i] === obj2[j]) {
//             res[i] = obj1[i]
//         }
//     }
// }

//     for(let key in obj1){
//         if(obj1[key]===obj2[key])
//             res[key] = obj1[key];
//     }
//     return res;
// }
// console.log(commmonElement(input1, input2));

// [3]
// let input1 = [1, 2, -2, 11, 7, 1]
// let input2 = [1, 4, 7, 2, 4, 7]

// const secondLarge = (nums) => {
//     nums = nums.filter((val, ind) => nums.indexOf(val) === ind);

//     nums.sort((a, b) => a - b);
//     return nums[nums.length - 2];
// }
// console.log(secondLarge(input2));

// [4] missing odd number
// let input = [5, 7, 9, 11, 15, 17];

// const missingOddNum = (nums) => {
//     let res;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] + 2 !== nums[i + 1]) {
//             res = nums[i] + 2;
//             break;
//         }
//     }
//     return res;
// }
// console.log(missingOddNum(input));

// [5] reverse the string word by word
// const str = "This is JavaScript Code";
// output = "sihT si tpircSavaJ edoC"

// const reverseStr = (str) => {
//     let ary = str.split(" ");
//     // for (let i = 0; i < ary.length; i++) {
//     //     ary[i] = ary[i].split("").reverse().join("")
//     // }
//     // return ary.join(" ");

//     let res = ary.map((val)=>val.split("").reverse().join(""))
//     return res.join(" ");

// }
// console.log(reverseStr(str));


// [6] find maximun character 

// let str = "This is JavaScript Code and you find max char";
// const maxChar = (str) => {
//     let ary1 = str.toLowerCase().split("");
//     let ary2 = ary1.filter((ch, ind) => ary1.indexOf(ch) === ind);
//     console.log(ary2);
    
//     let res = ["", 0]; // [ch,count]
//     let count = 0;
//     for (let i = 0; i < ary2.length; i++) {
//         for (let j = i; j < ary1.length; j++) {
//             if (ary2[i] === ary1[j]) {
//                 count++;
//             }
//         }
//         if (count > res[1]) {
//             console.log(i);
//             res[1] = count;
//             res[0] = ary2[i];
//         }
//         count = 0;
//     }
//     return res;
// }
// console.log(maxChar(str));


// [7]

// let str =  "This is a test sentence and this test is only a test";
// const countRepetedWord = (str,banword) => {
//     let ary = str.toLowerCase().split(" ");
//     let modifyAry = ary.filter((val,ind)=>ary.indexOf(val)===ind && val!== banword)
//     let res = {};
//     let i = 0;
//     while(i<modifyAry.length){
//         res = {...res,[`${modifyAry[i]}`]:ary.filter((word)=>modifyAry[i]===word ).length };
//         i++
//     }
//     console.log(res)
// }

// // countRepetedWord(str,"this")
// countRepetedWord(str,"is")

// [8]
// output numbers only
let ary = ['3',3,null,'o',8];
let res = ary.filter((num)=>{
    return typeof num === 'number';
})
// console.log(res); // [3,8];


// [9]
// what is output
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(a);
console.log(b);