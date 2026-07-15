
// var c = 300             // global scope
let a = 300

if (true) {
    let a = 10
    const b = 20          // local scope
    // c = 30
    // console.log("INNER : ", a);

}

// console.log(a);
// // console.log(b);
// // console.log(c);


function one() {
    const username = "sandhya"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    two()
}
//one()

// if (true) {
//     // const username = "Sandhya"
//     if (username === "Sandhya") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     //     console.log(website);
// }
// // console.log(username);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addone(5)
function addone(num) {
    return num + 1
}


addTwo(2)
const addTwo = function (num) {        /// cannot access addTwo before initialization
    return num + 2
}
