function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const printColorNumberEl = document.querySelector('span.color');
const buttonChangeColorHandler = document.querySelector('button.change-color');

buttonChangeColorHandler.addEventListener('click', onClick);

function onClick(){
  printColorNumberEl.textContent = `- ${getRandomHexColor()}`;
  bodyEl.style.background = `${getRandomHexColor()}`;

}

