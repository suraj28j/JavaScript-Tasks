// [1] Write a program to check given year is leap year or not without using mudulus (%) operator.
// Example (1): 
// Input: 2024
// Output: It is a Leap Year  
// Example (2): 
// Input: 2023
// Output: It is not a Leap Year  

const isLeapYear = (year) => {
    if (Number.isInteger(year / 4))
        return `${year} is a leap year`;
    else
        return `${year} is not a leap year`;
}
// console.log(isLeapYear(2024));


// ------------------------------------------------------------------------------------------------- //

// [2] How can you determine whether a number is even or odd without using the modulus operator (%)
// Example (1): 
// Input: 3
// Output: This is Odd Number
// Example (2): 
// Input: 10
// Output: This is Even Number

const checkEvenOdd = (num) => {
    if (num & 1)
        return "This is Odd Number"
    else
        return "This is Even Number"
}
// console.log(checkEvenOdd(100));


// ------------------------------------------------------------------------------------------------- //

// [3] Write a program to print numbers from 1 to 100 without using loops 
// Example: 
// Input: NA
// Output: 1,2,3,4,5,6...,100

// const printNumbers = (startNum, lastNum) => {
//     if (startNum < lastNum) {
//         console.log(startNum);
//         startNum++;
//         printNumbers(startNum, lastNum);
//     } else {
//         console.log(lastNum);
//     }
// }
// printNumbers(1,100);

let startNum = 1;
const printNumbers = () => {
    if (startNum < 100)
        return `${startNum++}, ${printNumbers()}`
    else
        return 100;
}
// console.log(printNumbers());


// ------------------------------------------------------------------------------------------------- //

// [4] How to print "Hello World" without using print statment;
// Example:
// Input: "Hello World!"
// Output: Hello World


// ------------------------------------------------------------------------------------------------- //

// [5] Prime Number Program
// Example (1):
// Input: 5
// Output: It is a prime number
// Example (2):
// Input: 4
// Output: It is not a prime number

const isPrimeNumber = (num) => {
    for (let i = parseInt(num / 2); i > 1; i--) {
        if (num % i === 0)
            return `${num} is not a prime number`
    }
    return `${num} is a prime number`
}
// console.log(isPrimeNumber(15));


// ------------------------------------------------------------------------------------------------- //

// [6] Factorial number program
// Example (1): 
// Input: 5
// Output: 120
// Example (2): 
// Input: 4
// Output: 24

const factorialNumber = (num) => {
    if (num > 1)
        return num * factorialNumber(num - 1)
    else
        return 1
}
// console.log(factorialNumber(5));


// ------------------------------------------------------------------------------------------------- //

// [7] add two numbers without using '+' operator
// Example (1):
// Input: 2,5
// Output: 7
// Example (2):
// Input: 10,15
// Output: 25

const addNumbers = (num1, num2) => {
    while (num1 > 0) {
        num2++;
        num1--;
    }
    return num2
}
// console.log(addNumbers(10,15));


// ------------------------------------------------------------------------------------------------- //

// [8]  Write a program that finds the length of string without using the length function
// Example (1): 
// Input: "Program"
// Output: 7
// Example (2): 
// Input: "Number"
// Output: 6

const checkStringLength = (str) => {
    let ary = str.split("")

    // Method 1
    // return ary.push()

    // Method 2
    let i;
    for (i in ary);
    return Number(i) + 1;
}
// console.log(checkStringLength("Number"));


// ------------------------------------------------------------------------------------------------- //

// [9] Find the second largest number in a list without sorting
// Example (1):
// Input: 10, 15, 20, 5, 8
// Output: 15
// Example (2):
// Input: 2, 5, 18, 6, 13
// Output: 13

const secondLargestNum = (nums) => {

    function findMaxNum(ary) {
        let maxNum = ary[0];
        for (let i = 1; i < ary.length - 1; i++) {
            if (maxNum < ary[i]) {
                maxNum = ary[i]
            }
        }
        return maxNum;
    }

    let newAry = nums.filter((num) => num !== findMaxNum(nums))
    return findMaxNum(newAry)
}
// console.log(secondLargestNum([10, 15, 20, 5, 8]));


