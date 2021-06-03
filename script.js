const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue === '') {
        setError(username, "Name is required");
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, "Password is required");
    } else {
        setSuccess(password);
    }

    if(password2Value === '' || password2Value !== passwordValue) {
        setError(password2, "Password check must be equal to above password");
    } else {
        setSuccess(password2);
    }

    if(emailValue === '') {
        setError(email, "Email is required");
    } else {
        setSuccess(email);
    }
})

function setError(ele, message) {
    const parent = ele.parentElement;
    parent.className = "form-control error";
    const query = parent.querySelector('small');
    query.innerHTML = message;
}

function setSuccess(ele) {
    const parent = ele.parentElement;
    parent.className = "form-control success";
}