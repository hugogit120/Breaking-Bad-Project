'use strict';

const handleMessages = user => {
    const messageContainer = document.querySelector(".errors-container");
    messageContainer.innerHTML = '';

    const message = document.createElement('p');
    if (user) {
        message.classList.add('correct-message')
        message.innerHTML = `hello, ${user.email}`
    } else {
      message.innerHTML = " invalid email and password"  
    }
    messageContainer.appendChild(message);
}

const login = event => {
    event.preventDefault();
    const userDB = JSON.parse(localStorage.getItem('users'));
    const email = document.querySelector('#email');
    const password = document.querySelector('#pwd');
    console.log(email, password);
    const user = userDB.find(element => element.email === email.value && element.pwd === password.value);
    console.log(user);
    handleMessages(user);
    
}

