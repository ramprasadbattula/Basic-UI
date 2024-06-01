// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Add event listener for login form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate form fields
        if (validateLoginForm(email, password)) {
            const loginData = {
                email: email,
                password: password
            };

            // Send login data to backend
            loginUser(loginData);
        } else {
            alert('Please enter valid credentials.');
        }
    });
});

// Function to validate login form fields
function validateLoginForm(email, password) {
    // Add your validation logic here
    return validateEmail(email) && password.length >= 6;
}

// Function to send login data to backend
function loginUser(loginData) {
    fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Invalid credentials.');
        }
        return response.json();
    })
    .then(data => {
        alert('Login successful!');
        window.location.href = 'file:///C:/Users/tharu/Desktop/Basic%20UI/Welcome/Dashboard/dashboard.html'; // Redirect to dashboard after successful login
    })
    .catch(error => {
        console.error('Error logging in:', error);
        alert('Invalid credentials. Please try again.');
    });
}

// Function to validate email format
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;
    return re.test(String(email).toLowerCase());
}
