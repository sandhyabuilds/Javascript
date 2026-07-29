// For each loop

const coding = ["js", "ruby", "py", "cpp"]

// coding.forEach(function (item) {
//     console.log(item);

// })

// coding.forEach((item) => {
//     console.log(item);

// })

// function printme(item) {
//     console.log(item);

// }
// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);

// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFile);

})