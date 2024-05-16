let n1 = prompt("n1");

let n2 = prompt("n2");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

let resultElement = document.getElementById("result");

if (n1 > n2) {
    resultElement.textContent = "Il numero maggiore è: " + n1;
} else if (n2 > n1) {
    resultElement.textContent = "Il numero maggiore è: " + n2;
} else {
    resultElement.textContent = "I numeri sono uguali.";
}


