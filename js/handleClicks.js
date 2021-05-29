const burgerImage = document.querySelector('.burger-menu img');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.container nav');

burgerImage.addEventListener('click', ()=>{
    if (burgerImage.src.indexOf('burger-icon')!=-1) {
        burgerImage.src  = "./img/icons/close.svg";
    }
     else {
       burgerImage.src = "./img/icons/burger-icon.svg";
   }
});

burgerMenu.addEventListener('click', ()=>{
    nav.classList.toggle('menu__responsive');
})