let students = [
   { name: "Rahul Sharma", city: "Delhi", marks: 75 },
   { name: "Aman Kumar", city: "Jaipur", marks: 35 },
   { name: "Priya Singh", city: "Mumbai", marks: 90 },
   { name: "Neha Verma", city: "Delhi", marks: 42 },
   { name: "Rohit Mehta", city: "Pune", marks: 58 }
];


for (let i = 0; i < students.length; i++) {

   console.log(students[i].name.toUpperCase());

}

for (let i = 0; i < students.length; i++) {

   console.log(students[i].name.toLowerCase());

}

for (let i = 0; i < students.length; i++) {

   console.log(students[i].name, ":", students[i].name.length);

}

for (let i = 0; i < students.length; i++) {

   console.log("first name :", students[i].name.split(" ").shift());

}

for (let i = 0; i < students.length; i++) {

   console.log("first name :", students[i].name.split(" ").shift());

}

for (let i = 0; i < students.length; i++) {

   console.log(" contains the letter a :", students[i].name, students[i].name.includes("a"));

}


for (let i = 0; i < students.length; i++) {

   console.log(" city starts with D :", students[i].city, ":", students[i].city.startsWith("D"));

}

for (let i = 0; i < students.length; i++) {

   console.log(" city starts with i :", students[i].city, ":", students[i].city.endsWith("i"));

}

for (let i = 0; i < students.length; i++) {

   console.log("first 4 characters:", students[i].city, ":", students[i].city.slice(0, 5));

}



{
   for (let i = 0; i < students.length; i++) {

      if (students[i].marks >= 80) {

         console.log(students[i].name, "is from ", students[i].city, "Excellent", students[i].marks);

      }
      else if (students[i].marks < 80 && students[i].marks >= 60) {

         console.log(students[i].name, "is from ", students[i].city, "Good", students[i].marks);

      }
      else if (students[i].marks < 60 && students[i].marks >= 40) {

         console.log(students[i].name, "is from ", students[i].city, "Average", students[i].marks);

      }


      else {

         console.log(students[i].name, "is from ", students[i].city, "Fail", students[i].marks);

      }

   }

}



let skills = "HTML,CSS,JavaScript,React";

console.log(skills.split(","));

let username = "   rahul123   ";

console.log(username.trim().toUpperCase());


let sentence = "JavaScript is easy. JavaScript is powerful.";

console.log(sentence.replaceAll("JavaScript", "JS"));


let code = "ABC";

console.log(code.repeat(3));


let id = "45";

console.log(id.padStart(6, "0"));

let ids = "25";

console.log(ids.padEnd(5, "0"));


let text = "I am learning JavaScript";

console.log(text.indexOf("JavaScript"));


let texts = "JavaScript is an amazing language";

console.log(texts.lastIndexOf("a"));


let textt = "I am learning JavaScript";

console.log(textt.includes("JavaScript"));



let student = [
   { Student: "RAHUL SHARMA", City: "delhi", Marks: 95 , Result: "Excellent" },
   { Student: "Rahul Sharma", City: "Delhi",  Marks: 75 , Result: "GOOD" },
   { Student: "Aman Kumar", City: "Jaipur",  Marks: 35 , Result: "Fail"},
   { Student: "Priya Singh", City: "Mumbai",  Marks: 90 , Result: "Excellent"},
   { Student: "Neha Verma", City: "Delhi",  Marks: 42 , Result: "Average"},
   { Student: "Rohit Mehta", City: "Pune",  Marks: 58 , Result: "Average"}
];



for (let i = 0; i < student.length; i++) {

   console.log(" ......///////////////////........."); 

   if (student[i].Marks >= 90) {
       
      console.log("First Name: ", student[i].Student.split(" ").shift());
      console.log("Marks : ", student[i].Marks);
      console.log("Result : ", student[i].Result);
      console.log("City starts with D : ", student[i].City.toUpperCase().startsWith("D"));
      console.log("Name contains a :", student[i].Student.toLowerCase().includes("a"));



   }

    else if (student[i].Marks < 90  &&  student[i].Marks >= 60 ) {

      console.log("First Name: ", student[i].Student.split(" ").shift());
      console.log("Marks : ", student[i].Marks);
      console.log("Result : ", student[i].Result);
      console.log("City starts with D : ", student[i].City.toUpperCase().startsWith("D"));
      console.log("Name contains a :", student[i].Student.toLowerCase().includes("a"));



   }

    else if (student[i].Marks < 60  && student[i].Marks >= 40 ) {

      console.log("First Name: ", student[i].Student.split(" ").shift());
      console.log("Marks : ", student[i].Marks);
      console.log("Result : ", student[i].Result);
      console.log("City starts with D : ", student[i].City.toUpperCase().startsWith("D"));
      console.log("Name contains a :", student[i].Student.toLowerCase().includes("a"));



   }

    else  {

      console.log("First Name: ", student[i].Student.split(" ").shift());
      console.log("Marks : ", student[i].Marks);
      console.log("Result : ", student[i].Result);
      console.log("City starts with D : ", student[i].City.toUpperCase().startsWith("D"));
      console.log("Name contains a :", student[i].Student.toLowerCase().includes("a"));



   }

}

