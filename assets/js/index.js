$(document).ready(function() {

    $('.wrap').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


});