
// function funcName(param1, param2){
//     //statments
// }
// function myFunction() {
//     console.log("This is a small function.");
// }
// myFunction();

//  you can call a function from another function.
// function print() {
//     console.log('Inside print');
// }
// function anotherPrint() {
//     console.log('Inside anotherPrint');
//      print();  
// }
//  anotherPrint(); // calling a function.

// function functionname(arg1, arg2) {
//     //code to be executed
//  }
// Using Function Parameters and return Keyword.
// function add(a, b){
//      console.log (a + b);
//     //return (a + b)
// }
// add(2,3);

// function add(a, b){
//    return (a + b)
// }

// // let result = add(2, 4);
// console.log(add(2,4));

// function printNumber(number1, number2) {
//     var max = number1;
//     if (number2 > number1)
//         max = number2;
//     console.log('Maximal number: ' + max);
// }
// printNumber(-5, -10);
// printNumber(2 + 3, 10);
// printNumber(100, 200);

// inside every function we can use an object 
//  called arguments
// function add(a,b){
//     let total = 0;
//     let value;
//     for(value of arguments){
//         total = total + value;
//     }
//    return (total)
// }

// let result = add(2,4,3,5,7);
// console.log(result);

// function printArguments() {
//     for (var i in arguments) {
//         console.log(arguments[i]);
//     }
// }
// printArguments(1, 2, 3, 4); // 1, 2, 3, 4


// var count = 0;
// function countVowels(name) {
//     for (var i = 0; i < name.length; i++) {
//         if (name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i] == "o" || name[i] == "u")
//             count = count + 1;
//     }
//     console.log("Hello " + name + "!!! Your name has " + count + " vowels.");
// }
// var myName = 'anas';
// console.log(countVowels(myName));


// Functions in JavaScript can be Nested
// function add() {
//     var counter = 0;
//     function plus() { counter += 1; }
//     plus();// Function Call.
//     return counter;
// }
// console.log(add());

// Function Overloading:
// JavaScript does not support function overloading 
// i.e. only one function with a specified name can exist in the same scope
// function printText(number, text) {
//     switch (2) {
//         case 1: console.log('Number :' + number); break;
//         case 2:
//             console.log('Number :' + number);
//             console.log('Text :' + text);
//             break;
//     }
// }
// printText(5); // Logs 5
// printText(5, 'JavaScript Tutorials'); 
// // Logs 5 and JavsScript Tutorials

// // Function Declaration
function walk(){
    console.log('walk');
}
// Function Expression
const run = function(){
    console.log('run');
};

// let move = run;
// run();
// move();

// function hoisting
// Function Declaration


walk(); // calling function.
function walk(){
    console.log('walk');
}

// Function Expression
// run();

//  in this case walk1 is named function
// Anonomus function-no name
run();
var run = function(a){
    console.log('inside functions'+ a);
};
console.log('run var contains ',run);
console.log('call fun ',run("hai"));
// an object in javascript contains key value pairs
const person = {
    name: 'Anas',
    walk() {console.log('walking')},
    talk(){console.log('talking')}
};
// Dot Notation
 person.name = 'Ammar';
 // Bracket Notation
 person['name'] = 'Hudaifa ibn yamaan';
 console.log(person);
 console.log(person.name);
 console.log(person.walk);
 person.walk();