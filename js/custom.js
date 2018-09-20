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

});