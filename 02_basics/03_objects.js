// singleton
// object create

// object literals  

const mySym = Symbol("Key1")

const JsUser = {
    "full name": "Sandhya",
    age: 19,
    location: "Deoria",
    email: "sandhya@gamil.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Sunday"],
    [mySym]: "myKey1",
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "khushi@google.com"
// Object.freeze(JsUser)
// JsUser.email = "khushiVishwakarma@google.com"
// console.log(JsUser);


JsUser.greetings = function () {
    console.log("Hello JS users");

}
console.log(JsUser.greetings());

JsUser.greetingsTwo = function () {
    console.log(`Hello JS users, ${this.email}`);

}
console.log(JsUser.greetingsTwo());













