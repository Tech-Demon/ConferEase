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


function acceptCookies() {
    console.log("Accepting cookies...");
    document.getElementById('cookieCard').style.display = 'none' ;
    var email=document.body.email;
    console.log(email);
    document.cookie = "email=" + email + "; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/";
    var currentTime = new Date().getTime();
    document.cookie = "cookieConsentTime=" + currentTime + "; expires=Thu, 31 Dec 2037 23:59:59 UTC; path=/";
}