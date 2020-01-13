//alert('Hello World')

//---------------------------

// Scrivi una funzione per capire se la parola è palindroma

//---------------------------

// Inserimento frase



var parolaInserita = prompt('Inserisci una parola');
console.log(parolaInserita);

//----------------------------

// Controllo palindroma

var parolaPalindroma = '';

for (var i = parolaInserita.length; i >= 0; i -- ) {
  parolaPalindroma += parolaInserita[i];
}

console.log(parolaPalindroma);
