
/**
 * The javascript math object allows you to perform mathematical
 * tasks on numbers
 * 
 */

console.log(Math.PI);

var num = 212.521
console.log(Math.round(num));

console.log(Math.pow(3, 4));

console.log(Math.sqrt(63));

console.log(Math.abs(-54));

console.log(Math.ceil(34.32555));
console.log(Math.floor(34.32555));

/**
 * Math.min()
 * can be used to find the lowest value in a list of argument
 * 
 */

console.log(Math.min(0, 150, 30, 20, -8, -200));

/**
 * Math.max()
 * can be used to find the highest value in a list of argument
 * 
 */

console.log(Math.max(0, 150, 30, 20, -8, -200));

/**
 * Math.random()
 * returns a random number between 0 (inclusive), and 1 ()
 */

console.log(Math.random());
console.log(Math.floor(Math.random() * 10000));

// Math.trunc()
// It returns the integer part of a number

console.log(Math.trunc(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.trunc(-99.3));
console.log(Math.floor(-99.3));
console.log(Math.ceil(-99.3));