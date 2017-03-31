/**
 * get nav element
 * @type {*}
 */
var nav = $('nav');

/**
 * get body
 */
var body = $('body');

/**
 * get Y position of nav element
 * @type {*}
 */
var topOfNav = nav.offset().top;

/**
 * get height of nav
 */
var navHeight = nav.height();

function fixNav() {
    //check pixels value
    if (window.scrollY >= topOfNav) {
        body.addClass('fixed-nav');
        body.css('padding-top', navHeight);
    } else {
        body.removeClass('fixed-nav');
        body.css('padding-top', 0);
    }
}
window.addEventListener('scroll', fixNav);