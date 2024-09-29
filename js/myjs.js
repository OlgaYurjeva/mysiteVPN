const burgerBtn = document.querySelectorAll('.header__burger')
const closeBurger = document.querySelector('.burger-close')
const burgerMenu = document.querySelector('.burger-menu')
const htmlTag = document.querySelector('html')


function noScroll() {
   if (burgerMenu.classList.contains('burger-menu--active')) {
      htmlTag.setAttribute('style', 'overflow:hidden')
   } else {
      htmlTag.removeAttribute('style', 'overflow:hidden')
   }
}
burgerBtn.forEach(item => {
  
      item.addEventListener('click', () => {

         burgerMenu.classList.add('burger-menu--active')
         noScroll();
      })

});

closeBurger.addEventListener('click', () => {
   burgerMenu.classList.remove('burger-menu--active')
   noScroll();

})

const accordeon = document.querySelectorAll('.accordeon')
const title = document.querySelectorAll('.faq__header')
const body=document.querySelectorAll('.faq__body')
title.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.target.closest('.accordeon')
      accordeon.forEach(item => {
         item.removeAttribute('open', '')
      })
   })
})