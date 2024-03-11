let topHeader = document.querySelector('.nav-bar');
let lastScrollY = 0

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        topHeader.classList.add('hide');
    }
    else {
        topHeader.classList.remove('hide');
    }
    lastScrollY = window.scrollY;

})