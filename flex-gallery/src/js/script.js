$(document).ready(function () {

    /**
     * set toggleclass to clicked element
     * @param art
     */
    function onSetClassOpen(art) {
        art.on('click', function () {
            if ($(this).toggleClass('open').siblings().removeClass('open')) {
                setClassOpenactive(this);
            }
        });
    }

    /**
     * set toggleclass to element
     * @param that
     */
    function setClassOpenactive(that) {
        $(that).toggleClass('open-active').siblings().removeClass('open-active');
    }

    onSetClassOpen($('.art'));
});