const numberOfCategories = document.querySelectorAll('.item');

console.log(`В списке ${numberOfCategories.length} категории`);

const textOfTitle = document.querySelectorAll('.categories__title');
const numberOfElement = document.querySelectorAll('.categories__list');

console.log('Категория:', textOfTitle[0].textContent);
console.log('Количество элементов:', numberOfElement[0].children.length);

console.log('Категория:', textOfTitle[1].textContent);
console.log('Количество элементов:', numberOfElement[1].children.length);

console.log('Категория:', textOfTitle[2].textContent);
console.log('Количество элементов:', numberOfElement[2].children.length);