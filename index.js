//CHANGE BACKGROUND HEADER ON SCROLL

function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 view port height, add the scroll-header class
    if(this.scrollY >= 100) nav.classList.add('scroll-header');
    else
    nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)