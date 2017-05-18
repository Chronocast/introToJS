
/*
 *
 *Author: Nate Hascup
 *Date: 05/17/17
 *IT 328: Intro to JavaScript Assignment
 *
 */

document.body.innerHTML = "<h1>Introduction to JavaScript</h1>";

document.body.innerHTML = "<h2>FizzBuzz</h2>";

console.log("Introduction to JavaScript");

//print 1 - 100, but replace with word for %3,%5,or %3 & %5
for (var number = 1; number < 101; number += 1)
    //replace with FizzBuzz if %3 && %5 true
    if (number % 3 == 0 && number % 5 == 0)
        console.log("FizzBuzz");
    //replace with Fizz if %3
    else if (number % 3 == 0)
        console.log("Fizz");
    //replace with Buzz if %5 true
    else if (number % 5 == 0)
        console.log("Buzz");
    //print number since it is in-divisible
    else
        console.log(number);
        
