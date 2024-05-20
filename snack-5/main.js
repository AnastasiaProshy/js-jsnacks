'use strict';

const array = [];
let a = 0;
for (let i = 0; i <= 5; i++) {
    const numberUtente = prompt('Inserisci un numero:');
    console.log(numberUtente);

    if (numberUtente % 2 != 0) {
        array[a] = numberUtente;
        a = a + 1;                 //posizioni di array - contatore
    }
}

console.log(`Numeri dispari che hai inserito ${array}`);    //interpolare la variabile nella stringa