'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "🎉 Correct Number";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 )+1;
let yourScore = 20;
let highScore = 0;

const checkValue  = document.querySelector('.check');

checkValue.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    // When to guess number
    if(!guess){
        document.querySelector('.message').textContent = "🚩No Number";

    // When Player Win    
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = "🎉Correct Number"

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = 'rgb(93, 18, 231)';
        document.querySelector('.number').style.width = '30rem';
    
        if(yourScore > highScore){
            highScore = yourScore;
            document.querySelector('.highscore').textContent= highScore;
        }
        // When number is too high   
    }else if(guess > secretNumber){
        if(yourScore > 1){
            document.querySelector('.message').textContent = "🌡Too high"; 
            
            yourScore--;
            document.querySelector('.score').textContent = yourScore;
        }else{
            document.querySelector('.message').textContent= "You lost the game!";
            document.querySelector('.score').textContent= 0;
        }

    // When number is too los    
    }else if(guess < secretNumber){
        if(yourScore > 1){
            document.querySelector('.message').textContent = "↘ Too low"; 
            
            yourScore--;
            document.querySelector('.score').textContent = yourScore;
        }else{
            document.querySelector('.message').textContent= "You lost the game!";
            document.querySelector('.score').textContent= 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    yourScore = 20;
    secretNumber = Math.trunc(Math.random() * 20 )+1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = yourScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'rgb(56, 155, 221)';
    document.querySelector('.number').style.width = '15rem';

});