 // 1. Arithmetic Operators with Example 
//   let x = 10;
//   let y = 3;
//   console.log(x + y);
//   console.log(x - y);
//   console.log(x * y);
//   console.log(x / y);
//   console.log(x % y);
//   console.log(x ** y);
  
  // 2. Increment Operators with Example
   // let x = 10;

    // console.log(++x);
    
    // console.log(x++);
    // console.log(x);

    // Decrement
//  console.log(--x);
    
    //  console.log(x--);
    //  console.log(x);

// 3. Assignment Operators with Example
  //3.1  Assign (=) Operator:
  let x = 10;
  
  console.log(x);

//3.2  Add and Assignment (+=) Operator:
 let x = 10;
 x += 3;
 console.log(x);
//3.3  Substract and Assignment (-=) Operator:
 let x = 10;
 x -= 3;
 console.log(x);
//3.4  Multiply and Assignment (*=) Operator:
 let x = 10;
 x *= 3;
 console.log(x);
//3.5  Divide and Assignment (/=) Operator:
 let x = 10;
 x /= 3;
 console.log(x);
//3.6  Moulus and Assignment (%=) Operator:
 let x = 10;
 x %= 3;
 console.log(x);

// 4. Relational Operators.

  // 4.1- Greater than (>) Operator
     let a = 5, b = 4;
     console.log(a > b); //true
  // 4.2- Greater than or Equal to (>= ) Operator:
    let  a = 5, b = 8, c = 5;
    console.log(a >= b);//false
    console.log(a >= c)//true

 // 4.3- Less than (<) Operator
    let a = 5, b = 4;
    console.log(a < b);  //false

 // 4.4- Less than or equal to (<=) Operator
    let a = 5, b = 8, c = 5;
    console.log(a <= b);//true
    console.log(a <= c)//true

 // 4.5 Is equal to (==) Operator  [Lose Equality- Only Value not type, the one on the right gets automatically converted to type  as that of left one]

    let a = 5, b = 4;
    console.log(a == b); //false

    console.log(1 === 1);
    console.log('1' === 1);
    console.log(true === 1);


 // 4.6 Identical –equal and of the same type (===) Operator.[strict Equality- type  +  value]

    let a = 5, b = 5, c = "5";
    console.log(a === b); //true
    console.log(a === c); //false
 
    // 4.7 Not equal to (!=) Operator
    let a = 5, b = 4;
    console.log(a != b);//true
 // 4.8 Not equal to (!=) Operator
    let a = 5, b = 4, c = "5";
    console.log(a !== 5);//false
    console.log(a !== b);//true
    console.log(a !== c);//true
 
    




  // JavaScript const cannot be reassigned
//   const pi = 3.14;
//     pi = 4.4;
//   console.log(pi);

// explains the const contains the Block Scope.
// const x = 22;
//        {
//            const x = 90;
//            console.log(x);
//            {
//                const x = 77;
//                console.log(x);
//            }
//            {
//                const x = 45;
//                console.log(x);
//            }
//        }
//        console.log(x);

// function func() {

  
    // x is known here but not defined.
//     console.log('value of x here: ', x)
//     {
//         let x = 10;
//         x = x + 5;
//     }
//     // x is still known here and has a value.
//     console.log('value of x after for block: ', x)
// }
// x is NOT known here.
// func()

//Global Scope Variables in JavaScript: 
// Global Scope Variable in JavaScript.
// var scriptLang = 'JavaScript';
// myLearning();
// function myLearning(){
//     console.log('i enrolled in ' + scriptLang);
// }

// Function Scope Variables in JavaScript:

// myLearning();
// function myLearning(){
//     var scriptLang = 'ReactJs';
//     console.log('i enrolled in ' + scriptLang);
// }
// console.log('i also enrolled in ' + scriptLang);
// function myLearning()
// {
//     var i;
//     for(i=1; i<5 ; i++)
//     {
//     console.log('i=' + i);
//     }
//     console.log('i='+i);
// }
// console.log('i='+i);

// // let 

// function myLearning()
// {
//     var x;
//     for(let i=1; i<5 ; i++)
//     {
//     console.log('i=' + i);
//     }
//     console.log('i='+i);
// }
// console.log('i='+i);
// console.log('test1');

// console.log('test2');

// Example: Checking the data type of a Variable in JavaScript
 
// var or let to declare variables

// let firstName = 'Omar';
// let age = 18;
// let isApproved = false;
// // let lastName;
// let lastName;
// let selectedColor = null;


// console.log('firstName ' + typeof firstName);
// console.log('lasstName ' + typeof(lastName));
// console.log('age ' + typeof(age));
// console.log('isApproved ' + typeof(isApproved));
// console.log('selectedColor ' + typeof(selectedColor));

// datatype of variable can change at runtime

// let age = 19;
// console.log('age ' + typeof age);
// age = 'Hashim';
// console.log('age ' + typeof age);
// age = true;
// console.log('age ' + typeof age);



// default value for a variable is undefined
// let firstName;
// console.log(firstName);

// string is enclosed in single or double quotes.
// let firstName;
// firstName = 'Anas';
// console.log(firstName);

// assign value for a variable while declaring it.
// let firstName  = "Anas";
// console.log(firstName);

// declaring more than one variable of same type.
// let firstName, lastName;
// firstName = 'Anas';
// lastName = 'Ismail';
// console.log(firstName + ' ' + lastName);

// let firstName, lastName;
// firstName = lastName = 'Anas';
// console.log(firstName + ' ' + lastName);

// redelare a variable more than will not change its value
// var firstName;
// firstName  = 'Anas';
// var firstName;
// console.log(firstName);


//console.log(firstName + ' ' + lastName);

//console.log('hello world');
 //alert('Welcome to javascript developer track');

















// By default variable value is undefined.
// let soft;
// console.log(soft);

// string is enclosed in either single quote or double quote.
// let soft;
// soft = "CSIT";
// console.log(soft);


// let soft = "CSIT";
// console.log(soft);

//     let firstName,lastName;
//     firstName="Anas";
//     lastName = "Ismail";
//     console.log(firstName + " " + lastName);


//     let firstName,lastName;
//     firstName = lastName = "CSIT";
//     console.log(firstName + " " + lastName);