// ------------------------------------------------------------------------------------------------- //

// [10] How to rerverse a string without using built-in reversal function
// Example (1):
// Input: "string"
// Output: "gnirts"
// Example (2):
// Input: "name"
// Output: "eman"

const reverseStr = (str) => {
    let ary = str.split("")
    let revAry = [];
    for (let i = 0; i < ary.length - 1; i++) {
        revAry[ary.length - 1 - i] = ary[i];
    }
    return revAry.join("")
}
// console.log(reverseStr("string"));


// ------------------------------------------------------------------------------------------------- //

// [11] How would you generate numbers in program without utilizing the random module?
// Example (1):
// Input: NA
// Output: 10
// Example (2):
// Input: NA
// Output: 60


// ------------------------------------------------------------------------------------------------- //

// [12] Determine if a string is palindrome without using build-in methods or slicing
// Example (1):
// Input: "madam"
// Output: "the given string is palindrome"
// Example (2):
// Input: "number"
// Output: "the given string is not a palindrome"

// const isPalindrome = (str) => {
//     let strCpy = str.split("");
//     let revStr = [];
//     for(let i=0;i<strCpy.length;i++){
//         revStr[strCpy.length-1-i] = strCpy[i]
//     }
//     if(strCpy.join("")===revStr.join(""))
//         return `the given string is palindrome`
//     else
//         return `the given string is not a palindrome`
// }

// 2nd method
const isPalindrome = (str) => {
    if (str === str.split("").reverse().join(""))
        return `the given string is palindrome`
    else
        return `the given string is not a palindrome`
}
// console.log(isPalindrome("number"));


// ------------------------------------------------------------------------------------------------- //

// [13] Write a program that print numbers from 1 to n:
/*
For multiples of 3, print "Fizz" instead of the number
For multiples of 5, print "Buzz"
For number that are multiples of both 3 and 5, print "FizzBuzz"
Don't use Modulus operator or conditional statements
*/
// Example (1):
// Input: 9
// Output: "Fizz"
// Example (2):
// Input: 15
// Output: "FizzBuzz"


// ------------------------------------------------------------------------------------------------- //

// [14] Divide two integers without using multiplication, division and mod operator and any built-in methods
// Example (1):
// Input: 12, 3
// Output: 4
// Example (2):
// Input: 8, 4
// Output: 2

const divideNum = (num, div) => {
    let i = 0;
    while (num > div) {
        num = num - div;
        i++;
    }
    return i + 1;
}
// console.log(divideNum(8,4));


// ------------------------------------------------------------------------------------------------- //

// [15] Write a program to print 1 to n number of * like pattern
/*
                *
               **
              ***
             ****
            *****
           ******
          *******
*/


// ------------------------------------------------------------------------------------------------- //

// [16] Perform addition and subtractions of two numbers without using arithmetic
// Example (1):
// Input: 12, 5
// Output: addition: 17, subtraction: 7
// Example (2):
// Input: 5, 2
// Output: addition: 7, subtraction: 3

const addAndSub = (num1,num2) => {
    let n1 = num1;
    let n2 = num2;
    while(n2>0){
        n1++;
        n2--;
    }
    while(num2>0){
        num1--;
        num2--
    }
    return `addition: ${n1}, subtraction: ${num1}`
}
console.log(addAndSub(12,5));


// ------------------------------------------------------------------------------------------------- //

// [17] Fibonacci series

const fibonacciSeries = (num) => {
    if (num === 1)
        return 0;
    if (num === 2)
        return 1;
    return fibonacciSeries(num - 1) + fibonacciSeries(num - 2)
}
// console.log(fibonacciSeries(5));


// ------------------------------------------------------------------------------------------------- //

// [18] Fibonacci series without recursion

