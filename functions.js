/**
 * Function Definiton
 * Calling a Function
 * Function Parameter
 * Function Arguments
 * Function Expressions
 * Return keyword
 * Anonymous Function
 */

/**
 * Function Definition
 * 
 * Before we use a function, we need to define it.
 * 
 * A function definition (also called a function declaration, or function statement)
 * consists of the function keyword, followed by
 * 
 * The name of the function.
 * A list of parameters to the function, enclosed in parentheses and separated by commas.
 * The javascript statements that define the function, enclosed in curly brackets, {...}.
 */

function sum() {
    var a = 10, b = 20;
    var total = a + b;
    console.log("sum() function value : " + total);
}

// Or
function total(value1, value2) {
    console.log("total() function value : " + (value1 + value2));
}

/**
 * Calling Functions
 * Defining a function does not execute it.
 * A javascript function is executed when "Something" invokes it (calls it).
 */

sum();
total(50, 50);

/**
 * Function Parameter vs Function Arguments
 * Function parametes are the names listed in the funciton's definition.
 * Function Arguments are the real values passed to the function.
 */

/**
 * Why function ?
 *  
 * You can reuse code : Define the code once, and use it many times.
 * You can use the same code many times with different arguments,
 * to produce different results.
 * 
 * OR
 * 
 * A function is a group of reusable code which can be called anywhere
 * in your program. This eliminate the need of writing the same code 
 * again and again.
 * 
 */

/**
 * Function Expressions:
 * Function expression simply means
 * Create a function and put it into the variable
 */

function sum2(a, b) {
    var total = a + b;
    console.log(total);
}

var funExp = sum2(10, 12);
funExp;

/**
 * Return Keyword
 * When javascript reaches a return statement,
 * the function will stop executing.
 * 
 * Functions often compute a return value.
 * The return value is "returned back to the caller"
 */

function sum3(a, b) {
    var total = a + b;
    return total;
}

var funExp = sum3(13, 12);
console.log(funExp);

/**
 * Anonymous Function
 * 
 * A function expression is similar to and has the same syntax
 * as a function declaration One can define "named"
 * function expression (Where the name of the expression might 
 * be used in the call stack for example)
 * or "anonymous" function expressions.
 */

var anoFunc = function (a, b) {
    return a + b;
}

console.log("Calling the anno function  :  " + anoFunc(12, 12));