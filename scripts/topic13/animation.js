const panels = document.querySelectorAll('.panel');

function classToggle() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

function hide() {
    this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', classToggle));
panels.forEach(panel => panel.addEventListener('click', hide));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

let a = new Audio();
let b = new Audio();
let c = new Audio();
a.src = "sounds/chopinEt5.m4a";
b.src = "sounds/lisztWat.m4a";
c.src = "sounds/ravelPav.m4a";
function chopin() {
    a.play();
    b.pause();
    c.pause();
}

function liszt() {
    a.pause();
    b.play();
    c.pause();
}

function ravel() {
    a.pause();
    b.pause();
    c.play();
}

