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

  let resultText = document.createElement("div")
  if (reverseWord.toLowerCase() === word.toLowerCase()) {

    resultText.innerHTML += "La parola è palindroma"
    resultText.classList.add("text-success")
    return formContainer.innerHTML += resultText.outerHTML;
  } else {

    resultText.innerHTML += "La parola non è palindroma"
    resultText.classList.add("text-danger")
    return formContainer.innerHTML += resultText.outerHTML;
  }
}

//Chiedere all'utente di inserire una parola e controllare che lo sia
const formContainer = document.querySelector(".form_container")
const textbox = document.querySelector(".form_container input");
const button = document.querySelector(".form_container .btn-primary");
button.addEventListener("click", function () {
  const userInput = textbox.value;
  palindromeCheck(userInput);

})



