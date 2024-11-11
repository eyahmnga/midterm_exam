document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if password is at least 8 characters long
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Check if password contains at least one uppercase letter, one lowercase letter, and one special character
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!uppercase || !lowercase || !specialChar) {
        alert('Password must contain at least one uppercase letter, one lowercase letter, and one special character.');
        return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Passwords do not match.";

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
        return;
    }

    // If passwords match, save data to local storage
    localStorage.setItem('signupUsername', username);
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);

    // Show the success modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
});

// Redirect to login function
function redirectToLogin() {
    window.location = "../pages/login.html";
}

// Toggle password visibility function
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
