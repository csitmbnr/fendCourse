// if hour is between 6 am and 12:00 pm: Good Morning !
// if it is between 12 pm and 6 pm: Goof Afernoon!
// Otherwise Good Evening !
let hours =10;

if (hours >= 6 && hours < 12){
console.log("Good Morning !");
}else if(hours >= 12 && hours < 6){
    console.log("Good Afternoon !");
}else{
    console.log("Good Evening !");
}
