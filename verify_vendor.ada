$(document).ready(function () {
    $('#verifyVendorForm').submit(function (e) {
        e.preventDefault();
        var domain = $('#domain').val();

        // Send GET request to backend API to verify vendor
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/api/submissions/verify-vendor?domain=' + domain,
            success: function (data) {
                var vendorDetailsHtml = '';
                if (data.length > 0) {
                    vendorDetailsHtml += '<h2>Vendor Details</h2>';
                    data.forEach(function (submission) {
                        vendorDetailsHtml += '<p><strong>Client Name:</strong> ' + submission.clientName + '</p>';
                        vendorDetailsHtml += '<p><strong>Vendor Name:</strong> ' + submission.vendorName + '</p>';
                        // Add other vendor details
                    });
                } else {
                    vendorDetailsHtml = '<p>No vendor found for the specified domain.</p>';
                }
                $('#vendorDetails').html(vendorDetailsHtml);
            },
            error: function () {
                alert('Error verifying vendor!');
            }
        });
    });
});
