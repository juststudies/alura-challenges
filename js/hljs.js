const codeWrapper = document.querySelector('.code__wrapper');
<<<<<<< HEAD
const selectLanguage = document.querySelector('.customization__options').firstChild;
const previewHighlight = document.querySelector('.code__button');
=======
const selectLanguage = document.querySelector('select');
const previewHighlight = document.querySelector('button');
>>>>>>> a298457c9dbed89697188f9d9d55f8d19307c8c0

function changeLanguage(){
    const code = codeWrapper.querySelector('code');
    codeWrapper.querySelector('code').innerHTML = `<code class="hljs ${selectLanguage.value}" contenteditable="true" aria-label="editor"></code>`;
    codeWrapper.querySelector('code').innerText = code.innerText;
<<<<<<< HEAD
    
=======
    console.log(selectLanguage.value);
>>>>>>> a298457c9dbed89697188f9d9d55f8d19307c8c0
}

selectLanguage.addEventListener('change', ()=>{
    changeLanguage();
});

previewHighlight.addEventListener('click', ()=>{
    const code = codeWrapper.querySelector('code');
    hljs.highlightElement(code);
});
