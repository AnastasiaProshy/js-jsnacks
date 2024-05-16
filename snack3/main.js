// let n1 = prompt("n1");

// let n2 = prompt("n2");

// n1 = parseFloat(n1);
// n2 = parseFloat(n2);

// let resultElement = document.getElementById("result");

// if (n1 > n2) {
//     resultElement.textContent = "Il numero maggiore è: " + n1;
// } else if (n2 > n1) {
//     resultElement.textContent = "Il numero maggiore è: " + n2;
// } else {
//     resultElement.textContent = "I numeri sono uguali.";
// }

// let somma = 0;

// for (let i = 0; i < 10; i++) {
//     const numero = prompt("Inserisci un numero:");
//     const numeroConvertito = parseFloat(numero);

//     somma += numeroConvertito;
// }

// document.getElementById("result").textContent = "La somma è: " + somma;


const lista = ["Lucy", "Pro", "Ana"];
const utente = prompt("Inserisci il tuo nome:");

if (lista.includes(utente)) {
    document.getElementById("result").textContent = "Benvenuto, " + utente + "!";
} else {
    document.getElementById("result").textContent = utente + ", non sei stato invitato.";
}


