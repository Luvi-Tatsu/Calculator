
let firstNumber = "";
let secondNumber = "" ;
let operator = 0;
let dote = 0;
let total = 0;
let displayValue = "";
const inputArea = document.getElementById("inputArea");
 
// function display (){
//      inputArea.innerText = displayValue;
//      if (displayValue.length > 9){
//           inputArea.innerText = displayValue.substring(0,9);}}
// display();

const aC = document.querySelector(".aC");
aC.addEventListener("click",function (){
inputArea.textContent = "";
firstNumber = "";
secondNumber = "";
operator = 0;
dote = 0;})

const changeOp = document.querySelector(".changeOp");
changeOp.addEventListener("click",function (){
    firstNumber = (firstNumber * -1);
    secondNumber = (secondNumber * -1);
    inputArea.textContent = inputArea.textContent * -1;
})

const seven = document.querySelector(".seven");
seven.addEventListener("click",function (){
     inputArea.textContent += "7";
     if(operator === 0){
     firstNumber += 7;}
     else {secondNumber += 7;}})

const eight = document.querySelector(".eight");
eight.addEventListener("click",function (){
     inputArea.textContent += "8";
     if(operator === 0){
     firstNumber += 8;}
     else {secondNumber += 8;}})

const nine = document.querySelector(".nine");
nine.addEventListener("click",function (){
     inputArea.textContent += "9";
     if(operator === 0){
     firstNumber += 9;}
     else {secondNumber += 9;}})

const four = document.querySelector(".four");
four.addEventListener("click",function (){
     inputArea.textContent += "4";
     if(operator === 0){
     firstNumber += 4;}
     else {secondNumber += 4;}})

const five = document.querySelector(".five");
five.addEventListener("click",function (){
     inputArea.textContent += "5";
     if(operator === 0 ){
     firstNumber += 5;}
     else {secondNumber += 5; }})

const six = document.querySelector(".six");
six.addEventListener("click",function (){
     inputArea.textContent += "6";
     if(operator === 0){
     firstNumber += 6;}
     else {secondNumber += 6;}
})

const one = document.querySelector(".one");
one.addEventListener("click",function (){
     inputArea.textContent += "1";
     if(operator === 0){
     firstNumber +=1;}
     else {secondNumber += 1;}
})
const two = document.querySelector(".two");
two.addEventListener("click",function (){
     inputArea.textContent += "2";
     if(operator === 0){
     firstNumber += 2;}
     else {secondNumber += 2;}
})
const three = document.querySelector(".three");
three.addEventListener("click",function (){
     inputArea.textContent += "3";
     if(operator === 0){
     firstNumber += 3;}
     else {secondNumber += 3;}
})
const zero = document.querySelector(".zero");
zero.addEventListener("click",function (){
     inputArea.textContent += "0";
     if(operator === 0){
     firstNumber += 0;}
     else {secondNumber += 0;}})

const dot = document.querySelector(".dot");
dot.addEventListener("click",function (){ 
     if(!firstNumber.includes(".") && operator === 0){
     firstNumber += "."; inputArea.textContent += ".";}
     if(!secondNumber.includes(".") && operator != 0){secondNumber += "."; inputArea.textContent += "."}})

const equals = document.querySelector(".equals");
equals.addEventListener("click",function (){
     operand(firstNumber, secondNumber);})

const percentile = document.querySelector(".percentile");
percentile.addEventListener("click",function (){
     inputArea.textContent += " % ";
     if(operator === 0){operator = 1;}
     if(operator != 0 && secondNumber != ""){
          operand(firstNumber, secondNumber);
          operator = 1;
          inputArea.textContent += " % ";}})

const dev = document.querySelector(".dev");
dev.addEventListener("click",function (){
     inputArea.textContent += " / ";
     if(operator === 0){operator = 2;}
     if(operator != 0 && secondNumber != ""){
          operand(firstNumber, secondNumber);
          operator = 2;
          inputArea.textContent += " / ";}})

const mul = document.querySelector(".mul");
mul.addEventListener("click",function (){
     inputArea.textContent += " * "; 
     if(operator === 0){operator = 3;}
     if(operator != 0 && secondNumber != ""){
          operand(firstNumber, secondNumber);
          operator = 3;
          inputArea.textContent += " * ";}})

const sub = document.querySelector(".sub");
sub.addEventListener("click",function (){
     inputArea.textContent += " + ";
     if(operator === 0){operator = 4;}
     if(operator != 0 && secondNumber != ""){
          operand(firstNumber, secondNumber);
          operator = 4;
          inputArea.textContent += " - ";}})

     

const add = document.querySelector(".add");
add.addEventListener("click",function (){
     inputArea.textContent += " + ";
     if(operator === 0){operator = 5;}
     if(operator != 0 && secondNumber != ""){
          operand(firstNumber, secondNumber);
          operator = 5;
          inputArea.textContent += " + ";}})
          


function operand(){
     if(operator === 5){
          operator = 0;
           firstNumber = parseFloat(firstNumber);
           secondNumber = parseFloat(secondNumber);
          total = firstNumber + secondNumber;
          firstNumber = total;
          secondNumber = "";
          inputArea.textContent = `${total}`
          console.log(firstNumber);}

     
          else if(operator === 4){
          operator = 0;     
          firstNumber = parseFloat(firstNumber);
           secondNumber = parseFloat(secondNumber);
          let total = firstNumber - secondNumber;
          firstNumber = total;
          secondNumber = "";
          inputArea.textContent = `${total}`}
     
          else if(operator === 3){
          operator = 0;          
          firstNumber = parseFloat(firstNumber);
           secondNumber = parseFloat(secondNumber);
          let total = firstNumber * secondNumber;
          firstNumber = total;
          secondNumber = "";
          inputArea.textContent = `${total}`}
     
          else if(operator === 2){
          operator = 0;
          firstNumber = parseFloat(firstNumber);
          secondNumber = parseFloat(secondNumber);
          let total = firstNumber / secondNumber;
          firstNumber = total;
          secondNumber = "";
          inputArea.textContent = `${total}`}
     
          else if(operator === 1){
          operator = 0;
          firstNumber = parseFloat(firstNumber);
           secondNumber = parseFloat(secondNumber);
          let total = firstNumber % secondNumber;
          firstNumber = total;
          secondNumber = "";
          inputArea.textContent = `${total}`}
}




