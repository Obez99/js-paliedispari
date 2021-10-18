
//Far scegliere all'utente pari o dispari
let userNumber = 0;
let userEvenOdd = prompt("Pari o dispari?");
userEvenOdd = userEvenOdd.toLowerCase();
const userResult = evenCheck(userEvenOdd);
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
alert(`Il computer ha scelto il numero ${aiNumber}`)

//Sommare i numeri del computer e del giocatore
const sum = userNumber + aiNumber;
alert(`La somma dei numeri è di ${sum}`)

//Stabilire se la somma dei due numeri è pari o dispari con un funzione
const result = evenCheck(sum);


//Dichiarare il vincitore
if (userResult === result) {
  alert("Complimenti, hai vinto!")
}
else {
  alert("Mi dispiace, hai perso.")
}