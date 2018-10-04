

$("document").ready(function($){

    var nav = $('.header-container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            nav.addClass("f-nav");
            $(".logo").addClass("hidden");
            $(".nav").addClass('container');
        } else {
            nav.removeClass("f-nav");
            $(".logo").removeClass("hidden");
            $(".nav").addClass('container');
        }
    });




    $('.portfolio-slider').slick({
        arrows: false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:true,
    });



    $(document).ready(function(){
        $('.menu__link').click( function(){
            var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
         }

            $('.menu-toggle').removeClass('active');
            $('.ham').removeClass('active');
            $('section').removeClass('blur');
            $('.menu').removeAttr('style');


            return false; // выключаем стандартное действие
        });
    });


    $(window).scroll(function() {
        var hT = $('#skills').offset().top,
            hH = $('#skills').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS >= (hT+hH-wH-100)){
            move(document.getElementById("line-css"), 55);
            move(document.getElementById("line-html"), 65);
            move(document.getElementById("line-js"), 45);
        }

    });


    function move(elem, n) {
        var width = elem.style.width + "";
        var id = setInterval(frame, 20);

        function frame() {
            if (+width >= n) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = '<span class="percents"> '+ elem.style.width+' </span>';
            }
        }


    }

        $('.menu-toggle').click(function () {
            $(this).toggleClass('active');
            $('.menu').slideToggle(400);
            $('section').toggleClass('blur');
        })

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 699 && $('.menu').is(':hidden')) {
            $('.menu').removeAttr('style');
        }
    });


});
