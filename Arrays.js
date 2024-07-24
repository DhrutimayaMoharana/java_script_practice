/***
 * Arrays
 * 
 * When we use var we can stored only one value at a time.
 * 
 * When we feel like storing multiple values in one variable then
 * instead of var, we will use an Array.
 * 
 * In javascript, we have an Array class, and
 * arrays are the prototype of this class.
 */

// Example 

var myArrayValues = ['Amiya', 'Piyush', 'Nihar', 23, true, 'Sumit'];
console.log(myArrayValues);
console.log("Type of myArrayValues variable : " + typeof (myArrayValues));

console.log("All the index in the arrays : " + Object.keys(myArrayValues));

console.log(myArrayValues[-1]);

for (let index = 0; index < myArrayValues.length; index++) {
    const element = myArrayValues[index];
    console.log(element);
}


/** For In Loop */
var myFriends = ['Amiya', 'Piyush', 'Nihar', 23, true, 'Sumit'];
for (let key in myFriends) {

    console.log(key);

    // if (Object.hasOwnProperty.call(myFriends, key)) {
    const element = myFriends[key];
    console.log(element);

    // }
}

/** For Of Loop */
for (let iterator of myFriends) {
    console.log(iterator);
}

/** For each  Loop*/

myFriends.forEach(function (element, index, array) {
    console.log(element + "   " + index + "   " + array + "  ");
});

console.log("----------------------------------------------------------");
console.log("BY Fat Arrow Function");
console.log("----------------------------------------------------------");
myFriends.forEach((element, index, array) => {
    console.log(element + "   " + index + "   " + array + "  ");
});

myFriends.forEach((item) => {
    console.log("item :  " + item + "    ");
});

// new Array()
// new Array(element1)
// new Array(element1, element2)
// new Array(element1, element2, /* …, */ elementN)
// new Array(length);
// Array() can be called with or without new. Both create a new Array instance.

let newArray = new Array(3);
newArray[0] = "hi";
newArray[1] = "hye";
newArray[2] = "hello";
newArray[3] = "bye";
console.log(newArray);


/** 
 * Searching and filter in an Array
 */

var myFriends = ['Sumit', 'Amiya', 'Piyush', 'Nihar', 'Sumit'];

console.log(myFriends.indexOf("Sumit"));
console.log(myFriends.indexOf("Sumit", 2)); // search after the index number

console.log(myFriends.indexOf("sumit", 2));  // Not Found it retun -1

console.log(myFriends.lastIndexOf("Sumit"));
console.log(myFriends.lastIndexOf("Sumit", 2)); // search with in the index number

console.log(myFriends.includes('Sumit'));
console.log(myFriends.includes('Amiya', 2));


const prices = [300, 444, 233, 234, 4612, 21343, 2335, 999]

const findValues = prices.find((value, index, arrayObj) => value > 200);

console.log(findValues);

const findIndexes = prices.findIndex((value) => value > 29000);

console.log(findIndexes);

const findFiltedArray = prices.filter((value) => value > 300);

findFiltedArray.forEach(
    (value, indesx) =>
        console.log("Value : " + value + "  Index  : " + indesx));

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]




const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

console.log("numbers Array before sorted : ", numbers);

// numbers.sort((a, b) => a - b); // Sort by ascending
numbers.sort((a, b) => a > b ? 1 : -1); // Sort by ascending
console.log("numbers Array after sorted : ", numbers);

// numbers.sort((a, b) => a > b ? -1 : 1); // Sort by descending
numbers.sort((a, b) => b - a); // Sort by descending
console.log("numbers Array after sorted descending : ", numbers);



/**
 * CRUD in Array
 * 
 */

// push

const animals = ['pigs', 'goats', 'sheep'];

// let count = animals.push('chicken');
let count = animals.push('chicken','cat','cow');
console.log("Count of animals array  : " + count);
console.log(animals);


/**
 * unshift method  
 */

let c = animals.unshift('dog');
console.log("Count of animals array  : " + c);
console.log(animals);

/**
 * pop method
 */

const plants = ['broccoli','cauliflower','kale','tomato']
console.log(plants);
var check = plants.pop();
console.log(plants); 
console.log(check);

/**
 * shift method
 */

console.log(plants);
var check = plants.shift();
console.log(plants); 
console.log(check);


/**
 * splice method
 * 
 * use for both add and remove anywhere in array
 * 
 */

const months = ['Jan','Feb','March','July']

const addNewMonth = months.splice(3,0,'April')

console.log(addNewMonth);
console.log(months);


//  Last watch 5:46:00 