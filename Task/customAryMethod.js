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

Array.prototype.customFilter = function(callback,context){
    if (typeof callback !== 'function')
        throw `${callback} is not a function`

    let result = []
    let i = 0
    while (i < this.length) {
        if (this.hasOwnProperty) {
           if(callback.call(context, this[i], i, this))
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