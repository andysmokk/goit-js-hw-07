let counterValue = 0;
const [decrement, span, increment] = document.querySelector('#counter').children;

decrement.onclick = () => {
    counterValue -= 1;
    span.textContent = counterValue;
};

increment.onclick = () => {
    counterValue += 1;
    span.textContent = counterValue;
};