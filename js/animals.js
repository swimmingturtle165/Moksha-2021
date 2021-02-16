/*
Project/design by Jonathan Quintin
https://dribbble.com/shots/1346874-Weather-Dashboard-Global-Outlook-5?list=users&offset=71

View in Full Page mode!
*/

$('.main-nav ul li').click(function() {
    currentSlide($(this).data()["id"]);
    window.el = $(this);
});

$('.menuicon').click(function() {
    $('.ul-menu').css('bottom', '-150%');
    $(this).next('.ul-menu').css('bottom', '0');
});

$('.ul-menu-close').click(function() {
    $('.ul-menu').css('bottom', '-150%');
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    var iconlis = $('.main-nav ul li');
    iconlis.removeClass('active');
    $(iconlis[slideIndex-1]).toggleClass('active');

    var headings = $('#category-descriptions a');
    headings.removeClass('active-block');
    $(headings[slideIndex-1]).toggleClass('active-block');

    var ps = $('#category-descriptions p');
    ps.removeClass('active-block');
    $(ps[slideIndex-1]).toggleClass('active-block');
}