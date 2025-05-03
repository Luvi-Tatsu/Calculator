// console.log("Hello World");



// function add(){
//     const firstNum = prompt();
//     const secontNum = prompt();
//     ans = parseInt(firstNum) + parseInt(secontNum);
//     return console.log(ans); 
// }
// add()
let firstNumber = "";
let secondNumber = "";
let operator = 0;
let dote = 0;


const inputArea = document.querySelector(".inputArea")
const aC = document.querySelector(".aC");
aC.addEventListener("click",function (){
inputArea.textContent = "";
firstNumber = "";
secondNumber = "";
 operator = 0;
 dote = 0;

})

const changeOp = document.querySelector(".changeOp");
changeOp.addEventListener("click",function (){
    if(inputArea === Math.sign()){
    inputArea.textContent = Math.sign("-");}
})

const percentile = document.querySelector(".percentile");
percentile.addEventListener("click",function (){
     inputArea.textContent = "%";
     operator = 1;
})

const dev = document.querySelector(".dev");
dev.addEventListener("click",function (){
     inputArea.textContent = "/";
     operator = 2;
})

const seven = document.querySelector(".seven");
seven.addEventListener("click",function (){
     
     inputArea.textContent += "7";
     if(operator === 0){
     firstNumber += "7";}
     else {secondNumber += "7";}
})

const eight = document.querySelector(".eight");
eight.addEventListener("click",function (){
     inputArea.textContent += "8";
     if(operator === 0){
     firstNumber += "8";}
     else {secondNumber += "8";}
})
const nine = document.querySelector(".nine");
nine.addEventListener("click",function (){
     inputArea.textContent += "9";
     if(operator === 0){
     firstNumber += "9";}
     else {secondNumber += "9";}
})
const mul = document.querySelector(".mul");
mul.addEventListener("click",function (){
     inputArea.textContent = "*";
     operator = 3;
})
const four = document.querySelector(".four");
four.addEventListener("click",function (){
     inputArea.textContent += "4";
     if(operator === 0){
     firstNumber += "4";}
     else {secondNumber += "4";}
})
const five = document.querySelector(".five");
five.addEventListener("click",function (){
     inputArea.textContent += "5";
     if(operator === 0){
     firstNumber += "5";}
     else {secondNumber += "5";}
})
const six = document.querySelector(".six");
six.addEventListener("click",function (){
     inputArea.textContent += "6";
     if(operator === 0){
     firstNumber += "6";}
     else {secondNumber += "6";}
})
const sub = document.querySelector(".sub");
sub.addEventListener("click",function (){
     inputArea.textContent = "-";
     operator = 4;
})
const one = document.querySelector(".one");
one.addEventListener("click",function (){
     inputArea.textContent += "1";
     if(operator === 0){
     firstNumber += "1";}
     else {secondNumber += "1";}
})
const two = document.querySelector(".two");
two.addEventListener("click",function (){
     inputArea.textContent += "2";
     if(operator === 0){
     firstNumber += "2";}
     else {secondNumber += "2";}
})
const three = document.querySelector(".three");
three.addEventListener("click",function (){
     inputArea.textContent += "3";
     if(operator === 0){
     firstNumber += "3";}
     else {secondNumber += "3";}
})
const add = document.querySelector(".add");
add.addEventListener("click",function (){
     inputArea.textContent = "+";
     operator = 5;
})
const zero = document.querySelector(".zero");
zero.addEventListener("click",function (){
     inputArea.textContent += "0";
     if(operator === 0){
     firstNumber += "0";}
     else {secondNumber += "0";}
})
const dot = document.querySelector(".dot");
dot.addEventListener("click",function (){
     inputArea.textContent += ".";
     if(operator === 0 ){
     firstNumber += ".";}
      else{secondNumber += ".";}
})
const equals = document.querySelector(".equals");
equals.addEventListener("click",function (){
     if(operator === 4){
          firstNumber = parseInt(firstNumber);
          secondNumber = parseInt(secondNumber);
          let total = firstNumber - secondNumber;
     inputArea.textContent = `${total}`}
     else if(operator === 5){
          firstNumber = parseInt(firstNumber);
          secondNumber = parseInt(secondNumber);
          let total = firstNumber + secondNumber;
     inputArea.textContent = `${total}`}
     else if(operator === 3){
          firstNumber = parseInt(firstNumber);
          secondNumber = parseInt(secondNumber);
          let total = firstNumber * secondNumber;
     inputArea.textContent = `${total}`}
     else if(operator === 2){
          firstNumber = parseInt(firstNumber);
          secondNumber = parseInt(secondNumber);
          let total = firstNumber / secondNumber;
     inputArea.textContent = `${total}`}
     else if(operator === 1){
          firstNumber = parseInt(firstNumber);
          secondNumber = parseInt(secondNumber);
          let total = firstNumber % secondNumber;
     inputArea.textContent = `${total}`}

})
