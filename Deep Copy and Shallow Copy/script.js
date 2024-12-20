// let user1 = "Suraj";
// let user2 = user1;

// console.log(user1); // Suraj
// console.log(user2); // Suraj

// user2 = "Kumar";
// console.log(user2); // Kumar
// console.log(user1); // Suraj


let employee1 = {
    name:"Lokesh",
    age:30
}

// let employee2 = employee1; // [same memory location]
// employee2.name = "Bhumi";
// console.log(employee2); // Bhumi
// console.log(employee1); // Bhumi


// [ Shallow Copy ]

let employee2 = Object.assign({},employee1);
employee2.name = "Bhumi";

// console.log(employee2); // Bhumi
// console.log(employee1); // Lokesh


let batter1 = {
    name:"Rohit",
    age:38,
    career:{
        test:66,
        odi:265,
        t20:159
    }
}

// let batter2 = Object.assign({},batter1);
// batter2.name = "Virat";
// batter2.career.test = 121; // batter1.career.test wil also become 121;

//console.log(batter1); 
//console.log(batter2);

// [ Deep Copy ]

let batter2 = JSON.stringify(batter1);
batter2 = JSON.parse(batter2);
// console.log(batter2);

batter2.name = "Virat";
batter2.career.test = 121;

console.log(batter1);
console.log(batter2);









