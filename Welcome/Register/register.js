document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const linkedin = document.getElementById('linkedin').value;
        const password = document.getElementById('password').value;

        if (validateName(name) && validateEmail(email) && validatePhone(phone) && validatePassword(password)) {
            const userData = {
                name: name,
                email: email,
                phone: phone,
                linkedin: linkedin,
                password: password
            };

            fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (response.ok) {
                    alert('Registration successful!');
                    window.location.href = 'file:///C:/Users/tharu/Desktop/Basic%20UI/Welcome/Login/login.html';
            
                } else {
                    throw new Error('Failed to register.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to register. Please try again.');
            });
        } else {
            alert('Please enter valid information.');
        }
    });

    function validateName(name) {
        return name.length >= 2;
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return re.test(String(phone));
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
