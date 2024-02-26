/*==================== toggle style switcher ====================*/
const styleSwitcher = document.querySelector('.style-switcher-toggler');
styleSwitcher.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})

// hide style - switcher on scroll
window.addEventListener('scroll', () => {
    const styleSwitcher = document.querySelector('.style-switcher');
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
        styleSwitcher.style.display = 'none';
    }
});
/*==================== theme colors ====================*/
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else {
            style.setAttribute('disabled', 'true');
        }
    })
}
/*==================== Theme light and dark mode ====================*/
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})


/*==================== Translate ====================*/
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,
    }, 'google_translate_element');
}
