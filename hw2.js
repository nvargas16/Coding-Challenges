/**
 * Create a function to give the user a fortune:
 * Takes in an array as a parameter
 * Include an if/else conditional statement
 * Returns a concatenated string of the user's fortune
 * Challenge: Use the user's input as a parameter.
 * 
 * 
 * 
 * NOTE Run hw2.html in console in browser
 * 
 * 
 */

let promptTest= prompt('What is your name?'),
    confirmTest = confirm("Would you like to know your fortune? Click Ok to continue or cancel to deny.");
    a = "Make happiness a priority, and be gentle with yourself in the process",
    b = "As time goes on, that really bad time is a little less bad.",
    c = "If it excites you and scares you at the same time, it probably means you should do it.",
    d = "Your life does not get better by chance it gets better by change.",
    e = "Distractions will look like opportunities when you don't know where you are going.",
    f = "I feel like I'm too busy writing history to read it.",
    myArray = [a, b, c, d, e, f];


function fortuneTeller(promptTest, confirmTest, myArray) {

    //if user wants fortune
    if (confirmTest=== true){
        let randomFortune = Math.floor(Math.random() * myArray.length);            //generates random index number
        console.log("Hello, " + promptTest + ". \nFortune: " + myArray[randomFortune] + randomFortune);
    }


    //if user does not want fortune
    else{
        console.log("Your loss!");
    }
    console.log(confirmTest);
    console.log(promptTest);
}


fortuneTeller(promptTest, confirmTest, myArray);



