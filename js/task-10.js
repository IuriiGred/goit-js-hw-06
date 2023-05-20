function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const plasePushElement = document.querySelector('[id="boxes"]');

// console.dir(inputNumber);
// console.dir(buttonCreate.hasAttribute('data-create'));
// console.dir(buttonDestroy.hasAttribute('data-destroy'));


let arrayOfCreateEl = [];
let size = 30;
const step = 10;

buttonCreate.addEventListener('click', onCreate);

function onCreate(evt){
const amount = inputNumber.value;

for (let i = 0; i < amount; i += 1) {
  let creatNewElementTarget = document.createElement('div');
creatNewElementTarget.classList.add("js-class");
creatNewElementTarget.style.backgroundColor = getRandomHexColor();
creatNewElementTarget.style.width = `${size + i * step}px`;
creatNewElementTarget.style.height = `${size + i * step}px`;
arrayOfCreateEl.push(creatNewElementTarget);
}
plasePushElement.append(...arrayOfCreateEl);

}

// Це звичайно не обовязково, але цікаво.
// Як знищити створені елементи? Весь дів можу знищити.