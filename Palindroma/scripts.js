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
    finalMsg.textContent += "La parola è palindroma"
    finalMsg.classList.add("text-success")
  } else {
    finalMsg.innerHTML += "La parola non è palindroma"
    finalMsg.classList.add("text-danger")
  }
}

//Chiedere all'utente di inserire una parola e controllare che lo sia
const formContainer = document.querySelector(".form_container")
const textbox = document.querySelector(".form_container input");
const button = document.querySelector(".form_container .btn-primary");
const finalMsg = document.querySelector(".final_message")
button.addEventListener("click", function () {
  let userInput = textbox.value;
  finalMsg.textContent = "";
  finalMsg.classList.remove("text-danger", "text-success");
  palindromeCheck(userInput);
})



