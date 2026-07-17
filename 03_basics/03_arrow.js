const user = {
    username: "sandhya",
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);


    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "sandhya"
//     console.log(this.username);     // this key is only use in object 

// }
// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);

// }
//chai()


const chai = () => {
    let username = "hitesh"
    console.log(this);

}
//chai()

const addTWO = (num1, num2) => (num1 + num2)

console.log(addTWO(3, 4));


