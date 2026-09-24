
// Task 1 — let & const


let students = [
    {stutent_name :"mohan ",marks:90},
    {stutent_name :"shohan",marks:91},
    {stutent_name :"rohan",marks:45}
    ]

    students[2].marks=96;

    console.log(students);
    
    
    
// Task 2 — Arrow Functions

const add = (a,b)=>{
    return a+b;
}
console.log(add(87,87));



const sub = (a,b)=>{
    return a-b;
}
console.log(sub(87,87));



const multi = (a,b)=>{
    return a*b;
}
console.log(multi(87,87));


    

const divi = (a,b)=>{
    return a/b;
}
console.log(divi(87,87));


    
// Task 3 — Template Literals

    console.log(`name = ${students[2].stutent_name} , marks = ${students[2].marks}`);




 // Task 4 — Object Destructuring

 let {stutent_name , age} =students[0];
 console.log(stutent_name);
 
//   Task 5 — Array Destructuring

let[obj1,obj2] = students;
console.log(obj1,obj2);

// Task 6 — Spread Operator

let Array1 = [1,2,3,4];
let Array2 = [...Array1,5,6];
console.log(Array2);


// Task 7 — Object Spread

let new_person = {name:"ramu kaka"};
let update = {...new_person,age:54};
console.log(update);

// Task 8 — Rest Operator

let rest = (...res)=>{

    console.log(res);
    
}

rest(0,9,8,7,6,5);



// Task 9 — Default Parameters


function def(age=18){

    console.log("rahul",age);
    
}
def(45);
def();


// Task 10 — Modules

import {sq} from "./modules/math.js"

console.log(sq(2,3));



// Task 11 — Optional Chaining
let person = {
    name:'ram',
    age:78,
}
console.log(person.address?.city);


// Nullish Coalescing (??)
let user = {};

let username=user.name??"ram";
let city=user.name??"sikar";

console.log(username,city);




