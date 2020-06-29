'use strict';

const email = document.querySelector('#email');
const password = document.querySelector('#pwd');
const userDB = JSON.parse(localStorage.getItem('users'))
const userEmail = userDB.find(user => user.email)

const handleMessages = user => {
    console.log(document.querySelector('#email').value);
    

    const messageContainer = document.querySelector(".errors-container");
    messageContainer.innerHTML = '';

    const message = document.createElement('p');
    if (user) {
        message.classList.add('correct-message')
        message.innerHTML = `hello, ${user.email}`
        location.replace("index.html")
    }
    else if(email.value === '' && password.value === ''){
        message.innerHTML = ' plese fill in the information fields '
    }
    else if(user !== userEmail.email){
        message.innerHTML = 'wrong email or password'
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

