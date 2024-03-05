(function() {
    document.addEventListener('click', burgerInit)

    function burgerInit(e){
        const burgerIcon = e.target.closest('.burger__menu')  
        const burgerNavLink = e.target.closest('.nav__link')
        
        if (document.documentElement.clientWidth > 900) return

        if(burgerIcon || burgerNavLink) {
            document.body.classList.toggle('body--opened-menu')
        } 
    }

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

// ==========================================================
// 2-й Вариант

// (function() {
//     document.addEventListener('click', burgerInit)

//     function burgerInit(e){
//         const burgerIcon = e.target.closest('.burger__menu')  
//         const burgerNavLink = e.target.closest('.nav__link')
        
//         if (document.documentElement.clientWidth > 900) return
        
//         if(burgerIcon || burgerNavLink) {

//             if(!document.body.classList.contains('body--opened-menu')) {
//                 document.body.classList.add('body--opened-menu')                
//             } else {
//                 document.body.classList.remove('body--opened-menu')
//             }
//             return
//         }
//     }
// })()