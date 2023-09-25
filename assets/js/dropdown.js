$(document).ready(function() {
    $('#dropdown').click(function(event) {
        event.preventDefault();
        console.log('Link clicked!');
        $(this).siblings('#dropdown-content').toggle();
    });
});