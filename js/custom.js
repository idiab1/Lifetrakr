$(function(){
    'use strict';

    $("body").niceScroll({
        cursorcolor: "#7d71d3",
        cursorwidth:"8px",
        cursorborder: '0'
    })

    // navbar scroll
    let navbar = $('.navbar');
    $(window).on('scroll', function(){

        if ($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
        }else{
            navbar.removeClass('scrolled');
        }
    });

    // Header Background
    /*let header = $('.header');

    header.height($(window).height());

    $(window).resize(function () {

        header.height($(window).height());

    });*/

    // Video Replace
    $('.video-box span.icon').click(function () {
        var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
        $(this).replaceWith(video);
    });
    /*let video = '<iframe allowfullscreen src="' + + '"></iframe>'*/

}) 