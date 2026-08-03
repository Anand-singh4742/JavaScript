// Stack and Heap are two different types of memory used in programming languages to store data.

// Stack - primitives are stored in stack memory. Stack memory is used for static memory allocation,
// which means that the size of the data is known at compile time. Stack memory is faster than heap memory because it is managed by the CPU and has a smaller size limit. 
// However, stack memory is limited in size and can lead to stack overflow errors if too much data is stored in it.

let myYoutubeName = "AnandandPragati"

let anotherName = myYoutubeName // copy of the value is stored in anotherName variable
anotherName = "BhaiKiPadhai" // changing the value of anotherName variable will not affect myYoutubeName variable

console.log(myYoutubeName) // will print "AnandandPragati"
console.log(anotherName) // will print "BhaiKiPadhai"


// Heap - non-primitives are stored in heap memory. Heap memory is used for dynamic memory allocation, which means that the size of the data is not known at compile time. 
// Heap memory is slower than stack memory because it is managed by the operating system and has a larger size limit. 
// However, heap memory can lead to memory leaks if not managed properly.

let User1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let User2 = User1 // reference of the object is stored in User2 variable
User2.email = "anand@gmail.com" // changing the value of email property in User2 will also affect User1 because both variables point to the same object in heap memory

console.log(User1.email) // will print "anand@gmail.com"
console.log(User2.email) // will print "anand@gmail.com"
