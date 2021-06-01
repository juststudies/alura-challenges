const burgerImage = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.container nav');
const searchIcon = document.querySelector('.search-icon');

burgerImage.addEventListener('click', ()=>{
    if (burgerImage.querySelector('img').src.indexOf('burger-icon')!=-1) {
        burgerImage.querySelector('img').src  = "./img/icons/close.svg";
    }
     else {
       burgerImage.querySelector('img').src = "./img/icons/burger-icon.svg";
   }
});

burgerMenu.addEventListener('click', ()=>{
    nav.classList.toggle('menu__responsive');
});

searchIcon.addEventListener('click', ()=>{
    document.querySelector('.logo').style.display = 'none';
    searchIcon.querySelector('img').style.display = 'none';
    document.querySelector('.search-box').style.display = 'block';
    document.querySelector('.search-box').style.position = 'absolute';
    document.addEventListener('keyup', (ev)=>{
        if(ev.key === "Escape"){
            removeStyles();
            console.log('disparou!');
        }
    });
});

searchIcon.closest('header').addEventListener('focusout', removeStyles);

function removeStyles(){
    document.querySelector('.logo').removeAttribute('style');
    searchIcon.querySelector('img').removeAttribute('style');
    document.querySelector('.search-box').removeAttribute('style');
}