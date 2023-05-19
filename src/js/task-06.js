const userInputHandler = document.querySelector('[id="validation-input"]');
const controlLength = +userInputHandler.dataset.length;


userInputHandler.addEventListener('input', onInput);

function onInput(evt){
    let leng = evt.currentTarget.value.length;
    evt.target.style.outline = "none";
    
    if (leng < controlLength){
        if (userInputHandler.hasAttribute("class")){
            userInputHandler.classList.replace("valid", "invalid");
        }
    userInputHandler.classList.add("invalid");
    }
    else if(leng === controlLength){
        userInputHandler.classList.replace("invalid", "valid");
    } else {
        userInputHandler.classList.replace("valid", "invalid");
    }
}


