const liste = document.querySelector('nav ul');

document.querySelector('nav button').addEventListener('click',displayMenu);
function displayMenu() {
    document.querySelector('.portrait ul').classList.toggle('visible');
    document.querySelector('nav').classList.toggle('bignav');
}

window.addEventListener('resize',e => detectSize(e.target.screen.width));

function detectSize(size) {
    const portrait = size < 700;
    portrait && document.querySelector('nav').classList.add('portrait') 
    !portrait && (document.querySelector('nav').className = '');
    !portrait && (liste.className = '');
}

detectSize(window.innerWidth);