import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export function initThemeScript() {
    "use strict";
    const $ = jQuery;

    window.document.querySelector(".navbar-toggler").addEventListener("click", function () {
        window.document.querySelector(".navbar-collapse").classList.toggle("show");
    });

    $(".search-icon").on("click", function () {
        $(".search").addClass("search-open");
    });
    $(".close").on("click", function () {
        $(".search").removeClass("search-open");
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 250) {
            $(".back-top").fadeIn(300);
        } else {
            $(".back-top").fadeOut(300);
        }
    });

    $(".back-top").on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({scrollTop: 0}, 300);
        return false;
    });

    /*const swiper = new Swiper(".slider-style1", {
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    var swiperr = new Swiper(".slider-style2 .swiper-bottom", {
        spaceBetween: 0,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        }
    });

    const swiper2 = new Swiper(".slider-style2 .swiper-top", {
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        thumbs: {
            swiper: swiperr
        }
    });

    const swiper5 = new Swiper(".slider-style5", { // <-- Renamed variable to swiper5
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    const swiper6 = new Swiper(".slider-style6", { // <-- Renamed variable to swiper6
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1050: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });*/

}
