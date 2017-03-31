var shadow = $('.shadow')[0];
var shadowWord = $('.shadow-word');

/**
 * distance of shadow-text offset
 * @type {number}
 */
var walk = 300;

/**
 * set the same window height to shadow element
 * @type {*}
 */
var windowHeight = $(window).height();
$('.shadow').css('height', windowHeight + 'px');

function followShadow(e) {
    //width of div shadow
    var width = shadow.offsetWidth;
    //height of div shadow
    var height = shadow.offsetHeight;

    //'mouse' position
    var x = e.offsetX;
    var y = e.offsetY;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    var xWalk = Math.round((x / width * walk) - (walk / 2));
    var yWalk = Math.round((y / height * walk) - (walk / 2));

    //set shadow-text style on h1
    shadowWord.css('text-shadow', xWalk + 'px ' + yWalk + 'px' + ' 0 #767676');
}

shadow.addEventListener('mousemove', followShadow);