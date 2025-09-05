let num = 10;
let num2 = 20;
function click(num, num2) {
let load =setTimeout(()=>{
    console.log("loading...")
})
let mult = setTimeout(()=>{
    clearTimeout(load)
    console.log("multi:",num*num2)
},1000)
setTimeout(()=>{
    clearTimeout(mult);
    console.log("add number:",num+num2)
},2000)

}
click(10, 20)