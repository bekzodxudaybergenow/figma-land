const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');


menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
})


