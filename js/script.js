(function($) {
    "use strict";


$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header').addClass("header-fixed");
    } else {
        $('.header').removeClass("header-fixed");
    }


});


$('.slider-start').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: false,
    dots: true,
    smartSpeed: 600,
});
$('#featured-image').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: false,
    dots: true,
    smartSpeed: 600,
});
$('#reviewSlider').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: false,
    dots: true,
    smartSpeed: 600,
});


})(jQuery);