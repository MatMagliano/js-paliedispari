// alert('Hello World')

// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

//------------SCELTA PARI O DISPARI------------------------------


var pariDispari = prompt('Scegli tra pari e dispari');
pariDispari = pariDispari.toLowerCase()

var scelta = [];

if (pariDispari != 'pari' && pariDispari != 'dispari')  {
  alert('Inserito dato sbagliato');
} else {
  scelta.push(pariDispari);
}
console.log(scelta);


//------------SCELTA NUMERO------------------------------

var numero = parseInt(prompt('Inserisci un numero da 1 a 5'))


if (numero > 5)  {
  alert('Inserito dato sbagliato');
} else {
  console.log(numero);

}

//------------NUMERO RANDOM ------------------------------

var numeroRandom = Math.floor(Math.random() * 5) + 1;

console.log(numeroRandom);


//------------SOMMA NUMERI ------------------------------

var sommaNum = numero + numeroRandom;
console.log('La somma è ' + sommaNum);

//------------CONTROLLO VINCITORE------------------------------

if (sommaNum % 2 == 0 && 'pari') {
  console.log('HAI VINTO');
} else if (sommaNum % 2 == 0 && 'dispari') {
  console.log('HAI PERSO');
} else if (sommaNum % 2 != 0 && 'pari') {
  console.log('HAI PERSO');
} else {
  console.log('HAI VINTO');
}
