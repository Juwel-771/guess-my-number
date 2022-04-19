'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "🎉 Correct Number";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

const checkValue  = document.querySelector('.check');

checkValue.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = "🚩No Number";
    }else{
        document.querySelector('.message').value;
    }
});