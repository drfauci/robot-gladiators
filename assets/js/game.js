// game states
//"WIN" - player robot has deafeated all enemy-robots
// * fight all enemy-robots
// * defeat each enemy-robot
// "LOSE" - player robot's health is 0 or less
var playerName = window.prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple variables at once like this 

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log (playerName, playerHealth, playerAttack);
///console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index ");
}

var fight = function(enemyName) {
    
    //repeat and execute as long as the enemy-robot is still alive
    while(enemyHealth > 0) {

    
    
    // alert players that they are starting the round
    
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter FIGHT or SKIP to choose.")
     
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT" ) {

        // remove enemy's health by subtracting the amount set in the playerAttack variable 
        enemyHealth = enemyHealth - playerAttack;
        
        console.log(
        playerName + " attacked, " + enemyName + " now has " + enemyHealth + " health remaining. " 
        );
        
        //check enemy's health 
        if (enemyHealth <= 0 ) {
            window.alert(enemyName + " has died ");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left ");
        }
        
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + "..." + playerName + " now has " + playerHealth + " health remaining. "
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died ");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        
        //confirm player wants to skip
        var confirmSkip = window.confirm("are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. goodbye!");

            //subtract money from the playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        //if no (false), ask question again by running fight() again
        else {
            fight()
        }

    } else {
        window.alert("you need to choose a valid option. try again!");
    }
}
       
    
    

    // subtract the value of the 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    

    // log a resulting message to the console so we know that it worked.
   
   
    // subtract the value of 'enemyAttack' from the value of 'playerHelth' and use that result to update the value in the 'playerHealth' variable
   
    // log a resulting message to the console so that we know that it worked
    
      
   
    // check enemy's health
    
    
     // check players health
   
    
        }
  for(var i = 0; i < enemyNames.length; i++) {
                var pickedEnemyName = enemyNames[i];
                enemyHealth = 50;
                fight(pickedEnemyName);
             }