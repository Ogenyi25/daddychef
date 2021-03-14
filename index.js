//CHANGE BACKGROUND HEADER ON SCROLL

function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 100 view port height, add the scroll-header class
    if(this.scrollY >= 100) nav.classList.add('scroll-header');
    else
    nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)



//SHOW SCROLL TOP

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    //when the scroll is higher than 560 view port height, add the show-scroll class
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
    else
    scrollTop.classList.remove('scroll-top');
}
window.addEventListener('scroll', scrollTop)