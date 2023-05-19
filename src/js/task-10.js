function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const buttoCreate = document.querySelector('[data-create]');
const buttoDestroy = document.querySelector('[data-destroy]');

console.dir(inputNumber);
console.dir(buttoCreate.hasAttribute('data-create'));
console.dir(buttoDestroy.hasAttribute('data-destroy'));

// inputNumber.addEventListener('input', onInput);
// function onInput(){
//     // console.log(inputNumber.value);
//     }



// function onClick(evt){
  //   amount = inputNumber.value;
  //   for (let i = 0; i < amount; i += 1) {
    
    //   }
    // return amount;
    // }
    
    // console.log(amount);
    
    const createBoxes = (amount) => {
      amount = inputNumber.value;
      console.log(amount);
    }
    
    
    buttoCreate.addEventListener('click', createBoxes);