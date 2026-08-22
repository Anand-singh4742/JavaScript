const course = {
    courseName: "JS in Hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh Sir"
}
console.log(course.courseInstructor)

//aagar courseInstructor ka pata karna hau toh baar baar console.log(course.courseInstructor) likhna padega and yahi chej multipal baar 
// karne paad jaye toh kafi dirty and time consuming hauga

//Here comes the De-Structure of Object comes in 
const {courseInstructor} = course; // syntax to use de-structure
const {courseName: name} = course; // aagar property ka naam bada hai we can further simplify and rename it in simple way...!!
console.log(courseInstructor)
console.log(name)


//In React 
// const navbar = (props.company) => {    // baar baar props. use karna padta hai so react me bhi esse de-structure use karte
// const navbar = ({company}) => {        //same concept haam react me bhi use karte hai baar baar props.object ki jageh haam {} braces me object name he de dete hai

// }
// navbar(company = "Anand") /