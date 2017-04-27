var Clock = {

    //init
    init: function () {
        Clock.setDate();
        Clock.setSecondsInterval();
    },

    //functions
    /**
     * put sec, min, hour to object
     * @returns {{seconds: number, minutes: number, hours: number}}
     */
    setDate: function () {
        var date = new Date();
        var time = {
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours()
        };
        return time;
    },

    /**
     * set one second interval to function
     */
    setSecondsInterval: function () {
        setInterval(function () {
            Clock.putInMotionHand();
        }, 1000)
    },

    /**
     * assign a proper value of degrees to hands
     */
    putInMotionHand: function () {
        var seconds = (Clock.setDate().seconds / 60) * 360 + 90;
        var minutes = (Clock.setDate().minutes / 60) * 360 + 90;
        var hours = (Clock.setDate().hours / 12) * 360 + 90;

        //add transform styles to hands
        $('.second-hand').css('transform', 'rotate(' + seconds + 'deg)');
        $('.minute-hand').css('transform', 'rotate(' + minutes + 'deg)');
        $('.hour-hand').css('transform', 'rotate(' + hours + 'deg)');
    }
};

$(document).ready(function () {
    Clock.init();
});