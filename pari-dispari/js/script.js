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
  pariDispari = prompt('Scegli tra pari e dispari');
} else {
  scelta.push(pariDispari);
}
console.log(scelta);
