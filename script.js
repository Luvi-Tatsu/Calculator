// console.log("Hello World");



// function add(){
//     const firstNum = prompt();
//     const secontNum = prompt();
//     ans = parseInt(firstNum) + parseInt(secontNum);
//     return console.log(ans); 
// }
// add()

const inputArea = document.querySelector(".inputArea")
const aC = document.querySelector(".aC");
aC.addEventListener("click",function (){
    inputArea.textContent = "";
})

const changeOp = document.querySelector(".changeOp");
changeOp.addEventListener("click",function (){
    if(inputArea === Math.sign()){
    inputArea.textContent = Math.sign(-"");}
})

const percentile = document.querySelector(".percentile");
percentile.addEventListener("click",function (){
     inputArea.textContent += "%";
})

const dev = document.querySelector(".dev");
dev.addEventListener("click",function (){
     inputArea.textContent += "/";
})

const seven = document.querySelector(".seven");
seven.addEventListener("click",function (){
     inputArea.textContent += "7";
})

const eight = document.querySelector(".eight");
eight.addEventListener("click",function (){
     inputArea.textContent += "8";
})
const nine = document.querySelector(".nine");
nine.addEventListener("click",function (){
     inputArea.textContent += "9";
})
const mul = document.querySelector(".mul");
mul.addEventListener("click",function (){
     inputArea.textContent += "*";
})
const four = document.querySelector(".four");
four.addEventListener("click",function (){
     inputArea.textContent += "4";
})
const five = document.querySelector(".five");
five.addEventListener("click",function (){
     inputArea.textContent += "5";
})
const six = document.querySelector(".six");
six.addEventListener("click",function (){
     inputArea.textContent += "6";
})
const sub = document.querySelector(".sub");
sub.addEventListener("click",function (){
     inputArea.textContent += "-";
})
const one = document.querySelector(".one");
one.addEventListener("click",function (){
     inputArea.textContent += "1";
})
const two = document.querySelector(".two");
two.addEventListener("click",function (){
     inputArea.textContent += "2";
})
const three = document.querySelector(".three");
three.addEventListener("click",function (){
     inputArea.textContent += "3";
})
const add = document.querySelector(".add");
add.addEventListener("click",function (){
     inputArea.textContent += "+";
})
const zero = document.querySelector(".zero");
zero.addEventListener("click",function (){
     inputArea.textContent += "0";
})
const dot = document.querySelector(".dot");
dot.addEventListener("click",function (){
     inputArea.textContent += ".";
})
const equals = document.querySelector(".equals");
equals.addEventListener("click",function (){
     inputArea.textContent += "";
})
