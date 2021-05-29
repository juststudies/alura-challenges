const burgerImage = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.container nav');
const like = document.querySelectorAll('.code__sections__social__interactions__like');

burgerImage.addEventListener('click', ()=>{
    if (burgerImage.querySelector('img').src.indexOf('burger-icon')!=-1) {
        burgerImage.querySelector('img').src  = "../img/icons/close.svg";
    }
     else {
       burgerImage.querySelector('img').src = "../img/icons/burger-icon.svg";
   }
});

burgerMenu.addEventListener('click', ()=>{
    nav.classList.toggle('menu__responsive');
});

like.forEach(item=>{
    item.addEventListener('click', ()=>{
        if (item.querySelector('img').src.indexOf('likes')!=-1) {
            item.querySelector('img').src  = "../img/icons/like-pressed.svg";
        }
         else {
           item.querySelector('img').src = "../img/icons/likes.svg";
       }
    });
});