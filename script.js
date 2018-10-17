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

    // and &&

    // if ( a == b && c ==d ) {}
    // // or ||
    // if ( a == b || c ==d ) {}
    // //X OR
    // if (( a == b || c == d ) && ( a == b) != (c == d)) {}

//TERNARY OPERATOR  (if condition is true - do this - else do this)

// (if) a == b ?  (do this) console.log("Match") : (else) console.log("No Match")

            // ARRAYS (ARE OBJECTS)
 var pens;

 pens = ["red", "blue", "another color"];
 console.log(pens);

 var morePens = ["red", "blue", "another color", 5, false];
 console.log(morePens);

 //index starts at 0

 var secondPen = pens[1];
 console.log(secondPen);



 //  PROPERTIES AND METHODS


var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:

console.log("Array length: ", pens.length);

// METHODS:  Call the object then punctuation mark, then call the method ending with parenthesis: myarray.reverse()
// Reverse the array: var newPens = pens.slice();
pens.reverse();

// Remove the first value of the array:
pens.shift();

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");

// Remove the last value of the array:
pens.pop();

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.
pens.splice(2, 1);
console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);

newPens.push("sky blue");

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
// var result = pens.indexOf(search, index);
var result = pens.indexOf("blue", 1);
console.log("The search result index is: ", result);        // =2
console.log("The value is: ", pens[result]);            // blue



// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
var arrayString = pens.join(" & ");
console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
