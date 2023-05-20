let counterValue = 0;

const decrementKeypressHandler = document.querySelector('[data-action="decrement"]');
const incrementKeypressHandler = document.querySelector('[data-action="increment"]');
const valueResultHandler = document.querySelector('[id="value"]');



decrementKeypressHandler.addEventListener('click', onClick);

function onClick(evt){
    counterValue -= 1
    valueResultHandler.textContent = counterValue;
}

incrementKeypressHandler.addEventListener('click', onClick1);

function onClick1(evt){
    counterValue += 1
    valueResultHandler.textContent = counterValue;
}

// const userActionDecrem = userAction.firstElementChild;
// const userActionIncrem = userAction.lastElementChild;


// console.log(userAction.children);
// console.log(userAction.children.length);
// console.log(userActionDecrem);
// console.log(userActionIncrem);