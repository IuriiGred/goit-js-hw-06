
const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt){
    evt.preventDefault();

    const {email,password} = evt.currentTarget.elements;
    const emailTrim = email.value.trim();
    const passwordTrim = password.value.trim();
    

    if (!emailTrim || !passwordTrim){
        return alert('Всі поля повинні бути заповнені!');
    } 
      
    const data = {
      email: emailTrim,
      password: passwordTrim,
    };
          
    console.log(data);
    formEl.reset();
    }

