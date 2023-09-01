// BACK TO HOME
const startAgain = document.querySelector('#linkHome');

startAgain.addEventListener('click', function () {
    var novaURL = "index.html";
    window.location.href = novaURL;
});

// MENU
const menuLinks = document.querySelectorAll('.buttonlink');
const sections = document.querySelectorAll('section');


menuLinks.forEach((link) => {
    link.addEventListener('click', function() {

        const target = link.dataset.target;
        sections.forEach((section) => {
            if (section.getAttribute('id') === target) {
                section.style.display = 'flex';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

// GAP FOR GRID
function gapActive() {
    const buttonGap = document.querySelector('#buttonGap');
    const gapSquare = document.querySelector('#gridSquare');

    buttonGap.checked

        ? gapSquare.style.gridGap = '1.6rem'
        : gapSquare.style.gridGap = '0rem'
}

buttonGap.addEventListener('click', gapActive);
