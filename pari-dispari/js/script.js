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
