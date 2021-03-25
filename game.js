/**
 * 
 * Create a text based game where the user's input determines their adventure.
 * 
 * Must use switch/es ***new requirement
 * Start with creating a character
 * Include a fight scene that uses 2 if/else statements
 * Must use at least 5 loops - include both for loops and while loops
 * Must use at least 2 functions
 * 
 * Challenge: Connect JS to HTML and display the text in the front-end and make it pretty :).
 * 
 */


let alertName= alert("You've waken up in Galaxy Evil Eye on planet Good Eye. Your mission is to get back to Earth.");
let promptChar= prompt("You must choose your avatar first. Your options are 'bad bunny', 'shrek' or 'hermoine granger'. Type in your selection. ");

    

   function startGame(){
       if (promptChar== "hermoine granger"){
           alert("You recall learning a spell in Hogwarts, 'Reternius Erathius', which teleports you back to Earth. You are back on Earth, good job!");
       }
       else if ((promptChar== "bad bunny") || (promptChar== "shrek")){
           let artifact= prompt("Let's get this journey started. Select your artifact of choice: 'sword', 'flashlight', 'laser pen'.");

           switch(artifact){
            case 'sword':
                alert("You've encountered an allien named Blue. If you want to continue, you must battle him.");
                sword1();
                break;
             case 'flashlight':
                 alert("You stand no chance, Nice try!");
                 break;
             case 'laser pen':
                 alert("You've encountered an allien named Blue. If you want to continue, you must battle him.");
                 break;
            default:
        }
       }
   }

   startGame();




   function sword1(){
       let swordBattle= alert("Blue has taking a stab at you and you are relentlessly attempting to fight back. You've got him on the ground.");
       let swordBattlePrompt= prompt("Will you make the final, killing stab (1) or attempt to make peace (2)? Select option 1 or 2.")
       if (swordBattlePrompt=="1"){
           alert("By killing blue, you've released a teleporting gas that has taken you back to Earth. Great job!");
       }
       else{
           alert("This was your chance to kill Blue. Now he has taking the final, killing stab on YOU. RIP");
       }
   }



   








    





