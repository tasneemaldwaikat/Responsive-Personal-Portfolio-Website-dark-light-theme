/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById ('nav_menu'),
    navToggle = document.getElementById ('nav_toggle') ,
    navClose = document.getElementById ('nav_close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
   navToggle.addEventListener('click' , () => {
       navMenu.classList.add('show_menu') 
   }) 
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close';
    }

    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});


/* ==================== PORTFOLIO SWIPER  ==================== */
let swiper = new Swiper('.mySwiper', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll_header'); else nav.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the scroll-up element
    if (window.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-brightness'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-brightness'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

