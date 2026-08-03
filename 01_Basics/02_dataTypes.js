"use strict"; // Treat all JS code as modern and prevent accidental globals

// alert(3+3) // we are using Nodejs, not Browser

console.log(3
    +3                          // Code readability shoud be High.
)

let name = "Anand"
let age = 22
let isLoggedIn = false

// console.log(name + age + isLoggedIn) // will print Anand22false
console.log(name, age, isLoggedIn) // will print Anand 22 false

// number => 2 to the power 53
// bigint
// string => " "
// boolean => true/false
// null => standalone value
// undefined => variable value not assigned
// symbol => unique identifier


// object


console.log(typeof name) // will print string
console.log(typeof null) // will print object
console.log(typeof undefined) // will print undefined