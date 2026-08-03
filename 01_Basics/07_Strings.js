const FirstName = "Anand"
const LastName = "Singh"

// console.log(FirstName + " " + LastName) // Anand Singh
// using back ticks and ${} to concatenate strings - String Interpolation
console.log(`Hello my Name is ${FirstName} ${LastName}.`) // Hello my Name is Anand Singh.

//Another way to declare strings is by using the String constructor function. However, 
// it is not recommended to use this method as it creates a string object instead of a primitive string value.
const myName = new String("Anand-Singh") // creates a string object

console.log(myName[0]) // A
console.log(myName.__proto__) // String {0: 'A', 1: 'n', 2: 'a', 3: 'n', 4: 'd', 5: ' ', 6: 'S', 7: 'i', 8: 'n', 9: 'g', 10: 'h', length: 11, …}

console.log(myName.length) // 11
console.log(myName.toUpperCase()) // ANAND SINGH
console.log(myName.charAt(2)) // a
console.log(myName.indexOf("a")) // 2

const newString = myName.substring(0, 6) // returns a new string from index 0 to 5 (6 is not included)
console.log(newString) // Anand-

const anotherString = myName.slice(0, 6) // returns a new string from index 0 to 5 (6 is not included)
console.log(anotherString) // Anand-
const str1 = myName.slice(-8,-4) // returns a new string from index -8 to -5 (-4 is not included)
console.log(str1) // nd-S

const str2 = "    Anand     "
console.log(str2)
console.log(str2.trim()) // removes whitespace from both ends of the string and returns a new string 
//trim(start,end)

const url = "https://anand.com/Anand%20Singh"
console.log(url.replace('%20','-')) // https://anand.com/Anand-Singh

console.log(url.includes('Singh')) // true
console.log(url.includes('Singh', 20)) // true - starts searching from index 20
console.log(url.includes('Gupta')) // false

console.log(url.split('/')) // ["https:", "", "anand.com", "Anand%20Singh"] - splits the string into an array of substrings based on the specified separator.

// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//HTML, CSS, JavaScript Sabke articles hai yaha and easy to understand hai... must try !!
