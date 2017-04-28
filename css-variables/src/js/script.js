//method 1
// const inputs = document.querySelectorAll('.single-control input');
//
// function handleUpdate() {
//     const suffix = this.dataset.sizing || '';
//     document.documentElement.style.setProperty('--' + this.id, this.value + suffix)
// }
//
// inputs.forEach(function (input) {
//     input.addEventListener('change', handleUpdate)
// });
//
// inputs.forEach(function (input) {
//     input.addEventListener('mousemove', handleUpdate)
// });


//method 2
var inputs = $('.single-control input');

inputs.on('change', function () {
    var suffix = this.dataset.sizing || '';
    $('body').css('--' + this.id, this.value + suffix);
});

inputs.on('mousemove', function () {
    var suffix = this.dataset.sizing || '';
    $('body').css('--' + this.id, this.value + suffix);
});