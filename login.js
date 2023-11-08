$(document).ready(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault();
        var password = $('#wholesale763').val();
        if (password === 'correctpassword') {
            window.open('https://shop.silkcitycoffee.com', '_blank');
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
});