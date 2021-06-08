const color = document.querySelector('input[type="color"]');
const border = document.querySelector('.code--border');


function changeColor(){
    border.style.backgroundColor = color.value;
}

color.addEventListener('change', (e)=>{
    e.preventDefault();
    changeColor();
});
