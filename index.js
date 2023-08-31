// IS truthy//
// "I am a string"	      true //
// false         	"The boolean value false is falsy" //
// null	        "The null value is falsy" //
// undefined  	"undefined is falsy"
// 0	         "The number 0 is falsy (the only falsy number)"
// ""	        "The empty string is falsy (the only falsy string)" //

const input1= "I am a string";
const input2= false;
const input3= null;
const input4= undefined;
const input5= 0;
const input6= "";

// set value to an input to test

let value=input;

if (input) {
    console.log(true)
} else if (input === "") {
    console.log("The empty string is falsy (the only falsy string)")
} else if (input === 0) {
    console.log("The number 0 is falsy (the only falsy number)")
} else if (input === undefined) {
    console.log("undefined is falsy")
} else if (input === null) {
    console.log("The null value is falsy")
} else if (input === false) {
    console.log("The boolean value false is falsy")
};


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

const num1 = 50;
const num2 = 51;
const sum = num1 + num2;

if (sum < -1000) {
    console.log(sum + " is less than -1000")
} else if (sum < 0) {
    console.log(sum + " is a negative number")
} else if (sum === 0) {
    console.log(sum + " is equal to 0")
} else if (sum > 0 && sum < 100) {
    console.log(sum + " is greater than 0")
} else if (sum > 100) {
    console.log(sum + " is greater than 100")
};



// Greater than or equal to 5
// for EACH INPUT RETURN TRUE IF BOTH PARAMETERS ARE GREATER THAN OR EQUAL TO 5
// num1	  num2	Expected Print
//  5	       6	  true
// 10	      11      true
//  0	       0        false
//  1000	 -1000	    false
//  6	        4       false
//  5	        5	    true


let num1=5
let num2=6

if( num1 >= 5 && num2 >= 6) {
    console.log(true)
   } else {
    console.log(false)
   };

//prints true
if (num1 >= 10 && num1 >= 11) {
    console.log(true)
} else {
    console.log(false)
};

// prints true
if (num1 >= 0 && numB >= 0) {
    console.log(true)
} else {
    console.log(false)
}

//prints false
if (num1 >= 1000 && num2 >= -1000) {
    console.log(true)
} else {
    console.log(false)
}

// prints false
if (num1 >= 6 && num2 >= 4) {
    console.log(true)
} else {
    console.log(false)
}

// prints false
if (num1>= 5 && num2 >= 5) {
    console.log(true)
} else {
    console.log(false)
}
    
// prints true


      //  param1A	param1B	    param2A	    param2B	    Expected Print
//          "cat"	"cat"	       6	"   6"	            true
//          "five"	    5	    "dog"	    "dawg"	    false
//          0	        false	"horse"	    "horse"	    true
//          "eight"	    "eight" 	"ate"	"ate"	    true
//              11	     "eleven"	"four"	"for"	    false   
//          "cake"	    "cake"	     "pie"	"pie"	    true

let param1a ="cat";
let param1b ="cat";
let param2a = 6
let param2b = "6";

if (param1a === param1b || param2a === param2b) {
    console.log(true)
    } else {
        console.log(false)
       };

    // prints true

    if (param1a === param1b || param2a === param2b) {
        console.log(true)
        } else {
            console.log(false)
           };
    
  
        // prints false

        if (param1a === param1b || param2a === param2b) {
            console.log(true)
            } else {
                console.log(false)
               };
        
    
        // prints false

        if (param1a === param1b || param2a === param2b) {
            console.log(true)
            } else {
                console.log(false)
               };
        
  
        // prints true

        if (param1a === param1b || param2a === param2b) {
            console.log(true)
            } else {
                console.log(false)
               };
        
   
            // prints false      

            if (param1a === param1b || param2a === param2b) {
                console.log(true)
                } else {
                    console.log(false)
                   };
            
          
  // prints true
  if (param1a === param1b || param2a === param2b) {
    console.log(true)
    } else {
        console.log(false)
       };
