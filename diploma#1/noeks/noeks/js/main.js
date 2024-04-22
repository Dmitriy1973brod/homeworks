(function() {

// Бургер

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.burger-icon')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
        // document.body.classList.add('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault() 

        const target = e.target

        if (target.closest('.modal__cancel')  || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

// Доп. страницы
    
    const linkProjects = document.querySelector('.link__projects')
    const linkAboutus = document.querySelector('.link__aboutus')
    const linkServices = document.querySelector('.link__services')
    const linkPrices = document.querySelector('.link__prices')
    const linkArticles = document.querySelector('.link__articles')
    const linkJobopen = document.querySelector('.link__jobopen')
    const linkContacts = document.querySelector('.link__contacts')
    const control = document.querySelector('.aboutus__heading-control')
    const controlOne = document.querySelector('.projects__heading-control')
    const control2 = document.querySelector('.services__heading-control')
    const control3 = document.querySelector('.prices__heading-control')
    const control4 = document.querySelector('.articles__heading-control')
    const control5 = document.querySelector('.jobopen__heading-control')
    const control6 = document.querySelector('.contacts__heading-control')

    linkProjects.addEventListener('click', openPage)
    linkAboutus.addEventListener('click', openPageAboutus)
    linkServices.addEventListener('click', openPageServices)
    linkPrices.addEventListener('click', openPagePrices)
    linkArticles.addEventListener('click', openPageArticles)
    linkJobopen.addEventListener('click', openPageJobopen)
    linkContacts.addEventListener('click', openPageContacts)

    control.addEventListener('click', closePage)
    controlOne.addEventListener('click', closePage)
    control2.addEventListener('click', closePage)
    control3.addEventListener('click', closePage)
    control4.addEventListener('click', closePage)
    control5.addEventListener('click', closePage)
    control6.addEventListener('click', closePage)

    function openPage(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page')               
    }

    function openPageAboutus(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page--aboutus')               
    }

    function openPageServices(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page--services')               
    }

    function openPagePrices(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page--prices')               
    }    
    function openPageArticles(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page--articles')               
    }    
    function openPageJobopen(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page--jobopen')               
    }    
    function openPageContacts(e) {
        e.preventDefault()
        document.body.classList.add('body--opened-page--contacts')               
    }    

    function closePage(e) {
        e.preventDefault()
        document.body.classList.remove('body--opened-page')        
        document.body.classList.remove('body--opened-page--aboutus')        
        document.body.classList.remove('body--opened-page--services')        
        document.body.classList.remove('body--opened-page--prices')        
        document.body.classList.remove('body--opened-page--articles')        
        document.body.classList.remove('body--opened-page--jobopen')        
        document.body.classList.remove('body--opened-page--contacts')        
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
