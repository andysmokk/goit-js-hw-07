const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function changeFont() {
    spanRef.style.fontSize = `${inputRef.value}px`;
};

inputRef.addEventListener('input', changeFont);