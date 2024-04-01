const { response } = require("express");

// function handleMessage(message) {
//     document.getElementById('message').innerText = message;
// }

fetch('/sign_in_error').then(response => response.json()).then(data => {

    console.log('data fetched');

    const container = document.querySelector("message");

    const postMethod = () => {
        container.innerText = 'Sending...';
    }

    postMethod();
});
