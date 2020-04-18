let request = prompt('Введите имя страны');
request = request.toLowerCase();
let price;
let country;

switch (request) {
  case 'китай':
    price = 100;
    country = 'Китай';
    alert(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'чили':
    price = 250;
    country = 'Чили';
    alert(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'австралия':
    price = 170;
    country = 'Австралию';
    alert(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'индия':
    price = 80;
    country = 'Индию';
    alert(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  case 'ямайка':
    price = 120;
    country = 'Ямайку';
    alert(`Доставка в ${country} будет стоить  ${price} кредитов`);
    break;
  default:
    alert('В вашу страну доставка не доступна');
}
