//Chiedere all'utente di inserire una parola
const word = prompt("Inserisci una parola");
let letters = [];

//Scomporre la parola in un array lettera per lettera
for (let i = 0; i < word.length; i++) {
  letters[i] = word[i];
}

//Invertire l'ordine dell'array
let reverseWord = [];
let reverseIndex = 0;
for (let i = word.length - 1; i >= 0; i--) {
  reverseWord[reverseIndex] = letters[i];
  reverseIndex++;
}

//Convertire l'array in una stringa
reverseWord = reverseWord.join("");
console.log(reverseWord);
//Confrontare la stringa finale e confrontarla con quella inserita dall'utente