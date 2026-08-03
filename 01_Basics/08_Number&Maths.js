const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString()) // Number se String me convert kar dega
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // 100.00

const OtherNumber = 143.2
// console.log(OtherNumber.toPrecision(3)) //143

const Hundreds = 10000000
// console.log(Hundreds.toLocaleString()) // 10,000,000
// console.log(Hundreds.toLocaleString('en-IN')) // 1,00,00,000


// *********************** MATHS ***************************
// console.log(Math) //Object [Math] {}
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.3)) //4
// console.log(Math.round(4.6)) //5

// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.2)) //4
// console.log(Math.min(3,5,2,6,8)) //2
// console.log(Math.max(3,5,2,6,8)) //8

console.log(Math.random()) //0-1 ke bech me random value dega
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10))

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min)