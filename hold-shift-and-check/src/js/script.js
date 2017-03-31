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

function uuu(btn) {
    btn.on('click', function (e) {
        var inBetween = false;
        lastChecked = this;
        
        if (e.shiftKey && this.checked) {
            $.each(getCheckbox, function (index, checkbox) {
                if (checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                    console.log(this);
                    console.log(lastChecked)
                    console.log(inBetween)
                }


                if(inBetween){
                 checkbox.checked = true;
                }
            });
        }


    });
}

uuu($('input'));

// $.map(getCheckbox, function (checkbox) {
//     checkbox.addEventListener('click', handleCheck)
// });