window.onload = function() {

    var body = document.getElementById('body')

    function getScrollTop() {
        if (typeof window.pageYOffset !== 'undefined') {
            // Most browsers
            return window.pageYOffset;
        }

        var d = document.documentElement;
        if (d.clientHeight) {
            // IE in standards mode
            return d.scrollTop;
        }

        // IE in quirks mode
        return document.body.scrollTop;
    }

    window.onscroll = function() {
        console.log(body.offsetHeight);
        var box = document.getElementById('box'),
            scroll = getScrollTop();
        console.log(getScrollTop());

        if (scroll <= body.clientHeight) {
            box.style.top = `${getScrollTop()}%`;
        } else {
            box.style.bottom = `${getScrollTop()}%`;
        }
    };

    function calPos() {

    }
};