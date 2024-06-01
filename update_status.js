$(document).ready(function () {
    $('#updateStatusForm').submit(function (e) {
        e.preventDefault();
        var email = $('#email').val();
        var status = $('#status').val();
        var notes = $('#notes').val();

        // Send POST request to backend API to update submission status
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/api/submissions/update-status',
            data: {
                email: email,
                status: status,
                notes: 
