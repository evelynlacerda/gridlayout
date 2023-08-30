// BACK TO HOME
const startAgain = document.querySelector('#linkHome');

startAgain.addEventListener('click', function() {
    var novaURL = "index.html";
    window.location.href = novaURL;
});

// MENU
const menuLinks = document.querySelectorAll('buttonlink');
const docs = document.querySelector('#docs');
const grid = document.querySelector('#grid');
const area = document.querySelector('#area');
const temp = document.querySelector('#template');



// FOR MODAL
const codeButton = document.getElementsByClassName('showDialog');
const closeModal = document.getElementsByClassName('closemodal');
const modal = document.getElementsByClassName('modal');
const backdrop = document.getElementsByClassName('modal-backdrop');

const toggleModal = () => {
    modal[0].classList.toggle('hide');
    backdrop[0].classList.toggle('hide');
}

[codeButton, closeModal, backdrop].forEach((mod) => {
    mod[0].addEventListener('click', () => toggleModal());
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
