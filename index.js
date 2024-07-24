var myName = "Sumit";
var _myAge = 28;

var _myName = "Dhruti";
var _1my__Name = "DM";
// var 1myName = "S";
var $myName = "D";
// var myName% = "DM";

console.log(myName);


/** Data Types */

var value = true
console.log(value);
console.log(typeof (value));

console.log(10 + "20");
console.log(9 - "5");
console.log("Java           " + " Script");
console.log("  " + "  ");
console.log("   " + 0);
console.log("Sumit " - " Kumar"); // NaN -> not a number
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);


// Question :- null vs undefined
var iAmUseLess = null
console.log(iAmUseLess);
console.log(typeof (iAmUseLess)); // It shows object as object can be null and not any premitive type is not able to null
var iAmStandBy
console.log(iAmStandBy);
console.log(typeof (iAmStandBy));

// Question :- what is NaN
/**
 * NaN is a property of the global object.
 * In other words, it is a variable in global scope
 * The initial value of NaN is Not-A-Number
 */
var myPhoneNumber = 9023948938
var myName = "Dhruti"
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));

if (isNaN(myName)) {
    console.log("Plz enter a valid number !!!!");

}

// NaN practice

console.log(NaN === NaN);
console.log(Number.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));



/** Expression and Operator
 *
 * Expression :- Combination of Operator and Operand
 *
 * Types of operators
 * -------------------
 * Assignment Operators
 * Arithmetic Operators
 * Comparison Operators
 * Logical Operators
 * String Operators
 * Conditional(ternary) operator
*/

// Assignmen Opeators
// An assignment opearator assigns a value to its left operand
// based on the value of its right operand.
// The simple assignmen operator is equal (=)

var x = 5
var y = 5

console.log("is both the x and y are equal or not : " + (x == y));

console.log(3 + 3);
console.log(10 - 5);
console.log(20 / 5);
console.log(5 * 6);
console.log(27 % 4);
console.log("Power   : " + (3 ** 3));


/**
 * Increment and Decrement Operator
 * Operator: x++ or ++x or x-- or --x
 * 
 * If used postfix, with operator after oprand (for example, x++),
 * the increment operator increments and returns the value before incrementing
 * 

 * If used prefix, with operator before operand (for example, ++x)
 * the incremetn oprator increments and returns the value after increamenting
 */

var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);

var num = 15;
var newNum = ++num;
console.log(num);
console.log(newNum);

/**
 * Comparison Operators
 * A comparison operator compares its operands 
 * returns a logical value based on whether true of false
 */

var a = 10;
var b = 30;

// Equal (==)
console.log(a == b);

// Not Equal (!=)
console.log(a != b);

// Greater than (>)
console.log(a > b);

// Greater than equal (>=)
console.log(a >= b);

// Less than (<)
console.log(a < b);

// Less than or equal (<=)
console.log(a <= b);

/**
 * Logical Operators
 * Logical operators are typically used with boolean (logical) values
 * when they are, they return a boolean value
 */

var a = 10;
var b = -20;

// Logical AND (&&)
console.log(a > b && b > 0);

// Logical OR (||)
console.log(a > b || b > 0);

// Logical NOT (!)
console.log(!(a > b));
console.log(!a);

// Whatis he difference between == and ===

var num1 = 5
var num2 = "5"

console.log(num1 == num2); // Check only value
console.log(num1 === num2); // Check the value and data type also


/**
 * Controll statment and loop
 * 
 * if..else
 * switch statement
 * While loop
 * Do-while Loop
 * For Loop
 * For in Loop
 * For of Loop
 * Conditional (ternary) operator
 */


// If else

var a = 10
if (a == 10) {
    console.log("TRUE");
} else {
    console.log("FLASE");
}

// Leap Year

var year = 2200

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("This is a leap year");
        } else {
            console.log("This is not a leap year");
        }
    } else {
        console.log("This is not a leap year");
    }
} else {
    console.log("This is not a leap year");
}


if (a == 10) {

} else if (a > 0) {

} else {

}


/**
 * What is truthy and falsy value in javascript
 * 
 * we have total 5 falsy value in javascript
 * 0, "", undefinded, null, NaN, false** is false anyway
 */

// Truthy Value in javascript
if (true) {
    console.log("TRUTHY");
}
if ({}) {
    console.log("TRUTHY => {}");
}
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
if (12n) {
    console.log("TRUTHY =>  number with n : " + 12n);
}
// if (3.14)
// if (-3.14)
// if (Infinity)
if (-Infinity) {
    console.log("TRUTHY => -ve Infinity");
}

/**
 * While loop
 * The while statement creates a loop that executes a specified statement
 * as long as the test condition evalutes to true.
 */

var num = 1;
while(num <= 10){ // Block Scope Start
    if(num==1){
        console.log("LOOP Start !!!!!!!");
    }
    console.log(num++);
}// Block Scope End

