const content = document.querySelector('.content')
let isActive = false

window.addEventListener('scroll',function(){
    const windowHeight =   window.innerHeight
    const contentHeight = content.offsetTop
    const windowScroll = window.scrollY

    if(windowScroll > contentHeight - windowHeight /2){
        content.classList.add('active')
        isActive = true
    }

    else {
        content.classList.remove('active')
        isActive = false
    }
    
    
})


const leftPara = document.querySelector('.left-animation')
const rightPara = document.querySelector('.right-animation')
let imgContainer = document.querySelector('.img-animation')

window.addEventListener('scroll',()=>{
    const windowInnerHeight = window.innerHeight
    const scrollPosition = window.scrollY

    if(scrollPosition > leftPara.offsetTop - windowInnerHeight / 2 && scrollPosition > rightPara.offsetTop - windowInnerHeight / 2 && scrollPosition > imgContainer.offsetTop - windowInnerHeight / 2){
        leftPara.classList.add('slide-in-left')
        rightPara.classList.add('slide-in-left')
        imgContainer.classList.add('img-animation-active')
    }
})


// document.querySelectorAll('a[href^= "#"]').forEach(anchor =>{
//     anchor.addEventListener('click',(e)=>{
//         e.preventDefault()

//         const targetID = anchor.getAttribute('href').slice(1)
//         const targetElement = document.getElementById('targetID')

//         window.scrollTo({
//             top: targetElement.offsetTop,
//             behavior: 'smooth'
//         })
//     })
// })

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();

            const targetID = anchor.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetID);

            window.scrollTo({
                top: targetElement.offsetTop,
                left:0,
                block:'start',
                behavior: 'smooth',
                duration:4000
            });
        });
    });
});
