
console.log("2. if...else Statement");


{
    let pin = 1234;

    if (pin == 1234) {
        console.log("pin is found ", pin);
    }


    else {
        console.log(" pin is not found : ", pin);
    }
}



{
    let isOnline = false;

    if (isOnline == true) {
        console.log("Online");
    }


    else {
        console.log("Offline");
    }
}



{
    let data = 120;

    if (data > 0) {
        console.log("data is available");
    }

    else {
        console.log("data is not available");
    }

}



{
    let isAvailable = 0;

    if (isAvailable > 0) {
        console.log("Room is available");
    }


    else {
        console.log("Room is not available");
    }
}



{
    let paymentSuccess = true;

    if (paymentSuccess == true) {
        console.log("Payment Successful");
    }


    else {
        console.log("Payment failed");
    }
}



{
    let hasTicket = 2;

    if (hasTicket > 0) {
        console.log("Entry Allowed");
    }


    else {
        console.log("Entry Not Allowed");
    }
}



console.log("3. if...else if...else Statement");



{
    let battery = 3;

    if (battery == 100) {
        console.log("battery is full", battery, "%");
    }


    else if (battery < 100 && battery >= 20) {
        console.log("battery is Good", battery, "%");
    }


    else if (battery < 20 && battery > 0) {
        console.log("battery is Low", battery, "%");
    }


    else if (battery == 0) {
        console.log("battery is off", battery, "%");
    }

    else {
        console.log("battery is Critical , please replace your battry", battery, "%");
    }
}



{
    let speed = 120;

    if (speed >= 120 && speed <= 320) {
        console.log("speed is very Fast", speed, "km/h");
    }


    else if (speed >= 80 && speed < 120) {
        console.log("speed is Fast", speed, "km/h");
    }

    else if (speed < 80 && speed >= 40) {
        console.log("speed is Normal", speed, "km/h");
    }


    else if (speed < 40 && speed > 0) {
        console.log("speed is slow", speed, "km/h");
    }

    else {
        console.log("speed is not detected", speed, "km/h");
    }
}





{
    let rating = 3;

    if (rating <= 100 && rating >= 90) {
        console.log(" rating is Excellent", rating, "%");
    }

    else if (rating < 90 && rating >= 75) {
        console.log(" rating is Good", rating, "%");
    }

    else if (rating < 75 && rating >= 50) {
        console.log(" rating is Average", rating, "%");
    }


    else if (rating < 50 && rating >= 35) {
        console.log(" rating is poor", rating, "%");
    }

    else {

        console.log("you are outoff the rating ");

    }
}



{

    let experience = 24;

    if (experience >= 20) {
        console.log(`Senior :  experience is ${experience} Years `);


    }

    else if (experience < 20 && experience >= 10) {
        console.log(`Mid-Leve :  experience is ${experience} Years `);


    }

    else if (experience < 10 && experience >= 1) {
        console.log(`"Junior :  experience is ${experience} Years `);


    }




    else {

        console.log(`Errer :  data is not fount  `);

    }

}



{

    let expense = 10000;

    if (expense >= 10000) {
        console.log(`Hight :  ${expense} RS `);


    }

    else if (expense < 10000 && expense >= 2000) {
        console.log(`Medium :  ${expense} RS `);


    }

    else if (expense <= 1000) {
        console.log(`Low :  ${expense} RS `);


    }


}




{

    let temperature = 50;

    if (temperature >= 45) {
        console.log(`Very Hot :  ${temperature} 'C `);


    }

    else if (temperature < 45 && temperature > 30) {
        console.log(`Hot :  ${temperature} 'C `);


    }
    else if (temperature <= 30 && temperature > 15) {
        console.log(`Normal :  ${temperature} 'C `);


    }

    else if (temperature <= 15) {
        console.log(`Cold :  ${temperature} 'C `);


    }


}

