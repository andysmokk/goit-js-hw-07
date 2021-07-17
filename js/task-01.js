const categoriesListRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesListRef.length} категории`);

const titleListRef = document.querySelectorAll('h2');

const getInfoOfCategories = titleListRef.forEach(category => {
    console.log(`Категория: ${category.textContent}`);
    console.log(`Количество элементов: ${category.parentNode.querySelectorAll('li').length}`)
});