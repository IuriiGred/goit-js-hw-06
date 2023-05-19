const userNameInputHandler = document.querySelector('[id="name-input"]');
const userNameOutputHandler = document.querySelector('[id="name-output"]')

// const inputName = userNameOutputHundler.textContent;

userNameInputHandler.addEventListener('input', onInput);

function onInput(evt){
    if (evt.currentTarget.value !== ""){
        userNameOutputHandler.textContent = evt.currentTarget.value;
    } else {
        userNameOutputHandler.textContent = "";
    }
}

