// JavaScript is a dyanamically typed language, which means that you don't have to declare the data type of a variable when you create it. 
// The data type is determined automatically based on the value assigned to the variable.

// primitive datatypes - call by value (jo bhi value variable me store hoti hai, uska copy bna ke dusre variable me store hota hai)
// 7 types: string, number, bigint, boolean, undefined, symbol, null

const score = 100
const scoreValue = 100.3 // float wagera kuch nahi hauta sab Number haute

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol("123") // unique identifier, cannot be changed
const anotherId = Symbol("123") // unique identifier, cannot be changed

console.log(id === anotherId) // will print false because both are unique identifiers

const bigNumber = 1234567890123456789012345678901234567890n // BigInt is used to represent integers larger than 2^53 - 1




//Reference/Non-primitive datatypes - call by reference (jo bhi value variable me store hoti hai, uska address bna ke dusre variable me store hota hai)
// Array, Object, Function, Date, RegExp, Map, Set, WeakMap, WeakSet
// inka return type is "OBJECT"

const heros = ["Ironman", "Spiderman", "Thor"] // Array
let myObj = {
    name: "Anand",
    age: 22,
    isLoggedIn: false
} // Object

const myFunction = function() {
    console.log("Hello World")
} // Function
console.log(typeof myFunction) // will print function - but bolenge haam isko object function, kyu ki function bhi ekh object he hai