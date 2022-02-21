/*BIGLIETTO TRENO*/

let kilometers = prompt('Quanti km vuoi percorrere?');

let age = prompt('Quanti anni hai?');

let kmPrice = 0.21;

if (age < 18) {
    kmPrice = 0.168;
}

if (age > 65) {
    kmPrice = 0.126;
}

let finalPrice = (kilometers * kmPrice);

let finalPrice2 = (Math.round(finalPrice * 100) / 100);

let element = document.getElementById('my_output');

element.innerHTML = `Il prezzo del biglietto è di ${finalPrice2}€`;