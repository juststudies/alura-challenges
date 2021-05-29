const burgerImage = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.container nav');

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
})