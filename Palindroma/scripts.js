function palindromeCheck(word) {
  //Scomporre la parola in un array lettera per lettera
  let letters = [];
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

  //Confrontare la stringa finale e confrontarla con quella inserita dall'utente
  if (reverseWord.toLowerCase() === word.toLowerCase()) {
    return alert("La parola è palindroma");
  } else {
    return alert("La parola non è palindroma");
  }
}

//Chiedere all'utente di inserire una parola e controllare che lo sia
const textbox = document.querySelector(".form_container input");
const button = document.querySelector(".form_container .btn-primary");
button.addEventListener("click", function () {
  const userInput = textbox.value;
  palindromeCheck(userInput);

})



