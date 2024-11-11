document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const signupUsername = localStorage.getItem('signupUsername');
    const signupEmail = localStorage.getItem('signupEmail');
    const signupPassword = localStorage.getItem('signupPassword');

    // Check if password contains at least one uppercase letter, one lowercase letter, and one special character
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!uppercase || !lowercase || !specialChar) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, and one special character.');
        return;
    }

    // Check if the username/email and password match
    if ((username === signupUsername || username === signupEmail) && password === signupPassword) {
        window.location = "../pages/dashboard.html";
    } else {
        alert('Incorrect username or password.');
    }
});

function togglePasswordVisibility(inputId) {
    const inputField = document.getElementById(inputId);
    const icon = inputField.nextElementSibling.querySelector("i");

    if (inputField.type === "password") {
        inputField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        inputField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
