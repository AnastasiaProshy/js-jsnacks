'use strict';

const array = [];
let userInput = 0;
let a = 0;

while (a == 0) {
    userInput = parseInt(prompt('Inserisci un numero:'));
    array[0] = userInput;
    if (array[0] == array[1]) {
        console.log('I valori sono uguali');
        a = 1;
    }
    else { console.log('I valori non sono uguali'); }
    array[1] = array[0]
}