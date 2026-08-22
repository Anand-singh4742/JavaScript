function SayMyName(){
    console.log("A")
    console.log("N")
    console.log("A")
    console.log("N")
    console.log("D")
}
//SayMyName -- reference 
// SayMyName() -- execution
SayMyName()


function addTWOnumbers(num1,num2){ //function ke defination me parameters pass haute hai
    console.log(num1 + num2)
}
function addTWOnumbers(num1,num2){ 
    //let sum = num1 + num2;
    // return sum
    return num1 + num2
    console.log("Anand"); //unreachable code -- return ke baad kuch bhi execute nahi hauta hai
    
}
const sum = addTWOnumbers(2,10) // and function call me haam arguments pass karte hai
console.log(`The sum of two numbers is ${sum}.`);

function loginUserMessage(username = "Anand"){ // ye "default parameter" hai
    if(username === undefined){ //if(!username){} -- ye bhi use kar sakte !
        console.log("Please enter a username")
        return //taki baki return function use me naa aaye execute he na hau
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Pragati"))
console.log(loginUserMessage()) //undefined just logged in -- -- kuch pass nahi hua hai so jo default parameter hai uski value le lega
console.log(loginUserMessage("")) //just logged in

//Incase of functions where multiple arguments area passed 
// function calculateCartPrice (...num1){ // ... --> ye REST Operator hai jisse n number of default parameters ki tareh treat kar sakte
function calculateCartPrice (val1, val2,...num1){ // iss tareh val1 ko first value assign hau jayegi same way val2 ko second and num1 ko bachi hui piche ki values
    return num1
}
console.log(calculateCartPrice(200,400,600,800)) // array ke form me saare element milenge



// object ko function ke through kaise use karenge
const user = {
    name : "Anand",
    price : 999
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
} 
// handleObject(user) //koi bhi object le sakte hai
handleObject({        // -- sidha function call me value de sakte object ki
    name : "Pragati",
    price : 1000
})



// Array ko function ke through kaise use karenge
const myNewArray = [100,200,300,400]
function returnSecondValue(anyArray){
    return anyArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,500])) //-- sidha function call me value de sakte array ki