const marvel_heros = ["Thor", "Iron Man", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // ["Thor", "Iron Man", "Spiderman", Array(3)] -- dc_heros is added as a single element (an array) to marvel_heros
// console.log(marvel_heros[3]) // ["Batman", "Superman", "Flash"] -- Accessing the 4th element of marvel_heros, which is the dc_heros array
// console.log(marvel_heros[3][0]) // "Batman" -- Accessing the first element of the dc_heros array within marvel_heros

// const all_heroes = [...marvel_heros, ...dc_heros] // Concatenates both arrays -- Spread operator (...) is used to spread the elements of both arrays into a new array
// console.log(all_heroes) // ["Thor", "Iron Man", "Spiderman", "Batman", "Superman", "Flash"]

// const all_heroes = marvel_heros.concat(dc_heros) // Concatenates both arrays
// console.log(all_heroes) // ["Thor", "Iron Man", "Spiderman", "Batman", "Superman", "Flash"]
// console.log(marvel_heros) // ["Thor", "Iron Man", "Spiderman"] -- Original array remains unchanged

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(2) // Flattens the array to a depth of 2 -- Deapth nahi pata toh infinity use kar sakte hai
console.log(real_another_array) // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] -- All nested arrays are flattened to a single level   
// flat returns a new array and does not modify the original array
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray("Anand")) // false -- Checks if the given value is an array
console.log(Array.from("Anand")) // ["A", "n", "a", "n", "d"] -- Creates a new array from an array-like or iterable object
console.log(Array.from({name: "Anand"})) // interesting -- key ya value specifically batana padta hai warna empty list deta hai

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))
//A set of elements to include in the new array object. Returns a new array from a set of elements.
