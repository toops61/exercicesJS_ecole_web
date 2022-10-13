window.addEventListener('mousemove', e => followMouse(e));

function followMouse(e) {
    convertedXPos = (e.clientX * 100) / window.innerWidth;
    convertedYPos = (e.clientY * 100) / window.innerHeight;
    const xPosition = (convertedXPos * 24) / 100 - 12 + 'vw';
    const yPosition = (convertedYPos * 18) / 100 - 9 + 'vh';
    document.querySelectorAll('.iris')[0].style.transform = `translate(${xPosition},${yPosition})`;
    document.querySelectorAll('.iris')[1].style.transform = `translate(${xPosition},${yPosition})`;
}