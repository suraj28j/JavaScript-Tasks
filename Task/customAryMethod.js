// [1] customForEach //


// Array.prototype.customForEach = function(callback){
//     for(let i=0;i<this.length;i++)
//         callback(this[i],i,this);
// }

Array.prototype.customForEach = function (callback, context) {

    if (typeof callback !== 'function')
        throw `${callback} is not a function`

    let i = 0
    while (i < this.length) {
        if (this.hasOwnProperty) {
            callback.call(context, this[i], i, this);
        }
        i++;
    }
}

// let nums = [9, 4, 13, "7", 10]

// nums.customForEach((val, ind, ary) => {
//     console.log(val);
// })

// ---------------------------------------------------------------------- //

// customFilter //

Array.prototype.customFilter = function (callback, context) {
    if (typeof callback !== 'function')
        throw `${callback} is not a function`

    let result = []
    let i = 0
    while (i < this.length) {
        if (this.hasOwnProperty) {
            if (callback.call(context, this[i], i, this))
                result.push(this[i])
        }
        i++;
    }
    return result;
}


// let age = [19,17,16,20,15,23,28,15];
// let res  = age.customFilter((val,ind,ary)=>{
//     return val>17
// })
// console.log(res);


// ---------------------------------------------------------------------- //

// customReducer //
Array.prototype.customReducer = function (callback, intitalValue) {
    let sum = intitalValue || 0;

    if (typeof callback !== 'function')
        throw `${callback} is not a function`;

    for (let i = 0; i < this.length; i++) {
        sum = callback(sum, this[i])
    }
    return sum;
}

// let nums = [1, 2, 3, 4, 5]
// let res = nums.customReducer((acc, curr) => acc + curr, 0);
// console.log(res);


// ---------------------------------------------------------------------- //

// customMap //

Array.prototype.customMap = function(callback){
    if(typeof callback !=='function')
        throw `${callback} is not a function`
    
    let result = [];
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }   
    return result;
}

let nums = [2,4,6,8,9];
let res = nums.customMap((val,ind,ary)=>{
    return val+1;
})
console.log(res);
