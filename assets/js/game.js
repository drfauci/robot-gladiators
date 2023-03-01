
var playerName = window.prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;


// you can also log multiple variables at once like this 
console.log (playerName, playerHealth, playerAttack);


var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    
    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");


    // subtract the value of the 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked, " + enemyName + " now has " + enemyHealth + " health remaining. "
    );
   
    // subtract the value of 'enemyAttack' from the value of 'playerHelth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
   
    // log a resulting message to the console so that we know that it worked
    console.log (
        enemyName + " attacked " + playerName + " ... " + playerName + " now has " + playerHealth + " health remaining. "
    )
   
    // check enemy's health
     if (enemyHealth <= 0 ) {
        window.alert(enemyName + " has died!");
     }
     else {
        window.alert(enemyName + " still has " + enemyHealth + " health left ");
     }
    
     // check players health
    if (playerHealth <= 0 ) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + "health left.")
    }
    
};
fight();