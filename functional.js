document.getElementById('submit-btn').addEventListener('click', function() {
    const userEmail = document.getElementById('email-user');
    const email = userEmail.value;
    const userPassword = document.getElementById('password-user');
    const password = userPassword.value;
    if (email == 'abc@gmail.com' && password == '123') {
        window.location.href = 'bank-site.html';
    } else {
        alert('please give your email and password correctly');
    }

})