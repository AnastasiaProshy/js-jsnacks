'use strict';

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const userNumber = parseInt(prompt('Inserisci un numero: '));

if (randomNumber === userNumber) {
    console.log('Hai vinto');
}
else {
    console.log('Hai perso');
}