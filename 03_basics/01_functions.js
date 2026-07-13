function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("h");
    console.log("y");
    console.log("a");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result

// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}
const result = addTwoNumbers(3, 4)

// console.log("Result :", result);


function loginUserMessage(username) {
    if (username === undefined) {                   //(!username)
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sandhya"));
// console.log(loginUserMessage());


const user = {
    username: "sandhya",
    price: 199,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "Sandhya",
    price: 399
})


const myNewArr = [200, 300, 400]

function returnSecondvalue(getArr) {
    return getArr[1]
}

// console.log(returnSecondvalue(myNewArr));
// console.log(returnSecondvalue([200, 300, 400]));

