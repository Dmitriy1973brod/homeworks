(function() {

// Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e){
        const burgerIcon = e.target.closest('.burger__menu')  
        const burgerNavLink = e.target.closest('.nav__link')
        
        if (document.documentElement.clientWidth > 900) return

        if(burgerIcon || burgerNavLink) {
            document.body.classList.toggle('body--opened-menu')
        } 
    }

    // Модалка

    document.addEventListener('click', openModal)

    function openModal(e){
        const modalIcon = e.target.closest('.about__img-button')  
        const closeModal = e.target.closest('.modal__cancel')       
              
        e.preventDefault() 

        if(modalIcon || closeModal) {
            document.body.classList.toggle('body--opened-modal')
        } 
    }


// Табы

const tabControls = document.querySelector('.tab__controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab__controls-link')

    if (!tabControl) return
    e.preventDefault
    if (tabControl.classList.contains('tab__controls-link--activ')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const acviveControl = document.querySelector('.tab__controls-link--activ')
    const activeContent = document.querySelector('.tab-content--show')

    acviveControl.classList.remove('tab__controls-link--activ')
    activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab__controls-link--activ')
    tabContent.classList.add('tab-content--show')

}

// Аккордеон
 
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__heading');
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenItem && accordionItem != accordionOpenItem) {
            accordionOpenItem.classList.remove('accordion-list__item--opened');
            accordionOpenContent.style.maxHeight = null;
        }

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
        });
    });

//Слайдер галереи

const swiper = new Swiper('.gallery__slider', {

    spaceBetween: 15,
    slidesPerView: 1.2,
   
    pagination: {
      el: '.gallery__pag',
      type: 'fraction',
    }, 
    
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
        // when window width is >= 320px
        451: {
          slidesPerView: 2,          
        },
        // when window width is >= 480px
        801: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        // when window width is >= 640px
        1101: {
          slidesPerView: 4,
          spaceBetween: 40
        }
    }
  });

    // Слайдер отзывов

    new Swiper('.feedback__slider', {

        spaceBetween: 0,
        slidesPerView: 2.05,
        centeredSlides: true,            
        
        navigation: {
          nextEl: '.feedback__next',
          prevEl: '.feedback__prev',
        },
        
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
       
      });
  
})()
