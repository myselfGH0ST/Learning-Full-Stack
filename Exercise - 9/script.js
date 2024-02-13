let x=Math.random();
console.log(x)

let a=prompt("enter First Number")
let b=prompt("enter Second Number")
let c=prompt("enter operation")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if(x>0.1)
{
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //wrong operation
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}