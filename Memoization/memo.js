/*

[ Memoization in JavaScript ]
Memoization is an optimization technique that can be used to reduce time-consuming by saving previous input to something called cache 
and returning tha result from it

*/

let cache = {}
function calculation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log("result from function ", sum);
    return sum;
}


function memoize() {
    let input = document.querySelector('input').value
    let key = input;
    if (!cache[key]) {
        let result = calculation(input)
        cache = { ...cache, [key]: result }
        console.log("store in cache :",cache);
        return result;
    } else {
        console.log("result from cache : ", cache[key]);
        return cache[key]
    }
}
