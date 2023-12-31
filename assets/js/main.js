/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
        tab.addEventListener('click', () =>{
            const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active')  
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    //Qhen the scroll is greater than 200 viewport height, add scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with scroll
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*--==================== SCROLL REVEAL ====================*/
ScrollReveal({
    reset: false,
    distance: '40px',
    duration: 1500,
    delay: 200
});

/*========================= REVEAL HOME  =========================*/
ScrollReveal().reveal('.home', { delay: 200, origin: 'bottom'});

/*======================== REVEAL SKILLS  ========================*/
ScrollReveal().reveal('.skills', { delay: 200, origin: 'right'});

ScrollReveal().reveal('.img-softwares', { delay: 200, origin: 'left'});

/*===================== REVEAL QUALIFICATION =====================*/
ScrollReveal().reveal('.qualification', { delay: 200, origin: 'bottom'});

/*======================== REVEAL CONTACT ========================*/
ScrollReveal().reveal('.contact_form', { delay: 200, origin: 'bottom'});

ScrollReveal().reveal('.brand-svg', { delay: 200, origin: 'left'});


/*======================== MENU  ========================*/

