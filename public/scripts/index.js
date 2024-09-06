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



// handle form data and send email

const contactBtn = document.getElementById('contact-btn');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

contactBtn.addEventListener('click', () => {
    let result = validateInputs();

    if (!result) {
        alert("please fill in the required spaces.");
    }

    // send the data to server
    let name = nameField.value, email = emailField.value, message = messageField.value;

    // window.location.assign("mailto:aramiyorogheneserome@gmail.com");
});

// validate data

function validateInputs() {
    let name = nameField.value, email = emailField.value, message = messageField.value;

    if (!(name && name.length > 0)) {
        return false;
    }

    if (!(email && email.length > 0)) {
        return false;
    }

    if (!(message && message.length > 0)) {
        return false;
    }

    return true;
}