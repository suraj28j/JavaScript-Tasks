// [1] //
// const data = 100;
// console.log(data.toString());
// console.log((100).toString());
// console.log(100..toString());


// [2] //
// let num = 20;
// console.log(num+"20");
// console.log(++num);

// [3] //
// function fun1(ind,val){}
// function fun2(ind,val,sum){}
// function fun3(ind,val,sum=1){}
// console.log(fun1.length);// 2
// console.log(fun2.length);// 3
// console.log(fun3.length);// 2


// [4] //
// for (var i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), 1000)
// }

// for (let i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), 1000)
// }




// [5] //
//console.log(parseInt("108")); // 108
//console.log(parseInt("108*200")); // 108
//console.log(parseInt("108Suraj")); // 108

// [6] //
//const user = "Suraj";
//age = 35; // [Note :- undecleare variables save in window scope]
//console.log(delete user); // false
//console.log(delete age); // true

// let obj = {
//     name:"Suraj",
//     age:35
// }
//console.log(delete obj.age); // true
//console.log(obj); // { name: 'Suraj' }


// [7] //
// let user = {name:"Suraj"};
// let userList = [user]
// user = null;
// console.log(userList); // [ { name: 'Suraj' } ]


// [8] //
// (function(){
//     let a = b = 4;
// })();
// console.log(`a defined? ${(typeof a!== 'undefined')}`); // false
// console.log(`b defined? ${(typeof b!== 'undefined')}`); // true

// [9] //
// let a = {};
// let b = {key:'b'};
// let c = {key:'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a); // { '[object Object]': 456 }
// console.log(a[c]); // 456

// [10] //
// let ary = [1,[2, 3, [4, 5, [6]]]]
// console.log(ary.flat(Infinity));
//console.log(ary.toString().split(",")); // [ '1', '2', '3', '4', '5', '6' ]

// function flat(ary, level) {
//     const result = [];

//     ary.forEach((val) => {
//         if (Array.isArray(val) && level > 0) {
//             result.push(...flat(val, level - 1));
//         } else {
//             result.push(val);
//         }
//     });
//     return result;
// }

// let res = flat(ary,3);
// console.log(res);


// [11]
// const income = {
//     skills: 888,
//     monthly() {
//         return this.skills * 30;
//     },
//     yearly: () => 356 * this.skills
// }
// console.log(income.monthly()); // 26640
// console.log(income.yearly()); // NaN


// [12] //
// console.log(+true); // 1
// console.log(!"JavaScript"); // false

// [13] //
// let a = 108;
// let b = new Number(108);
// let c = 108;

// console.log(a==b); // true 
// console.log(a===b); // false
// console.log(b===c); // false

// [14] //
// function showModel(){
//     console.log(showModel.timeout);
// }

// showModel(); // undefined
// showModel.timeout = 100;

// showModel.timeout = 200;
// showModel(); // 200


// [15] //

// function human(fname,lname){
//     this.firstName = fname;
//     this.lastName = lname;
// }

// let MrX = new human("Mr.","X");
// let Rock = human("The.","Rock");

// console.log(MrX);
// console.log(Rock);

// [16] //
// three phase of event propagation

// Capturing > Target > Bubbling

// [17] //

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10,"10")); // 1010


// [18] //

// function getSummary(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const fName = "Kumar";
// const age = 25;

// getSummary`${fName} age is ${age}`;
/* ( Output )
[ '', ' age is ', '' ]
Kumar
25
*/


// [19] //
// function checkAge(data) {
//     if (data === { age: 18 }) {
//         console.log("You are an adult");
//     } else {
//         if (data == { age: 18 })
//             console.log("You are still an adult");
//         else
//             console.log(`Hmm.. No Age`);
//     }
// }
// checkAge({age:18}); // Hmm.. No Age

// [20] //
// function getType(...args){
//     console.log(typeof args); // Object
//     console.log(Array.isArray(args)); // true

// }
// getType(108);

// [21] //
// function getAge(){
//     "use strict";
//     salary = 8212;
//     console.log(salary);
// }
// getAge();

// [22] //
// String.prototype.youAreAmazing = () => {
//     return "You are amazing my friend";
// }
// let who = "viewer";
// console.log(who.youAreAmazing()); // You are amazing my friend


// [23]
// const lang = {name:"React"}
// function getLib(ver) {
//     return `${this.name} version ${ver}`
// }
// console.log(getLib.call(lang,18));
// console.log(getLib.bind(lang,18));

// [24] //
// function sayHi(){
//     return (()=>0)();
// }
// console.log(sayHi()); // 0
// console.log(typeof sayHi()); // number

// [25] //
// console.log(typeof typeof 1); // string 
// right to left


// [26] // 
// let numbers = [1,2,3];
// numbers[10] = 11;
// console.log(numbers);


// [27] //
// (()=>{
//     let x,y;
//     try{
//         throw new Error();
//     }catch(x){
//         (x=1),(y=2);
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();
/*
    1
    undefined
    2
*/


// [28] //
// const data = [..."Apple"];
// console.log(data);


// [29] //
// console.log(20+10+"30"); // 3030
// associative of + opretor is left to right //


// [30] //
// function getMessage(){
//     throw 'Hello World'
// }
// function sayHello(){
//     try{
//         let data = getMessage();
//         console.log('Worked!',data);
//     }catch(e){
//         console.log('an error',e);
//     }
// }
// sayHello(); // an error Hello World


// [31] // 
// console.log(parseInt('10+2'));
// console.log(parseInt('7FM'));


