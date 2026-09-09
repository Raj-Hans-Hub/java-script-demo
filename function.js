function calculateBill(price, quantity) {

    let total = price * quantity;
    return total;

}


console.log(calculateBill(200, 5));






let evenOdd = function (evenOdd) {

    if (evenOdd % 2 == 0) {
        return evenOdd + "  is even Number";
    }
    else {

        return evenOdd + " is odd Number";

    }
}

console.log(evenOdd(21));



const calculateAverage = (english, hindi, math) => {

    return (english + hindi + math) / 3;


}


console.log(calculateAverage(40, 50, 70));



const calculateDiscount = (price, discountPercent) => {

    let discountAbount = price * discountPercent / 100;
    let finalprice = price - discountAbount;

    return finalprice;


}


console.log(calculateDiscount(100, 20));




const findMaximum = function (a, b, c) {

    if (a > b && a > c) {

        return console.log(a + "a is big");

    }

    else if (b > a && b > c) {

        return console.log(b + "b is big");

    }
    else if (c > a && c > b) {

        return console.log(b + "b is big");

    }

    else {

        return console.log(" is big");

    }
}


console.log(findMaximum(188, 228, 93));

var sub = [80, 60, 45, 64, 62, 60];
var total = 0;
const total_marks = () => {
    for (let i = 0; i < sub.length; i++) {

        total += sub[i];
    }

    return total
}

const calculate_percentage = (calculate_grade) => {
    for (let i = 0; i < sub.length; i++) {

        total += sub[i];
    }

    let pre = total / 6;
    console.log(pre);

    calculate_grade(pre);
}
const calculate_grade = (pre) => {

    if (pre >= 90) {
        console.log("A+");


    }
    else if (pre < 90 && pre >= 75) {
        console.log("A");


    }
    else if (pre < 75 && pre >= 60) {
        console.log("B");


    }
    else if (pre < 60 && pre >= 45) {
        console.log("C");


    }
    else if (pre < 45 && pre >= 35) {
        console.log("D");


    }

    else {

        console.log("Fail");
    }

}




console.log(total_marks());
console.log(calculate_percentage(calculate_grade));





function calculateAge(birthYear, currentYear) {

    return currentYear - birthYear;


}


console.log(calculateAge(2004, 2026));


const calculateProfit = function (costPrice, sellingPrice) {

    return sellingPrice - costPrice;

}


console.log(calculateProfit(50, 160));


const calculateSalar = function (basicSalary, bonus, deduction) {

    return basicSalary + bonus - deduction;

}


console.log(calculateSalar(50000, 2000, 500));




const checkEligibility = (age) => {

    if (age >= 18) {
        return "Eligible"
    }

    else {
        return "Not Eligible";
    }

}


console.log(checkEligibility(23));


const calculateShoppingAmount = function (a, b, c) {

    return a + b + c;

}


console.log(calculateShoppingAmount(222, 333, 500));
