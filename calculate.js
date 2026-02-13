let num1 = document.getElementById("number1"); // Accessing input 1 given by the user
let num2 = document.getElementById("number2"); // Accessing input 2 given by the user

const add = document.getElementById("addition");    // Accessing addition button
const sub = document.getElementById("subtraction"); // Accessing Subtraction button  
const mul = document.getElementById("multiply");    // Accessing Multiplication button
const div = document.getElementById("division");    // Accessing Division button

let answer = document.getElementById("ans");

add.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) + parseFloat(num2.value); // Addition of two input
    document.getElementById("ans").innerText=result; // Result of the Additon given by the user 
})

sub.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) - parseFloat(num2.value); // Subtraction of two input
    document.getElementById("ans").innerText=result; // Result of the Subtraction given by the user 
})

mul.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) * parseFloat(num2.value); // Multiplication of two input
    document.getElementById("ans").innerText=result;  // Result of the Multiplication given by the user
})

div.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) / parseFloat(num2.value); // Division of two input
    document.getElementById("ans").innerText=result; // Result of the Division given by the user
})

let resett = document.getElementById("rese");
resett.addEventListener("click",() =>
{
    location.reload();  // Reload the page
})



