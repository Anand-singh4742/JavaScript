// const TinderUser = new Object // Singleton object
const TinderUser = {} // Non-Singleton Object 

TinderUser.id = "143"
TinderUser.name = "Anand Singh"
TinderUser.isLoggedIn = false
// console.log(TinderUser)

const RegularUser = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "Anand",
            lastname : "Singh"
        }
    }
 }
// console.log(RegularUser)
// console.log(RegularUser.fullname)
// console.log(RegularUser.fullname.username)
// console.log(RegularUser.fullname.username.firstname) //esse nested object ke ander ki values access kar sakte hai

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = {obj1, obj2}
const obj4 = {5:"e", 6:"f"}
// const obj3 = Object.assign({},obj1,obj2,obj4) //assign function target object me source objects add on kar deta hai -- Object.assign(target,source)
const obj3 = {...obj1, ...obj2, ...obj4} // spread wala way bhi use kar sakte
// console.log(obj3) //wahi same array wali problem object ke ander object


const User = [
    {
        id: "1",
        name: "Anand"
    },
    {
        id: "2",
        name: "Pragati"
    },
    {
        id: "3",
        name: "Prachi"
    }
]
console.log(User[1].name)  // jab database se data fetch karte hai toh bhout baar data array ke ander choote object ke packets bana ke bhejta

console.log(TinderUser);
console.log(Object.keys(TinderUser)); //sirf keys chahiye hau kisi object se toh -- output array ke form me aata so that further we can modify it
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser)); // array ke ander array sub entries me data deta [[data1],[data2],[data3]]

console.log(TinderUser.hasOwnProperty('name')) // ye uss object me paricular property hai ki nahi wo batata -- output --> true
console.log(TinderUser.hasOwnProperty('firstname')) // output --> false
