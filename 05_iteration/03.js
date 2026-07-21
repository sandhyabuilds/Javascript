// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);

}

let myArray = ["flash", "superman", "batman"]
for (const arr of myArray) {
    // console.log(`"My array contain :" ${arr}`);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`"Each char is :"${greet}`);

}


// map

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Jap', "Japan")
map.set('In', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);

}

// const myObject = {
//     game1: "free fire",
//     game2: "BGMI"
// }
// for (const [key] of myObject) {
//     console.log(key);

// }
