
const menuBurger = document.querySelector('.line-container')
const mobileMenu = document.querySelector('.mobile-menu')
const header = document.getElementById('header')


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: ".swiper-pagination",
       
    }
})

 // hides mobile menu
function hideMobileMenu() {

    if(mobileMenu.classList.contains('hide-initial')){
        mobileMenu.classList.add('show')
        mobileMenu.classList.remove('hide-initial')
    } else {
        if(mobileMenu.classList.contains('hide')){
            mobileMenu.classList.add('show')
            mobileMenu.classList.remove('hide')
        } else {
            mobileMenu.classList.add('hide')
            mobileMenu.classList.remove('show')
        }
    }

}

window.onresize =  () => {
    if(window.outerWidth > 768){
        menuBurger.querySelectorAll('.line-long').forEach(obj => {
            obj.classList.remove('normal-menu')
            obj.classList.remove('x-menu-from')
            obj.classList.add('line-container')
        })
        menuBurger.style.display = "none"
        mobileMenu.classList.remove('show')
        mobileMenu.classList.add('hide')
    } else {
        menuBurger.style.display = "block"
    }
}



// converts to closeable menu 
function convertX() {
    const childClass = menuBurger.querySelectorAll('.line-long')
    childClass.forEach(obj => {
       if(obj.classList.contains('x-menu-from') === false){
        obj.classList.add('x-menu-from')
        obj.classList.remove('normal-menu')
       } else {
        obj.classList.remove('x-menu-from')
        obj.classList.add('normal-menu')
       }
    })
}



menuBurger.addEventListener('click', e => {
   hideMobileMenu()
   convertX()
})