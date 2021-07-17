const inputRef = document.querySelector('[type="number"]');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let defaultSize = 30;

const onRenderBtnClick = () => {
    const amount = +inputRef.value;
    createBoxes(amount);
};

const onDestroyBtnClick = () => {
    boxesRef.innerHTML = '';
    defaultSize = 30;
    inputRef.value = 0;
};

const createBoxes = amount => {
    const array = [];
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.backgroundColor = createRandom();
        div.style.width = defaultSize + 'px';
        div.style.height = defaultSize + 'px';
        defaultSize += 10;
        array.push(div);
    }
    boxesRef.append(...array);
};

function createRandom() {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};

renderBtnRef.addEventListener('click', onRenderBtnClick);
destroyBtnRef.addEventListener('click', onDestroyBtnClick);