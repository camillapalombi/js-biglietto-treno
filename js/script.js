/*BIGLIETTO TRENO*/

let kilometers = prompt('Quanti km vuoi percorrere?');

let age = prompt('Quanti anni hai?');

const kmPrice = 0.21;

const finalPrice = (kilometers * kmPrice);

let element = document.getElementById('my_output');

element.innerHTML = `Il prezzo del biglietto è di ${finalPrice} €`;