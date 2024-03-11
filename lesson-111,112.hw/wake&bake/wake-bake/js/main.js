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
})()

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

