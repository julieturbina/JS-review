// The general rule: 
// 1. variable, function, method - start name with lowercase letter
// 2. class, object - start name with a capital letter 
// 3. constants -  write in all caps.

var date = new Date();
    document.body.innerHTML = "<h1>Today is " + date + "</h1>";

   var a, b, sum;
   a =5;
   b = 4;
   sum = a + b;



// // Data type:
// var negInteger = -3.15721;
// var stringQuote = "must \"use\" quotations";
// var theSunIsHot = true; 
// var emptyInside = nul;
// var notSetToAnythingUndefined;

// console.log( typeof negInteger)
// -> number

                 //if statements
            //true
var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);

            //false
var a = 5;
var b = 4;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);

        //true - the value of the string is evaluated to 5

var a = 5;
var b = "5";
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}

console.log(theNumbersMatch);

            //strict equality = false (number and string)
var a = 5;
var b = "5";
var theNumbersMatch
            
if ( a === b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
    console.log(theNumbersMatch);

                // not equal BANG
    var a = 5;
    var b = 3;
    var theNumbersMatch
                
    if ( a != b ) {
        theNumbersMatch = true;
    } else {
        theNumbersMatch = false;
    }
        console.log(theNumbersMatch);

            // not equal strict equality BANG
var a = 5;
var b = "5";
var theNumbersMatch
                    
if ( a !== b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
    console.log(theNumbersMatch);