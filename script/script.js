const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');


// mobile-nav-btn
menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
})

// mobile-nav-box-shadow
window.addEventListener('scroll', (e) => {
    if(window.pageYOffset > 0) {
        header.classList.add('header-shadow');
    }
    else {
        header.classList.remove('header-shadow');
    }
})
