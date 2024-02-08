console.log("JS tutorial")

// function power(name) {
//     console.log(name + " is strong")
//     console.log(name + " is very very strong")
//     console.log(name + " can lift heavy weights")
//     console.log(name + " is a powerlifter")
// }

// power("Gavin")

function sum(a,b,c=3)
{
    // console.log(a+b)
    return a+b+c
}

result=sum(1,6)
console.log("the output is "+result)
result=sum(1,6,5)
console.log("the output is "+result)


const fun1=(x)=>{
    console.log("this is an arrow function",x)
}

fun1(23)
fun1(34)
fun1(45)