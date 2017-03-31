$(document).ready(function () {

    window.addEventListener('keydown', function (e) {
        var audio = $('audio[data-key=' + e.keyCode + ']');
        var key = $('.key[data-key=' + e.keyCode + ']');
        var audioElement = audio[0];
        var keyElement = key[0];
        var getSrc = audioElement['src'];

        new Audio(getSrc).play();
        keyElement.classList.add('playing');
        setTimeout(function () {
            key.removeClass('playing')
        }, 100);

    });

});