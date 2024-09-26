document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('aboutUs').addEventListener('click', function() {
        document.getElementById('content').innerHTML = '<h1>About Us</h1><p>This is the About Us section.</p>';
    });

    document.getElementById('contactUs').addEventListener('click', function() {
        document.getElementById('content').innerHTML = '<h1>Contact Us</h1><p>This is the Contact Us section.</p>';
    });
});
