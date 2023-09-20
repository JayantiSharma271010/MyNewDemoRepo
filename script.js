const content = document.querySelector('.content')

window.addEventListener('scroll',function(){
    const windowHeight =   window.innerHeight
    const contentHeight = content.offsetTop
    const windowScroll = window.scrollY

    if(windowScroll > contentHeight - windowHeight /2){
        content.classList.add('active')
    }
    
})
