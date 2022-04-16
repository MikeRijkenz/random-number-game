'use strict';

// for test 
// const randomNumber = 1;
let randomNumber = Math.trunc(Math.random()*20) +1;
 
const btn = document.querySelector('.hidden');
const pageBody = document.querySelector('body');
const displayMessage = function(message){
    document.querySelector('.number-guess').textContent = message;
}

document.querySelector('.btn').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess-number').value);
    if(!guess){
        displayMessage('Plss use a number!!!');
    }else if(guess === randomNumber){
        displayMessage(`--- ${randomNumber} --- you have guess the number!`);
        document.querySelector('body').style.backgroundColor = '#06113C';
        document.querySelector('body').style.color = '#FFFBE7';
        buttonApear();
        document.querySelector('.message').textContent = 'We have a Winner!!';
    }else if (guess !== randomNumber){
        displayMessage(guess > randomNumber ? 'To Hight' : 'To Low');  
    }
});


function buttonApear(){
    btn.style.visibility = 'visible';
}


btn.addEventListener('click', function() {
    displayMessage('Guess Random Number:');
    document.querySelector('.message').textContent = 'Guess The Number!';
    document.querySelector('body').style.backgroundColor = 'rgb(53, 48, 48)';
    document.querySelector('body').style.color = 'rgb(255, 255, 255)';
    document.querySelector('.guess-number').value = '';
    btn.style.visibility = 'hidden';
    // randomNumber = Math.trunc(Math.random()*20) +1;
});
