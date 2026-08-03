// console.log(2 > 1)
// console.log(2 < 1)
// console.log(2 >= 1)
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log(2 == "2") // will print true because it is a loose comparison
console.log(2 === "2") // will print false because it is a strict comparison

console.log("2" > 1);
console.log("02" > 1);       
// typescript don't allow to compare string with number but javascript allow to compare string with number
// It gives unpredictable result because it will convert string to number and then compare it with number.

console.log(null > 0) // will print false
console.log(null == 0) // will print false
console.log(null >= 0) // will print true
// The reason is that an eqality check (==) and comaparision (>, <, >=, <=) work differently.
// Comparision convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.
// But equality check does not convert null to a number, so (2) null == 0 is false.

console.log(undefined > 0) // will print false
console.log(undefined == 0) // will print false
console.log(undefined >= 0) // will print false
// undefined is not equal to anything, even itself. So (1) undefined == 0 is false.
// Comparision with undefined always returns false. So (2) undefined >= 0 is false and (3) undefined < 0 is also false.