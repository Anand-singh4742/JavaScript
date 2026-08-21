// 2 ways to declare the objects
// (1) literal 
// (2) Constructor -- singleton 

// Object.create // Constructor Method

const mySym = Symbol("key1")

// Object Literals
const JsUser = {
    name: "Anand",
    "Full_Name": "Anand Singh",   // JsUser.Full_Name se access kar he nahi payenge
    [mySym]: "myKey1",   // symbol hai toh square bracket me rakhna padega warna ye uskey data type ko string ki tareh treat karega 
    age: 21,
    email: "anand@google.com",
    location: "Delhi NCR",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}
// console.log(JsUser.location) // Delhi NCR
// console.log(JsUser["location"]) // Delhi NCR
// console.log(JsUser["Full_Name"]) // Anand Singh --- "" -- me likhna padta hai instance. ka alternative method
// console.log(JsUser[mySym]) // Access bhi sqaure bracket me he hauga 
// console.log(typeof(mySym)) // symbol

JsUser.email = "anand@adobe.com"
// Object.freeze(JsUser) // Object ki values ko freeze kar deta hai koi change nai kar payega then unhey
JsUser.email = "anand@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello!! Anand...")
}
// console.log(JsUser.greeting) // ye abhi function nahi hai -- function execute nahi hua hai, uska reference aaya hai -- [Function(anonymous)]
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello!!, ${this.Full_Name}`) //same object ko reference karna hau toh haam "this" laga ke kar sakte 
}
console.log(JsUser.greetingTwo())