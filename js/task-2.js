'use strict';

const total = 100;
let ordered = 50;

if (ordered <= total) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно товаров!');
}

ordered = 20;

if (ordered <= total) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно товаров!');
}

ordered = 80;

if (ordered <= total) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно товаров!');
}

ordered = 130;

if (ordered <= total) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно товаров!');
}
