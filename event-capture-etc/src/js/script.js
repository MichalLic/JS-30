const divs = document.querySelectorAll('div');

function logText(e) {
    e.stopPropagation();
    console.log(this.classList.value)
}


divs.forEach(function (div) {
    div.addEventListener('click', logText, {
        capture: false
    })
});