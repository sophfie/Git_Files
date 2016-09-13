function unit4() {

var slaying = true

var youHit = Math.floor(Math.random() * 2)

var damageThisRound = Math.floor(Math.random()*5 + 1)

var totalDamage = 0

while (slaying) {
    
    if (youHit = 1) {
        console.log('Congratulations, you hit the dragon!')    
    totalDamage += damageThisRound; 
        if (totalDamage >= 4) {
            console.log('You slew the dragon!')
            slaying = false}
        else { var youHit = Math.floor(Math.random() * 2) }}
        
        
        
    else {console.log('Uh oh, the dragon defeated you!')}
    slaying = false}
 
 };
 
 