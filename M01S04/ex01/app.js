var value = window.prompt('Introdu un numar');
var message = '';
var messageParagraph = document.getElementById('message');
var number = window.prompt('Cu ce numar compar?');

console.log('Valoarea este: ' + value);

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu a introdus un numar';
} else if (value === number) {
  message = `Numarul este ${number}`;
} else if (value > number) {
  message = `Numarul este mai mare decat ${number}`;
} else {
  message = `Numarul este mai mic decat ${number}`;
}

console.log(message);
messageParagraph.innerText = message;
