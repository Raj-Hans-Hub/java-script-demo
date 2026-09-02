let marks = [45, 78, 32, 90, 65];

for (let i = 0; i < marks.length; i++) {

   console.log(marks[i]);

}

console.log("Print the first mark", marks[0]);
console.log("Print the last mark.", marks[marks.length - 1]);


for (let i = 0; i < marks.length; i++) {

   if (marks[i] >= 40) {
      console.log("Pass", marks[i]);


   }

   else {

      console.log("fail", marks[i]);

   }

}


console.log("total number of students :", marks.length);

console.log(marks);
marks[1] = 85;
console.log(marks);


console.log("Assignment 2 — Shopping Cart");


let cart = ["Shirt", "Jeans", "Shoes"];

console.log(" original array", cart);

cart.pop();
cart.shift();
cart.push("Watch");
cart.unshift("Cap");

console.log(" the final array", cart);
console.log("the array length :", cart.length);

if (cart.length > 3) {

   console.log("Large Cart");


}
else {

   console.log("Small Cart");
}


console.log("Assignment 3 — Student Object");

let student = {
   name: "Rahul",
   age: 21,
   course: "JavaScript"
};


console.log(" student name : ", student.name);
console.log(" student age : ", student["age"]);

student.age = 22;
student.city = "Sikar";
delete student.course;

console.log("city :", "city" in student);
console.log("age : ", student.hasOwnProperty("age"));
console.log(student);

for (let key in student) {
   console.log(student[key]);


}

console.log("Assignment 4 — Product Management");


let product = {
   name: "Laptop",
   price: 55000,
   stock: 5
};


console.log("product name :", product.name);
console.log("product price :", product.price);


if (product.stock > 0) {
   console.log("Product Available");

}

else {
   console.log("Out of Stock");

}

product.stock = 10;

product.brand = "oppo";


delete product.brand

console.log(product);
console.log(" total number of properties :", Object.keys(product).length);


console.log("Assignment 5 — Array + Objects ");

let students = [
   { name: "Rahul", marks: 75 },
   { name: "Aman", marks: 35 },
   { name: "Priya", marks: 90 },
   { name: "Neha", marks: 42 }
];



for (let i = 0; i < students.length; i++) {



   if (students[i].marks >= 40) {
      students[i].result = "Pass";

      console.log("name =", students[i].name, ", marks =", students[i].marks, "result =", students[i].result);

   }

   else {

      students[i].result = "Fail";

      console.log("name =", students[i].name, ", marks =", students[i].marks, "result =", students[i].result);

   }

}


console.log(" total number of students :", students.length);



console.log("Assignment 6 — Array Operations ");

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node.js", "Express.js", "MongoDB"];

frontend.push("React");
frontend.unshift("Tailwind CSS");
backend.pop();
backend.shift();
let mern = frontend.concat(backend);

console.log(mern);
console.log(mern.toString());
console.log("mern is array :", Array.isArray(mern));

if (mern.length > 5) {
   console.log("Full Stack Skills");

}

else {

   console.log("Learn More Skills");
}