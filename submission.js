$(document).ready(function () {
    $('#submissionForm').submit(function (e) {
        e.preventDefault();
        var clientName = $('#clientName').val();
        // Add other form field values

        // Send POST request to backend API
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/api/submissions/add',
            contentType: 'application/json',
            data: JSON.stringify({
                clientName: clientName,
                // Add other form field values
            }),
            success: function (data) {
                alert('Submission added successfully!');
                // Redirect to another page or perform other actions as needed
            },
            error: function () {
                alert('Error adding submission!');
            }
        });
    });
});
