// var numbers = []; // method 1
// console.log('numbers array is' + numbers)

// let numbers = [1, 2, 3, 4, 5];
// console.log (numbers);

// let fruits = ['Apple', 'Banana', 'Grapes'];
// console.log (fruits);

// let cars = new Array('Ford', 'Toyota', 'Mercedes');
// console.log (cars);

//  console.log (cars[1]);
//   cars[1] = 'Honda';
//  console.log (cars[1]);
//  console.log (typeof cars);
//  console.log (cars);

// fruits.push('cherry');
// console.log (fruits);
// console.log (fruits.length);


 let fruits = ['Apple', 'Banana', 'Grapes'];

// fLen = fruits.length;

// for (i = 0; i < fLen; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits instanceof Array);


// let index;
// for(index in fruits){
//     console.log (index, fruits[index]);
// }

// An array declared with const cannot be reassigned:

//const numbers = [3,4];
// numbers = [];

// we can still change the elements of a constant array.
// Const does not stop us from modifying contents of an array.

// Since array is an object, we can see all the properties 
// and methods defined to the array.

// methodds to add element to an array at
   // 1. End
        // numbers.push(5,6);
        // console.log(numbers);
   // 2. Beginning
       // numbers.unshift(1,2);
        // 3. Middle
        
        // between 2, 3 we canto add an element.
        // numbers.splice(2,0,'a','b');
        // console.log(numbers);
        
// Finding elements (premitve types) in an array.

    // indexOf is used to find index of an element in an array.
    // it returns -1 if the element does not exist.
    // its return the index of the element

    // const numbers = [1,2,3,4];
    // console.log(numbers.indexOf('a')); //return -1.

    // console.log(numbers.indexOf(1)); //return 0.
    // console.log(numbers.indexOf('1')); //return -1.

    // lastIndexOf
    const numbers = [1,2,3,1,4];
    console.log(numbers.indexOf(1)); //return 0.
    console.log(numbers.lastIndexOf(1)); //return 0.


    // To check an element exists in an array
    console.log(numbers.indexOf(1) != -1);

    // includes
    // we have a new method for the above purpose
    console.log(numbers.includes(1));

    // To begin the search from specific index
    console.log(numbers.indexOf(1,2)); //return 0.


// for(x of fruits){
//     console.log(x)
// }