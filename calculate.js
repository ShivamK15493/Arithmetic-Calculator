let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");

const add = document.getElementById("addition");
const sub = document.getElementById("subtraction");
const mul = document.getElementById("multiply");
const div = document.getElementById("division");

let answer = document.getElementById("ans");

function Addition()
{
    let result = parseInt(num1.value) + parseInt(num2.value);
    document.getElementById("ans").innerText=result;
}
function Subtraction()
{
    let result = parseInt(num1.value) - parseInt(num2.value);
    document.getElementById("ans").innerText=result;
}
function Multiplictaion()
{
    let result = parseInt(num1.value) * parseInt(num2.value);
    document.getElementById("ans").innerText=result;
}
function Divide()
{
    let result = parseInt(num1.value) / parseInt(num2.value);
    document.getElementById("ans").innerText=result;
}
