'use strict';

// const randomNumber = Math.trunc(Math.random()*20) +1;
let randomNumber = Math.trunc(Math.random()*20) +1;
 
const btn = document.querySelector('.hidden');
const pageBody = document.querySelector('body');

document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess-number').value);
    if(!guess){
        document.querySelector('.number-guess').textContent = 'Plss use a number!';
    }else if(guess === randomNumber){
        document.querySelector('.number-guess').textContent = `--- ${randomNumber} --- you have guess the number!`;
        document.querySelector('body').style.backgroundColor = '#06113C';
        document.querySelector('body').style.color = '#FFFBE7';
        buttonApear();
        document.querySelector('.message').textContent = 'We have a Winner!!';
    }else{
        document.querySelector('.number-guess').textContent = 'Wrong Number';
    }
});


function buttonApear(){
    btn.style.visibility = 'visible';
}

btn.addEventListener('click', function() {
    document.querySelector('.number-guess').textContent = 'Guess Random Number:';
    document.querySelector('.message').textContent = 'Guess The Number!';
    document.querySelector('body').style.backgroundColor = 'rgb(53, 48, 48)';
    document.querySelector('body').style.color = 'rgb(255, 255, 255)';
    document.querySelector('.guess-number').value = '';
    btn.style.visibility = 'hidden';
    // randomNumber = Math.trunc(Math.random()*20) +1;
});
