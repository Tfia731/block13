// IS truthy//
// "I am a string"	      true //
// false         	"The boolean value false is falsy" //
// null	        "The null value is falsy" //
// undefined  	"undefined is falsy"
// 0	         "The number 0 is falsy (the only falsy number)"
// ""	        "The empty string is falsy (the only falsy string)" //

const IamAString = true;

let value=0;

if(value) {
    console.log ("true")
}
else if (value === false){
        console.log("The boolean value false is falsy")
}

else if (value === null){
    console.log("The null value is falsy")
}

else if (value === undefined){
    console.log("undefined is falsy")
}

else if (value === 0){
    console.log("The number 0 is falsy")
}

else if (value === ""){
    console.log("The empty string is falsy ")
}

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

// num1	                num2	        
// 50	                51	            
// 99	                -2	            
// 0	                101	            
// 500	                -500	        
// -1000	            0	            
// -5	                0	            

let const a = 50;
let const b = 51;
console.log (a + b || a + b > 100)

//"101 is greater than 100"

let const a = 99;
let const b = -2;
console.log ( a + b || 97 > 0)

// "97 is greater than 0"

let const a = 0;
let const b = 101;
console.log (a + b || a + b > 100)

// "101 is greater than 100"

let const a = 500;
let const b = -500;
console.log (a + b === 0 )

// "0 is equal to 0"

let const a = -1000;
let const b = 0;
console.log (a + b = negative )

// "-1000 is a negative number"

let const a = -5;
let const b = 0;
console.log (a + b = negative )

//"-5 is a negative number" 

// num1	  num2	Expected Print
//  5	       6	  true
// 10	      11      true
//  0	       0        false
//  1000	 -1000	    false
//  6	        4       false
//  5	        5	    true


if(input num1 === num2) {
    console.log(5<6)
   } else {
    console.log("true")
   };

//prints true

if(input num1 === num2) {
console.log(10<= 11)
} else {
    console.log("true")
   };
// prints true

if else(input num1 === num2) {
console.log(0>0)
} else {
    console.log("false")
   };
//prints false

if else(input num1 === num2) {
console.log(1000<= -1000)
} else {
    console.log("false")
   };
// prints false

if else(input num1 === num2) {
    console.log(6 <= 4)
    } else {
        console.log("false")
       };
    // prints false

    if else(input num1 === num2) {
        console.log( 5 <= 5)
        } else {
            console.log("true")
           };
        // prints true


      //  param1A	param1B	    param2A	    param2B	    Expected Print
//          "cat"	"cat"	       6	"   6"	            true
//          "five"	    5	    "dog"	    "dawg"	    false
//          0	        false	"horse"	    "horse"	    true
//          "eight"	    "eight" 	"ate"	"ate"	    true
//              11	     "eleven"	"four"	"for"	    false   
//          "cake"	    "cake"	     "pie"	"pie"	    true


if (input cat === cat) {
    console.log( 6 <= 6)
    } else {
        console.log("true")
       };
    // prints true


    if input 5 === "five") {
        console.log( "dog === "dawg")
        } else {
            console.log("false")
           };
        // prints false


    if else(input "0" === "false") {
        console.log( "horse" <= "horse")
        } else {
            console.log("false")
           };
        // prints false


    if else(input "8" === "8") {
        console.log( ate <= ate)
        } else {
            console.log("true")
           };
        // prints true

  
        if (input "11" === "eleven") {
            console.log( four <= for)
            } else {
                console.log("false")
               };
            // prints false      


            if (input cake === cake) {
                console.log( pie <= pie)
                } else {
                    console.log("true")
                   };
                // prints true
