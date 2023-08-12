const docsGrid = document.querySelector('#docs');
const menu = document.querySelectorAll('#menu button .iconify');
const buttonGap = document.querySelector('#buttonGap');
const gapSquare = document.querySelector('#gridSquare');

function removeActiveMenu() {
    menu.forEach((span) => {
        span.classList.remove('active')
    })
}

menu.forEach((span) => {
    span.addEventListener('click', () => {
        const menuSelect = document.querySelector('.active');

        if (menuSelect) removeActiveMenu();

        menu.classList.add('active');

    })
});


function gapActive() {

    if (buttonGap.value === true) {
        console.log('on'); 
        gapSquare.style.gridGap = '1.6rem';
    } else if (buttonGap.value === false) {
        console.log('off');
        gapSquare.style.gridGap = '0';
    }
}


buttonGap.addEventListener('click', gapActive);