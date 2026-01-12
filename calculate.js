let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");

const add = document.getElementById("addition");
const sub = document.getElementById("subtraction");
const mul = document.getElementById("multiply");
const div = document.getElementById("division");

let answer = document.getElementById("ans");

add.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) + parseFloat(num2.value);
    document.getElementById("ans").innerText=result;
})

sub.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) - parseFloat(num2.value);
    document.getElementById("ans").innerText=result;
})

mul.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) * parseFloat(num2.value);
    document.getElementById("ans").innerText=result;
})

div.addEventListener("click",() =>
{
    let result = parseFloat(num1.value) / parseFloat(num2.value);
    document.getElementById("ans").innerText=result;
})

let resett = document.getElementById("rese");
resett.addEventListener("click",() =>
{
    location.reload();
})


