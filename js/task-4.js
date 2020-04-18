'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userInput = prompt('Введите необходимое количество дроидов!');

let totalPrice = credits - userInput * pricePerDroid;
let message;

if (userInput === null) {
  alert('Отменено пользователем!');
} else if (totalPrice >= credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${userInput} дроидов, на счету осталось ${totalPrice} кредитов.`,
  );
}
