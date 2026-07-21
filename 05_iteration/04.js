// for in loop 

const myObject = {
    game1: "Free Fire",
    game2: "Criminal Case"
}
for (const key in myObject) {
    // console.log(`${key} is ${myObject[key]}`);

}

const programming = ["js", "cpp", "swift", "py", "rb"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Jap', "Japan")

for (const key in map) {
    console.log(key);
}
