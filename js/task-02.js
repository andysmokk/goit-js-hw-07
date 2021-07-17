const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListRef = document.querySelector('#ingredients');

const markup = ingredients.map(el => {
  const li = document.createElement('li');
  li.innerHTML = `${el}`;
  return li;
});

ingredientListRef.append(...markup);