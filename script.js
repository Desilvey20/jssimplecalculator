// function greet(name){
//     return "hello " + name + "!"
// }

// console.log(greet("David"));

// let greet = function(name){
//     return "Hello " + name + "!"
// }

// console.log(greet("David"));

// function displayName(studentName){
//     document.write(`
//     <h2>student list</h2>
//     <p>Student Name: ${studentName} </p>
//     <hr>
//     `);
// }

// function multiplybythree(num1){
//     return num1 *3;
// }

// console.log(multiplybythree(3));

//function sum(){
//    console.log(10+10);
//}
//sum()

//let sum2 = function(){
 //   console.log(3+3);
//}
//sum2 ();
// function sum(num1,num2) {
//     console.log(num1+num2);
// }
// sum(10,10);
// sum(3,3);
// sum(6,2);

// function sum(num1,num2){
//     return num1+num2;
// }

// let result= sum(10,10);
// console.log(result);
// sum(3,3);
// sum(6,2);

let subtotal =0;

function addcart(price){
    return subtotal += price;
}

function taxescalculation(subtotal){
    return 1.11*subtotal;

}

subtotal = addcart(200);
subtotal = addcart(400);
subtotal = addcart(600);

console.log(` The subtotal is: ${subtotal}`);

const total = taxescalculation(subtotal);
console.log(`The total is: ${total}`);