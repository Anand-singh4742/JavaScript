// Dates

let myDate = new Date();
// console.log(myDate); // Current Date and Time but in a format that isn't readable 
// console.log(myDate.toString()); // Current Date and Time in a readable format
// console.log(myDate.toDateString()); // Current Date in a readable format
// console.log(myDate.toTimeString()); // Current Time in a readable format
// console.log(myDate.toLocaleString()); // Current Date and Time in a readable format based on your location
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2025,2,12);// Month is 0 based index
// let myCreatedDate = new Date(2025,2,12,11,11,11,11); // Year, Month, Date, Hours, Minutes, Seconds, Milliseconds
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date("2025-03-12"); // 3/12/2025, 5:30:00 AM
let myCreatedDate = new Date("03-12-2025"); // 3/12/2025, 12:00:00 AM
console.log(myCreatedDate.toLocaleString());


let TimeStamp = Date.now(); // Current Time in milliseconds
console.log(TimeStamp);
console.log(myCreatedDate.getTime()); // Time in milliseconds of the date created - from 1 January 1970 to the date created (12-03-2025)
console.log(Math.floor(Date.now() / 1000)); // Current Time in seconds since 1 January 1970 - smaller value becomes easy to compare

let newDate = new Date();
console.log(newDate.getFullYear()); // Current Year
console.log(newDate.getMonth()); // Current Month (0 based index)
console.log(newDate.getDate()); // Current Date
console.log(newDate.getDay()); // Current Day of the week (0 based index, 0 = Sunday, 1 = Monday, ..., 6 = Saturday)

// We can use string Interpolation to create a date string in a readable format
let dateString = `Today is ${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
console.log(dateString); // Today is 2/8/2026 and the time is 23:19:5

console.log(newDate.toLocaleDateString('default', {        //An object that contains one or more properties that specify comparison options.
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
}).split(' ').join(' ')) // Sunday, August 2, 2026
