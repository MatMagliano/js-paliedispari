//alert('Hello World')

//---------------------------

// Scrivi una funzione per capire se la parola è palindroma

//-----------Inserimento frase----------------

var parolaInserita = prompt('Inserisci una parola');
parolaInserita = parolaInserita.toLowerCase()
console.log(parolaInserita);


//------------Controllo palindroma col for----------------


// for (var i = parolaInserita.length - 1; i >= 0; i -- ) {
//   parolaPalindroma += parolaInserita[i];
// }
// console.log(parolaPalindroma);
//
// if (parolaInserita == parolaPalindroma) {
//   console.log('la parola è palindroma!');
// }
// else {
//   console.log('laparola non è palindroma');
// }

//----------Controllo palindroma col while------------------


// var i = parolaInserita.length - 1;
//
// while (i >= 0) {
//   parolaPalindroma += parolaInserita[i];
//   i --;
// }
//
// console.log(parolaPalindroma);
//
// if (parolaInserita == parolaPalindroma) {
//   console.log('la parola è palindroma!');
// }
// else {
//   console.log('laparola non è palindroma');
// }

//--------- FUNZIONE -------------------

var controllo = palindrome(parolaInserita)

if (controllo == true) {
  console.log('La parola ' + parolaInserita + ' è palindroma!');
} else {
   console.log('La parola ' + parolaInserita + ' non è palindroma!');
}



function palindrome(controlloParola) {
  var parolaPalindroma = '';

  for (var i = parolaInserita.length - 1; i >= 0; i -- ) {
    parolaPalindroma += parolaInserita[i];
  }

  if (parolaInserita == parolaPalindroma) {

    parolaPalindroma = true;

  } else {

    parolaPalindroma = false;

  }

  return parolaPalindroma;
}
