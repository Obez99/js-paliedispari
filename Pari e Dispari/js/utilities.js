//Generare un numero random da 1 a 5 per il computer con una funzione
function aiRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}

//Stabiliamo se la somma dei numeri è pari o dispari
function evenCheck(num) {
  let result = false;

  if (num % 2 === 0 || num === "pari") {
    result = true;
  }

  return result;
}