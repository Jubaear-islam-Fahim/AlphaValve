(function ($) {
    'use strict'

    /*
    ========================================
    Top Nav
    ========================================
    */
    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('.navArea').addClass('topnav');
        } else {
            $('.navArea').removeClass('topnav');
        };
    });


    $('.bannerSlid').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        smartSpeed: 1200,
        autoplayTimeout: 7000,
        animateOut: 'fadeOut',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>']

    });

    $('.industry-content').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        smartSpeed: 1200,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        dots: false,
        nav: false,
        // navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('.popupVideo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    $('.energy-saving-slid').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        responsiveClass: true,
        smartSpeed: 1200,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.client-logo-slid').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        smartSpeed: 1200,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        dots: false,
        nav: false,
        navText: ['<i class="fa-solid fa-angles-left"></i>', '<i class="fa-solid fa-angles-right"></i>'],
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    $(window).scroll(function () {
        var a = 0;
        var oTop = $('#counter').offset().top - window.innerHeight;
        console.log($('#counter').offset().top);
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }

    });


})(jQuery);