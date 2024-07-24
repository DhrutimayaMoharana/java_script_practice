/**
 * ECMAScript® 2015 (ES6) Language Specification
 */

/** Fetures of ES6
 * Let and const
 * template strings
 * default arguments
 * rest operators
 * destructuing
 * object properities
 * arrow function
 * spread operators
 */

/**
 * LET vs CONST vs VAR
 */

// LET and VAR are mutable
// CONST is ismutable

var myName = "Sumit";
console.log(myName);

myName = "Dhruti";
console.log(myName);

let myName1 = "Sumit Kumar";
console.log(myName1);

myName1 = "Dhrutimaya";
console.log(myName1);

const myName2 = "Sumit Kumar";
console.log(myName2);

// myName2 = "Dhrutimaya"; // It shows error as it is a constant variable
console.log(myName2);

// var => Function Scope
// let and const => Block Scope


function testFunc() {
    var testFuncVar = "testFuncVar";
    console.log(testFuncVar);

    if (true) {
        var testFuncVarIF = "testFuncVarIF";
        console.log("INNER   : " + testFuncVar);
        console.log("INNER   : " + testFuncVarIF);
    }

    console.log("OUTER   : " + testFuncVarIF);
}

// console.log("FINAL OUT   : "+testFuncVar); // cannot access

testFunc();

function testFuncLET() {
    let testFuncVar = "testFuncVar";
    console.log(testFuncVar);

    if (true) {
        let testFuncVarIF = "testFuncVarIF";
        console.log("INNER   : " + testFuncVar);
        console.log("INNER   : " + testFuncVarIF);
    }

    // console.log("OUTER   : "+testFuncVarIF); // Can't access outside the block
}

testFuncLET();

function testFuncCONST() {
    const testFuncCONST = "testFuncCONST";
    console.log(testFuncCONST);

    if (true) {
        const testFuncCONSTIF = "testFuncCONSTIF";
        console.log("INNER   : " + testFuncCONST);
        console.log("INNER   : " + testFuncCONSTIF);
    }

    // console.log("OUTER   : "+testFuncCONSTIF); // Can't access outside the block
}

testFuncCONST();


/**
 * Template Literals (Template Strings)
 * 
 * Javascript program to print table for given number ?
 * 
 */

let tableOf = 12;
for (let num = 1; num <= 10; num++) {
    console.log(` ${tableOf} * ${num} = ${tableOf * num} `);
}



/**
 * Default Parameters
 * Default function parameters allow named parameters to be 
 * initialized with default values if no value or undefined is passed.
 */

function mult(a, b = 5) {
    console.log(` value of a : ${a} `);
    console.log(` value of b : ${b} `);
}

mult(6);
mult(2, 4);


/**
 * Fat Arrow Function
 */

//  Normal Function

function mulTable(a, b) {
    return `Multiplication of ${a} and ${b} is ${a * b}`;
}
const outputValue = mulTable(12, 45);
console.log(outputValue);

// Fat arrow Function

const mulOut = (a, b) => {
    return `In FAT ARROW Function , Multiplication of ${a} and ${b} is ${a * b}`;
};
console.log(mulOut(10, 2));

//  Or, with if there is only a single line code then there is no need of return keyword
const mulOut2 = (a, b) =>
    `In FAT ARROW Function2 , Multiplication of ${a} and ${b} is ${a * b}`;
console.log(mulOut2(102, 23));

