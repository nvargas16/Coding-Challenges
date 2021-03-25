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
//create character
let promptChar= prompt("You must choose your avatar first. Your options are 'bad bunny', 'shrek' or 'hermoine granger'. Type in your selection. ");



    

   function startGame(){
       if (promptChar== "hermoine granger"){
           alert("You recall learning a spell in Hogwarts, 'Reternius Erathius', which teleports you back to Earth. You are back on Earth, good job!");
       }
       else if ((promptChar== "bad bunny") || (promptChar== "shrek")){
           let artifact= prompt("Let's get this journey started. Select your artifact of choice: 'sword', 'flashlight', 'laser pen'.");


           //switch
           switch(artifact){
            case 'sword':
                alert("You've encountered an allien named Blue. If you want to continue, you must battle him.");
                sword1();
                break;
             case 'flashlight':
                 alert("You stand no chance. Nice try!");
                 break;
             case 'laser pen':
                 alert("You've encountered an allien named Blue. If you want to continue, you must battle him.");
                 laserpen();
                 break;
            default:
        }
       }
   }

   startGame();




   function sword1(){
       //fight scene
       let swordBattle= alert("Blue has taking a stab at you and you are relentlessly attempting to fight back. Choose your next move.");
       let swordBattlePrompt= prompt("Attempt to run away from Blue (1), attempt to talk to Blue and make peace(2) or take a stab at Blue (3).")
       if (swordBattlePrompt==="1"){
           alert("Blue has caught up to you and is angrier than ever. Now he is taking the final, killing stab on YOU. RIP");
       }
       else if (swordBattlePrompt==="2"){
           let swordBattlePrompt2= prompt("Blue is caught off guard by your efforts to speak to him and your calmness. He makes an attempt to talk back, but you realize he does not speak English. Do you attempt to speak Spanish (1) or take advantage of this moment and stab him(2)?");
           if (swordBattlePrompt2==- "1"){
               alert("You are so foolish to think aliens of Planet Good Eye speak Spanish. Now Blue is angry and stabbed you to death.");
           }
           else{
               alert("Great call! You've made the killing stab. By killing Blue, his corpse released a mystical gas that teleports you back to Earth as you breathe it in.");
           }
       }
       else if (swordBattlePrompt=== "3"){
           let stabPrompt= prompt("You slit Blue's arm! You notice Blue's right leg is green (1) and Blue's left leg is red(2). Where will you attack next?");
           //loop 1
           while (stabPrompt=== "1"){
               alert("Bad move there! This activated Blue's green laser eyes. You are now dead. RIP");
               break;
           }

           //loop 2
           while (stabPrompt=== "2"){
               alert("You should know better, Red is always bad news. As soon as you slit his left leg, a bullet came shooting out his mouth and shot you staright in the heart! RIP.");
               break;
           }
       }
   }


function laserpen(){

    let a= "flying werewolf",
        b= "dragon with fire breath",
        c= "fairy with super speed",
        myArray= [a,b,c];

        //loop 3
        for (i=0; i<myArray.length; i++){
            alert("A "+ myArray[i] + " joined the fight.");
        }


        let laserPrompt1= prompt("Choose your next move: surrender(1), convince the newbies to join your team(2), laser Blue(3)");

        //loop 4
        while (laserPrompt1==="1"){
            alert("You will forever stay on Planet Good Eye :( ");
            break;
        }
        //loop5
        while(laserPrompt1==="2"){
            alert("The newbies have agreed. Your power together surpasses that of Blue. Next stop Earth!!!")
            break;

        }
        //loop 6
        while(laserPrompt==="3"){
            alert("Turns out your laser opened a portal to Earth. Welcome home.")
            break;

        }
       



}

   








    





