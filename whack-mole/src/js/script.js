const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;

function randTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole) {
        console.log('bylo juz...');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function jumpOut() {
    const time = randTime(200, 1000);
    const hole = randomHole(holes);
    console.log(time, hole);
    hole.classList.add('up');
    setTimeout(function () {
        hole.classList.remove('up');
        if (!timeUp) jumpOut();
    }, time)
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    jumpOut();
    setTimeout(function () {
        timeUp = true;
    }, 2000);
}