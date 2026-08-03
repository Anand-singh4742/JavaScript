// Array
let myArr = [0,1,2,3,4,5]
console.log(myArr[0]); // 0

// SHALLOW COPY of an array -- Shallow copy means that the new array will have the same elements as the original array, 
// but if the elements are objects, they will still reference the same objects in memory. So if you change an object in the new array, 
// it will also change in the original array.

// DEEP COPY of an array -- Deep copy means that the new array will have the same elements as the original array, 
// but if the elements are objects, they will be completely independent of the original array. So if you change an object in the new array, 
// it will not affect the original array.   

// Reference Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// let myArr2 = myArr; // Shallow Copy
// myArr2[0] = 100;
// console.log(myArr[0]); // 100
// console.log(myArr2[0]); // 100

// let myArr3 = [myArr]; // Deep Copy
// myArr3[0] = 200;
// console.log(myArr[0]); // 100
// console.log(myArr3[0]); // 200

// const myArr4 = new Array(1,2,3,4,5); // Creating an array using the Array constructor
// console.log(myArr4[1]); // 2


// // *************** ARRAY METHODS ***************
// myArr.push(6); // Adds an element to the end of the array
// myArr.push(7);
// myArr.pop(); // Removes the last element from the array
// myArr.unshift(12); // Adds an element to the beginning of the array
// myArr.shift(); // Removes the first element from the array

// console.log(myArr.includes(3)); // true
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // 3
// console.log(myArr.indexOf(9)); // -1 -- If the element is not found in the array, indexOf() returns -1.

// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6]
// const newArr = myArr.join() // Converts the array to a string, with each element separated by a comma
// console.log(newArr); // 0,1,2,3,4,5
// console.log(typeof newArr); // string


// SLICE and SPLICE are two different methods in JavaScript that can be used to manipulate arrays, but they have different purposes and behaviors.

// SLICE is used to create a new array that contains a portion of the original array. It does not modify the original array. 
// It takes two arguments: the starting index (inclusive) and the ending index (exclusive) of the portion to be extracted. 
// The original array remains unchanged.    

console.log("A ",myArr)
const myn1 = myArr.slice(1,3) // Creates a new array containing elements from index 1 to index 2 (3 is exclusive)
console.log(myn1) // [1, 2]
console.log("B ",myArr) // [0, 1, 2, 3, 4, 5] -- Original array remains unchanged

// SPLICE is used to modify the original array by adding or removing elements. It takes three arguments: the starting index, 
// the number of elements to remove, and the elements to add (if any). 
// It modifies the original array and returns an array containing the removed elements.

const myn2 = myArr.splice(1,3) // Removes 3 elements starting from index 1 (1, 2, 3) and returns them in a new array
console.log(myn2) // [1, 2, 3]
console.log("C ",myArr) // [0, 4, 5] -- Original array is modified