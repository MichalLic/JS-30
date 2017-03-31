/**
 * get checkboxes
 * @type {*}
 */
var checkboxes = $('.checkboxes');
console.log(checkboxes);
/**
 * get checkbox
 * @type {*}
 */
var getCheckbox = $('input[type="checkbox"]');
console.log(getCheckbox);


var lastChecked = '';

function shiftCheckboxes (btn) {
    btn.on('click', function (e) {
        var inBetween = false;
        var currentlyClicked = this;

        if (e.shiftKey && this.checked) {
            $.each(getCheckbox, function (index, checkbox) {
                if (checkbox === currentlyClicked || checkbox === lastChecked) {
                    inBetween = !inBetween;
                }
                if(inBetween){
                 checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
    });
}
shiftCheckboxes ($('input'));