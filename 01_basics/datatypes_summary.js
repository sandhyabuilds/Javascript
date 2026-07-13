// ********** DATATYPES ************

// 1 => Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100     // return type = number
const scoreValue = 100.3   // return type = number

const name = "Sandhya"

const isLoggedIn = false   // return type = boolean
const outsideTemp = null   // return type = object
let userEmail;             // return type = undefined

const id = Symbol('123')   // return type = symbol
const anotherId = Symbol('123')   // return type = symbol

console.log(id === anotherId);

// const bigNumber = 3453622798975365646n  // Return type = bigint

// 2 => Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj =
{
    name: "Sandhya",
    age: 22,
}

// function declaration

function sayAbhay() {
    console.log("Abhay")

}                             // return type = object function 

sayAbhay() // function callx

const myFunction = function () {
    console.log("Hello world");
}

myFunction()

console.log(typeof name);



// **************************************************************

// Stack(Primitive) , Heap(Non primitive

let myYoutubename = "codewithsandhya"

let anothername = myYoutubename
anothername = "playwithsandhya"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "sandhya@gmail.com",
    upi: "hello@ybl"
}
let userTwo = userOne
userTwo.email = " hello@gmail.com"

console.log(userOne);
console.log(userTwo);



