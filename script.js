// Function to make API requests
async function makeRequest(url, method, data) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return null;
    }
}

// Function to handle form submissions
document.getElementById("submissionForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const clientName = document.getElementById("clientName").value;
    // Get other form values similarly

    const submissionData = {
        clientName: clientName,
        // Add other form data fields
    };

    const response = await makeRequest('/api/submissions/add', 'POST', submissionData);
    console.log(response); // Log response from backend
});

document.getElementById("verifyVendorForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const vendorDomain = document.getElementById("vendorDomain").value;
    const response = await makeRequest(`/api/submissions/verify-vendor?domain=${vendorDomain}`, 'GET');
    console.log(response); // Log response from backend
    // Display response in verifiedVendorDetails
    const verifiedVendorDetails = document.getElementById("verifiedVendorDetails");
    verifiedVendorDetails.innerHTML = JSON.stringify(response);
});

document.getElementById("updateStatusForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    // Get other form values similarly

    const updateStatusData = {
        email: email,
        // Add other form data fields
    };

    const response = await makeRequest('/api/submissions/update-status', 'POST', updateStatusData);
    console.log(response); // Log response from backend
});

document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const registerEmail = document.getElementById("registerEmail").value;
    // Get other form values similarly

    const registerData = {
        email: registerEmail,
        // Add other form data fields
    };

    const response = await makeRequest('/api/users/register', 'POST', registerData);
    console.log(response); // Log response from backend
});

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const loginEmail = document.getElementById("loginEmail").value;
    // Get other form values similarly

    const loginData = {
        email: loginEmail,
        // Add other form data fields
    };

    const response = await makeRequest('/api/users/login', 'POST', loginData);
    console.log(response); // Log response from backend
});