const fibonacci = (range) => {
    if (range === 0)
        return []
    if (range === 1)
        return [0]
    let sequence = [0, 1];
    while (sequence.length < range) {
        let nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2]
        sequence.push(nextNum);
    }
    return sequence;
}
// console.log(fibonacci(5));


// ------------------------------------------------------------------------------------------------- //

// [19] The given number is Armstrong number or not
// Example (1):
// Input: 153
// Output: "the given number is an armstrong number"
// Example (2):
// Input: 12
// Output: "the given number is not an armstrong number"

const isArmstrong = (num) => {
    let digits = num.toString().split("").length
    let ary = [];
    let temp1 = num;
    let temp2;
    while (num > 0) {
        ary.push(Math.pow(num % 10, digits))
        num = parseInt(num / 10);
    }
    temp2 = ary.reduce((acc, curr) => acc + curr, 0)
    if (temp1 === temp2)
        return `${temp1} is armstrong number`
    else
        return `${temp1} is not armstrong number`
}
// console.log(isArmstrong(153));


// ------------------------------------------------------------------------------------------------- //

// [20] Given number is Perfect or not (perfect number means a positive integer that is equal to the sum of its positive divisors )
// Example (1):
// Input: 6
// Output: the given number is a perfect number
// Example (2):
// Input: 10
// Output: the given number is not a perfect number

const isPerfectNumber = (num) => {
    let temp = [];
    for (let i = 1; i <= parseInt(num / 2); i++) {
        if (num % i === 0)
            temp.push(i);
    }
    let arySum = temp.reduce((acc, curr) => acc + curr, 0);
    if (num === arySum)
        return `${num} is a perfect number`
    else
        return `${num} is not a perfect number`
}
// console.log(isPerfectNumber(12));


// ------------------------------------------------------------------------------------------------- //

// [21] Swapping of 2 numbers without using trird number
// Example (1):
// Input: num1 = 5, num2 = 10
// Output: num1 = 10, num2 = 5
// Example (2):
// Input: num1 = 2, num2 = 13
// Output: num1 = 13, num2 = 2

const swapNumber = (num1, num2) => {
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return `num1 = ${num1} num2 = ${num2}`
}
// console.log(swapNumber(5,10));


// ------------------------------------------------------------------------------------------------- //

// [22] Harshad Number Program (An integer number is based 10 which is divisible by the sum of its digits is said to be a Harshad Number)
// Example (1):
// Input: 18
// Output: the given number is a harshad number
// Example (2):
// Input: 13
// Output: the given number is not a harshad number


// ------------------------------------------------------------------------------------------------- //

// [23] Write a program that take a string as input and return it's middle term(s);
// Example (1):
// Input: Python
// Output: th
// Example (2):
// Input: Suraj
// Output: r

const middleString = (str) => {
    const ary = str.split("")
    if (ary.length % 2 === 0)
        return `${ary[ary.length / 2 - 1]}${ary[ary.length / 2]}`
    else
        return ary[(ary.length + 1) / 2 - 1]
}
// console.log(middleString("Python"));


// ------------------------------------------------------------------------------------------------- //

// [24] Write a program to convert decimal to binary
// Example (1):
// Input: 10
// Output: 1010
// Example (2):
// Input: 55
// Output: 110111

const decimalToBinary = (num) => {
    let res = [];
    while (num > 0) {
        res.unshift(num % 2);
        num = parseInt(num / 2);
    }
    return res.join("")
}
// console.log(decimalToBinary(10));


// ------------------------------------------------------------------------------------------------- //

// [25] Write a program to check if a string has a number or not without using Build-in string method 
// Example (1):
// Input: "num2er"
// Output: "The given string contain a number"
// Example (2):
// Input: "string"
// Output: "The given string does not contain a number"

const isContainNumber = (str) => {
    let ary = str.split("")
    for (let i in ary) {
        if (!(isNaN(ary[i]++)))
            return "The given string contain a number"
    }
    return "The given string does not contain a number"
}
// console.log(isContainNumber("num2er"));
