document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const workflowItems = document.querySelectorAll('.workflow ol li');

    // Button click events
    loginBtn.addEventListener('click', () => {
        window.location.href = 'Login/login.html';
    });

    signupBtn.addEventListener('click', () => {
        window.location.href = 'Register/register.html';
    });

    // Smooth scroll and reveal animation for workflow items
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    workflowItems.forEach(item => {
        observer.observe(item);
    });
});
