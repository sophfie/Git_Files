function unit5() {

var user = prompt("Is it rainy, sunny or cloudy today?").toLowerCase() ;

var athletic = true
var energized = true

switch(user) {
    case 'sunny':
        if (athletic || energized) {
            console.log("You'll do great!")
        }
        else {
            console.log("The weather is on your side")
        }
        
        break;
        
    case 'rainy':
       
        if (athletic && energized) {
            console.log("Your abilities will save you!")
            }
        else {
            console.log("uh oh")}
        
        break;
        
     case 'cloudy':
        if (!athletic && !energized) {
        console.log("you're doomed!")
        }
        else {
            console.log("good luck!")
        }
        
        break;
        
    default:
        console.log("please choose between rainy, sunny or cloudy!");
}

 };
