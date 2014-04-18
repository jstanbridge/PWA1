/*
Name: James Stanbridge
Date: 15 April 2014
Assignment: The Duel - Part 3
 */

//self-executing function
(function(){

    console.log("FIGHT!");

    //Initialize all DOM items.
    var fighter1_txt = document.querySelector("#kabal").querySelector("p");
    var fighter2_txt = document.querySelector("#kratos").querySelector("p");
    var button = document.getElementById("fight_btn");
    var round_txt = document.querySelector("h4");

    button.addEventListener("click", fight, false); //Makes button clickable/responsive.

    //Array containing objects with fighter information.
    var fighterInfo = [
    {name:'Spiderman', damage:20, health:100},
    {name:'Batman', damage:20, health:100}
    ];

    var round = 1;

    //Set up what will initially be display on HTML elements via DOM.
    round_txt.innerHTML = "Click to Start Fight";
    fighter1_txt.innerHTML = fighterInfo[0].name + ": " + fighterInfo[0].health;
    fighter2_txt.innerHTML = fighterInfo[1].name + ": " + fighterInfo[1].health;
    console.log(fighterInfo[0], fighterInfo[1]);

    //New fight function. Same as before except instead of looping, the button click repeats the 'fight' process.
    function fight(){
        fighter1_txt.innerHTML = fighterInfo[0].name + ": " + fighterInfo[0].health;
        fighter2_txt.innerHTML = fighterInfo[1].name + ": " + fighterInfo[1].health;

            var f1 = Math.floor(Math.random() * fighterInfo[0].damage + fighterInfo[0].damage * .5);
            var f2 = Math.floor(Math.random() * fighterInfo[1].damage + fighterInfo[1].damage * .5);

            fighterInfo[0].health -= f1;
            fighterInfo[1].health -= f2;

            console.log(fighterInfo[0].health, fighterInfo[1].health);

            var result = winnerCheck();
            console.log(result);

            //In the loop below we are setting up what will be in the HTML elements while the fight is still ongoing.
            round_txt.innerHTML = "ROUND " + round + " FIN!";
            round++;
            if (result === "no winner"){
                fighter1_txt.innerHTML = fighterInfo[0].name + ": " + fighterInfo[0].health;
                fighter2_txt.innerHTML = fighterInfo[1].name + ": " + fighterInfo[1].health;
            }else{
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                button.removeEventListener("click", fight, false); //Removes responsiveness from button.
                document.querySelector('.buttonblue').innerHTML = "DONE!"; //Change 'fight' on the button to 'done'.
            }
    }

    function winnerCheck(){ //Same as before, but sub in Object calls instead of using old variables.
        var result = "no winner";
        if (fighterInfo[0].health < 1 && fighterInfo[1].health < 1){
            result = "You both died.";
        }else if (fighterInfo[0].health < 1){
            result = fighterInfo[1].name + " WINS!";
        }else if (fighterInfo[1].health < 1){
            result = fighterInfo[0].name + " WINS!";
        }
        return result;
    }

})();