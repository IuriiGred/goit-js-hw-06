const vizualChangeEl = document.querySelector('input');
const fontChangeEl = document.querySelector('span');


vizualChangeEl.addEventListener('input', onInput);

function onInput(){
    fontChangeEl.style.fontSize = `${vizualChangeEl.value}px`;
    }
