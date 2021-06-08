let role;
    role='RegisterUser';
switch(role){
    case 'guest' :
        console.log("Guest User !");
        break;
    case 'moderator' :
        console.log("Moderator User !");
        break;
   
    case 'Administrator' :
        console.log("Unknown User !");
        break;

    default :
        console.log('Restricted Area')
}
