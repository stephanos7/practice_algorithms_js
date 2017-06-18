//Blackjack Game

//to practice abstraction and encapsulation.

//Simplified rules

/*
- Player starts with 0 points
- Player can ask to play or to stand
- If a player decides to play, a new card would be given to him
- If he hits 21, player wins!
- If the total is above 21, player looses!
- If the total is below 21, he will be asked again
- If he stands, the total will reset
*/



function BlackjackGame () {
this.total = 0;
    
this.play  = function () {
    var pick = Math.ceil(Math.random()*10);
    this.total += pick;
    console.log("you have picked " + pick + " and your total is now " + this.total)
     if(this.total > 21){
        console.log("Sorry you have lost, your total is " + this.total + ", over 21");
            this.total = 0;
        console.log("Let's start a new round..");
     }else if(this.total === 21){
        console.log("Wow 21! You are on a roll!! You have to play another hand now...");
            this.total = 0;
        }
    }
this.stand = function () {
      console.log("you have chosen to stand with a total of " + this.total + " ..hmm dealer wins, better play another round. ");
        this.total = 0;
  }
}



var game = new BlackjackGame();

game.play()
//=> CARD = 9
//=> Total = 9

game.play()
//=> CARD = 11
//=> Total = 20

game.stand()
//=> Scared huh? Let's start again

game.play()
//=> CARD = 12
//=> Total = 12

game.play()
//=> CARD = 11
//=> Total = 21
//=> You Win!  Play Again?