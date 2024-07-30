/**
 * Date methods
 * Time methods 
 * 
 * 
 * Javascript Date objects represent a single 
 * moment in time in a platform-independent format.
 * Date objects contain a number that represents
 * miliseconds since 1 January 1970 UTC
 */

/**
 * 
 * Creating Date Objects
 * 
 * There are 4 ways to create a new Date Object :-
 * 
 * new Date()
 * new Date (year,month,day,hours,minutes,seconds,milliseconds)
 * new Date(milliseconds)
 * new Date(date String)
 * 
 */

// new Date()
// Date objects are created with the new Date()
// constructor.

let currentDate = new Date();
console.log(currentDate);

console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());

/**
 * Date.new()
 * Returns the numeric value corresponding to the 
 * current time the number of milliseconds
 * elapsed since January 1, 1970 00:00:00 UTC
 */

console.log(Date.now());


/**
 * 7 numbers specify year month day hour minute second
 * and millisecond (in that order)
 * Note :- Javascript counts months from 0 to 11
 * 
 */
var d = new Date(2024, 0, 5, 20)
console.log(d.toString())

/**
 * new Date(dateString) creates a new date
 * object from a date String
 */
var d = new Date("Jul 29, 2024");
console.log(d.toString());

/**
 * new Date(milliseconds)
 * new Date(milliseconds) creates a new Date
 * Object as zero time plus milliseconds 
 * 
 */
var d = new Date(0);
console.log(d);
var d = new Date(1722233553557);
console.log(d);
var d = new Date(1722233553557 + 86400000 * 2);
console.log(d);
var d = new Date(86400000 * 2);
console.log(d);


const curDate = new Date();
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());


/**
 *  How to set the indivisual date
 * 
 */

console.log(curDate.setFullYear(2022));
console.log(curDate);
console.log(curDate.setFullYear(2023,10,5));
console.log(curDate);
console.log(curDate.setMonth(9));
console.log(curDate);
console.log(curDate.setDate(4));
console.log(curDate);

// Time Methods

console.log(curDate.getTime());
console.log(curDate.getHours());
console.log(curDate.getMinutes());
console.log(curDate.getSeconds());
console.log(curDate.getMilliseconds());

console.log(curDate.setHours(20));
console.log(curDate.toISOString());
console.log(curDate.setHours(20,30));
console.log(curDate.toString());
console.log(curDate.setMinutes(5));
console.log(curDate.toString());
console.log(curDate.setSeconds(50));
console.log(curDate.toString());
console.log(curDate.setMilliseconds(40));
console.log(curDate.toString());