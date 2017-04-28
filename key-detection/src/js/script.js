const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', function (e) {
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

    if (pressed.join('').includes(secretCode)) {
        console.log('There is secret word!')
    }
});