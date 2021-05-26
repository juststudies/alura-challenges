const color = document.querySelector('input[type="color"]');
const border = document.querySelector('.textarea--border');
const form = document.querySelector('form');

function changeColor(){
    border.style.backgroundColor = color.value;
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    changeColor();
}, true);
