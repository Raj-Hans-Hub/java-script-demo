
// for (let i = 1; i <= 5; i++) {

//     console.log("*".repeat(i));


// }






// console.log("2.....");
// for (let i = 5; i >= 1; i--) {

//     console.log("*".repeat(i));


// }




// console.log("3......");
// for (let i = 1; i <= 10; i++) {

//     if (i <= 5) {
//         console.log("*".repeat(i));
//     }
//     else {

//         console.log("*".repeat(10 - i));
//     }

// }






// console.log("4......");
// for (let i = 1; i <= 5; i++) {

//     console.log("1".repeat(i));


// }






// console.log("5.......");
// let num = ["1", "2", "3", "4", "5"];

// for (let i = 0; i < 5; i++) {

//     let nu = num[i];
//     console.log(nu.repeat(i + 1));


// }








// console.log("6........");
// let alfa = ["A", "B", "c", "D", "E"];

// for (let i = 0; i < 5; i++) {

//     let nu = alfa[i];
//     console.log(nu.repeat(i + 1));


// }






// console.log("7........");
// for (let i = 0; i < 5; i++) {


//     console.log("*".repeat(5));


// }







// console.log("8........");
// for (let i = 1; i < 10; i += 2) {


//     console.log("*".repeat(i));


// }








// console.log("9..........");
// for (let i = 5; i >= 1; i-= 2) {


//     console.log("*".repeat(i));


// }








// console.log("10........");
// for (let i = 1; i <= 100; i++) {

//     if (i <= 50) {
//         console.log("*".repeat(i));

//     }
//     else {

//         console.log("*".repeat(100 - i));
//     }

// }





console.log("8.......");

for (let i = 1; i <= 9; i += 2) {



    console.log(" ".repeat(5 - i / 2) + "*".repeat(i));


}

console.log(" 9.......");
for (let i = 9; i >= 1; i -= 2) {



    console.log(" ".repeat(5 - i / 2) + "*".repeat(i));


}



console.log("11.......");

for (let i = 1; i <= 20; i += 2) {

    if (i < 10) {

        console.log("*".repeat(i));
    }

    else {

        console.log("*".repeat(20 - i));

    }






}


console.log("Question 11");


for (let i = 1; i <= 20; i += 2) {

    if (i <= 10) {

        console.log("*".repeat(i));

    }

    else {

        console.log("*".repeat(20 - i));

    }


}



console.log("12.......");

for (let i = 1; i < 10; i++) {



    if (i <= 5) {

        console.log(" ".repeat(i) + "*".repeat(5 - i));
    }

    else {

        console.log(" ".repeat(10 - i) + "*".repeat(i - 5));

    }


}









console.log("13.......");
let nums = ["1", "2", "3", "4", "5"];


for (let i = 0; i <= 5; i++) {


    console.log(nums.slice(0, i).toString().replaceAll(",", ""));



}
console.log("///14.......");

for (let i = 5; i >= 1; i--) {


    console.log(nums.slice(0, i).toString().replaceAll(",", ""));



}






console.log("15.......");



for (let i = 0; i < 5; i++) {


    console.log(nums[i].repeat(5));



}






console.log("16.......");


let alfaf = ["A", "B", "C", "D", "E"];

for (let i = 0; i < 5; i++) {


    console.log(alfaf[i].repeat(5));



}


console.log("17.......");

for (let i = 0; i < 5; i++) {


    console.log(alfaf[i].repeat(i + 1));



}


console.log("18.......");

for (let i = 1; i <= 5; i++) {



    if (i == 1 || i == 5) {

        console.log("*".repeat(5));
    }


    else {


        console.log("*".repeat(1) + " ".repeat(2) + "*".repeat(1));

    }


}

console.log("19.......");

for (let i = 1; i <= 5; i++) {



    if (i == 1 || i == 5) {

        console.log("*".repeat(5));
    }

    else if (i == 2 || i == 4) {

        console.log("*".repeat(4));
    }


    else {


        console.log("*".repeat(3));

    }


}

console.log("20.......");

for (let i = 1; i <= 5; i++) {



    if (i <= 3) {

        console.log("*".repeat(i));
    }




    else {


        console.log("*".repeat(6 - i));

    }


}


console.log("21.......");

for (let i = 1; i < 12; i += 2) {


    if (i <= 5) {

        console.log(" ".repeat(i / 2) + "*".repeat(6 - i));
    }

    else {


        console.log(" ".repeat(6 - i / 2) + "*".repeat(i - 6));
    }




}


console.log("22.......");

for (let i = 1; i < 10; i += 2) {

    if (i <= 5) {

        console.log("*".repeat(i));


    }

    else {

        console.log("*".repeat(10 - i));
    }



}


console.log("23.......");

for (let i = 1; i < 10; i++) {

    if (i <= 5) {

        console.log("1".repeat(i));


    }

    else {

        console.log("1".repeat(10 - i));
    }



}


console.log("24.......");

let alfas = ["1", "2", "3"];

for (let i = 1; i <= 5; i++) {


    if (i <= 3) {

        console.log(alfas[i - 1].repeat(i));
    }

    else {


        console.log(alfas[5 - i].repeat(6 - i));

    }




}

console.log("25.......");



for (let i = 1; i <= 5; i++) {


    if (i % 2 == 0) {

        console.log("*" + " " + "*" + " " + "*");
    }

    else {


        console.log("*".repeat(5));


    }




}




console.log("aaaaaaaaaa");

for (let i = 0; i < 30; i++) {
   
       
// if ( i >=0 && i< 5) {
    
//     // console.log(" ".repeat(50-i)+"*".repeat(i));
// }
 if ( i >=15 && i<=18) {
    
    console.log(" ".repeat(50-i)+"*".repeat(10)+"*".repeat(i*2)+"*".repeat(10));
}

else{

    console.log(" ".repeat(50-i)+"*".repeat(10)+" ".repeat(i*2)+"*".repeat(10));

}
      
        


    
    
    
}
