/**
 * String
 * 
 * A javascript string is zero or more characters
 * written inside quotes.
 * 
 * Javascript strings are used for storing and
 * manipulating text.
 * 
 * You can use single or double quotes
 * 
 * Strings can be created as primitives
 * from string literals, or as objects, using
 * the String() constructor
 */

let myName = "Dhruti";
let mySchoolName = "Somonath Sikhya Niketan";

// let myname = new String("Sumit");
// console.log(myname);

console.log(myName.length);
console.log(mySchoolName.length);


// let anySentence = "We are the so-called " +
//     "\"Vikings\" from the north.";
// let anySentence = "We are the so-called " +
//     "'Vikings' from the north.";
let anySentence = 'We are the so-called ' +
    '"Vikings" from the north.';

console.log(anySentence);

const myBioData = 'I am Dhruti !!!';
console.log(myBioData.indexOf("a"));

console.log(myBioData.lastIndexOf("D", 4));

console.log(myBioData.includes("Dhruti", 6));

console.log(myBioData.search("hruti"));

/**
 * The Slice() method selects the elements starting at
 * the given start argumanet and ends at but 
 * does not include the given end argument.
 * But the original array is not change.
 */
console.log(myBioData.slice(0, 4));
console.log(myBioData.substring(0, 4));
console.log(myBioData.slice(7, -1));
console.log(myBioData.substr(7, Infinity));
console.log(myBioData.substring(7, Infinity));
console.log(myBioData.slice(7, Infinity));
console.log(myBioData.substring(7, 2));
console.log(myBioData.slice(7, 2));

const replaceData = myBioData.replace("Dhruti", "Dhrtimaya");

console.log(myBioData);
console.log(replaceData);

console.log(myBioData.charAt(2));
console.log(myBioData.charCodeAt(2));
console.log(myBioData.codePointAt(2));

console.log(myBioData.charCodeAt(myBioData.length - 1));

// Property Access
// ECMAScript 5 2009 allows property access [] on strings

var str = "HELLO WORLD";
console.log(str[0]);

var name1 = "Dhrutimaya";

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.toLocaleUpperCase());
console.log(name1.toLocaleLowerCase());

let fName = "Dhrutimaya";
let lName = "Moharana";

console.log(fName, lName);
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));

var str1 = "                          Hello world                           ";
console.log(str1);
console.log(str1.trim()); // Remove the white space from the string (from both the side not form between)

var txt = "a , b , c | , d , e ";
console.log(txt);
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));

