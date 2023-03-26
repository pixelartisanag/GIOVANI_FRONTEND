import React, { useEffect } from 'react';
import jQuery from 'jquery';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export function useInitTheme() {
    useEffect(() => {
        // Replace all instances of '$' with 'jQuery'
        const $ = jQuery;

        jQuery.fn.elExists = function () {
            return this.length > 0;
        };

        var $body = $('body'),
            $overlay = $('.global-overlay');

        function stickyHeader(selectors) {
            var { main } = selectors;
            var $headerPosition = (main.elExists()) ? main.offset().top : '';
            var $mainHeaderHeight = (main.elExists()) ? main[0].getBoundingClientRect().height : 0;
            var $headerTotalHeight = $headerPosition + $mainHeaderHeight;

            $(window).on('scroll', function () {
                var $scroll = $(window).scrollTop();
                if ($scroll > $headerTotalHeight) {
                    main.addClass('is-sticky');
                } else {
                    main.removeClass('is-sticky');
                }
            });
        }

        $(window).on('load', function () {
            var mainSelectors = {
                main: $('.header')
            }
            stickyHeader(mainSelectors);
        });

        $('.js-toolbar-btn').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var $this = $(this);
            var target = $this.data('target');
            $body.toggleClass('body-open');
            $(target).toggleClass('open');
            $($overlay).addClass('overlay-open');
            $this.toggleClass('open');
        });

        $body.on('click', function (e) {
            var $target = e.target;
            var dom = $('.wrapper').children();

            if (!$($target).is('.js-toolbar-btn') && !$($target).parents().is('.open')) {
                dom.removeClass('open');
                $body.removeClass('body-open');
                dom.find('.open').removeClass('open');
                $overlay.removeClass('overlay-open');
            }

        });

        $('.btn-close').on('click', function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.parents('.open').removeClass('open');
            $($overlay).removeClass('overlay-open');
        });

        $('.contact-form__input').on('change paste keyup', function (e) {
            const val = $(this).val();

            if (val) {
                $(this).parent().addClass('has-value')
            } else {
                $(this).parent().removeClass('has-value')
            }
        })

        new Swiper('.post-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: false,
            autoplay: {
                delay: 3000
            }
        })

        function scrollToTop() {
            var btn = $('#scrollToTOp');
            $(window).scroll(function () {
                if ($(window).scrollTop() > 300) {
                    btn.addClass('show');
                } else {
                    btn.removeClass('show');
                }
            });
            btn.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, '300');
            });
        }
        scrollToTop();

    }, []);
}