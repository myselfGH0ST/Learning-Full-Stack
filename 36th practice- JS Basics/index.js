console.log("this is js tutorial")

//conditional statements

let age = 15
let a = 3, b = 2

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

if (age >= 18) {
    console.log("you can drink")
}
else {
    console.log("you cannot drink")
}

let x = 6, y = 8
let c = (x > y) ? (x - y) : (y - x)
console.log(c)

// loops

// a = 1
// for (let i = 0; i < 20; i++) {
//     console.log(a + i)
// }

let obj = {
    name: "kaushik",
    age: 20,
    role: "student",
    company: "nill"
}

// for (const i in obj) {

//     const element = obj[i];
//     console.log(i,element)
// }

for (const i of "kaushik") {
    console.log(i)
}

// let i=1
// while (i<8) {
//     console.log(i)
//     i++
// }


let i=6
do {
    console.log(i)
    i++
} while (i<6);