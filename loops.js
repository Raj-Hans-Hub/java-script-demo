
var even = 0;
var odd = 0;
for (let i = 0; i <= 50; i++) {

    if (i % 2 == 0) {

        even += i;


    }

    else {

        odd += i;

    }

}

console.log("sum of even number  :", even);
console.log("sum of even number  :", odd);


var student = [96, 87, 67, 48, 35, 22];

for (let i = 0; i < student.length; i++) {

    if (student[i] >= 90) {

        console.log("A Grade ", student[i]);


    }

    else if (student[i] < 90 && student[i] >= 75) {

        console.log("B Grade ", student[i]);

    }

    else if (student[i] < 75 && student[i] >= 60) {

        console.log("C Grade ", student[i]);

    }

    else if (student[i] < 60 && student[i] >= 40) {

        console.log("D Grade ", student[i]);

    }

    else {

        console.log("Fail ", student[i]);

    }
}



var price = [500, 1200, 2500, 4000, 6000];

for (let i = 0; i < price.length; i++) {



    if (price[i] >= 5000) {

        console.log("Original Price ", price[i]);
        console.log("discont ", price[i] * 20 / 100);
        console.log("Final", price[i] - price[i] * 20 / 100);

    }


}




for (let i = 1; i <= 10; i++) {

    var alltab = 7 * i;

    if (alltab > 50) {
        console.log(`7x${i} = ${7 * i} Hight `);

    }

    else {

        console.log(`7x${i} = ${7 * i} Low `);

    }



}





for (let i = -5; i <= 5; i++) {

    if (i < 0) {
        console.log(i, "Negative");



    }

    else if (i == 0) {

        console.log(i, "Zero");
    }

    else {

        console.log(i, "Positive");


    }

}

for (let i = 1; i <= 20; i++) {

    if (i <= 10) {
        console.log(i, "Small");



    }



    else {

        console.log(i, "Big");


    }

}



for (let i = 1; i <= 30; i++) {

    if (i % 3 == 0) {
        console.log(i, "Yes");



    }



    else {

        console.log(i, "No");


    }

}




var marks = [76, 84, 56, 28, 67, 22];

for (let i = 0; i < marks.length; i++) {

    if (marks[i] >= 40) {

        console.log(marks[i], "pass");


    }
    else {

        console.log(marks[i], "Fail");

    }

}