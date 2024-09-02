// make the menu buttons on mobile functional
const mobileNavOpenBtn = document.getElementById('mobile-nav-btns__open');
const mobileNavCloseBtn = document.getElementById('mobile-nav-btns__close');
const mobileNavCont = document.getElementById('mobile-nav-cont');

mobileNavOpenBtn.addEventListener('click', () => openOrCloseMobileNav(false));
mobileNavCloseBtn.addEventListener('click', () => openOrCloseMobileNav(true));

function openOrCloseMobileNav(isOpened) {
    if (isOpened) {
        mobileNavCont.style.display = 'none';
        mobileNavCloseBtn.style.display = 'none';
        mobileNavOpenBtn.style.display = 'block';
        return
    }

    mobileNavCont.style.display = 'block';
    mobileNavCloseBtn.style.display = 'block';
    mobileNavOpenBtn.style.display = 'none';
    return
}