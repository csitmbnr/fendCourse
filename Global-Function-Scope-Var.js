//Global Scope Variables in JavaScript: 

var scriptLang = 'JavaScript';
myLearning();
function myLearning(){
    console.log('i enrolled in ' + scriptLang);
}

// Function Scope Variables in JavaScript:

myLearning();
function myLearning(){
    var scriptLang = 'ReactJs';
    console.log('i enrolled in ' + scriptLang);
}
console.log('i also enrolled in ' + scriptLang);