//Generare un numero random da 1 a 5 per il computer con una funzione
function aiRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}

//Far scegliere all'utente pari o dispari
let userNumber = 0;
let userEvenOdd = prompt("Pari o dispari?");
userEvenOdd = userEvenOdd.toLowerCase();
console.log(userEvenOdd);
if (!isNaN || userEvenOdd != "pari" && userEvenOdd != "dispari") {
  alert("Inserisci un valore corretto");
  location.reload();
}
else {
  //Far scegliere all'utente un numero
  userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert("Inserisci un numero valido.")
    location.reload();
  }
}

//Generare un numero random da 1 a 5 per il computer con una funzione
const aiNumber = aiRandomNumber();
console.log(aiNumber);

//Sommare i numeri del computer e del giocatore
const sum = userNumber + aiNumber;
console.log(sum);
//Stabilire se la somma dei due numeri è pari o dispari con un funzione
//Dichiarare il vincitore