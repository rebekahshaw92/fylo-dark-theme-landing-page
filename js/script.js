const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');


let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(email.value !== regex){
        error.innerText = 'Please enter a vaild email address';
    }
});