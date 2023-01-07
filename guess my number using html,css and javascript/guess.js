let secertNumber = Math.trunc(Math.random()*20 + 1);
let score = 20 ;
let highscore = 0 ;
const displayMessage = function(mess1){
  document.querySelector('.message').textContent = mess1;
}
document.querySelector('.again').addEventListener('click', function(){
    secertNumber = Math.trunc(Math.random()*20 + 1);
    score = 20 ;
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.point').textContent = 20;
    document.querySelector('.guess').value = "";
    displayMessage("Start guessing...");
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
  

});

document.querySelector('.checking').addEventListener('click', function(){
    let guess = document.querySelector('.guess').value;

if (!guess){
    displayMessage("no number");
}
else if (guess == secertNumber){
    //let newscore = document.querySelector('.highscore').textContent ;
    document.querySelector('.message').textContent = "Correct Number";
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').textContent = secertNumber ;
    document.querySelector('.number').style.width = "30rem";
    if (score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore; 
    
    } 
}
else if (guess !== secertNumber){
  if (score > 1){
    document.querySelector('.message').textContent = 
    guess > secertNumber ? "Too high!!": "Too low"  ;
    score--;
    document.querySelector('.point').textContent = 
    score;
  }else{
    displayMessage("Game over!!! \n Click the again button to restart the game");
    document.querySelector('.point').textContent = 0 ;  
  }
  
}  

/*else if (guess < secertNumber){
  if (score > 1){
    document.querySelector('.message').textContent = "Too low";
    score--;
    document.querySelector('.point').textContent = 
    score;
  }else{
    document.querySelector('.message').textContent =" You lost the fucking game!!!!!";
    document.querySelector('.point').textContent = 0 ;  
   }  
}*/

});  