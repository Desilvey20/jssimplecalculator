// function calculator(){
//     console.log("calculating ... ");
//     let num1 = number(prompt("Enter the number"));

//     document.getElementById("calculationzone").innerHTML=` <p>${num1} * 10 = ${num1*10}</p>`;
// }
function calc(){
    var a = parseInt(document.getElementById("value 1").value);
    var b = parseInt(document.getElementById("value 2").value);
    var op = document.getElementById("operator").value;
    var calculate;

    if (op == "add"){
        calculate = a + b;
    } else if (op == "min"){
        calculate = a - b;
    } else if (op == "div"){
        calculate = a / b;
    } else if (op == "mul"){
        calculate = a * b;
    }


document.getElementById("result").innerHTML = calculate;

}