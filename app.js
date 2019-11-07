var scores, roundscores, activePlayer,gameplay,prevdice;


init();
//console.log(dice)

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice + '</em>';


function btn(){

  if (gameplay){
  var dice = Math.floor(Math.random() * 6) + 1
  console.log(dice);
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'dice-'+ dice +'.png';


  if (prevdice === 6 && dice === 6){
    scores[activePlayer]=0;
    document.getElementById('score-' + activePlayer).textContent = '0';
    next();

  }

  if (dice !== 1){
    roundscores += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundscores;
    prevdice = dice;
  }
  else{
    next();

  }
  prevdice = dice;
}
}

function next(){
  roundscores = 0;
  document.querySelector('#current-' + activePlayer).textContent = '0';
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
  document.querySelector('.dice').style.display = 'none';
  prevdice = 0;
}

function shift(){
  if (gameplay){

  scores[activePlayer] += roundscores;
  var target = document.getElementById('winscore').value;
  if (scores[activePlayer] >= target){
  document.getElementById('name-' + activePlayer).textContent = '!WINNER!';
  document.querySelector('.dice').style.display = 'none';
  gameplay = false;

  }

  else{
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    next();
  }

}
}

function init(){


  scores = [0,0];
  roundscores = 0;
  activePlayer = 0;
  gameplay = true;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('name-0').textContent = 'PLAYER 1';
  document.getElementById('name-1').textContent = 'PLAYER 2';
  document.getElementById('winscore').value = '';

}

document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.btn-hold').addEventListener('click',shift);
document.querySelector('.btn-new').addEventListener('click',init);
