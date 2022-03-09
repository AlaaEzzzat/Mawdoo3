/*jslint browser : true */
/*global $, jquery, console*/
$(function () {
    "use strict";
    /* fixed and opacity nav bar */
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            if (!$(".navbar").hasClass("scrolling")) {
                $(".navbar").addClass("scrolling");
                $(".brand").addClass("nav-text");
                $(".navbar-brand").addClass("nav-text");
                $(".nav-link").addClass("nav-text");
                $(".nav-btn").addClass("btn-text");
                $(".navbar-toggler").addClass("menu-btn");
                               
            }
        } else {
            $(".navbar").removeClass("scrolling");
            $(".brand").removeClass("nav-text");
            $(".nav-link").removeClass("nav-text");
            $(".navbar-brand").removeClass("nav-text");
            $(".nav-btn").removeClass("btn-text");
            $(".navbar-toggler").removeClass("menu-btn");
        }
    });
    ///////////////////////////////////////////////////////////deal with tabs 
    $(".tabSection .nav-tabs .nav-link ").click(function () {
        $(".tabSection .nav-tabs .nav-link ").removeClass("active");
        $(this).addClass("active");
        $(".tabSection .list").removeClass("on");
        $($(this).parent().data("class")).addClass("on");
    });
    /////////////////////////////////////////////////click on scroll to top 
    $(".scroll-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 1000) {
            $(".scroll-to-top").fadeIn(500);
        } else {
            $(".scroll-to-top").fadeOut(500);
        }
    });

});
///////////////////////////////////////////////////// smoth scroll to elements
$(".navbar-nav .nav-item .clasification").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top
    }, 500);
});
$(".the-content .links .link .go").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 80
    }, 100);
});
$(".navbar-brand-index").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});
//////////////////////////////////////////scroll to top
$(window).scroll(function () {

    if ($(window).scrollTop() >= 1000) {
        $(".scroll-to-top").fadeIn(500);
    } else {
        $(".scroll-to-top").fadeOut(500);
    }

});