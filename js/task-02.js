const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemElPotato = document.createElement('li');
itemElPotato.textContent = ingredients[0];

const itemElMushrooms = document.createElement('li');
itemElMushrooms.textContent = ingredients[1];

const itemElGarlic = document.createElement('li');
itemElGarlic.textContent = ingredients[2];

const itemElTomato = document.createElement('li');
itemElTomato.textContent = ingredients[3];

const itemElGreens = document.createElement('li');
itemElGreens.textContent = ingredients[4];

const itemElCondiments = document.createElement('li');
itemElCondiments.textContent = ingredients[5];

// console.log(itemElPotato);
// console.log(itemElMushrooms);

const listEL = document.querySelector('#ingredients');

const titleEl = document.createElement('h2');
titleEl.textContent = 'Ингредиенты';

// console.log(listEL)

listEL.append(titleEl, itemElPotato, itemElMushrooms, itemElGarlic, itemElTomato, itemElGreens, itemElCondiments);