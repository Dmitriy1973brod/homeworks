(function() {

// Бургер

document.addEventListener('click', burgerInit)

function burgerInit(e) {
        
    const burgerIcon = e.target.closest('.burger__menu')
    const burgerNavLink = e.target.closest('.modal__cancel')
    const modal = e.target.closest('.modal')

    // const modalNavLink = document.querySelectorAll('.modal__body-link')
    
    if (!burgerIcon && !burgerNavLink && !modal) return
    if (document.documentElement.clientWidth > 900) return
    
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')        
        }   else {
            document.body.classList.remove('body--opened-menu')
        }
        if (!modalNavLink) return 
        
        // const modal = document.querySelector('.modal')
        // modal.addEventListener('click', closeModal)

        // function closeModal(e) {
        //     e.preventDefault() 
    
        //     const target = e.target
    
        //     if (target.closest('.modal__cancel')  && target.classList.contains('modal')) {
        //         document.body.classList.remove('body--opened-modal')
        //     }
        // }
}
    
   

// Маска для телефона

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

// Аккордеон

const accordionLists = document.querySelectorAll('.circuitry__list');

accordionLists.forEach(el => {    

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenContent = accordionList.querySelector('.accordion-list__item--opened .circuitry__text')

        
        const accordionControl = e.target.closest('.circuitry__control');        
        if (!accordionControl) return
        e.preventDefault()
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

    // Табы

    const tabControls = document.querySelector('.services__tab-controls')

    tabControls.addEventListener('click', toggleTab)
    
    function toggleTab(e) {
    
        const tabControl = e.target.closest('.services__tab-controls--link')
    
        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('services__tab-controls--link--activ')) return // Проверка на
        // нажатие уже активной кнопки. Если это так, то дальнейший код не будет даже считываться.
    
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const acviveControl = document.querySelector('.services__tab-controls--link--activ')
        const activeContent = document.querySelector('.services__tab-content--show')
    
        activeContent.classList.remove("services__tab-content--show") 
        acviveControl.classList.remove('services__tab-controls--link--activ')
        
        tabContent.classList.add("services__tab-content--show")
        tabControl.classList.add('services__tab-controls--link--activ')
    }
    
    // Аккордеон в ценах

    const accordionLists2 = document.querySelectorAll('.prices__body-list');

    accordionLists2.forEach(el => {    

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenContent = accordionList.querySelector('.accordion-list__item--opened .prices__bitem-list')

        
        const accordionControl = e.target.closest('.prices__control');        
        if (!accordionControl) return
        e.preventDefault()
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

//  Слайдер-статьи

const swiper = new Swiper('.articles__slider', {
   
    spaceBetween: 10,
    slidesPerView: 1,
  
    pagination: {
        el: '.articles__pagination',
        type: 'fraction',    
    },
      
    navigation: {
        nextEl: '.articles__next',
        prevEl: '.articles__prev',
    },
    breakpoints: {
        
        401: {
          slidesPerView: 1.2, 
          spaceBetween: 20         
        },
        601: {
          slidesPerView: 2, 
          spaceBetween: 20         
        },

        701: {
            slidesPerView: 2,
            spaceBetween: 50
          },
        
        901: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        
        1101: {
          slidesPerView: 3,
          spaceBetween: 60
        }
    }     
    
  });

  // Табы

  const tabControlsProf = document.querySelector('.jobopen__controls-list')

  tabControlsProf.addEventListener('click', toggleTabProf)
  
  function toggleTabProf(e) {
  
      const tabControl = e.target.closest('.jobopen__controls-link')
  
      if (!tabControl) return
      e.preventDefault()
      if (tabControl.classList.contains('jobopen__tab-controls--link--activ')) return // Проверка на
      // нажатие уже активной кнопки. Если это так, то дальнейший код не будет даже считываться.
  
      const tabContentID = tabControl.getAttribute('href')
      const tabContent = document.querySelector(tabContentID)
      const acviveControl = document.querySelector('.jobopen__controls-link--activ')
      const activeContent = document.querySelector('.jobopen__descr-prof--show')
  
      activeContent.classList.remove("jobopen__descr-prof--show") 
      acviveControl.classList.remove('jobopen__controls-link--activ')
      
      tabContent.classList.add("jobopen__descr-prof--show")
      tabControl.classList.add('jobopen__controls-link--activ')
  }

  // Аккордеон в вакансиях

  const accordionLists3 = document.querySelectorAll('.jobopen__info-body--list');

    accordionLists3.forEach(el => {    

    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenContent = accordionList.querySelector('.accordion-list__item--opened .jobopen__info-body--descr')

        
        const accordionControl = e.target.closest('.jobopen__info-body--link');        
        if (!accordionControl) return
        e.preventDefault()
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

  

})() 
