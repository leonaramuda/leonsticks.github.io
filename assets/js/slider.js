$(document).ready(function() {
    $('.slide:first-child').addClass('active');
    function switchSlide() {
        var currentSlide = $('.slide.active');
        var nextSlide = currentSlide.next('.slide').length ? currentSlide.next('.slide') : $('.slide:first-child');
        currentSlide.fadeOut(500).removeClass('active');
        nextSlide.fadeIn(500).addClass('active');
    }
    var interval = setInterval(switchSlide, 3000);
});