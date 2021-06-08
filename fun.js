
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
//     // anotherPrint(); // recursion
// }
// anotherPrint();

// function functionname(arg1, arg2) {
//     //code to be executed
//  }
// Using Function Parameters and return Keyword.
// function add(a, b){
//     // console.log (a + b);
//     return (a + b)
// }

// let result = add(2, 4);
// console.log (result);

// function printNumber(number1, number2) {
//     var max = number1;
//     if (number2 > number1)
//         max = number2;
//     console.log('Maximal number: ' + max);
// }
// printNumber(-5, -10);
// printNumber(2 + 3, 10);
// printNumber(100, 200);


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
// countVowels(myName);