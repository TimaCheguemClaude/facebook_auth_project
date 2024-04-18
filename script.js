function login() {
    const emailPhone = document.getElementById('emailPhone').value;
    const password = document.getElementById('password').value;

    if (emailPhone && password) {
        alert('Logged in successfully');
        
    } else {
        alert('Please fill in all fields');
    }
}
