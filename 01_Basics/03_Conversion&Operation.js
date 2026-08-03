"use strict"; // Treat all JS code as modern and prevent accidental globals
// let score = 33
// const {score} = req.body // destructuring assignment
// console.log(typeof score) // will print number
// console.log(typeof(score)) // will print number

// let age = "21pragsss"
// let age = true
// let age = undefined
// let age = null


// console.log(typeof age) // will print string
// let ValueInNumber = Number(age)
//console.log(typeof ValueInNumber) // will print number
// console.log(ValueInNumber) // will print NaN because age is not a valid number


// "33" => 33
// "33prag" => NaN
// true => 1; false => 0
// undefined => NaN
// null => 0

//let IsLoggedIn = true
//let BooleanIsLoggedIn =  Boolean(IsLoggedIn) // will print true
//console.log(BooleanIsLoggedIn)
//console.log(typeof BooleanIsLoggedIn) 

// 1 => true; 0 => false
// "pragati" => true; "" => false
// null => false; undefined => false


// let SomeNumber = 143
// let StringNumber = String(SomeNumber) // will print "143"
// console.log(StringNumber)
// console.log(typeof StringNumber) // will print string

// *************************************** OPERATIONS ***********************************************

let value = 3
let negativeValue = -value
// console.log(negativeValue) // will print -3

// console.log(2+2) // will print 4
// console.log(2-2) // will print 0
// console.log("2" + "2") // will print 22
// console.log("2" + 2) // will print 22
// console.log(2 + "2") // will print 22   
// console.log(2 - "2") // will print 0
// console.log(2 * "2") // will print 4
// console.log(2 / "2") // will print 1
// console.log(2 % "2") // will print 0
// console.log(2 ** 2) // will print 4
// console.log(2 % 3) // will print 2
// console.log(2/3) // will print 0.6666666666666666


let str1 = "Hello"
let str2 = " Anand"
let str3 = str1 + str2
console.log(str3) // will print Hello Anand

console.log("1" + 2) // will print 12
console.log(1 + "2") // will print 12
console.log("1" + 2 + 2) // will print 122
console.log(1 + 2 + "2") // will print 32

console.log(true) // will print true
console.log(+true) // will print 1
//console.log(true+) // will give error
console.log(+"") // will print 0 


let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1, num2, num3) // will print 4 4 4

let gameCounter = 100
gameCounter++; 
console.log(gameCounter) // will print 101
++gameCounter;
console.log(gameCounter) // will print 102
