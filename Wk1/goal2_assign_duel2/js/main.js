/*
Name: James Stanbridge
Date: 2 April 2014
Assignment: The Duel - Part 1
 */

//self-executing function
(function(){

    console.log("FIGHT!");

    //PLAYER NAMES
    var fighter1 = ["Spiderman", 100, 20];
    var fighter2 = ["Batman", 100, 20]
    /*
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //PLAYER DAMAGE
    var player1Damage = 20;
    var player2Damage = 20;

    //PLAYER HEALTH
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
    */
    var round = 0;

    function fight(){
        console.log("in the fight function");

        alert(fighter1[0] + ":" + fighter1[1] + " *START* " + fighter2[0] + ":" + fighter2[1]);

        for (var i=0; i<10; i++){

            //formula - Math.floor(Math.random() * (max-min) + min);

            var minDamage1 = fighter1[2] * .5;
            var minDamage2 = fighter2[2] * .5;
            var f1 = Math.floor(Math.random()*(fighter1[2]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[2]-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //DAMAGE
            fighter1[1]-=f1;
            fighter1[1]-=f2;

            console.log(fighter1[1]);
            console.log(fighter2[1]);

            console.log(fighter1[0] + ":" + fighter1[1] + " " + fighter2[0] + ":" + fighter2[1]);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(fighter1[0] + ":" + fighter1[1] + " \"ROUND " +round+ " OVER\" " + fighter2[0] + ":" + fighter2[1]);
            }else{
                alert(results);
                break;
            };
        }
        //winnerCheck();
    };

    function winnerCheck(){
        console.log("in winnerCheck FN");

        var result="no winner";

        if (fighter1[1] < 1 && fighter2[1] < 1){
            result = "You both die.";
        }else if (fighter1[1] < 1){
            result = fighter2[0] + " WINS!";
        }else if (fighter2[1] < 1){
            result = fighter1[0] + " WINS!";
        };

        return result;
    };
    console.log("program starts");
    fight();

})();