function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

 
const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const plasePushElement = document.querySelector('[id="boxes"]');
const plaseForOldEl = document.querySelector('[id="controls"]')

let arrayOfCreateEl = [];
let size = 30;
const step = 10;

buttonCreate.addEventListener('click', onCreate);

function onCreate(evt){
const amount = inputNumber.value;

for (let i = 0; i < amount; i += 1) {
  let creatNewElementTarget = document.createElement('div');
  let sideSize = `${size + i * step}px`;

    creatNewElementTarget.classList.add("js-class");
    creatNewElementTarget.style.backgroundColor = getRandomHexColor();
    creatNewElementTarget.style.width = sideSize;
    creatNewElementTarget.style.height = sideSize;

  arrayOfCreateEl.push(creatNewElementTarget);
}

plasePushElement.append(...arrayOfCreateEl);

buttonCreate.removeEventListener('click', onCreate);
}

buttonDestroy.addEventListener('click', onDestroy);

function onDestroy(evt){
  const clearPlaseEl = document.querySelector('[id="boxes"]');
  clearPlaseEl.remove();
  
  const returnElement = `<div id="boxes"></div>`;
  plaseForOldEl.insertAdjacentHTML("afterend", returnElement);

// const amount = inputNumber.value;

// for (let i = 0; i < amount; i += 1) {
// const elementForRemove = document.querySelector(".js-class");
// elementForRemove.remove();
// }
// buttonDestroy.removeEventListener('click', onDestroy);
}