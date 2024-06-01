// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the form
    const submissionForm = document.getElementById('submissionForm');

    // Add submit event listener to the form
    submissionForm.addEventListener('submit', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Get form data
        const formData = new FormData(submissionForm);

        // Convert formData to JSON object
        const submissionData = {};
        for (const [key, value] of formData.entries()) {
            submissionData[key] = value;
        }

        // Add status to submission data
        submissionData.status = 'Submitted';

        // Send submission data to backend
        sendSubmissionData(submissionData);
    });
});

// Function to send submission data to backend
function sendSubmissionData(submissionData) {
    fetch('http://localhost:8080/api/submissions/add', { // Change the URL to match your backend endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add submission.');
        }
        return response.json();
    })
    .then(data => {
        // Handle success response
        alert('Submission added successfully!');
        window.location.href = 'file:///C:/Users/tharu/Desktop/Basic%20UI/Welcome/Dashboard/dashboard.html'; // Redirect to dashboard after successful submission
    })
    .catch(error => {
        console.error('Error adding submission:', error);
        // Handle error response
        alert('Failed to add submission. Please try again.');
    });
}
