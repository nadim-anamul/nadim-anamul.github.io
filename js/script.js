(function ($) {
    'use strict';
    // scroll header function
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    });

    // slider carousel
    $('.slider-start').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: false,
        dots: true,
        smartSpeed: 600,
    });

    // featured image carousel
    $('#featured-image').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: false,
        dots: true,
        smartSpeed: 600,
    });

    // testimonial carousel
    $('#reviewSlider').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: false,
        dots: true,
        smartSpeed: 600,
    });
})(jQuery);
