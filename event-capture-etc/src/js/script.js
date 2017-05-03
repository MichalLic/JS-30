const divs = document.querySelectorAll('div');

function logText(e) {
    // Stop propagation of persistent events.
    e.stopPropagation();
    console.log(this.classList.value)
}


divs.forEach(function (div) {
    div.addEventListener('click', logText, {
        // Register the event handler for the BUBBLING phase. It's default value.
        capture: false

        // Register the event handler for the CAPTURING phase.
        // capture: true
    })
});