console.log("JS Strings Tutorial")

let x="kaushik"
console.log(x[0])
console.log(x.length)

let y="tushar"
console.log(x,"and",y,"are friends")
console.log(`${x} and ${y} are friends`)

let a="PowerLiFting"
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.length)
console.log(a.slice(1,5))

console.log(a.replace("LiF","Strip"))
console.log(a.concat(y," and ",x))

//string is immutable
console.log(a)