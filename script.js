
/*
 *
 *Author: Nate Hascup
 *Date: 05/17/17
 *IT 328: Intro to JavaScript Assignment
 *<- https://github.com/Chronocast/introToJS ->
 */

//Part 1: Intro to JS
document.body.innerHTML = "<h1>Introduction to JavaScript</h1><br>";

document.body.innerHTML += "<h2>FizzBuzz</h2><br>";

console.log("Introduction to JavaScript");

//Part 2: print 1 - 100, but replace with word for %3,%5,or %3 & %5
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

//Part 3: countBs, takes a string and returns # of capital 'B's are in said string  
function countBs (word)
{
    //the B counter
    var theBees = 0;
    //loop through the string and check each character for B-ness
    for (var i = 0; i < word.length; i++)
        if (word.charAt(i) == "B")
            theBees += 1;
    //push answer to console & page
    console.log(word + " has " + theBees + " Capital B(s)");
    document.body.innerHTML += word + " has " + theBees + " Capital B(s)<br>";
}

countBs("Baggins");
countBs("BaBBages");
countBs("BBC");
countBs("RehaB");

//Part 4: countChar, same as countBs except you can select which character it will search for
function countChar (word, letter)
{
    //the char counter
    var charCount = 0;
    //loop through the string and check each character for match
    for (var i = 0; i < word.length; i++)
        if (word.charAt(i) == letter)
            charCount += 1;
    //push answer to console & page     
    console.log(word + " has " + charCount + " " + letter + "'s");
    document.body.innerHTML += word + " has " + charCount + " " + letter + "'s<br>";
}

countChar("velociraptor", "o");
countChar("mississippi", "i");
countChar("mississippi", "s");
countChar("whinnie the pooh", "n");

//Part 5: integrating countChar into a new countB
function newCountB (word)
{
    countChar(word, "B");    
}

countBs("RehaB");
countBs("BBC");
countBs("Baggins");
countBs("BaBBages");