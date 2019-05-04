var hamburgerButton = document.querySelector('.hamburger__button');
var mobileNav = document.querySelector('.mobile');
var backdrop = document.querySelector(".backdrop");

var mobileNavClose = document.querySelector('.mobile__close');

function openMobile() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
}

hamburgerButton.addEventListener('click', openMobile);
mobileNavClose.addEventListener('click', closeMobile);
backdrop.addEventListener('click', closeMobile);