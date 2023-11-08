let go = document.getElementById('submit');
let password = document.getElementById('passwordField');
let error = document.querySelector('.error');
let revealButton = document.querySelector('.reveal')


function checkPassword() {

    if (passwordField.value === "wholesale763") {
        window.location.href='https://shop.silkcitycoffee.com/collections/coffee'
      
    } else {

        document.querySelector('.error').innerHTML = 'Try again!';
        error.classList.add('error-fade')
        setTimeout(() => {
            error.innerHTML = ''
            error.classList.remove('error-fade')
          }, 2000);
        
    }
}

revealButton.addEventListener('click', function() {

    if (passwordField.type === "password") {
      passwordField.type = "text";
      revealButton.classList.remove('fa-eye-slash')
      revealButton.classList.add('fa-eye')
    } else {
      passwordField.type = "password";
      revealButton.classList.add('fa-eye-slash')
      revealButton.classList.remove('fa-eye') 
    }
 })
         
 