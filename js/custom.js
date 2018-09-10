$(document).ready( function move() {
        var elem = document.getElementById("line-html");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 54) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }

});

$("#css").mouseover( function move() {
    var elem = document.getElementById("line-css");
    var width = elem.style.width+"";
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 55) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }

});

$(document).ready( function move() {
    var elem = document.getElementById("line-js");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }

});