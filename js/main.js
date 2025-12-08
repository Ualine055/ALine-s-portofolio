/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('hidden')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('#nav-menu a')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.add('hidden')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
if(typeof ScrollReveal !== 'undefined'){
    const sr = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('#home, #about, #skills, #work, #contact', {interval: 200});
}

/*===== TYPED JS =====*/
if(typeof Typed !== 'undefined'){
    new Typed('.typed-text', {
        strings: ['Frontend Developer', 'UI/UX Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        cursorChar: '_'
    });
}

/*===== ACTIVE LINK ON SCROLL =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLinks = document.querySelectorAll(`a[href*="${sectionId}"]`);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-main-gold');
            });
        } else {
            navLinks.forEach(link => {
                link.classList.remove('text-main-gold');
                link.classList.add('text-white');
            });
        }
    });
});
