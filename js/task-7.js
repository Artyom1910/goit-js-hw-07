const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const changeFontSize = function () {
  textEl.style.fontSize = inputEl.value / 3.125 + 'px';
};

inputEl.addEventListener('input', changeFontSize);
