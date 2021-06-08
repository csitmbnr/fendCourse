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


//    let fruits = ['Apple', 'Banana', 'Grapes'];
//     var fruits1 = ['Apple', 'Banana', 'Grapes'];
//    fLen = fruits.length;
//   console.log('no of elements in array object fruits'+ fLen)
//   console.log(fruits);
 
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits instanceof Array);

// for .. in loop gets the indexs of elements of Array Object .
// or to iterarte over properties of Object.
// let i;
// for(i in fruits){
//     console.log (i, fruits[i]);
// }

// An array declared with const cannot be reassigned:

// const numbers = [3,4];
// console.log(numbers);

// we can still change the elements of a constant array.
// Const does not stop us from modifying contents of an array.

// Since array is an object, we can see all the properties 
// and methods defined to the array.

// methodds to add element to an array at
   // 1. End
        // numbers.push(5,6);
        // console.log(numbers);
   // 2. Beginning
    //    numbers.unshift(1,2);
    //    console.log(numbers);
        // 3. Middle
        
        // between 2, 3 we canto add an element.
        //  numbers.splice(2,0,'a','b');
        //  console.log(numbers);
        
    // Finding elements (premitve types) in an array.

    // indexOf is used to find index of an element in an array.
    // it returns -1 if the element does not exist.
    // its return the index of the element

    //  const numbers = [1,2,3,4];
    //  console.log(numbers.indexOf('a')); //return -1.

    //  console.log(numbers.indexOf(1)); //return 0.
    //  console.log(numbers.indexOf('1')); //return -1.

    // lastIndexOf
    // const numbers = [1,2,3,1,4];
    // console.log(numbers.indexOf(1)); //return 0.
    // console.log(numbers.lastIndexOf(1)); //return 0.


    // To check an element exists in an array
//    console.log(numbers.indexOf(1) != -1);

// const numbers = [1,2,3,1,4];
    // console.log(numbers.indexOf(1)); //return 0.


// indexIf accepts second parameter, startfrom
    // const numbers = [1,2,3,1,4];
    // console.log(numbers.indexOf(1,2)); 
    //return index 3.


    // includes
    // we have a new method for the above purpose
//    console.log(numbers.includes(1));

    // To begin the search from specific index
   // console.log(numbers.indexOf(1,2)); //return 0.

    // The pop() method removes the last element from an array:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();              
// Removes the last element ("Mango") from fruits
// console.log(fruits);

// The push() method adds a new element to an array (at the end):
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
// console.log(fruits);




//    How to Recognize an Array
//    A common question is: How do I know if a variable is an array?
//    The problem is that the JavaScript operator typeof returns "object":
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(typeof fruits);    
 // returns object
//    To solve this problem ECMAScript 5 defines a new method Array.isArray():
// console.log(Array.isArray(fruits));   // returns true


// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
//  var fruits = ["Banana", "Orange", "Apple", "Mango"];
//  console.log(fruits.toString());

// to iterate over item or elements of an array.
// no need to use index to get the value of element
for(x of fruits){
    console.log(x)
}
