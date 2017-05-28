/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying, prevDice, inputScore , maxScore;

init();

//input box for retreiving and setting maximumScore : maxScore]
/*document.querySelector('.getText').addEventListener('click', function(){

  inputScore = document.querySelector('.inputBox').value;
  maxScore = inputScore;
  document.querySelector('.inputBox').value = "";


})
*/


document.querySelector('.btn-roll').addEventListener('click',function(){
  if(gamePlaying){

    var dice =  Math.floor(Math.random()* 6)+1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + ".png";

    var dice2 =  Math.floor(Math.random()* 6)+1;
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM2.style.display = 'block';
    diceDOM2.src = "dice-" + dice2 + ".png";





  /*
   if(dice === 6 && prevDice === 6){
     debugger;
     scores[activePlayer] = 0;
     prevDice = 0;
     document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
     switchPlayer();

   }


   else */ if (dice !== 1 && dice2 !== 1) {
     roundScore += dice + dice2;
     document.querySelector('#current-' +  activePlayer).textContent = roundScore;
     //prevDice = dice;
   }
   else{
     switchPlayer()

   }
 }

});



document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer]>= maxScore){

      document.getElementById('name-' + activePlayer).textContent =
      "player" + " " + activePlayer + " wins!!";
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';
      document.querySelector('.player-' +  activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' +  activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }
    else{ switchPlayer();
    }
  }

});


function switchPlayer (){

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = "0";
  document.getElementById('current-1').textContent = "0";

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');



}

document.querySelector('.btn-new').addEventListener('click',function(){
  init();
});

function init(){

  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  ['score-0','score-1','current-0','current-1'].forEach(function(val){
    document.getElementById(val).textContent = 0;

  })

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.getElementById('name-0').textContent =
  "player " + activePlayer;
  document.getElementById('name-1').textContent =
  "player " + activePlayer;
  document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  maxScore = 100;

  gamePlaying = true;

}
