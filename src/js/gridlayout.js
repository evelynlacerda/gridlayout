const startAgain = document.getElementById('linkHome');
const docsGrid = document.querySelector('#docs');
const menu = document.querySelectorAll('#menu button span');
const buttonGap = document.querySelector('#buttonGap');
const gapSquare = document.querySelector('#gridSquare');

// BACK TO HOME
startAgain.addEventListener('click', function() {
    var novaURL = "index.html";
    window.location.href = novaURL;
});

// MENU ACTIVE
function removeActiveMenu() {
    menu.forEach((span) => {
        span.classList.remove('active')
    })
}

menu.forEach((span) => {
    span.addEventListener('click', () => {
        const menuSelect = document.querySelector('.active');

        if (menuSelect) removeActiveMenu();

        span.classList.add('active');

    })
});

// GAP FOR GRID
function gapActive() {

    buttonGap.checked

        ? gapSquare.style.gridGap = '1.6rem'
        : gapSquare.style.gridGap = '0rem'
}

buttonGap.addEventListener('click', gapActive);