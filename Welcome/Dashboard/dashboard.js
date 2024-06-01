// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the buttons
    const addSubmissionBtn = document.getElementById('addSubmissionBtn');
    const verifyVendorBtn = document.getElementById('verifyVendorBtn');
    const updateStatusBtn = document.getElementById('updateStatusBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Add click event listeners to the buttons
    addSubmissionBtn.addEventListener('click', () => {
        // Redirect to add submission page
        window.location.href = 'file:///C:/Users/tharu/Desktop/Basic UI/Welcome/Dashboard/AddSubmission/add_submission.html';
    });

    verifyVendorBtn.addEventListener('click', () => {
        // Redirect to verify vendor page
        window.location.href = 'verify_vendor.html';
    });

    updateStatusBtn.addEventListener('click', () => {
        // Redirect to update status page
        window.location.href = 'update_status.html';
    });

    logoutBtn.addEventListener('click', () => {
        // Redirect to logout page
        window.location.href = 'logout.html';
    });
});
