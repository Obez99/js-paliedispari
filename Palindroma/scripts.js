//Chiedere all'utente di inserire una parola
const word = prompt("Inserisci una parola");
let letters = [];

//Scomporre la parola in un array lettera per lettera
for (let i = 0; i < word.length; i++) {
  letters[i] = word[i];
}

//Invertire l'ordine dell'array
for (let i = word.length - 1; i >= 0; i--) {
  console.log(letters[i]);
}

//Convertire l'array in una stringa

//Confrontare la stringa finale e confrontarla con quella inserita dall'utente