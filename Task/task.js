// [1] Palindrome Number //
// Example :- 121,3443,16461

//  Method : (1) //
function isPalindromeNumber(num) {
    let numCpy = num;
    let revNum = 0;
    while (numCpy > 0) {
        revNum = revNum * 10 + parseInt(numCpy % 10);
        numCpy = parseInt(numCpy / 10);
    }
    if (num === revNum) {
        console.log("It's a palindrome number");
    } else {
        console.log("It's not a palindrome number");
    }
}
// isPalindromeNumber(16461)

//  Method : (2) //
function isPalindromeNumber(num) {
    if (num === Number(String(num).split("").reverse().join(""))) {
        console.log("It's a palindrome number");
    } else {
        console.log("It's not a palindrome number");
    }
}
// isPalindromeNumber(121)

// ------------------------------------------------------------------------------------------- //

// [2] Palindrome Number //
function isPalindromeWord(str) {
    if (str === String(str.split("").reverse().join(""))) {
        console.log("It's a palindrome word");
    } else {
        console.log("It's not a palindrome word");
    }
}
// isPalindromeWord("madam")

// ------------------------------------------------------------------------------------------- //

// [3] Prime Number //
// Example :- 2,3,5,7,11,13,17,19,23 .....

// Method : (1) //
function isPrimeNumber(num) {
    let isPrime = true;
    let val = parseInt(num / 2);
    while (val > 1) {
        if (num % val === 0) {
            isPrime = false;
            break;
        }
        val--;
    }
    if (isPrime) {
        console.log("It is a Prime Number");
    } else {
        console.log("It is not a Prime Number");
    }
}
// isPrimeNumber(17);

// Method : (2) //
function isPrime(num) {
    if (num <= 1)
        return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false
    }
    return true;
}
// console.log(isPrime(17));

// ------------------------------------------------------------------------------------------- //

//  [4] Fibonacci Sequence //
// Example :- [0,1,1,2,3,5,8....]
function fibonacci(term) {
    if (term <= 0)
        return [];
    if (term === 1)
        return [0];
    let sequence = [0, 1];

    // for (let i = 0; i < term-2; i++) {
    //     let temp = res[i] + res[i + 1];
    //     sequence.push(temp);
    // }

    while(sequence.length<term){
        let nextNum = sequence[sequence.length-1]+sequence[sequence.length-2];
        sequence.push(nextNum);
    }
    
    return sequence;
}
// console.log(fibonacci(5));

// ------------------------------------------------------------------------------------------- //

// [5] Factorial 
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
console.log(factorial(5));

// ------------------------------------------------------------------------------------------- //