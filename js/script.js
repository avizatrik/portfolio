/*--------------------------------------------------------------------------------
* Author        : Web_Soldier,
* templete name : REX. || Portfolio Theme,
* File          : REX. main script/js files,
* Version       : 1.0
--------------------------------------------------------------------------------*/

/*------------------------------------------------------------------------------

   -- INDEX --

01. menu background change

02. mooth Scroll

03. portfolio / isotop 

04. veno box

05. counter Up

06. testimonial part slider 

07. scroll up

08. blog part slider 

08. preloader js

--------------------------------------------------------------------------------*/



(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        // 01. for menu background change
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 150) {
                $('.navbar').addClass('menu-bg');
            } else {
                $('.navbar').removeClass('menu-bg');
            }
        });

        // 02. for Smooth Scroll
        $('a[href*="#"]:not([href="#').on('click', function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                    return false;
                }
            }
        });

        // 03. for portfolio / isotop 
        $('.gallery').isotope({
            // options //
            itemSelector: '.items'
        });

        var $gallery = $('.gallery').isotope({
            // options //
        });

        // filter items on button click //
        $('.filtering').on('click', 'span', function () {

            var filterValue = $(this).attr('data-filter');

            $gallery.isotope({
                filter: filterValue
            });

        });

        $('.filtering').on('click', 'span', function () {

            $(this).addClass('active').siblings().removeClass('active');

        });

    });

    // 04. for veno box
    $('.venobox').venobox({
        framewidth: '400px',
        frameheight: '300px',
        titleattr: 'data-title',
        numeratio: true,
        spinner: 'cube-grid',
        spinColor: '#5A71C4'
    });

    // 05. for counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // 06. testimonial part slider 
    $('.test-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false
    });

    // 07. for scroll up
    $('.scroll-icon').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // for scroll up fed in fed out//
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scroll-icon').fadeIn();
        } else {
            $('.scroll-icon').fadeOut();
        }
    });
    
    // 08. for blog part slider  
	$('.blog-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		autoplaySpeed: 5000,
		arrows: true,
		prevArrow: '.blog-prv',
		nextArrow: '.blog-next',
		infinite: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		  ]
	});
    

})(jQuery);