// [32] //
// let Nums = [1,2,3].forEach(num=>{
//     if(num>0)
//         return;
//     return num*2;
// });
// console.log(Nums);

// [33] //

// function getinfo(member,year){
//     member.name = "Frontend Developer";
//     year = "2025";
// }

// const person = {name:"Suraj"};
// const birthYear = "1989";
// getinfo(person,birthYear);
// console.log(person, birthYear);


// [34] //
// const box = { x: 10, y: 20 }
// Object.freeze(box);
// const shape = box;
// shape.x = 100;
// shape.y = 200;
// console.log(shape);
// console.log(box);


// [35] //
// function addItem(item,list){
//     return list.push(item);
// }
// let result = addItem('🍕',['🧺'])
// console.log(result); // 2


// [36] //
// const name = "Suraj";
// age = 35;
// console.log(delete name); // false
// console.log(delete age); // true

// [37] //
// async function getData() {
//     return await Promise.resolve('⚽')
// }
// const data = getData();
// // console.log(data); // Promise { <pending> }
// data.then(res=>console.log(res))


// [38] //
// const {fName:feDEV} = {fName:"Suraj"};
// console.log(fName); // ReferenceError: fName is not defined
// console.log(feDEV); // "Suraj"


// [39] //
// function sum(n1,n2=n1){
//     console.log(n1+n2);
// }
// sum(10);


// [40] //
//let newList = [2,3].push(4);
//console.log(newList.push(5)); // TypeError: newList.push is not a function


// [41] //
// function getItems(item,...args,moreItem){
//     return [...item,...args,moreItem]
// }
// getItems(["berry","apple"],"pear","kiwi"); // SyntaxError: Rest parameter must be last formal parameter


// [42] // 
// console.log([] && true); // true  
// console.log(true && []); // []  


// [43] // 
// console.log(`${(x=>x)("I Love")} JS`); // I Love JS

// [44] //
// let randomValue = {name:"Suraj"};
// randomValue = 35;

// if(!typeof randomValue === "string"){
//     console.log("It's not a string");
// }else{
//     console.log("Yes It's a string");
// }


// [45] //
// const user = {
//     email:"abc@gmail.com",
//     updateEmail:email=>{
//         this.email = email;
//     }
// }
// user.updateEmail("sk@gmail.com");
// console.log(user.email); // abc@gmail.com


// [46] //
// const fruit = ["🍌","🍊","🍎"];
// fruit.slice(0,1);
// fruit.splice(0,1);
// fruit.unshift("🍇"); // [ '🍇', '🍊', '🍎' ]
// console.log(fruit);


// [47] //
// let count = 0;
// let num = [0,1,2,3];
// num.forEach((num)=>{
//     if(num){
//         count++;
//     }
// })
// console.log(count); //3


// [48] //
// const person = {
//     name:"Suraj",
//     address:{
//         city:"Bangalore"
//     }
// }
// Object.freeze(person); // Object.freeze() method freeze to object only one level (shell of freeze)
// person.name = "Kumar";
// person.address.city = "Hyderabad";
// console.log(person); // 


// [49] //
// const person = {
//     name:"Suraj",
// }
// Object.seal(person); 
// person.name = "Kumar";
// person.skill = "JS";
// delete person.name
// console.log(person); // 


// [50] //
// Array.prototype.city = "Bangalore";
// let ary = ["Suraj",35];

// for(let i in ary){
//     if(ary.hasOwnProperty(i)){
//         // console.log(ary[i]);
//     }
//     console.log(ary[i]);
// }
// ary.forEach((item)=>{
//     console.log(item);
// })

// [51] //
// let obj = {};
// Object.defineProperty(obj, 'a', {
//     value: "char",
//     enumerable:true
// })
// console.log(obj.a);
// console.log(Object.keys(obj));


// [52] //
// const handler = {
//     set:(target,property,value)=>console.log('added a new property',target,property,value),
//     get:(target,property)=>console.log('accessed a new property',target,property)
// }
// let person = new Proxy({},handler);
// person.name = "Frontend Developer"
// person.name;


// [53] //
// let pets = ["🐮","🦁"];
// ({item:pets[2]}={item:"🐷"})
// console.log(pets);


// [54] //
// const myFun = ({x,y,z}) => {
//     // const{x,y,z} = 1 //
//     console.log(x,y,z);
// }
// myFun(1,2,3)


// [55] //
// const add = x => y => z => {
//     console.log(x, y, z);
//     return x + y + z;
// }
// let sum = add(2)(3)(4);
// console.log(sum);


// [56] //
// const groceries = ["🍎", "🍇"];
// if (groceries.indexOf("🍎")) {
//     console.log("We have 🍎");
// } else {
//     console.log("we have not 🍎");
// }


// [57] //
// const ary = [{key:"J"},"2","X"];
// delete ary[0];
// console.log(ary.length,ary); // 3 [ <1 empty item>, '2', 'X' ]


// [58] //
// var magic = 900;
// function magic(){
//     console.log("magic");
// }
// console.log(magic); // 900


// [59] //
// console.log(1);

// new Promise(function(res){
//     console.log(2);
// })
// console.log(3);


// [60] //
// const arr = [,,,];
// console.log(arr.length); // 3
// console.log(arr); // [ <3 empty items> ]


// [61] //
// let x = 10;
// let y = "A";
// [x,y] = [y,x];
// console.log({x,y});


// [62] //
// var a = [typeof a,typeof b];
// console.log(a);


// [63] //
const [x, ...y] = [1,2,3,4];
console.log({x,y});

