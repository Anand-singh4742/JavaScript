const Account_Id = 120325
let account_Email = "anand@gmail.com"
var account_Password = "123456"
account_City = "Jaipur" // This will create a global variable if not declared with var, let, or const
let Account_State

// Account_Id = 1122 //not allowed because it is a constant variable
// will throw an TypeError: Assignment to constant variable.

account_Email = "pragati@gmail.com"
account_Password = "654321"
account_City = "Delhi" // This will update the global variable

console.table([Account_Id, account_Email, account_Password, account_City, Account_State]) 
//tabular format me data mil jayega with index and values

/*
Prefer not to use var because it is function scoped and can lead to unexpected behavior. 
Use let and const for block scoping and better code maintainability.
*/

//cont = constant value
// var and let are used for variable declaration 
// but var is function scoped and let is block scoped.