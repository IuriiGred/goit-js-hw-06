const userInputHandler = document.querySelector('[id="validation-input"]');
const controlLength = +userInputHandler.dataset.length;

userInputHandler.addEventListener("blur", (evt) => {
    let leng = evt.currentTarget.value.length;
    // console.log(leng);
    evt.target.style.outline = "none";
    if(!leng){
        userInputHandler.classList.add("invalid");
    }
    
    if (leng < controlLength || leng > controlLength){
        if (userInputHandler.hasAttribute("class")){
            userInputHandler.classList.replace("valid", "invalid");
        }
    } else {
        userInputHandler.classList.replace("invalid", "valid");
    }
  });

  userInputHandler.addEventListener("focus", () => {
    userInputHandler.classList.add("invalid");

    userInputHandler.value = "";
  });



